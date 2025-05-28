import { Webhook } from "svix";
import Stripe from "stripe";
import User from "../models/User.js";
import { Purchase } from "../models/purchase.js";
import Course from "../models/Course.js";

const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY);

// Clerk Webhook: Manages user creation, updates, and deletion
export const clerkWebhooks = async (req, res) => {
  try {
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    whook.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    const { data, type } = req.body;

    switch (type) {
      case "user.created": {
        const userData = {
          _id: data.id,
          name: `${data.first_name} ${data.last_name}`,
          email: data.email_addresses[0].email_address,
          imageUrl: data.image_url,
        };
        await User.create(userData);
        return res.json({ success: true });
      }

      case "user.updated": {
        const userData = {
          name: `${data.first_name} ${data.last_name}`,
          email: data.email_addresses[0].email_address,
          imageUrl: data.image_url,
        };
        await User.findByIdAndUpdate(data.id, userData);
        return res.json({ success: true });
      }

      case "user.deleted": {
        await User.findByIdAndDelete(data.id);
        return res.json({ success: true });
      }

      default:
        return res.status(400).json({ error: "Unhandled event type" });
    }
  } catch (error) {
    console.error("Error processing Clerk webhook:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
};

// Stripe Webhook: Manages payment events
export const stripeWebhooks = async (request, response) => {
  const sig = request.headers["stripe-signature"];
  let event;

  try {
    event = Stripe.webhooks.constructEvent(
      request.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err.message);
    return response.status(400).send(`Webhook Error: ${err.message}`);
  }

  try {
    switch (event.type) {
      case "payment_intent.succeeded": {
        const paymentIntent = event.data.object;

        console.log(
          "Received payment intent:",
          JSON.stringify(paymentIntent, null, 2)
        );

        // Fetch the checkout session to get metadata
        const sessions = await stripeInstance.checkout.sessions.list({
          payment_intent: paymentIntent.id,
        });

        if (!sessions.data.length || !sessions.data[0].metadata.purchaseId) {
          console.error("Metadata missing in checkout session:", sessions);
          return response
            .status(400)
            .json({
              error: "Purchase ID missing in checkout session metadata",
            });
        }

        const { purchaseId } = sessions.data[0].metadata;
        const purchaseData = await Purchase.findById(purchaseId);
        if (!purchaseData) {
          return response.status(404).json({ error: "Purchase not found" });
        }

        const userData = await User.findById(purchaseData.userId);
        const courseData = await Course.findById(
          purchaseData.courseId.toString()
        );

        if (!userData || !courseData) {
          return response
            .status(404)
            .json({ error: "User or Course not found" });
        }

        courseData.enrolledStudents.push(userData);
        await courseData.save();

        userData.enrolledCourses.push(courseData._id);
        await userData.save();

        purchaseData.status = "completed";
        await purchaseData.save();

        return response.json({ success: true });
      }

      case "payment_intent.payment_failed": {
        const paymentIntent = event.data.object;

        console.log("Payment failed for intent:", paymentIntent.id);

        // Fetch the checkout session metadata
        const sessions = await stripeInstance.checkout.sessions.list({
          payment_intent: paymentIntent.id,
        });

        if (!sessions.data.length || !sessions.data[0].metadata.purchaseId) {
          return response
            .status(400)
            .json({
              error: "Purchase ID missing in checkout session metadata",
            });
        }

        const { purchaseId } = sessions.data[0].metadata;
        const purchaseData = await Purchase.findById(purchaseId);
        if (!purchaseData) {
          return response.status(404).json({ error: "Purchase not found" });
        }

        purchaseData.status = "failed";
        await purchaseData.save();

        return response.json({ success: true });
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
        return response.json({ received: true });
    }
  } catch (error) {
    console.error(`Error processing event ${event.type}:`, error);
    return response.status(500).json({ error: error.message });
  }
};


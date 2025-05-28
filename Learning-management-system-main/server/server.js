import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import { clerkWebhooks, stripeWebhooks } from './controllers/webhooks.js'
import educatorRouter from './routes/educatorRoutes.js'
import { clerkMiddleware } from '@clerk/express'
import connectCloudinary from './configs/cloudinary.js'
import courseRouter from './routes/courseRoute.js'
import userRouter from './routes/userRoutes.js'

// App Config
const app = express();

// DB Config
async function initializeDB() {
  try {
    await connectDB();
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err);
  }
}
initializeDB();

// Cloudinary Config
await connectCloudinary();

// Middlewares
app.use(cors());
app.use(clerkMiddleware())

// Routes
app.get('/', (req, res)=> res.send("API Working"))
app.post('/clerk', express.json(), clerkWebhooks)
app.use('/api/educator', express.json(),educatorRouter)
app.use('/api/course', express.json(),courseRouter)
app.use('/api/user', express.json(),userRouter)
app.post('/stripe',express.raw({type: 'application/json'}), stripeWebhooks);

// Port 

const PORT = process.env.PORT || 5001

app.listen(PORT, () => {
    console.log(`Server is runninng on port ${PORT}`)
})

export default app;
import React from 'react';
import Footer from '../components/student/Footer';

const PrivacyPolicy = () => {
    return (
        <>
            <div className='flex flex-col items-center justify-center md:px-36 px-8 md:pt-30 pt-20 text-center'>
                {/* Privacy Policy Content */}
                <div className='max-w-3xl z-10 text-gray-500 mx-auto'>
                    <h1 className='md:text-4xl text-3xl font-bold text-gray-800 text-left'>
                        Privacy Policy
                    </h1>
                    <p className='pt-6 md:text-lg text-left'>
                        Your privacy is important to us. This Privacy Policy explains how we collect, use, 
                        and protect your personal information when you use our platform.
                        A privacy policy for an online learning management system outlines how user data is collected, used, and protected. It ensures transparency
                        about the types of personal information gathered, such as names, email addresses, payment details, and usage data. The policy typically explains
                        how this information is used to improve services, manage accounts, and personalize learning experiences. It emphasizes data security measures to
                        protect sensitive information and states that data will not be sold or shared without user consent, except with trusted partners or as required
                        by law. Users are also informed of their rights to access, update, or delete their data.
                    </p>

                    {/* Sections */}
                    <div className='pt-10 space-y-8 text-left'>
                        <section>
                            <h2 className='text-2xl font-semibold text-gray-800'>1. Information We Collect</h2>
                            <p className='pt-4 md:text-lg'>
                                We collect information you provide directly to us, such as your name, email address, and payment details when you register or make a purchase. 
                                We also automatically collect certain information when you use our platform, including your IP address, browser type, and device information.
                               
                            </p>
                        </section>

                        <section>
                            <h2 className='text-2xl font-semibold text-gray-800 '>2. How We Use Your Information</h2>
                            <p className='pt-4 md:text-lg'>
                                We use your information to provide, maintain, and improve our services, process transactions, communicate with you, and personalize your experience. We may also use your information for security purposes and to comply with legal obligations.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-2xl font-semibold text-gray-800'>3. Sharing Your Information</h2>
                            <p className='pt-4 md:text-lg'>
                                We do not sell or rent your personal information to third parties. However, we may share your information with trusted service providers who assist us in operating our platform, conducting our business, or servicing you, as long as they agree to keep this information confidential.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-2xl font-semibold text-gray-800'>4. Data Security</h2>
                            <p className='pt-4 md:text-lg'>
                                We implement a variety of security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-2xl font-semibold text-gray-800'>5. Your Rights</h2>
                            <p className='pt-4 md:text-lg'>
                                You have the right to access, update, or delete your personal information at any time. If you wish to exercise these rights, please contact us at <span className='text-blue-600'>support@learningmanagement.com</span>.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-2xl font-semibold text-gray-800'>6. Changes to This Policy</h2>
                            <p className='pt-4 md:text-lg'>
                                We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we will notify you of significant changes through email or a notice on our platform.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default PrivacyPolicy;

import React, { useState } from 'react';
import { assets } from '../assets/assets'
import Footer from '../components/student/Footer';


const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to an API)
        console.log('Form Data:', formData);
        alert('Thank you for contacting us! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' }); // Reset form
    };

    return (
        <>
            <div className='flex flex-col md:flex-row gap-10 relative items-start justify-between md:px-36 px-8 md:pt-30 pt-20 text-left'>
                {/* Background Gradient */}
                <div className='absolute top-0 left-0 w-full h-section-height z-1 bg-gradient-to-b from-cyan-100/70'></div>

                {/* Left Column - Contact Form */}
                <div className='max-w-xl z-10 text-gray-500'>
                    <h1 className='md:text-course-details-heading-large text-course-details-heading-small font-semibold text-gray-800'>
                        Contact Us
                    </h1>
                    <p className='pt-4 md:text-base text-sm'>
                        Have questions or feedback? We'd love to hear from you! Fill out the form below, and we'll get back to you as soon as possible.
                    </p>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className='pt-8'>
                        <div className='flex flex-col gap-4'>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor='name' className='text-sm font-medium text-gray-700'>
                                    Name
                                </label>
                                <input
                                    type='text'
                                    id='name'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder='Enter your name'
                                    className='outline-none md:py-2.5 py-2 px-3 rounded border border-gray-300 focus:border-blue-500'
                                    required
                                />
                            </div>

                            <div className='flex flex-col gap-1'>
                                <label htmlFor='email' className='text-sm font-medium text-gray-700'>
                                    Email
                                </label>
                                <input
                                    type='email'
                                    id='email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder='Enter your email'
                                    className='outline-none md:py-2.5 py-2 px-3 rounded border border-gray-300 focus:border-blue-500'
                                    required
                                />
                            </div>

                            <div className='flex flex-col gap-1'>
                                <label htmlFor='message' className='text-sm font-medium text-gray-700'>
                                    Message
                                </label>
                                <textarea
                                    id='message'
                                    name='message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder='Enter your message'
                                    rows='5'
                                    className='outline-none md:py-2.5 py-2 px-3 rounded border border-gray-300 focus:border-blue-500'
                                    required
                                />
                            </div>

                            <button
                                type='submit'
                                className='bg-blue-600 text-white py-2.5 px-6 rounded hover:bg-blue-700 transition-colors'
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>

                {/* Right Column - Contact Information */}
                <div className='max-w-course-card z-10 shadow-custom-card rounded-t md:rounded-none overflow-hidden bg-white min-w-[300px] sm:min-w-[420px] mt-10'>
                    <div className='p-5'>
                        <h2 className='text-xl font-semibold text-gray-800'>Contact Information</h2>
                        <div className='pt-4 text-sm text-gray-600'>
                            <p className='flex items-center gap-2'>
                                <img src={assets.location_logo} alt='Location Icon' className='w-4 h-4' />
                                <span>123 Learning Street, Knowledge City, Jaunpur</span>
                            </p>
                            <p className='flex items-center gap-2 mt-3'>
                                <img src={assets.email_logo} alt='Email Icon' className='w-4 h-4' />
                                <span>support@learningmanagement.com</span>
                            </p>
                            <p className='flex items-center gap-2 mt-3'>
                                <img src={assets.phone_icon} alt='Phone Icon' className='w-4 h-4' />
                                <span>+1 (123) 456-7890</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactUs;
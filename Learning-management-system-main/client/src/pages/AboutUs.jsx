import React from 'react';
import { assets } from '../assets/assets';
import Footer from '../components/student/Footer';


const AboutUs = () => {
    const teamMembers = [
        {
            name: 'Sahil',
            role: 'Founder & CEO',
            image: assets.team_member_1, // Replace with actual image paths
            bio: 'Passionate about education and technology, Sahil leads the team with a vision to make learning accessible to all.',
        },
        {
            name: 'John Doe',
            role: 'Lead Developer',
            image: assets.team_member_2,
            bio: 'John is a full-stack developer with a knack for building scalable and user-friendly platforms.',
        },
        {
            name: 'Jane Smith',
            role: 'Content Strategist',
            image: assets.team_member_3,
            bio: 'Jane ensures that our courses are engaging, informative, and up-to-date with industry standards.',
        },
    ];

    const milestones = [
        { year: '2020', event: 'Founded the company with a mission to revolutionize online learning.' },
        { year: '2021', event: 'Launched our first course, gaining over 10,000 students in the first year.' },
        { year: '2022', event: 'Expanded our course catalog to include 50+ courses across various domains.' },
        { year: '2023', event: 'Reached 100,000+ students worldwide and introduced AI-powered learning tools.' },
    ];

    return (
        <>
            <div className='flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 md:pt-30 pt-20 text-left'>
                {/* Background Gradient */}
                <div className='absolute top-0 left-0 w-full h-section-height z-1 bg-gradient-to-b from-cyan-100/70'></div>

                {/* Left Column */}
                <div className='max-w-xl z-10 text-gray-500'>
                    <h1 className='md:text-course-details-heading-large text-course-details-heading-small font-semibold text-gray-800'>
                        About Us
                    </h1>
                    <p className='pt-4 md:text-base text-sm'>
                        Welcome to our platform! We are dedicated to providing high-quality, accessible, and innovative learning experiences for everyone.
                    </p>

                    {/* Mission and Values Section */}
                    <div className='pt-8 text-gray-800'>
                        <h2 className='text-xl font-semibold'>Our Mission</h2>
                        <p className='pt-3'>
                            Our mission is to empower individuals worldwide by offering affordable, high-quality education that transforms lives and careers.
                        </p>

                        <h2 className='text-xl font-semibold pt-6'>Our Values</h2>
                        <ul className='list-disc ml-4 pt-3'>
                            <li>Accessibility: Making education available to everyone, everywhere.</li>
                            <li>Innovation: Continuously improving and adapting to new technologies.</li>
                            <li>Quality: Delivering courses that meet the highest standards.</li>
                            <li>Community: Building a supportive and inclusive learning environment.</li>
                        </ul>
                    </div>

                    {/* Team Section */}
                    {/* <div className='pt-8 text-gray-800'>
                        <h2 className='text-xl font-semibold'>Meet Our Team</h2>
                        <div className='grid md:grid-cols-2 gap-6 pt-5'>
                            {teamMembers.map((member, index) => (
                                <div key={index} className='flex flex-col items-center text-center'>
                                    <img src={member.image} alt={member.name} className='w-32 h-32 rounded-full object-cover' />
                                    <h3 className='text-lg font-semibold pt-3'>{member.name}</h3>
                                    <p className='text-sm text-gray-500'>{member.role}</p>
                                    <p className='text-sm text-gray-600 pt-2'>{member.bio}</p>
                                </div>
                            ))}
                        </div>
                    </div> */}

                    {/* Milestones Section */}
                    <div className='pt-8 text-gray-800'>
                        <h2 className='text-xl font-semibold'>Our Journey</h2>
                        <div className='pt-5 space-y-4'>
                            {milestones.map((milestone, index) => (
                                <div key={index} className='flex items-center gap-4'>
                                    {/* Circle with Year */}
                                    <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center'>
                                        <p className='text-blue-600 font-semibold'>{milestone.year}</p>
                                    </div>

                                    {/* Text aligned vertically with the circle */}
                                    <p className='text-sm md:text-default text-gray-600'>{milestone.event}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Right Column */}
                <div className='max-w-course-card z-10 shadow-custom-card rounded-t md:rounded-none overflow-hidden bg-white min-w-[300px] sm:min-w-[420px]'>
                    <img src={assets.learning_icon} alt='About Us' className='w-full h-64 object-cover' />
                    <div className='p-5'>
                        <h2 className='text-xl font-semibold text-gray-800'>Why Choose Us?</h2>
                        <ul className='ml-4 pt-2 text-sm md:text-default list-disc text-gray-500'>
                            <li>Expert instructors with real-world experience.</li>
                            <li>Interactive and engaging course content.</li>
                            <li>Lifetime access to course materials.</li>
                            <li>Certificates of completion for all courses.</li>
                        </ul>

                        {/* Call-to-Action Button */}
                        <button className='md:mt-6 mt-4 w-full py-3 rounded bg-blue-600 text-white font-medium'>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AboutUs;
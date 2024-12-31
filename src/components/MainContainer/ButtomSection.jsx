import React from 'react';
import BookingForm from './BookingForm';

const ButtomSection = () => {
    return (
        <>
            <div>
                {/* Section navigation */}
                <div className='flex flex-wrap gap-4 mt-4 ml-2'>
                    <p className="text-gradient text-[1rem]">About me</p>
                    <p>Experience</p>
                    <p>Awards and Certifications</p>
                    <p className='lg:ml-10'>Offered Services</p>
                </div>
            </div>

            {/* Form Section */}
            <div className='flex flex-col lg:flex-row gap-7  mt-5'>
                {/* Left Section */}
                <div className='w-full lg:w-[70%] h-[200px] lg:h-[350px] border-[2px] border-gray-400 rounded-[20px] mt-5 lg:mt-[50px] ml-2'></div>
                
                {/* Booking Form */}
                <BookingForm />
            </div>
        </>
    );
};

export default ButtomSection;

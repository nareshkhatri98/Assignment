import React from 'react';
import { FaStar } from "react-icons/fa";
import { GrShareOption } from "react-icons/gr";
import { FiSettings } from "react-icons/fi";

const Profiledetails = () => {
    return (
        <div className='mt-10 ml-2'>
            <h1 className='text-[1.5rem]'>Preview</h1>
            {/* For details */}
            <div className='w-full lg:w-[1400px] h-auto lg:h-[400px] bg-blue-100 mr-2 p-4'>
                {/* For profile details */}
                <div className='flex flex-col lg:flex-row items-center gap-4'>
                    {/* Left side */}
                    <div className='flex flex-col items-center ml-20'>
                        <div className='w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] border-white border-[10px] rounded-full'></div>
                        <button className='w-[100px] h-[37px] border-blue-700 border-[2px] rounded-[10px] mt-2'>Message</button>
                    </div>

                    {/* Right side */}
                    <div className='w-full lg:w-auto'>
                        {/* Profile Header */}
                        <div className='relative'>
                            <h1 className='text-[2rem] lg:text-[3rem] text-blue-900 p-3'>
                                Bishal Shrestha <span className='text-[1rem] text-black'>Male</span>
                            </h1>
                            <p>Joined date: 60 June 2024</p>
                            <FiSettings className='text-3xl absolute top-4 right-4 lg:top-2 lg:left-96 lg:ml-14' />
                        </div>

                        {/* Experience Section */}
                        <div className='flex flex-col sm:flex-row gap-4 mt-5'>
                            <p>Profession</p>
                            <p>Experience</p>
                            <p>Rating</p>
                        </div>

                        <div className='flex flex-col lg:flex-row gap-4 mt-2'>
                            <p className='text-blue-900 text-[1.2rem] capitalize font-semibold'>Profession</p>
                            <p className='text-blue-900 text-[1.2rem] capitalize font-semibold'>Experience</p>
                            <p className='text-blue-900 text-[1.2rem] capitalize font-semibold flex items-center'>
                                4.0
                                <FaStar className='text-yellow-400' />
                                <FaStar className='text-yellow-400' />
                                <FaStar className='text-yellow-400' />
                                <FaStar className='text-yellow-400' />
                                <FaStar className='text-white' />
                            </p>
                        </div>

                        {/* Offered Services Section */}
                        <div className='flex flex-col sm:flex-row gap-4 mt-5'>
                            <p>Offered Services</p>
                            <p>Locations of Services</p>
                        </div>
                        <div className='flex flex-col sm:flex-row gap-4 mt-2'>
                            <p className='text-blue-900 text-[1.2rem] capitalize font-semibold'>Service Name</p>
                            <p className='text-blue-900 text-[1.2rem] capitalize font-semibold'>Kathmandu, Bhaktapur, Lalitpur</p>
                        </div>

                        {/* Skills Section */}
                        <div className='mt-5'>
                            <p>Skills</p>
                            <div className='flex flex-col sm:flex-row items-center gap-4 mt-2 lg:gap-48'>
                                <div className='flex gap-2'>
                                    <button className='btn text-white p-2 h-auto w-[100px] rounded-[50px] text-[12px]'>Your Skills</button>
                                    <button className='btn text-white p-2 h-auto w-[100px] rounded-[50px] text-[12px]'>Your Skills</button>
                                    <button className='btn text-white p-2 h-auto w-[100px] rounded-[50px] text-[12px]'>Your Skills</button>
                                </div>
                                <div className='flex flex-wrap gap-3'>
                                    <button className='border-[2px] border-black rounded-[20px] w-[160px]'>Add to Website</button>
                                    <button className='border-[2px] border-black rounded-[20px] flex items-center gap-1 p-[3px] w-[100px]'>
                                        <GrShareOption className='ml-2' />Share
                                    </button>
                                    <button className='border-[2px] border-black rounded-[20px] p-[3px] w-[160px]'>Write a Note</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profiledetails;

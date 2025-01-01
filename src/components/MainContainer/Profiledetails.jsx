import React, { useContext } from 'react';
import { FaStar } from "react-icons/fa";
import { GrShareOption } from "react-icons/gr";
import { FiSettings } from "react-icons/fi";
import { FormContext } from '../../context/FormContext';


const Profiledetails = () => {
    const { formData } = useContext(FormContext)
    return (
        <div className='mt-2 ml-2'>
            <h1 className='text-[1.5rem]'>Preview</h1>
            {/* For details */}
            <div className='w-full lg:w-[1400px] h-auto lg:h-[400px] bg-blue-100 mr-2 p-4 '>
                {/* For profile details */}
                <div className='flex flex-col lg:flex-row items-center gap-4'>
                    {/* Left side */}
                    <div className='flex flex-col items-center ml-20'>
                        <div className='w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] border-white border-[10px] rounded-full overflow-hidden'>
                            {formData.uploadImg && (
                                <img
                                    src={URL.createObjectURL(formData.uploadImg)}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            )}
                        </div>

                        <button className='w-[100px] h-[37px] border-blue-700 border-[2px] rounded-[10px] mt-2'>Message</button>
                    </div>

                    {/* Right side */}
                    <div className='w-full lg:w-auto'>
                        {/* Profile Header */}
                        <div className='relative'>
                            <h1 className='text-[2rem] lg:text-[3rem] text-blue-900 p-3'>
                                Bishal Shrestha  <span className='text-[1rem] text-black'>Male</span>
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
                            <p className='text-blue-900 text-[1.2rem] capitalize font-semibold'>{formData.profession || 'Profession'}</p>
                            <p className='text-blue-900 text-[1.2rem] capitalize font-semibold'>{formData.experience || 'Experience'} </p>
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
                            <p className='text-blue-900 text-[1.2rem] capitalize font-semibold'>{formData.location}</p>
                        </div>

                        {/* Skills Section */}
                        <div className='mt-5'>
                            <p>Skills</p>
                            <div className='flex flex-col sm:flex-row items-center gap-4 mt-2 lg:gap-48'>
                                <div className='flex gap-2'>
                                    {formData.skill.length > 0 ? (
                                        formData.skill.map((skill, index) => (
                                            <span
                                                key={index}
                                                className="btn text-white bg-blue-600 p-2 h-auto w-auto rounded-[20px] text-[12px]"
                                            >
                                                {skill}
                                            </span>
                                        ))
                                    ) : (
                                        <>
                                            <p className='btn text-white p-2 h-auto w-[100px] rounded-[50px] text-[12px]'>Your Skills</p>
                                            <p className='btn text-white p-2 h-auto w-[100px] rounded-[50px] text-[12px]'>Your Skills</p>
                                            <p className='btn text-white p-2 h-auto w-[100px] rounded-[50px] text-[12px]'>Your Skills</p>
                                        </>
                                    )}
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

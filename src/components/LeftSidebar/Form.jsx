import React, { useState } from 'react';
import { CiCirclePlus } from "react-icons/ci";

const Form = () => {
    const [uploadImg, setUploadImage] = useState(null); // Track the uploaded image
    const [profession, setProfession] = useState('');
    const [skill, setSkill] = useState('');
    const [offered, setOffered] = useState(null); // Track the uploaded offered service image
    const [experience, setExperience] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
       
        const formData = {
            profession,
            skill,
            experience,
            location,
            uploadImg,
            offered,
        };
        console.log(formData);
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setUploadImage(file); 
    };

    const handleOfferedImageUpload = (e) => {
        const file = e.target.files[0];
        setOffered(file); 
    };

    return (
        <div>
            <div className='w-[340px] h-[90px] rounded-[10px] border-[2px] border-black m-2 left-form'>
                <form onSubmit={handleSubmit} className='flex items-center gap-10 justify-around'>
                    <div className='mt-5'>
                        <label htmlFor="Profile">Profile Picture</label>
                        <p>(Required*)</p>
                    </div>
                    <div className='w-[50%] h-[75px] flex flex-col items-center border-[2px] border-dashed border-black mt-1 rounded-[10px]'>
                        {/* Hidden file input */}
                        <input
                            type="file"
                            id="fileUpload"
                            className="hidden"
                            accept="image/*"
                            onChange={handleImageUpload} // Capture the uploaded image
                        />
                        {/* Label for file input */}
                        <label htmlFor="fileUpload" className="flex flex-col items-center cursor-pointer">
                            <CiCirclePlus className='text-[3rem] text-green-600 font-bold' />
                            <p>Upload Picture</p>
                        </label>
                    </div>
                </form>
            </div>

            {/* Form Section for Profession */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="profession"
                    value={profession}
                    onChange={(e) => setProfession(e.target.value)}
                    placeholder="Profession (Required*)"
                    className="text-black placeholder-gray-900 w-[340px] mt-5 ml-2 mr-2 border-[2px] border-gray-500 outline-none p-3 rounded-[10px]"
                />

                <select
                    className='w-[340px] mt-5 ml-2 mr-2 mb-6 border-[2px] border-gray-500 outline-none p-3 rounded-[10px] z-20'
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                >
                    <option value="" className='text-gray-500'>
                        Experience (Required*)
                    </option>
                    <option value="Fresher">Fresher</option>
                    <option value="1">1 year</option>
                    <option value="2">2 years</option>
                    <option value="other">3 years and above</option>
                </select>

                {/* Offered Services */}
                <div className='w-[340px] h-[90px] rounded-[10px] border-[2px] border-black m-2'>
                    <div className='flex items-center gap-2 justify-around'>
                        <div className='mt-5'>
                            <label htmlFor="Offered">Offered Services</label>
                            <p>(Required*)</p>
                        </div>
                        <div className='w-[50%] h-[75px] flex flex-col items-center border-[2px] border-dashed border-black mt-1 rounded-[10px]'>
                            {/* Hidden file input for offered services */}
                            <input
                                type="file"
                                id="offeredUpload"
                                className="hidden"
                                accept="image/*"
                                onChange={handleOfferedImageUpload} // Capture the uploaded offered image
                            />
                            {/* Label for file input */}
                            <label htmlFor="offeredUpload" className="flex flex-col items-center cursor-pointer">
                                <CiCirclePlus className='text-[3rem] text-green-600 font-bold' />
                                <p>Add Sewa</p>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <input
                    type="text"
                    name="skill"
                    value={skill}
                    onChange={(e) => setSkill(e.target.value)}
                    placeholder="Skills (Required*)"
                    className="text-black placeholder-gray-900 w-[340px] mt-5 ml-2 mr-2 border-[2px] border-gray-500 outline-none p-3 rounded-[10px]"
                />

                {/* Location of Service Section */}
                <select
                    className='w-[340px] mt-5 ml-2 mr-2 mb-6 border-[2px] border-gray-500 outline-none p-3 rounded-[10px] z-20'
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                >
                    <option value="" className='text-gray-500'>
                        Location of Service (Required*)
                    </option>
                    <option value="KTM">KTM</option>
                    <option value="Pokhara">Pokhara</option>
                    <option value="Jhapa">Jhapa</option>
                    <option value="other">Others</option>
                </select>

                <button className='custom-btn w-[340px] p-2 mt-2 border ml-2 mr-2'>Next</button>
            </form>
        </div>
    );
};

export default Form;

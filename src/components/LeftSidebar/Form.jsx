import React, { useContext, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { FormContext } from "../../context/FormContext";

const Form = () => {
    const { formData, setFormData } = useContext(FormContext);
    const [currentSkill, setCurrentSkill] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageUpload = (e, fieldName) => {
        const file = e.target.files[0];
        setFormData({ ...formData, [fieldName]: file });
    };

    const handleSkillChange = (e) => {
        const value = e.target.value;
        if (value.includes(",")) {
            const skills = value
                .split(",")
                .map((skill) => skill.trim())
                .filter((skill) => skill);
            setFormData({
                ...formData,
                skill: [...formData.skill, ...skills],
            });
            setCurrentSkill("");
        } else {
            setCurrentSkill(value);
        }
    };

    const handleSkillBlur = () => {
        if (currentSkill.trim()) {
            setFormData({
                ...formData,
                skill: [...formData.skill, currentSkill.trim()],
            });
            setCurrentSkill("");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* Profile Picture */}
                <div className='w-[340px] h-[90px] rounded-[10px] border-[2px] border-black m-2'>
                    <div className='flex items-center gap-10 justify-around'>
                        <div className='mt-5'>
                            <label htmlFor="Profile">Profile Picture</label>
                            <p>(Required*)</p>
                        </div>
                        <div className='w-[50%] h-[75px] flex flex-col items-center border-[2px] border-dashed border-black mt-1 rounded-[10px]'>
                            <input
                                type="file"
                                id="fileUpload"
                                className="hidden"
                                accept="image/*"
                                onChange={(e) => handleImageUpload(e, "uploadImg")}
                            />
                            <label htmlFor="fileUpload" className="flex flex-col items-center cursor-pointer">
                                <CiCirclePlus className='text-[3rem] text-green-600 font-bold' />
                                <p>Upload Picture</p>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Profession */}
                <input
                    type="text"
                    name="profession"
                    value={formData.profession}
                    onChange={handleInputChange}
                    placeholder="Profession (Required*)"
                    className="text-black placeholder-gray-900 w-[340px] mt-5 ml-2 mr-2 border-[2px] border-gray-500 outline-none p-3 rounded-[10px]"
                />

                {/* Experience */}
                <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className='w-[340px] mt-5 ml-2 mr-2 mb-6 border-[2px] border-gray-500 outline-none p-3 rounded-[10px]'
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
                            <input
                                type="file"
                                id="offeredUpload"
                                className="hidden"
                                accept="image/*"
                                onChange={(e) => handleImageUpload(e, "offered")}
                            />
                            <label htmlFor="offeredUpload" className="flex flex-col items-center cursor-pointer">
                                <CiCirclePlus className='text-[3rem] text-green-600 font-bold' />
                                <p>Add Sewa</p>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <input
                    type="text"
                    id="skills"
                    placeholder="Skills (Required*)"
                    value={currentSkill}
                    onChange={handleSkillChange}
                    onBlur={handleSkillBlur}
                    className="text-black placeholder-gray-900 w-[340px] mt-5 ml-2 mr-2 border-[2px] border-gray-500 outline-none p-3 rounded-[10px]"
                />

                {/* Location */}
                <select
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className='w-[340px] mt-5 ml-2 mr-2 mb-6 border-[2px] border-gray-500 outline-none p-3 rounded-[10px]'
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

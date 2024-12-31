import React, { useState } from 'react';

const BookingForm = () => {
    const [service, setService] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
       
        alert(`Booking confirmed for ${service} at ${location} on ${date} at ${time}`);
    };

    return (
        <>
            <div className="w-full max-w-[300px] h-[410px] mx-auto lg:ml-2 mt-[-20px] rounded-[20px] shadow-[0px_-4px_10px_rgba(0,0,0,0.2),0px_4px_10px_rgba(0,0,0,0.2)]">
                <h1 className='p-2 text-[1rem] font-semibold'>Book an appointment from Bishal</h1>
                <p className='p-2 text-[14px]'>Service</p>
                <form onSubmit={handleSubmit}>
                    {/* Service Selection */}
                    <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className='w-[90%] max-w-[280px] border-[2px] border-gray-500 outline-none mx-auto mt-1 p-3 rounded-[10px] block'
                    >
                        <option value="" className='text-gray-500'>
                            Choose a Service
                        </option>
                        <option value="engineer">Demo</option>
                        <option value="doctor">Demo2</option>
                        <option value="teacher">Demo3</option>
                        <option value="other">Others</option>
                    </select>

                    <hr className='mx-auto my-3 w-[90%] max-w-[280px]' />

                    {/* Location Selection */}
                    <select
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className='w-[90%] max-w-[280px] border-[2px] border-gray-500 outline-none mx-auto mt-3 p-3 rounded-[10px] block'
                    >
                        <option value="" className='text-gray-500'>
                            Choose a location
                        </option>
                        <option value="engineer">Demo</option>
                        <option value="doctor">Demo2</option>
                        <option value="teacher">Demo3</option>
                        <option value="other">Others</option>
                    </select>

                    {/* Date Selection */}
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        placeholder='Choose a date'
                        className='w-[90%] max-w-[280px] border-[2px] border-gray-500 outline-none mx-auto mt-3 p-3 rounded-[10px] block'
                    />

                    {/* Time Selection */}
                    <select
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className='w-[90%] max-w-[280px] border-[2px] border-gray-500 outline-none mx-auto mt-3 p-3 rounded-[10px] block'
                    >
                        <option value="" className='text-gray-500'>
                            Choose a time
                        </option>
                        <option value="morning">Morning</option>
                        <option value="afternoon">Afternoon</option>
                        <option value="evening">Evening</option>
                    </select>

                    {/* Submit Button */}
                    <button type="submit" className='w-[90%] max-w-[280px] border-[2px] border-gray-500 outline-none mx-auto mt-4 p-3 rounded-[10px] custom-btn block'>
                        Book now
                    </button>
                </form>
            </div>
        </>
    );
};

export default BookingForm;

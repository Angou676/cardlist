import React, { useState } from 'react';
import DatePickerComp from './DatePickerComp';


const Register = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    return (
        <div className='w-width90 m-auto pt-10'>
            <h1 className='font-bold text-center'>Employee Registration Form</h1>

            <section className='mt-20 text-center border-2 border-black w-width50 m-auto p-10'>
                <div className='flex justify-between'>
                    <div className="flex flex-col">
                        <label htmlFor="input1" className="text-left text-gray-600 mb-1 ">First Name<span>*</span></label>
                        <input
                            id="input1"
                            className="w-full px-3 py-2 bg-cyan-100 rounded-md border"
                            type="text"
                            placeholder="Enter first name"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="input1" className="text-left text-gray-600 mb-1 ">Last Name<span>*</span></label>
                        <input
                            id="input2"
                            className="w-full px-3 py-2 bg-cyan-100 rounded-md border"
                            type="text"
                            placeholder="Enter last name"
                        />
                    </div>
                </div>

                <div className="flex flex-col text-left mt-10 w-full">
                    <label htmlFor="input1" className="text-left text-gray-600 mb-1 ">DOB</label>
                    <DatePickerComp />
                </div>

            </section>
        </div>
    )
}

export default Register
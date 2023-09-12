import React, { useState } from 'react';
import DatePickerComp from './DatePickerComp';
import Dropdown from './Dropdown';
import TextEditor from './TextEditor';

const Register = () => {

    const [formData, setFormData] = useState({
        FirstName: "",
        LastName: "",
        DOB: "",
        Study: "",
        StartDate: "",
        EndDate: "",
        CurrentSalary: "",
        Description: ""
    })

    const onChangeHandler = (e) => {
        console.log(e.target.value)

    }

    const [selectedOption, setSelectedOption] = useState('');

    // Handle change when a new option is selected
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };


    return (
        <>
            <div className='w-width90 m-auto pt-10'>
                <h1 className='font-bold text-center'>Employee Registration Form</h1>

                <section className='mt-20 text-center border-2 border-grey w-width50 m-auto p-10'>
                    <div className='flex justify-between'>
                        <div className="flex flex-col">
                            <label htmlFor="input1" className="text-left text-gray-600 mb-1 ">First Name<span>*</span></label>
                            <input
                                id="input1"
                                className="w-full px-3 py-2 bg-cyan-100 rounded-md border h-10 focus:outline-none"
                                type="text"
                                onChange={onChangeHandler}
                                placeholder="Enter first name"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="input1" className="text-left text-gray-600 mb-1 ">Last Name<span>*</span></label>
                            <input
                                id="input2"
                                onChange={onChangeHandler}
                                className="w-full px-3 py-2 bg-cyan-100 rounded-md border h-10 focus:outline-none"
                                type="text"
                                placeholder="Enter last name"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col text-left mt-10 w-full">
                        <label htmlFor="input1" className="text-left text-gray-600 mb-1 ">DOB</label>
                        <DatePickerComp from={true} onChange={onChangeHandler} />
                    </div>

                    <div className="flex flex-col text-left mt-10 w-full">
                        <label htmlFor="input1" className="text-left text-gray-600 mb-1">
                            Study
                        </label>
                        <select
                            id="input2"
                            value={selectedOption}
                            onChange={onChangeHandler}
                            className="w-full px-3 py-2 bg-cyan-100 rounded-md border h-10 focus:outline-none text-gray-400" // Added text-gray-600
                        >
                            <option style={{ color: 'gray', fontSize: '14px' }} value="option1">BE</option>
                            <option style={{ color: 'gray', fontSize: '14px' }} value="option2">Btech</option>
                            <option style={{ color: 'gray', fontSize: '14px' }} value="option3">ME/Mtech</option>
                        </select>
                    </div>


                    <div className="flex justify-between text-left mt-10 w-full">
                        <DatePickerComp from={false} onChange={onChangeHandler} />
                        <DatePickerComp from={false} onChange={onChangeHandler} />
                    </div>

                    <div className="flex flex-col text-left mt-10 w-full">
                        <label htmlFor="input1" className="text-left text-gray-600 mb-1">
                            Current salary
                        </label>
                        <input
                            id="input2"
                            type="number"
                            onChange={onChangeHandler}
                            className="w-full px-3 py-2 bg-cyan-100 rounded-md border h-10 focus:outline-none text-gray-600" // Added text-gray-600
                            placeholder="Enter salary"
                        />
                    </div>


                    <div className="flex flex-col text-left mt-10 w-full">
                        <label htmlFor="input1" className="text-left text-gray-600 mb-1">
                            Description
                        </label>
                        <TextEditor onChange={onChangeHandler}/>
                    </div>


                    <div className='flex justify-between mt-10'>
                        <button
                            className="w-full px-3 py-2 bg-gray-200 rounded-md border h-10 w-width40"
                        >
                            Cancel
                        </button>
                        <button
                            className="w-full px-3 py-2 bg-blue-900 rounded-md border h-10 w-width40 text-white"
                        >
                            Save
                        </button>
                    </div>
                </section>
            </div>


            <br /><br /><br />
            <style>
                {
                    `
                    /* MyNumberInput.css */
                    input[type="number"]::-webkit-inner-spin-button,
                    input[type="number"]::-webkit-outer-spin-button {
                    -webkit-appearance: none;
                    appearance: none;
                    margin: 0;
                    }

                    `
                }
            </style>
        </>
    )
}

export default Register
import React, { useEffect, useState } from 'react';
import TableComponent from '../TableComponent';
import axios from 'axios';

const Employee = () => {
    const [employeeData, setEmployeeData] = useState([])
    const headings = ['Name', 'DOB', 'Start Date', 'End Date', 'Description'];

    const data = [
        ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5'],
        ['Data 6', 'Data 7', 'Data 8', 'Data 9', 'Data 10'],
        // Add more rows as needed
    ];

    useEffect(() => {
        axios.get(`https://sweede.app/DeliveryBoy/Get-Employee/`)
            .then(res => {
                console.log(res.data)
                setEmployeeData(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="container mx-auto p-10">
            <h1 className='font-bold mb-4'>Employee List</h1>
            <TableComponent headings={headings} data={employeeData} />
        </div>
    );
};

export default Employee;

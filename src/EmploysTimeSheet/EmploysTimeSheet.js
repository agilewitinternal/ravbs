import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./EmploysTimeSheet.css"




const EmploysTimeSheet = () => {
    const [employsTimeSheet, setEmploysTimeShet] = useState([])
    useEffect(() => {
        fetchEmployeesDetails();
    }, []);


    const fetchEmployeesDetails = async () => {

        const TimeSheetURL = "https://agilewitstimesheet-default-rtdb.firebaseio.com/.json"

        const Result = await axios.get(TimeSheetURL)
        const FinelResulst = Object.values(Result.data).flat()
        setEmploysTimeShet(FinelResulst)


    }

    const employeeNames = [...new Set(employsTimeSheet.map(emp => emp.EmployName))];


const dates = [...new Set(employsTimeSheet.map(emp => emp.date))];

const getWorkingHours = (name, date) => {
    const record = employsTimeSheet.find(emp => emp.EmployName === name && emp.date === date);
    return record ? record.WorkingHours : 0;
};

const getTotalHours = (name) => {
    return dates.reduce((total, date) => total + parseInt(getWorkingHours(name, date)), 0);
};

    return (
        <div className='EmployTimeSheet-Container'>
        <table>
    
            <tr>
                <th>Employee</th>
                {dates.map(date => (
                    <th key={date}>{new Date(date).toLocaleDateString()}</th>
                ))}
                <th>Total</th>
            </tr>
       
       
            {employeeNames.map(name => (
                <tr key={name} style={{height:"20px"}}>
                    <td>{name}</td>
                    {dates.map(date => (
                        <td key={date}>{getWorkingHours(name, date)}</td>
                    ))}
                    <td>{getTotalHours(name)}</td>
                </tr>
            ))}
       
    </table>
    </div>
          );
};

export default EmploysTimeSheet

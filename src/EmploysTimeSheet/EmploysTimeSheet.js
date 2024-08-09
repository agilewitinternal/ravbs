import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./EmploysTimeSheet.css"

const EmploysTimeSheet = () => {
    const [employsTimeSheet, setEmploysTimeShet] = useState([])
    const [listEmploy, setListEmploy] = useState("Siddu")

    console.log(employsTimeSheet)

    useEffect(() => {
        fetchEmployeesDetails();
    }, []);


    const fetchEmployeesDetails = async () => {

        const TimeSheetURL = "https://agilewitstimesheet-default-rtdb.firebaseio.com/.json"

        const Result = await axios.get(TimeSheetURL)
        const FinelResulst = Object.values(Result.data).flat()
        setEmploysTimeShet(FinelResulst)


    }

    const UpdateEmploy = (e) => {
        setListEmploy(e.target.value)
    }
    const FilterTimeSheet=employsTimeSheet.filter((each)=>each.EmployName===listEmploy)

    return (
        <div className='Topping'>
            <select onChange={UpdateEmploy}>
                <option>Choose Employ</option>
                <option value="Balesh">Balesh</option>
                <option value="Siddu">Siddu</option>
                <option value="Giri">Giri</option>
                <option value="Giri">Navatha</option>
            </select>
            <div className='TimeSheet-Container'>
                <div className='Buttons-Conatainer'>
                    <button className='Button'>Previous Week</button>
                    <button className='Button'>Next Week</button>
                </div>
<table>
    <tr>
        <th>Employ Name</th>
        <th>Date</th>
        <th>WorkingHours</th>

    </tr>
    {FilterTimeSheet.map((each)=>
    <tr>
        <td>{each.EmployName}</td>
        <td>{each.date}</td>
        <td>{each.WorkingHours}</td>
    </tr>)}
</table>
</div>
        </div>
    );
};

export default EmploysTimeSheet

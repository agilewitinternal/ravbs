import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./EmploysTimeSheet.css"




const EmploysTimeSheet = () => {
    const [employsTimeSheet, setEmploysTimeShet] = useState([])
    const [firstNumber,setFirstNumber]=useState(0)
    const [secondNumber,setSecondNumber]=useState(7)
    useEffect(() => {
        fetchEmployeesDetails();
    }, []);

    const UpdateFirstNumber=()=>{
        setFirstNumber(prevState=>prevState+7)
        setSecondNumber(prevState=>prevState+7)
    }

   
    const UpdateSecondNumber=()=>{
        
    setFirstNumber(prevState=>{
        if(prevState===0){
            return 0;
        }else{
            return prevState-7
        }
    })
        setSecondNumber(prevState=>{
            if(prevState===6){
                return 6;
            }else{
                return prevState-7
            }
        })
    }

    const fetchEmployeesDetails = async () => {

        const TimeSheetURL = "https://agilewitstimesheet-default-rtdb.firebaseio.com/.json"

        const Result = await axios.get(TimeSheetURL)
        const FinelResulst = Object.values(Result.data).flat()
        const UpdatedFinel=FinelResulst.slice(firstNumber,secondNumber)
        
        setEmploysTimeShet(UpdatedFinel)


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
        <div className="table-responsive"> 
            <table>
                <thead>
                    <tr>
                        <th>Employee</th>
                        {dates.map(date => (
                            <th key={date}>{new Date(date).toLocaleDateString()}</th>
                        ))}
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeNames.map(name => (
                        <tr key={name} style={{ height: "20px" }}>
                            <td>{name}</td>
                            {dates.map(date => (
                                <td key={date}>{getWorkingHours(name, date)}</td>
                            ))}
                            <td>{getTotalHours(name)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <div className="Buttons-Conatainer">
    
            <button className="Button" onClick={UpdateSecondNumber}>PreviousWeek</button>
            <button className="Button" onClick={ UpdateFirstNumber}>NextWeek</button>
        </div>
       
    </div>
    
          );
};

export default EmploysTimeSheet

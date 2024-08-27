import "./SuccessTimeSheet.css"

const SuccessTimeSheet = (props) => {
    const {Success}=props
    const employeeNames = [...new Set(Success.map(emp => emp.EmployName))];


const dates = [...new Set(Success.map(emp => emp.date))];

const getWorkingHours = (name, date) => {
    const record = Success.find(emp => emp.EmployName === name && emp.date === date);
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
       
    </div>
    
          );
};

export default SuccessTimeSheet

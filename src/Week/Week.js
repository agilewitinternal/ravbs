import React, { useState } from 'react';
import moment from 'moment';
import "./Week.css"

const WeekNavigator = () => {
    const [currentDate, setCurrentDate] = useState(moment());

    const startOfWeek = currentDate.clone().startOf('isoWeek');
    const endOfWeek = currentDate.clone().endOf('isoWeek');

    const days = [];
    for (let i = 0; i < 7; i++) {
        days.push(startOfWeek.clone().add(i, 'days'));
    }

    const handlePreviousWeek = () => {
        setCurrentDate(currentDate.clone().subtract(1, 'week'));
    };

    const handleNextWeek = () => {
        setCurrentDate(currentDate.clone().add(1, 'week'));
    };

    return (
        <div className='Toping'>
            <h2>
                Week from {startOfWeek.format('MMM DD')} to {endOfWeek.format('MMM DD')}
            </h2>
            <div className='Week-Button'>
                <button onClick={handlePreviousWeek}>Previous Week</button>
                <button onClick={handleNextWeek}>Next Week</button>
            </div>
            <div className='Table-Row'>
                {days.map(day => (
                    <div key={day.format('YYYY-MM-DD')}>
                        <table>
                            <tr>
                               
                                <th>
                                <div>{day.format('ddd')}</div>
                <div>{day.format('MMM DD')}</div>
                                </th>
                            </tr>
                            <tr>
                                <td>Login Timeings</td>
                            </tr>
                        </table>

                    </div>
                ))}
            </div>

        </div>
    );
};

export default WeekNavigator;

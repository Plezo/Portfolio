import { useState } from 'react'
import TimeButton from '../TimeButton/TimeButton'

import './Appointment.css'

let availableTimes = [9, 10, 11]

export default function Appointment() {

    const [selectedTime, setSelectedTime] = useState(NaN)

    return (
    <table className='availableTimeBox'>
        <thead>
            <tr>
                <th>Times</th>
            </tr>
        </thead>
        <tbody>
            {
                availableTimes.map((time: number, i: number): any => {
                    return <TimeButton time={time} key={i} selectedTime={selectedTime} setSelectedTime={setSelectedTime}/>
                })
            }
        </tbody>
    </table>
    )
}

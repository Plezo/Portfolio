import { useState } from 'react'
import TimeButton from '../TimeButton/TimeButton'

import './Appointment.css'

let availableTimes = ["9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm"]

export default function Appointment() {

    const [selectedTime, setSelectedTime] = useState("")

    return (
    <table className='availableTimeBox'>
        <thead>
            <tr>
                <th>Times</th>
            </tr>
        </thead>
        <tbody className='availableTimeBody'>
            {
                availableTimes.map((time: string, key: number): any => {
                    return <TimeButton time={time} key={key} selectedTime={selectedTime} setSelectedTime={setSelectedTime}/>
                })
            }
        </tbody>
    </table>
    )
}

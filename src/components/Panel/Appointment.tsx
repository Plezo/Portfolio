import { useState, useEffect } from 'react'
import TimeButton from './TimeButton'

import './Appointment.css'

let availableTimes = Array.from(Array(24).keys()).map(num => `${num}:00`)

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

interface Props {
    selectedDate: Date,
}

export default function Appointment(props: Props) {

    const [selectedTime, setSelectedTime] = useState("")

    return (
        <table className='timesList'>
            <thead>
                <tr>
                    <th className='timesListHead'>
                        {weekday[props.selectedDate.getDay()]}, {months[props.selectedDate.getMonth()]} {props.selectedDate.getDate()}
                    </th>
                </tr>
            </thead>
            <tbody className='timesListBody'>
                {
                    availableTimes.map((time: string, i: number): any => {
                        return <TimeButton time={time} key={i} selectedTime={selectedTime} setSelectedTime={setSelectedTime}/>
                    })
                }
            </tbody>
        </table>
    )
}

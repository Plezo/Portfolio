import { useState } from 'react'
import TimeButton from '../TimeButton/TimeButton'

import './Appointment.css'

let availableTimes = Array.from(Array(24).keys()).map(num => `${num}:00`)

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

interface Props {
    dateSelected: Date,
}

export default function Appointment(props: Props) {

    const [selectedTime, setSelectedTime] = useState("")

    return (
    <table className='timesList'>
        <thead>
            <tr>
                <th className='timesListHead'>
                    {weekday[props.dateSelected.getDay()]}, {months[props.dateSelected.getMonth()]} {props.dateSelected.getDate()}
                </th>
            </tr>
        </thead>
        <tbody className='timesListBody'>
            {
                availableTimes.map((time: string, key: number): any => {
                    return <TimeButton time={time} key={key} selectedTime={selectedTime} setSelectedTime={setSelectedTime}/>
                })
            }
        </tbody>
    </table>
    )
}

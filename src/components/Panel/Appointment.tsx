import { useEffect, useState } from 'react'
import TimeButton from './TimeButton'

import './Appointment.css'

// TODO: This will be an API call
const getAvailableTimes = (day: Date): string[] => {
    return Array.from(Array(24).keys()).map(num => `${num}:00`)
}

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

interface Props {
    selectedDate: Date,
}

export default function Appointment(props: Props) {

    const [timesForDay, setTimesForDay] = useState([''])
    const [selectedTime, setSelectedTime] = useState("")

    useEffect(() => {
        setTimesForDay(getAvailableTimes(props.selectedDate))
      }, [props.selectedDate])

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
                    timesForDay.map((time: string, i: number): any => {
                        return <TimeButton time={time} key={i} selectedTime={selectedTime} setSelectedTime={setSelectedTime}/>
                    })
                }
            </tbody>
        </table>
    )
}

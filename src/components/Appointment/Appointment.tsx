import React from 'react'

import './Appointment.css'

let availableTimes = [9, 10, 11]

export default function Appointment() {
  return (
    <div className='availableTimeSection'>
        <div>
            {
                availableTimes.map((time: number, i: number): any => {
                    return <button key={i} className='availableTimeBox'>
                        {time}
                    </button>
                })
            }
        </div>
    </div>
  )
}

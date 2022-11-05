import { useState } from 'react'

import Calendar from './Calendar'
import Appointment from './Appointment'
import './Panel.css'

export default function Panel() {

  const [selectedDate, setSelectedDate] = useState(new Date())

  return (
    <div className='panel'>
      <div className='panelChild description'>
        <h5 style={{marginTop: "15px", fontSize: "24px"}}>Book a meeting with me</h5>
        <button>
          15 min
        </button>
        <button>
          30 min
        </button>
        <button>
          1 hour
        </button>
        <br></br>
        <p>Meeting context:</p>
        <input>
        {/* Description */}
        </input>
      </div>

      <div className='panelChild'>
        <Calendar setSelectedDate={setSelectedDate}/>
      </div>
      
      <div className='panelChild'>
        <Appointment selectedDate={selectedDate}/>
      </div>
    </div>
  )
}
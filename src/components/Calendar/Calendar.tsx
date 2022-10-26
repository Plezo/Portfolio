import { useState } from 'react'

import Appointment from '../Appointment/Appointment'

import './Calendar.css'

const getWeeks = (year: number, month: number): Date[][] => {
    const result = [];
  
    const firstDay = new Date(year, month-1, 1);
    const lastDay = new Date(year, month, 0);
  
    let tracker = firstDay;
    
    while (tracker.getDay() > 0)
      tracker.setDate(tracker.getDate() - 1);
  
    let week = [];
    while (tracker <= lastDay) {
      week.push(new Date(tracker));
      
      tracker.setDate(tracker.getDate() + 1)
  
      if (week.length === 7) {
        result.push(week);
        week = [];
      }
    }
  
    if (lastDay.getDay() < 6) {
      for (let i = tracker.getDay(); i < 7; i++) {
        week.push(new Date(tracker));
        tracker.setDate(tracker.getDate() + 1);
      }
      result.push(week);
    }
    
    return result;
}

const numberToMonth = (month: number): string => {
  const months: any = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
  };

  return months[month];
}

export default function Calendar() {

  const defaultDate = new Date();

  const [daySelected, setDaySelected] = useState(NaN);
  const [monthSelected, setMonthSelected] = useState(defaultDate.getMonth());
  const [yearSelected, setYearSelected] = useState(defaultDate.getFullYear());

  const handleInput = (month: number): void => {
    if (month < 0) {
      setDaySelected(1);
      setMonthSelected(11);
      setYearSelected(yearSelected-1);
    }
    else if (month > 11) {
      setDaySelected((new Date(yearSelected, monthSelected, 0)).getDate());
      setMonthSelected(0);
      setYearSelected(yearSelected+1);
    }
    else {
      setMonthSelected(month);
    }
    setDaySelected(NaN);
  }

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th style={{textAlign: 'left', paddingLeft: '0.5rem'}} colSpan={5}>
                {numberToMonth(monthSelected)} {yearSelected}
              </th>
              <th colSpan={1}>
                <button className='changeMonthButton' onClick={() => handleInput(monthSelected-1)}>
                  &lt;
                </button>
              </th>
              <th colSpan={1}>
                <button className='changeMonthButton' onClick={() => handleInput(monthSelected+1)}>
                  &gt;
                </button>
              </th>
            </tr>
            <tr>
              <th>S</th>
              <th>M</th>
              <th>T</th>
              <th>W</th>
              <th>T</th>
              <th>F</th>
              <th>S</th>
            </tr>
          </thead>
          <tbody>
            {
              getWeeks(yearSelected, monthSelected+1)
              .map((dateRow: Date[], i: number): any => (
                <tr key={i}>
                  {dateRow.map((day: Date): any => {
                    return <td key={day.getDate()}>
                      <button 
                      className={
                        `dateButton ${day.getMonth() !== monthSelected ? 'dateButtonNotMonth' : ''} 
                        ${day.toDateString() === (new Date()).toDateString() ? 'dateButtonToday': ''} 
                        ${(day.getDate() === daySelected && day.getMonth() === monthSelected) ? 'dateButtonSelected': ''}
                        `
                      } 
                      onClick={() => {
                        if (day.getMonth() !== monthSelected)
                          setMonthSelected(day.getMonth());
                        setDaySelected(day.getDate());
                        }}>
                        { day.getDate() }
                      </button>
                    </td>
                  })}
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      
      <div className='appointment'>
        <Appointment />
      </div>
    </>
  )
}
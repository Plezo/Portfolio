import { useState, useEffect } from 'react'
import './Calendar.css'

interface Props {
    setSelectedDate: Function
}

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

/* Returns an w x 7 array of dates (w = # of weeks in month) */
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

export default function Calendar(props: Props) {
    const defaultDate = new Date();

    const [daySelected, setDaySelected] = useState(defaultDate.getDate());
    const [monthSelected, setMonthSelected] = useState(defaultDate.getMonth());
    const [yearSelected, setYearSelected] = useState(defaultDate.getFullYear());

    useEffect(() => {
      props.setSelectedDate(new Date(yearSelected, monthSelected, daySelected));
    }, [daySelected, monthSelected])

    /* Updates date info any time calendar buttons are clicked */
    const handleInput = (month: number, day: number = 1, year: number = yearSelected): void => {
        if (month < 0) {
          month = 11;
          year -= 1
        }
        else if (month > 11) {
          month = 0;
          day = (new Date(yearSelected, monthSelected, 0)).getDate()
          year += 1
        }
        setMonthSelected(month);
        setYearSelected(year);
        setDaySelected(day);
    }

    return (
    <>
        <table className='calendarTable'>
            <thead>
            <tr style={{lineHeight: "3rem"}}>
                <th colSpan={5}>
                {months[monthSelected]} {yearSelected}
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
                        `dateButton ${day.getMonth() !== monthSelected  ? 'dateButtonNotMonth' : ''} 
                        ${day.toDateString() === (new Date()).toDateString() ? 'dateButtonToday': ''} 
                        ${(day.getDate() === daySelected && day.getMonth() === monthSelected) ? 'dateButtonSelected': ''}
                        `
                        }
                        disabled={day < new Date()}
                        onClick={() => handleInput(day.getMonth(), day.getDate())}>
                        { day.getDate() }
                        </button>
                    </td>
                    })}
                </tr>
                ))
            }
            </tbody>
        </table>
    </>
    )
}

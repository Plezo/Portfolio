import './TimeButton.css'

interface Props {
    time: string,
    key: number,
    selectedTime: string,
    setSelectedTime: Function
}

export default function TimeButton(props: Props) {
    return (
    <tr className='flexChild'>
        <td>
            <button 
            className={props.selectedTime !== props.time ? 'timeButton' : 'timeButtonHalf'} 
            key={props.key} 
            onClick={() => {props.setSelectedTime(props.time)}}>
                {props.time}
            </button>
            { props.selectedTime === props.time && 
                <button className='confirmButton'>
                    Confirm
                </button>
            }
        </td>
    </tr>
    )
}

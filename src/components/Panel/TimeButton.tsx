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
            className={`defaultButton ${props.selectedTime !== props.time ? 'timeButton' : 'timeButtonHalf'}`} 
            key={props.key}
            onClick={() => {props.setSelectedTime(props.time)}}>
                {props.time}
            </button>
            { props.selectedTime === props.time && 
                <button className='defaultButton confirmButton'>
                    Confirm
                </button>
            }
        </td>
    </tr>
    )
}
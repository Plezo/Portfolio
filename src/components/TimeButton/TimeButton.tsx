interface Props {
    time: number,
    key: number,
    selectedTime: number,
    setSelectedTime: Function
}

export default function TimeButton(props: Props) {
    return (
    <tr>
        <td>
            <button className='timeButton' key={props.key} onClick={() => {props.setSelectedTime(props.time)}}>
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

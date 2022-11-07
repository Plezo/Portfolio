import './Project.css'

interface Props {
  name: string,
  desc: string[],
  img: string
}

export default function Project(props: Props) {
  return (
    <div className='project'>
        <img className='image' alt='' src={props.img} />
        
        <div className='projectName'>
            <p className='projectNameText'>
            {props.name}
            </p>
        </div>
        
        <div className='projectDesc'>
          {props.desc.map((tech) => {
            return <p>{tech}</p>
          })}
        </div>
    </div>
  )
}

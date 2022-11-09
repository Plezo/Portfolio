import './Project.css'

interface Props {
  info: {
    name: string,
    desc: string[],
    img: string,
    githubURL: string
  }
}

export default function Project(props: Props) {
  var img = require(`../../../public/images/${props.info.img}`)
  return (
    <a href={props.info.githubURL} className='project'>
        <img className='image' alt='' src={img} />
        
        <div className='projectName'>
            <p className='projectNameText'>
            {props.info.name}
            </p>
        </div>
        
        <div className='projectDesc'>
          {props.info.desc.map((tech: string): JSX.Element => {
            return <p>{tech}</p>
          })}
        </div>
    </a>
  )
}

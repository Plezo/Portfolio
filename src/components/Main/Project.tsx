import './Project.css'

export default function Project() {
  return (
    <div className='project'>
        <img className='image' alt='' src='https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1.jpg.optimal.jpg' />
        
        <div className='projectName'>
            <p className='projectNameText'>
            Project Name
            </p>
        </div>
        
        <div className='projectDesc'>
            <p> React </p>
            <p> HTML/CSS </p>
        </div>
    </div>
  )
}

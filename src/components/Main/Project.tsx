import './Project.css'

export default function Project() {
  return (
    <div className='project'>
        <div className='projectName'>
            <h3 className='projectNameText'>
            Project Name
            </h3>
        </div>
        <img className='image' src='https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1.jpg.optimal.jpg' />
        <div className='projectDesc'>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
        </div>
    </div>
  )
}

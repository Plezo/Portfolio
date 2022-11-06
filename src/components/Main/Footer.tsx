import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'

import './Footer.css'

export default function Footer() {
  return (
    <div id='footer'>
        <div id='mediaLinks'>
            <a href='https://github.com/Plezo' className='iconBg'>
              <AiOutlineGithub className='footerIcon'/>
            </a>

            <a href='https://linkedin.com/in/Plezo' className='iconBg'>
              <AiOutlineLinkedin className='footerIcon' />
            </a>
        </div>
        <p>
          2022 Patryk Lezon. All rights reserved.
        </p>
      </div>
  )
}

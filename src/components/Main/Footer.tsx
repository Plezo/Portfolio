import { IconContext } from "react-icons";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

import './Footer.css'

export default function Footer() {
  return (
    <div id='footer'>
        <div id='mediaLinks'>

            <div className='iconBg'>
              <AiFillGithub className='footerIcon'/>
            </div>

            <div className='iconBg'>
              <AiFillLinkedin className='footerIcon' />
            </div>

        </div>
        <p>
          2022 Patryk Lezon. All rights reserved.
        </p>
      </div>
  )
}

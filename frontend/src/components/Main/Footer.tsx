import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'

import './Footer.css'

export default function Footer() {
  return (
    <div id='footer'>
        <div id='mediaLinks'>
            <a href='https://github.com/Plezo'>
              <AiOutlineGithub />
            </a>

            <a href='https://linkedin.com/in/Plezo'>
              <AiOutlineLinkedin />
            </a>
        </div>
        <p>
          © 2022 Patryk Lezon. All rights reserved.
        </p>
      </div>
  )
}

import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'

export default function Footer(props: {mode: string}) {
  return (
    <div 
    className={` ${props.mode}
    flex flex-col align-middle justify-center items-center
    py-4
    bg-dark-purple text-ivory
    dark:bg-ivory dark:text-dark-purple
    `}>
        <div className='flex flex-row py-2 gap-4'>
            <a 
            className='text-4xl'
            href='https://github.com/Plezo'>
              <AiOutlineGithub />
            </a>

            <a
            className='text-4xl'
            href='https://linkedin.com/in/Plezo'>
              <AiOutlineLinkedin />
            </a>
        </div>
        <p>
          © 2022 Patryk Lezon. All rights reserved.
        </p>
    </div>
  )
}

import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'

export default function Footer(props: {mode: string}) {
  return (
    <div 
    className={` ${props.mode}
    flex flex-col align-middle justify-center items-center
    py-4 
    bg-ivory text-dark-purple
    dark:bg-dark-purple dark:text-ivory
    lg:mt-8
    xl:m-0 xl:min-h-screen
    `}>
        <div 
        className='
        flex flex-row py-2 gap-4 
        md:py-4
        xl:py-2 xl:gap-2
        '>
            <a 
            className='
            text-4xl 
            md:text-5xl
            xl:text-2xl
            '
            href='https://github.com/Plezo'>
              <AiOutlineGithub />
            </a>

            <a
            className='
            text-4xl 
            md:text-5xl
            xl:text-2xl
            '
            href='https://linkedin.com/in/Plezo'>
              <AiOutlineLinkedin />
            </a>
        </div>
        <p className='
        text-opacity-60
        md:text-xl
        xl:text-xs
        '>
          © 2022 Patryk Lezon. All rights reserved.
        </p>
    </div>
  )
}

import { BsMoonFill } from 'react-icons/bs'

export default function Header(props: {mode: string, setMode: Function}) {
  return (
    <header className='flex pt-6 px-20'>
        <button 
        className={`${props.mode} 
        bg-royal-purple w-10 h-10 rounded-2xl text-ivory text-xl
        flex items-center align-center justify-center
        mr-auto hover:bg-opacity-80 active:bg-dark-purple
        dark:bg-lavender dark:text-dark-purple dark:active:bg-royal-purple
        `}
        onClick={() => props.setMode(props.mode === 'dark' ? 'light' : 'dark')}
        >
          <BsMoonFill />
        </button>
        <button 
        className={`${props.mode} 
        text-royal-purple font-semibold ml-auto text-2xl
        hover:text-opacity-80 focus:text-dark-purple
        dark:text-lavender dark:focus:text-royal-purple
        `}
        onClick={() => window.location.href = 'mailto:plezo@protonmail.com'}
        // onClick={() => setShowContactPanel(true)}
        >
          Contact
        </button>
      </header>
  )
}

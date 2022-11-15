import { BsMoonFill } from 'react-icons/bs'

export default function Header(props: {mode: string, setMode: Function}) {
  return (
    <header className='flex pt-6 px-20'>
        <button 
        className='
        flex items-center align-center justify-center
        bg-royal-purple text-ivory hover:bg-opacity-80 active:bg-dark-purple
        dark:bg-lavender dark:text-dark-purple dark:active:bg-royal-purple
        w-10 h-10 rounded-full text-xl
        mr-auto 
        '
        onClick={() => props.setMode(props.mode === 'dark' ? 'light' : 'dark')}
        >
          <BsMoonFill />
        </button>
        <button 
        className='
        text-royal-purple hover:text-opacity-80 focus:text-dark-purple
        dark:text-lavender dark:focus:text-royal-purple
        text-2xl
        ml-auto
        '
        onClick={() => window.location.href = 'mailto:plezo@protonmail.com'}
        // onClick={() => setShowContactPanel(true)}
        >
          Contact
        </button>
      </header>
  )
}

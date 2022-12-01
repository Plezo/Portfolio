import { Element } from 'react-scroll'

export default function Contact() {
  return (
    <Element name='contact'>
        <div className='
        flex flex-col items-center h-screen
        '>
            <h1 className='
            pt-20 font-bold text-ivory text-8xl
            '>/CONTACT</h1>
            <h2 className='
            pt-16 text-6xl font-extrabold text-lavender
            sm:pt-32 
            xl:pt-16
            '> Say hello! </h2>
            <div className='
            flex justify-center 
            w-full pt-16 
            sm:pt-20 
            lg:pt-16
            '>
                <div className='
                flex flex-col items-center w-3/6
                sm:gap-8
                md:w-2/6
                xl:gap-2
                '>
                    <div className='w-full'>
                        <div className='text-2xl text-ivory'>Name:</div>
                        <textarea className='w-full h-2/5 p-2 overflow-hidden font-bold resize-none'></textarea>
                    </div>
                    <div className='w-full'>
                        <h1 className='text-2xl text-ivory'>Email:</h1>
                        <textarea className='w-full h-2/5 p-2 overflow-hidden font-bold resize-none'></textarea>
                    </div>
                    <div className='w-full'>
                        <h1 className='text-2xl text-ivory'>Message:</h1>
                        <textarea className='w-full font-bold p-2 resize-none h-3/4'></textarea>
                    </div>
                    <button 
                    className='
                    px-10 py-2 mt-12 text-3xl
                    border-2 border-solid text-lavender border-lavender 
                    hover:border-ivory hover:text-ivory transition-all
                    active:border-lavender active:text-lavender
                    '>
                    SEND
                    </button>
                </div>
            </div>
        </div>
    </Element>
  )
}

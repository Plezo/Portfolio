import { Element } from 'react-scroll'

export default function Contact() {
  return (
    <Element name='contact'>
        <div className='
        flex flex-col items-center h-screen
        '>
            <h1 className='
            pt-8 font-bold text-ivory text-7xl
            sm:text-8xl
            2xl:pt-24
            '>/CONTACT</h1>

            <h2 className='
            pt-24 text-6xl font-extrabold text-lavender
            sm:pt-32 
            xl:pt-16
            '> Say hello! </h2>
            
            <div className='
            flex justify-center 
            w-full pt-16 
            sm:pt-20 
            lg:pt-16
            xl:pt-8
            2xl:pt-14
            '>
                <form className='
                flex flex-col items-center w-3/6 gap-8
                md:w-2/6
                '
                action="https://formsubmit.co/2cd16560e0c654d7344acbb2e189b4b5" target="_blank" method="POST">
                    <input type="hidden" name="_captcha" value="false"></input>
                    <input type="hidden" name="_subject" value="Message from Portfolio"></input>
                    <div className='w-full'>
                        <div className='text-2xl text-ivory'>Name:</div>
                        <input type="text" name="Name" className='w-full p-2 overflow-hidden font-bold resize-none' required></input>
                    </div>
                    <div className='w-full'>
                        <h1 className='text-2xl text-ivory'>Email:</h1>
                        <input type="email" name="Email" className='w-full p-2 overflow-hidden font-bold resize-none' required></input>
                    </div>
                    <div className='w-full'>
                        <h1 className='text-2xl text-ivory'>Message:</h1>
                        <textarea name="Message" className='w-full h-full font-bold p-2 resize-none' required></textarea>
                    </div>
                    <button 
                    className='
                    px-10 py-2 mt-12 text-3xl
                    border-2 border-solid text-lavender border-lavender 
                    hover:border-ivory hover:text-ivory transition-all
                    active:border-lavender active:text-lavender
                    '
                    type="submit">
                    SEND
                    </button>
                </form>
            </div>
        </div>
    </Element>
  )
}

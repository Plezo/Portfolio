export default function Contact() {
  return (
    <div id='contact'
    className='flex flex-col items-center h-screen w-screen'>
        <h1 className='pt-20 font-bold text-ivory text-8xl xl:pt-12 2xl:pt-32'>/CONTACT</h1>
        <h2 className='pt-16 sm:pt-32 xl:pt-12 2xl:pt-32 text-6xl font-extrabold tracking-wide text-lavender'> Say hello! </h2>
        <div className='flex flex-col justify-center w-full pt-16 sm:pt-20 lg:pt-12'>
            <div className='flex flex-col items-center justify-center align-middle sm:gap-8 xl:gap-2 2xl:gap-8'>
                <div className='w-52'>
                    <div className='text-2xl font-light text-ivory'>Name:</div>
                    <textarea className='w-full h-2/5 p-2 mt-2 overflow-hidden font-bold tracking-wide resize-none'></textarea>
                </div>
                <div className='w-52'>
                    <h1 className='text-2xl font-light text-ivory'>Email:</h1>
                    <textarea className='w-full h-2/5 p-2 mt-2 overflow-hidden font-bold tracking-wide resize-none'></textarea>
                </div>
                <div className='w-52'>
                    <h1 className='text-2xl font-light text-ivory'>Message:</h1>
                    <textarea className='w-full mt-2 p-2 resize-none h-3/4'></textarea>
                </div>
                <button 
                className='
                px-10 py-1 mt-12 transition-all text-xl
                border-2 border-solid text-lavender border-lavender 
                hover:border-ivory hover:text-ivory
                active:border-lavender active:text-lavender
                sm:text-3xl sm:px-16 sm:py-3 sm:font-light sm:tracking-wide
                xl:text-2xl xl:px-12 xl:py-2
                2xl:text-3xl 2xl:px-12 2xl:py-3
                '>
                SEND
                </button>
            </div>
        </div>
    </div>
  )
}

export default function Contact() {
  return (
    <div id='contact'
    className='flex flex-col items-center h-screen w-screen'>
        <h1 className='pt-24 font-bold text-ivory text-9xl'>/CONTACT</h1>
        <h2 className='pt-32 text-6xl font-extrabold tracking-wide text-lavender'> Say hello! </h2>
        <div className='flex flex-row justify-center w-full gap-12 pt-12 h-1/4'>
            <div className='flex flex-col items-center justify-center align-middle w-2/12'>
                <div className='w-52'>
                    <div className='text-xl font-medium text-ivory'>Name:</div>
                    <textarea className='w-full h-2/5 p-2 mt-2 overflow-hidden font-bold tracking-wide resize-none'></textarea>
                </div>
                <div className='w-52'>
                    <h1 className='text-xl font-medium text-ivory'>Email:</h1>
                    <textarea className='w-full h-2/5 p-2 mt-2 overflow-hidden font-bold tracking-wide resize-none'></textarea>
                </div>
            </div>
            <div className='w-52'>
                <h1 className='text-xl font-medium text-ivory'>Message:</h1>
                <textarea className='w-full mt-2 p-2 resize-none h-3/4'></textarea>
            </div>
        </div>
        <button 
        className='
        px-10 py-1 mt-12 transition-all
        border-2 border-solid text-lavender border-lavender 
        hover:border-ivory hover:text-ivory hover:duration-500 
        active:border-lavender active:text-lavender
        '>
            SEND
        </button>
    </div>
  )
}

export default function Contact() {
  return (
    <div id='contact'
    className='
    h-screen flex flex-col items-center
    '>
        <h1 className='text-ivory text-9xl font-bold pt-24'>/CONTACT</h1>
        <div className='flex flex-col items-start justify-start gap-4 pt-12'>
            <h2 className='text-lavender text-6xl font-extrabold tracking-wide'> Say hello! </h2>
            <div className='flex flex-row gap-8'>
                <div className='w-1/2'>
                    <h1 className='text-ivory'>Name:</h1>
                    <textarea className='resize-none p-2 h-1/3'></textarea>
                </div>
                <div className='w-1/2'>
                    <h1 className='text-ivory'>Email:</h1>
                    <textarea className='resize-none p-2 h-2/3'></textarea>
                </div>
            </div>
            <div className='w-full'>
                <h1 className='text-ivory'>Message:</h1>
                <textarea className='resize-none w-full h-28 p-2'></textarea>
            </div>
            <div className='w-full'>
                <button 
                className='
                float-right text-lavender border-lavender px-10 py-1 border-solid border-2
                transition-all hover:border-ivory hover:text-ivory hover:duration-500
                active:border-lavender active:text-lavender
                '>SEND</button>
            </div>
        </div>
    </div>
  )
}

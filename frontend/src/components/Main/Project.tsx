interface Info {
    img: string;
    name: string;
    desc: string;
    stack: string;
}

export default function Project(info: Info) {
  return (
    <div className='
    flex flex-col border-ivory border-solid border-2
    xl:flex-row
    '>
        <div className='
        border-ivory border-solid border-2
        filter saturate-25 hover:saturate-100
        h-52
        sm:h-full
        xl:h-7/12 xl:w-7/12
        '>
            <img src={info.img} alt='' className='h-full w-full'/>
        </div>
        <div className='h-5/12 xl:w-5/12'>
            <div 
            className='
            w-full
            text-lavender items-center
            border-ivory border-solid border-2
            flex align-center justify-center
            text-3xl tracking-wider
            py-4
            sm:text-5xl
            xl:h-1/4
            '>
                {info.name}
            </div>
            <div 
            className='
            w-full p-6 
            text-ivory border-ivory border-solid border-2
            sm:text-2xl sm:font-light sm:tracking-wide sm:py-12
            xl:h-2/4
            '>
                {info.desc}
            </div>
            <div 
            className='
            w-full flex justify-center items-center py-4
            text-ivory border-ivory border-solid border-2 
            sm:text-2xl sm:font-light sm:tracking-wide sm:py-8
            xl:h-1/4
            '>
                {info.stack}
            </div>
        </div>
    </div>
  )
}

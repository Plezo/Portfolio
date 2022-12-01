interface Info {
    img: string;
    name: string;
    desc: string;
    stack: string;
}

export default function Project(info: Info) {
  return (
    <div className='flex flex-row border-ivory border-solid border-2 w-8/12'>
        <div className='border-ivory border-solid border-2 w-5/12'>
            <img src={info.img} alt='' className='h-full w-full'/>
        </div>
        <div className='w-7/12'>
            <div 
            className='
            h-1/4 w-full
            text-lavender items-center
            border-ivory border-solid border-2
            flex align-center justify-center
            text-3xl tracking-wider
            '>
                {info.name}
            </div>
            <div 
            className='
            h-2/4 w-full p-6 
            text-ivory border-ivory border-solid border-2
            2xl:text-lg 2xl:font-light 2xl:tracking-wide
            '>
                {info.desc}
            </div>
            <div 
            className='
            h-1/4 w-full p-4
            text-ivory border-ivory border-solid border-2 
            2xl:text-lg 2xl:font-light 2xl:tracking-wide
            '>
                {info.stack}
            </div>
        </div>
    </div>
  )
}

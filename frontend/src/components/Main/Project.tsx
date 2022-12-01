interface Info {
    img: string;
    name: string;
    desc: string;
    stack: string;
}

export default function Project(info: Info) {
  return (
    <div className='flex flex-col md:flex-row border-ivory border-solid border-2'>
        <div className='
        border-ivory border-solid border-2 md:h-7/12 md:w-7/12
        filter saturate-25 hover:saturate-100
        h-52
        '>
            <img src={info.img} alt='' className='h-full w-full'/>
        </div>
        <div className='h-5/12 md:w-5/12'>
            <div 
            className='
            md:h-1/4 w-full
            text-lavender items-center
            border-ivory border-solid border-2
            flex align-center justify-center
            text-3xl tracking-wider
            py-4
            '>
                {info.name}
            </div>
            <div 
            className='
            md:h-2/4 w-full p-6 
            text-ivory border-ivory border-solid border-2
            2xl:text-lg 2xl:font-light 2xl:tracking-wide
            '>
                {info.desc}
            </div>
            <div 
            className='
            md:h-1/4 w-full flex justify-center items-center
            text-ivory border-ivory border-solid border-2 
            2xl:text-lg 2xl:font-light 2xl:tracking-wide
            py-4
            '>
                {info.stack}
            </div>
        </div>
    </div>
  )
}

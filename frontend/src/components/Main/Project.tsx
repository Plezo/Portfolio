interface Info {
    img: string;
    name: string;
    desc: string;
    stack: string;
} 

export default function Project(info: Info) {
  return (
    <div className='
    flex flex-col h-full
    xl:flex-row
    '>
        <div className='
        border-ivory border-solid border-2
        filter saturate-25 hover:saturate-100
        h-52
        sm:h-full
        xl:w-6/12
        '>
            <img src={info.img} alt='' className='h-full'/>
        </div>
        <div className=''>
            <div 
            className='
            flex justify-center items-center
            text-lavender
            border-ivory border-solid border-2
            text-3xl tracking-wider
            sm:text-4xl
            xl:h-1/4
            '>
                {info.name}
            </div>
            <div 
            className='
            p-6 
            text-ivory border-ivory border-solid border-2
            sm:text-2xl
            xl:h-2/4
            '>
                {info.desc}
            </div>
            <div 
            className='
            flex justify-center items-center
            text-ivory border-ivory border-solid border-2 
            sm:text-2xl
            xl:h-1/4
            '>
                {info.stack}
            </div>
        </div>
    </div>
  )
}

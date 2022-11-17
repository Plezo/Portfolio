

export default function Project() {
  return (
    <div className='flex flex-row border-ivory border-solid border-2 '>
        <div className='border-ivory border-solid border-2'>
            <img src='/images/Portfolio.png' alt='' className='h-full w-full'/>
        </div>
        <div>
            <div 
            className='
            h-1/4 w-full
            text-lavender items-center
            border-ivory border-solid border-2
            flex align-center justify-center
            '>
                PORTFOLIO
            </div>
            <div 
            className='
            h-3/4 w-full
            text-ivory text-sm
            border-ivory border-solid border-2
            p-4
            '>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </div>
        </div>
    </div>
  )
}

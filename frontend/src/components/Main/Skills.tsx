
export default function Skills(props: {mode: string}) {
  return (
    <div
    className='
    flex align-middle justify-center items-center
    xl:w-5/12 xl:h-3/4 xl:mt-72
    2xl:mt-80
    '>
        <div 
        className='
        flex flex-col gap-8
        lg:flex-row lg:rounded-3xl lg:px-24 lg:gap-0
        lg:bg-dark-purple  lg:dark:bg-ivory
        lg:w-11/12 lg:h-1/2
        xl:w-full xl:h-80 xl:px-0 xl:mx-0
        2xl:h-4/5 2xl:w-11/12 2xl:rounded-5xl
        '>
            <div 
            className='
            flex-1 flex flex-col items-center align-middle justify-center
            bg-dark-purple p-24 rounded-full w-80 mt-16
            dark:bg-ivory
            md:px-48
            lg:w-16 lg:bg-transparent lg:dark:bg-transparent lg:p-0 lg:mt-0 lg:py-16 lg:mx-0
            xl:py-8
            2xl:w-full
            '>
                <div 
                className={`${props.mode}
                flex align-middle justify-center items-center
                h-16 w-52 text-2xl
                rounded-2xl font-bold
                bg-ivory text:dark-purple
                dark:bg-dark-purple dark:text-ivory
                md:h-24 md:w-64 md:text-4xl
                lg:h-16 lg:w-48 lg:text-2xl
                xl:w-32 xl:text-xl xl:rounded-full
                2xl:h-20 2xl:w-40 2xl:text-2xl
                `}>
                    Planning
                </div>
                <ul 
                className={`${props.mode}
                flex flex-col align-middle justify-center items-center
                rounded-2xl mt-4
                h-48 w-52 text-xl
                bg-ivory text-dark-purple
                dark:bg-dark-purple dark:text-ivory
                md:h-64 md:w-64 md:text-3xl
                lg:h-52 lg:w-48 lg:text-xl
                xl:h-46 xl:w-32 xl:text-lg xl:rounded-3xl
                2xl:h-64 2xl:w-40 2xl:text-xl 2xl:leading-8 2xl:rounded-4xl
                `}>
                    <li>Trello</li>
                    <li>Figma</li>
                    <li>Photoshop</li>
                    <li>Pen & Paper</li>
                    <li>System Design</li>
                </ul>
            </div>
            <div 
            className='
            flex-1 flex flex-col align-middle justify-center items-center
            bg-dark-purple p-24 rounded-full w-80 mt-16
            dark:bg-ivory
            md:px-48
            lg:w-32 lg:bg-transparent lg:dark:bg-transparent lg:p-0 lg:mt-0 lg:py-16 lg:mx-0
            xl:py-8
            '>
                <div 
                className={`${props.mode}
                flex align-middle justify-center items-center
                h-16 w-52 text-2xl
                rounded-2xl font-bold
                bg-royal-purple text-ivory
                dark:bg-lavender dark:text-dark-purple
                md:h-24 md:w-64 md:text-4xl
                lg:h-16 lg:w-48 lg:text-2xl
                xl:w-32 xl:text-xl xl:rounded-full
                2xl:h-20 2xl:w-40 2xl:text-2xl
                `}>
                    Developing
                </div>
                <ul
                className={`${props.mode}
                flex flex-col align-middle justify-center items-center
                rounded-2xl mt-4
                h-48 w-52 text-xl
                bg-royal-purple text-ivory
                dark:bg-lavender dark:text-dark-purple
                md:h-64 md:w-64 md:text-3xl
                lg:h-52 lg:w-48 lg:text-xl
                xl:h-46 xl:w-32 xl:text-lg xl:rounded-3xl
                2xl:h-64 2xl:w-40 2xl:text-xl 2xl:leading-8 2xl:rounded-4xl
                `}>
                    <li>C++</li>
                    <li>Java</li>
                    <li>Python</li>
                    <li>TS/JS</li>
                    <li>React</li>
                    <li>SQL/NoSQL</li>
                </ul>
            </div>
            <div 
            className='
            flex-1 flex flex-col align-middle justify-center items-center
            bg-dark-purple p-20 rounded-full w-80 mt-16
            dark:bg-ivory
            md:px-48
            lg:w-32 lg:bg-transparent lg:dark:bg-transparent lg:p-0 lg:mt-0 lg:py-16 lg:mx-0
            xl:py-8
            '>
                <div 
                className={`${props.mode}
                flex align-middle justify-center items-center
                h-16 w-52 text-2xl
                rounded-2xl font-bold
                bg-ivory text:dark-purple
                dark:bg-dark-purple dark:text-ivory
                md:h-24 md:w-64 md:text-4xl
                lg:h-16 lg:w-48 lg:text-2xl
                xl:w-32 xl:text-xl xl:rounded-full
                2xl:h-20 2xl:w-40 2xl:text-2xl
                `}>
                    Execution
                </div>
                <ul 
                className={`${props.mode}
                flex flex-col align-middle justify-center items-center
                rounded-2xl mt-4
                h-48 w-52 text-xl
                bg-ivory text-dark-purple
                dark:bg-dark-purple dark:text-ivory
                md:h-64 md:w-64 md:text-3xl
                lg:h-52 lg:w-48 lg:text-xl
                xl:h-46 xl:w-32 xl:text-lg xl:rounded-3xl
                2xl:h-64 2xl:w-40 2xl:text-xl 2xl:leading-8 2xl:rounded-4xl
                `}>
                    <li>Git</li>
                    <li>Bash</li>
                    <li>SSH</li>
                    <li>AWS</li>
                    <li>Docker</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

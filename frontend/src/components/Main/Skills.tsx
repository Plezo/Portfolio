
export default function Skills(props: {mode: string}) {
  return (
    <div
    className={`${props.mode}
    bg-dark-purple 
    h-full w-full mr-36 py-8
    sm:rounded-2xl sm:mt-52
    dark:bg-ivory
    `}>
        <div 
        className='
        flex flex-col 
        sm:flex-row sm:p-8 gap-8
        '>
            <div className='flex-1 flex flex-col align-middle justify-center items-center'>
                <div 
                className={`${props.mode}
                flex align-middle justify-center items-center font-bold
                h-16 w-52
                rounded-2xl text-2xl
                bg-ivory text:dark-purple
                dark:bg-dark-purple dark:text-ivory
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
                `}>
                    <li>Trello</li>
                    <li>Figma</li>
                    <li>Photoshop</li>
                    <li>Pen & Paper</li>
                    <li>System Design</li>
                </ul>
            </div>
            <div className='flex-1 flex flex-col align-middle justify-center items-center'>
                <div 
                className={`${props.mode}
                flex align-middle justify-center items-center 
                h-16 w-52 text-2xl
                rounded-2xl font-bold
                bg-royal-purple text-ivory
                dark:bg-lavender dark:text-dark-purple
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
                `}>
                    <li>C++</li>
                    <li>Java</li>
                    <li>Python</li>
                    <li>TS/JS</li>
                    <li>React</li>
                    <li>SQL/NoSQL</li>
                </ul>
            </div>
                <div className='flex-1 flex flex-col align-middle justify-center items-center'>
                <div 
                className={`${props.mode}
                flex align-middle justify-center items-center
                h-16 w-52 text-2xl
                rounded-2xl font-bold
                bg-ivory text:dark-purple
                dark:bg-dark-purple dark:text-ivory
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

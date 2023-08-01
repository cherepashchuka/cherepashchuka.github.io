import React from 'react'

const Work = () => {
    return (
        <div id='work' className='w-full h-full bg-[#003049]'>
            <div className='max-w-[1040px] m-auto w-full h-full flex flex-col justify-left lg:items-start items-left md:pl-20 p-4 py-16 '>
                <h1 className='text-4xl font-bold text-left text-[#FDF0D5] py-8'>Work.</h1>
                <ol className='flex flex-col md:flex-row relative border-l border-[#669BBC]'>
                    <li className='mb-5 ml-4'>
                        <div className='absolute w-3 h-3 bg-[#669BBC] rounded-full mt-1.5 -left-1.5 border-white' />
                        <p className='flex flex-wrap gap-3 flex-row items-center justify-start text-xs md:text-sm'>
                            <span className='inline-block px-2 py-1 font-semibold text-white rounded-md bg-gradient-to-r to-[#C1121F] from-[#780000]'>2020</span>
                            <span className='text-lg font-extrabold text-[#C1121F]'>METRO Cash & Carry</span>
                            <span className='text-lg font-semibold text-[#C1121F]'>Senior RPA Developer</span>
                            <span className='my-1 text-sm font-normal leading-none text-[#669BBC]'>3 Years</span>
                        </p>
                        <p className='my-2 text-base font-semibold text-[#FDF0D5]'>Responsibilities:</p>
                        <p className='my-2 text-base font-normal text-[#FDF0D5]'>Gather and analyze business requirements for process automation projects using RPA technology.</p>
                        <p className='my-2 text-base font-normal text-[#FDF0D5]'>Development of algorithms for process automation on the UiPath platform in accordance with the requirements of business users, writing scripts in Python / C# and SQL queries if necessary.</p>
                        <p className='my-2 text-base font-normal text-[#FDF0D5]'>Consulting business-customers when forming the automation task.</p>
                        <p className='my-2 text-base font-normal text-[#FDF0D5]'>Support and monitoring of automated processes using RPA technology in a productive environment.</p>
                        <p className='my-2 text-base font-semibold text-[#FDF0D5]'>Results:</p>
                        <p className='my-2 text-base font-normal text-[#FDF0D5]'>Planned schedules for robots to operate under license constraints, ensuring all processes ran smoothly at the right time for the business.</p>
                        <p className='my-2 text-base font-normal text-[#FDF0D5]'>More than 623 incidents resolved in accordance with SLA (1 week) 98.88% and "Good" rating 98.97%.</p>
                    </li>
                </ol>
                <ol className='flex flex-col md:flex-row relative border-l border-[#669BBC]'>
                    <li className='mb-5 ml-4'>
                        <div className='absolute w-3 h-3 bg-[#669BBC] rounded-full mt-1.5 -left-1.5 border-white' />
                        <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
                            <span className='inline-block px-2 py-1 font-semibold text-white rounded-md bg-gradient-to-r to-[#C1121F] from-[#780000]'>2019</span>
                            <span className='text-lg font-extrabold text-[#C1121F]'>NFP</span>
                            <span className='text-lg font-semibold text-[#C1121F]'>RPA Developer</span>
                            <span className='my-1 text-sm font-normal leading-none text-[#669BBC]'>1 Year</span>
                        </p>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Work
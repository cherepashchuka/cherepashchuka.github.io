import React from 'react'
import WorkItem from './Workitem'

const Education = () => {
    return (
        <div id='education' className='w-full h-full bg-[#C1121F]'>
            <div className='max-w-[1040px] m-auto w-full h-full flex flex-col justify-left lg:items-start items-left md:pl-20 p-4 py-16 '>
                <h1 className='text-4xl font-bold text-left text-[#FDF0D5] py-8'>Education.</h1>
                        <p className='flex flex-wrap gap-3 flex-row items-center justify-start text-xs md:text-sm'>
                            <span className='inline-block px-2 py-1 font-semibold text-white rounded-md bg-gradient-to-r to-[#003049] from-[#669BBC]'>2023</span>
                            <span className='text-lg font-extrabold text-[#FDF0D5]'>Karpov.Courses</span>
                            <span className='text-lg font-semibold text-[#FDF0D5]'>Math for DS</span>
                        </p>
                        <p className='flex flex-wrap gap-3 flex-row items-center justify-start text-xs md:text-sm py-4'>
                            <span className='inline-block px-2 py-1 font-semibold text-white rounded-md bg-gradient-to-r to-[#003049] from-[#669BBC]'>2022</span>
                            <span className='text-lg font-extrabold text-[#FDF0D5]'>Karpov.Courses</span>
                            <span className='text-lg font-semibold text-[#FDF0D5]'>StartML</span>
                        </p>
                        <p className='flex flex-wrap gap-3 flex-row items-center justify-start text-xs md:text-sm'>
                            <span className='inline-block px-2 py-1 font-semibold text-white rounded-md bg-gradient-to-r to-[#003049] from-[#669BBC]'>2022</span>
                            <span className='text-lg font-extrabold text-[#FDF0D5]'>Stepik, Bioinformatics Institute</span>
                            <a href="https://stepik.org/cert/1492049"><span className='text-lg font-semibold text-[#FDF0D5]'>Python Programming</span></a>
                        </p>
                        
                        
            </div>
        </div>
    )
}

export default Education
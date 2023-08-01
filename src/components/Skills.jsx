import React from 'react'
import { DiTerminalBadge } from "react-icons/di";

const Skills = () => {
    return (
        <div id="skills" className='w-full h-full bg-[#780000]'>
            <div className='max-w-[1040px] m-auto w-full h-full flex flex-col justify-left lg:items-start items-left md:pl-20 p-4 py-16 '>
                <h1 className='text-4xl font-bold text-left text-[#FDF0D5] py-8'>Skills.</h1>
                
                
                <p className='flex flex-wrap gap-3 flex-row items-center justify-start text-xs md:text-sm'>
                    <DiTerminalBadge className='cursor-pointer fill-[#FDF0D5]' size={50}/>
                    <span className='text-lg font-extrabold text-[#FDF0D5]'>Python</span>
                    <span className='text-lg text-[#FDF0D5]'>numpy, scipy, sklearn, catboost, seaborn, matplotlib, pandas, pytorch, FastAPI</span>
                </p>
                <p className='flex flex-wrap gap-3 flex-row items-center justify-start text-xs md:text-sm'>
                    <DiTerminalBadge className='cursor-pointer fill-[#FDF0D5]' size={50}/>
                    <span className='text-lg font-extrabold text-[#FDF0D5]'>C#, SQL, HTML, CSS, XML</span>
                </p>
                <p className='flex flex-wrap gap-3 flex-row items-center justify-start text-xs md:text-sm'>
                    <DiTerminalBadge className='cursor-pointer fill-[#FDF0D5]' size={50}/>
                    <span className='text-lg font-extrabold text-[#FDF0D5]'>Postgres, MS SQL, Airflow</span>
                </p>
                <p className='flex flex-wrap gap-3 flex-row items-center justify-start text-xs md:text-sm'>
                    <DiTerminalBadge className='cursor-pointer fill-[#FDF0D5]' size={50}/>
                    <span className='text-lg font-extrabold text-[#FDF0D5]'>Git, Jira, Confluence</span>
                </p>
                <p className='flex flex-wrap gap-3 flex-row items-center justify-start text-xs md:text-sm'>
                    <DiTerminalBadge className='cursor-pointer fill-[#FDF0D5]' size={50}/>
                    <span className='text-lg font-extrabold text-[#FDF0D5]'>ML-algorithms</span>
                    <span className='text-lg text-[#FDF0D5]'>regression, classification, clustering</span>
                </p>
                <p className='flex flex-wrap gap-3 flex-row items-center justify-start text-xs md:text-sm'>
                    <DiTerminalBadge className='cursor-pointer fill-[#FDF0D5]' size={50}/>
                    <span className='text-lg font-extrabold text-[#FDF0D5]'>NLP & CV</span>
                    <span className='text-lg text-[#FDF0D5]'>classification, object detection, face recognition, text generation</span>
                </p>
                <p className='flex flex-wrap gap-3 flex-row items-center justify-start text-xs md:text-sm'>
                    <DiTerminalBadge className='cursor-pointer fill-[#FDF0D5]' size={50}/>
                    <span className='text-lg font-extrabold text-[#FDF0D5]'>Statistics, A/B testing</span>
                </p>
                <p className='flex flex-wrap gap-3 flex-row items-center justify-start text-xs md:text-sm'>
                    <DiTerminalBadge className='cursor-pointer fill-[#FDF0D5]' size={50}/>
                    <span className='text-lg font-extrabold text-[#FDF0D5]'>Data structures and algorithms</span>
                </p>
                <p className='flex flex-wrap gap-3 flex-row items-center justify-start text-xs md:text-sm'>
                    <DiTerminalBadge className='cursor-pointer fill-[#FDF0D5]' size={50}/>
                    <span className='text-lg font-extrabold text-[#FDF0D5]'>Agile, SCRUM</span>
                </p>
            </div>
        </div>
    )
}

export default Skills
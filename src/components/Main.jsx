import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaTelegramPlane, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { SiGmail } from "react-icons/si"
import { motion } from "framer-motion"

const Main = () => {
    return (
        <div id='main'>
            <div className='w-full h-screen object-cover bg-[#FDF0D5]' />
            <div className="w-full h-screen absolute top-0 left-0">
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-[#003049] hover:text-[#C1121F] '>Andrei</h1>
                    <h1 className='sm:text-5xl text-4xl font-bold text-[#C1121F] '>Cherepashchuk</h1>
                    <h2 className='flex sm:text-4xl text-2xl pt-4 text-[#003049]'>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Junior ML Engineer.',
                                1000,
                                'Junior Data Scientist.',
                                1000
                            ]}
                            wrapper="span"
                            speed={30}
                            style={{ fontSize: '1em', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </h2>
                    <div className='flex justify-between pt-6 max-w-[200px] w-full animatable' >
                        <motion.div whileHover={{ scale: [null, 1.5, 1.4] }} transition={{ duration: 0.3 }}><a href="https://t.me/chereav"><FaTelegramPlane className='cursor-pointer fill-[#003049] hover:fill-[#C1121F]' size={20} /></a></motion.div>
                        <motion.div whileHover={{ scale: [null, 1.5, 1.4] }} transition={{ duration: 0.3 }}><a href="https://linkedin.com/in/andrei-cherepashchuk"><FaLinkedinIn className='cursor-pointer fill-[#003049] hover:fill-[#C1121F]' size={20} /></a></motion.div>
                        <motion.div whileHover={{ scale: [null, 1.5, 1.4] }} transition={{ duration: 0.3 }}><a href="https://github.com/cherepashchuka"><FaGithub className='cursor-pointer fill-[#003049] hover:fill-[#C1121F]' size={20} /></a></motion.div>
                        <motion.div whileHover={{ scale: [null, 1.5, 1.4] }} transition={{ duration: 0.3 }}><a href="mailto:justwinkyy@gmail.com"><SiGmail className='cursor-pointer fill-[#003049] hover:fill-[#C1121F]' size={20} /></a></motion.div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main
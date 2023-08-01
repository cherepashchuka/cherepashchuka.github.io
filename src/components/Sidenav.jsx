import React, { useState } from 'react';
import { TiThMenu } from 'react-icons/ti'
import { motion, AnimatePresence, animate } from "framer-motion"

const variants = {
    exit: { opacity: 0, height: 0, transition: { ease: "circInOut", duration: 0.6, delay: .001 } }
}

const Sidenav = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav)
    };
    return (
        <div>
            <TiThMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] fill-[#003049] md:hidden' />
            <AnimatePresence>
                {
                    nav ? (
                        <motion.div className='fixed w-full h-screen bg-[#780000] flex flex-col justify-center items-center z-20' variants={variants} initial={{ height: "0", opacity: 0 }} animate={{ height: "100vh", opacity: 1 }} transition={{ ease: 'backInOut', duration: .9 }} exit="exit">
                            <motion.a initial={{ y: 90, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .4 }} exit={{ opacity: 0, y: 90, transition: { ease: 'circInOut', duration: .6 } }} onClick={handleNav} href="#main" className='w-[50%] flex justify-center items-center m-2 p-4 cursor-pointer hover:font-bold'>
                                <motion.span whileHover={{ scale: [null, 1.2, 1.1] }} transition={{ duration: 0.3 }} className='pl-2 text-xl text-[#FDF0D5] font-bold'>Home</motion.span>
                            </motion.a>
                            <motion.a initial={{ y: 90, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .4 }} exit={{ opacity: 0, y: 90, transition: { ease: 'circInOut', duration: .6 } }} onClick={handleNav} href="#skills" className='w-[50%] flex justify-center items-center m-2 p-4 cursor-pointer hover:font-bold'>
                                <motion.span whileHover={{ scale: [null, 1.2, 1.1] }} transition={{ duration: 0.3 }} className='pl-2 text-xl text-[#FDF0D5] font-bold'>Skills</motion.span>
                            </motion.a>
                            <motion.a initial={{ y: 90, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .4 }} exit={{ opacity: 0, y: 90, transition: { ease: 'circInOut', duration: .6 } }} onClick={handleNav} href="#projects" className='w-[50%] flex justify-center items-center m-2 p-4 cursor-pointer hover:font-bold'>
                                <motion.span whileHover={{ scale: [null, 1.2, 1.1] }} transition={{ duration: 0.3 }} className='pl-2 text-xl text-[#FDF0D5] font-bold'>Projects</motion.span>
                            </motion.a>
                            <motion.a initial={{ y: 90, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .4 }} exit={{ opacity: 0, y: 90, transition: { ease: 'circInOut', duration: .6 } }} onClick={handleNav} href="#work" className='w-[50%] flex justify-center items-center m-2 p-4 cursor-pointer hover:font-bold'>
                                <motion.span whileHover={{ scale: [null, 1.2, 1.1] }} transition={{ duration: 0.3 }} className='pl-2 text-xl text-[#FDF0D5] font-bold'>Work</motion.span>
                            </motion.a>

                            <motion.a initial={{ y: 90, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .4 }} exit={{ opacity: 0, y: 90, transition: { ease: 'circInOut', duration: .6 } }} onClick={handleNav} href="#education" className='w-[50%] flex justify-center items-center m-2 p-4 cursor-pointer hover:font-bold'>
                                <motion.span whileHover={{ scale: [null, 1.2, 1.1] }} transition={{ duration: 0.3 }} className='pl-2 text-xl text-[#FDF0D5] font-bold'>Education</motion.span>
                            </motion.a>

                        </motion.div>
                    )
                        : (
                            ""
                        )
                }
            </AnimatePresence>
            <div className='object-top md:block hidden fixed z-10'>
                <motion.div className='flex flex-row'>
                    <motion.a href="#main" whileHover={{ scale: [null, 1.2, 1.1] }} transition={{ duration: 0.3 }} className='m-2 p-4 cursor-pointer text-xl text-[#003049] font-bold'>Home</motion.a>
                    <motion.a href="#skills" whileHover={{ scale: [null, 1.2, 1.1] }} transition={{ duration: 0.3 }} className='m-2 p-4 cursor-pointer text-xl text-[#003049] font-bold'>Skills</motion.a>
                    <motion.a href="#projects" whileHover={{ scale: [null, 1.2, 1.1] }} transition={{ duration: 0.3 }} className='m-2 p-4 cursor-pointer text-xl text-[#003049] font-bold'>Projects</motion.a>
                    <motion.a href="#work" whileHover={{ scale: [null, 1.2, 1.1] }} transition={{ duration: 0.3 }} className='m-2 p-4 cursor-pointer text-xl text-[#003049] font-bold'>Work</motion.a>
                    <motion.a href="#education" whileHover={{ scale: [null, 1.2, 1.1] }} transition={{ duration: 0.3 }} className='m-2 p-4 cursor-pointer text-xl text-[#003049] font-bold'>Education</motion.a>
                </motion.div>
            </div>



        </div>
    )
}

export default Sidenav
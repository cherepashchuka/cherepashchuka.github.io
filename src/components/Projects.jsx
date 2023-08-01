import React from 'react'
import { motion } from "framer-motion"

const Projects = () => {
    return (
        <div id='projects' className=' w-full h-full bg-[#669BBC]'>
            <div className='max-w-[1040px] m-auto w-full h-full md:pl-20 p-4 py-16'>
                <h1 className='text-4xl font-bold text-left text-[#FDF0D5] py-8'>Projects.</h1>
                <div className='grid md:grid-cols-3 items-center text-center gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20'>
                <a href="https://github.com/cherepashchuka/project_weapon_detection"><motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: [null, 1.1, 1.0] }} transition={{ duration: 0.3 }} className='py-8 hover:bg-[#81AEC9] hover:rounded-xl text-[#FDF0D5]'>
                        <p className='font-bold text-3xl my-6'>Weapon Detection</p>
                        <p className='py-8'>YOLOv8 OpenCV</p>
                
                    </motion.div>
                    </a>
                    <a href="https://github.com/cherepashchuka/project_kc_recsys"><motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: [null, 1.1, 1.0] }} transition={{ duration: 0.3 }} className='py-8 hover:bg-[#81AEC9] hover:rounded-xl text-[#FDF0D5]'>
                        <p className='font-bold text-3xl my-6'>Recommendation System</p>
                        <p className='py-8'>pandas sklearn catboost pytorch FastAPI pydantic Docker</p>
                    </motion.div>
                    </a>
                    <a href="https://github.com/cherepashchuka/project_calories_burnt"><motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: [null, 1.1, 1.0] }} transition={{ duration: 0.3 }} className='py-8 hover:bg-[#81AEC9] hover:rounded-xl text-[#FDF0D5]'>
                        <p className='font-bold text-3xl my-6'>Calories Burnt Prediction</p>
                        <p className='py-8'>pandas sklearn catboost lightgbm optuna numpy</p>
                    </motion.div>
                    </a>

                </div>

            </div>
        </div>
    )
}

export default Projects
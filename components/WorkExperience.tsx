import React from 'react'
import { motion } from "framer-motion";
import ExperienceCard from './ExperienceCard';

type Props = {}

function WorkExperience({}: Props) {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition= {{duration: 1.5}}
    className='relative flex flex-col items-center h-screen max-w-full px-10 mx-auto overflow-hidden text-left md:flex-row justify-evenly'>
        <h3 className='absolute uppercase top-24 tracking-[20px] text-blue-300 text-2xl'> Experience</h3>
        
        <div className='flex w-full p-10 space-x-5 overflow-x-scroll snap-mandatory '>
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
        </div>
    
    </motion.div>
  )
}

export default WorkExperience
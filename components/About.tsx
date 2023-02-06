import React from 'react'
import { motion } from "framer-motion"
import pic3 from "../Images/pic3.png"
import Image from 'next/image'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
    className='relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly'> 
        <h3 className='absolute uppercase top-24, tracking-[20px] text-black text-4xl'>
            About 
        </h3>
        
        <motion.div  initial={{
            x: -200,
            opacity: 0,
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{ opacity: 1 , x:0}}
        viewport={{once: true}}
        className= "flex-shrink-0 object-cover w-56 h-56 -mb-20 rounded-full md:mb-0 md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[320px] "
        > 
         <Image src={pic3} alt="about image"/>
    </motion.div>
    
        <div className='px-0 space-y-10 md:px-10'>
            <h4 className='text-4xl font-semibold'> <span className='underline decoration-[#68aeeb]'>Here is a little background; </span></h4>
            <p className='text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
    </motion.div>
  )
}






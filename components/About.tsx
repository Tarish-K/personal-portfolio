import React from 'react'
import { motion } from "framer-motion"
import pic2 from "../Images/pic2.png"

type Props = {}

export default function About({}: Props) {
  return (
    <div className='relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly'>
        <h3 className='absolute uppercase top-24 tracking-[20px] text-blue-300 text-2xl'>
            About 
        </h3>
        
        <motion.img 
        initial={{
            x: -200,
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{ x: 0 }}
        viewport={{once: true}}
        src=""/>
        </div>
  )
}

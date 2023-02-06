import React from 'react'
import { motion } from "framer-motion";
import pic3 from "../Images/pic3.png";
import Image from 'next/image';
import pic4 from "../images/pic4.png";

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
   <article className='flex flex-col items-center flex-shrink-0 rounded-lg space-y-7 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
    <motion.div
    initial={{y: -100, opacity: 0,}}
    transition={{duration: 1.2 }}
    whileInView={{opacity: 1, y:0}}
    viewport={{once: true}}
    className= "w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center">
    <Image src={pic3} alt="experience image"/>
       
    </motion.div>

    <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>CEO PAPAFAM</h4>
        <p className='mt-1 text-2xl font-bold'>PAPAFAM</p>
        <div className='flex my-2 space-x-2'>
            <Image className='w-10 h-10 rounded-full' src={pic4} alt="" />
            <Image className='w-10 h-10 rounded-full' src={pic4} alt="" />
            <Image className='w-10 h-10 rounded-full' src={pic4} alt="" />

        </div>
        <p className='py-5 text-blue-300 uppercase'>Started work... - Ended...</p>

        <ul className='ml-5 space-y-4 text-lg list-disc'>
            <li>Summary PointsSummary PointsSummary PointsSummary PointsSummary</li>
            <li>Summary PointsSummary PointsSummary PointsSummary </li>
            <li>Summary PointsSummary PointsSummary PointsSummary PointsSummary s</li>
            <li>Summary PointsSummary PointsSummary PointsSummary PointsSummary PointsSummary PointsSummary PointsSummary PointsSummary PointsSummary PointsSummary PointsSummary Points</li>
            <li>Summary PointsSummary PointsSummary PointsSummary PointsSummary PointsSummary PointsSummary PointsSummary PointsSummary PointsSummary PointsSummary</li>
        </ul>
    </div>

   </article>
  )
}


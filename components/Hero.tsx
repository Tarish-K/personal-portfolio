import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import pic from "../Images/pic.png"
import Link from 'next/link'

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words:["Hi, The Name's Tarish Kumar",
        "Developer-Designer-Creator",
         "<But More of a Coder!!/>"
        ],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div className='flex flex-col items-center justify-center h-screen space-y-8 overflow-hidden text-center'>
        <BackgroundCircles />
        <Image className='relative object-cover w-32 h-32 mx-auto rounded-full ' src={pic} alt={'Tarish Kumar'}/>
        <div className='z-20'>
            <h2 className='pb-2 text-sm text-blue-300 uppercase tracking-[15px]'>Software Engineer</h2>
        <h1 className='px-10 text-5xl font-semibold lg:text-5xl'>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor='#F7AB0A' />
        </h1> 
        <div className='pt-5'>
            <Link href='#about'>
            <button className='heroButton'>About</button>
            </Link>
            <Link href='#experience'>
            <button className='heroButton'>Experience</button>
            </Link>
            <Link href='#skills'>
            <button className='heroButton'>Skills</button>
            </Link>
            <Link href='#projects'>
            <button className='heroButton'>Projects</button>
            </Link>

        </div>
        </div>
        
    </div>
  )
}


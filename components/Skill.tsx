import React from 'react'
import { motion } from"framer-motion";

type Props = {
  directionLeft?: boolean;
}

export default function Skill({directionLeft}: Props) {
  return (
    <div className='relative flex cursor-pointer group'>
      <motion.div
      initial = {{
        x: directionLeft ?  -200 : 200,
        opacity: 0,
         }}
         transition = {{ duration: 1}}
         whileInView = {{opacity: 1, x: 0}}  >
          <img src="" alt="" />
          
        skill
        </motion.div>
      </div>
  )
}


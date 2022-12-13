import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 5 }} 
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10
    justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase font-poppins text-gray-500 text-2xl">
        Stack of all Trades
      </h3>
      <p className="font-helvetica-light text-[30px] uppercase font-light tracking-[0.3em]">
        Under Construction
      </p>
      
    </motion.div>

    
  )
}

export default Skills
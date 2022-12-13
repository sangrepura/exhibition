import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }} 
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10
    justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          Stack of All Trades
      </h3>
      
    </motion.div>

    
  )
}

export default Skills
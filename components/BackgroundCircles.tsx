import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div 
        initial={{
            opacity: 0,
        }}
        animate={{
            scale: [1, 1.2],
            opacity: [0.9, 1, 0.8, 0.5],
        }}
        transition={{
            duration: 2,
            ease: "easeInOut"
        }}
        className="relative flex justify-center items-center"
    >
        <div className="absolute border border-slate-200 rounded-full h-[250px] w-[250px] mt-80 animate-pulse"/>
        <div className="absolute border border-gray-300 rounded-full h-[300px] w-[300px] mt-80 animate-pulse"/>
        <div className="absolute border border-gray-300 rounded-full h-[500px] w-[500px] mt-80 animate-pulse"/>
        <div className="absolute border-2 border-orange-400 rounded-full h-[650px] w-[650px] mt-80 opacity-20 animate-pulse"/>
        <div className="absolute border border-gray-200 rounded-full h-[700px] w-[700px] mt-80"/>
    </motion.div>
  )
}

export default BackgroundCircles
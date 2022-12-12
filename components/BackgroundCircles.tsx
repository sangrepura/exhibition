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
            opacity: [0.9, 1, 0.8, 0.45],
        }}
        transition={{
            duration: 2,
            ease: "easeInOut"
        }}
        className="relative flex justify-center items-center"
    >
        <div className="absolute border-[12px] border-slate-200 rounded-full h-[300px] w-[300px] mt-80 animate-pulse"/>
        <div className="absolute border-2 border-slate-200 rounded-full h-[350px] w-[350px] mt-80 animate-pulse"/>
        <div className="absolute border-2 border-gray-300 rounded-full h-[400px] w-[400px] mt-80 animate-pulse"/>
        <div className="absolute border-4 border-gray-300 rounded-full h-[500px] w-[500px] mt-80 animate-pulse"/>
        <div className="absolute border-[3px] border-orange-400 rounded-full h-[650px] w-[650px] mt-80 opacity-20 animate-pulse"/>
        <div className="absolute border-4 border-slate-300 rounded-full h-[700px] w-[700px] mt-80 animate-pulse"/>
    </motion.div>
  )
}

export default BackgroundCircles
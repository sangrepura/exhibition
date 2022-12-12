import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 5 }} 
      className="h-[2000px] flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10
    justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0
        }}
        whileInView={{
          x: 0,
          opacity: 1
        }}
        transition={{
          duration: 1.2
        }}
        viewport={{
          once: true
        }}
        src="/sean_hero.png"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover 
        md:rounded-lg md:w-64 md:h-64 xl:w-[300px] xl:h-[300px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">Lorem ipsum dolor sit amet</h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui praesentium delectus labore voluptatem quod repudiandae in laudantium quaerat ducimus odit magni reiciendis ab numquam, soluta sed quo voluptatibus aperiam doloremque!
        </p>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui praesentium delectus labore voluptatem quod repudiandae in laudantium quaerat ducimus odit magni reiciendis ab numquam, soluta sed quo voluptatibus aperiam doloremque!
        </p>
      </div>
    </motion.div>

    
  )
}

export default About
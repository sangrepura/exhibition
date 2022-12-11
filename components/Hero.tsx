import Image from 'next/image'
import React from 'react'
import BackgroundCircles from './BackgroundCircles'
import { motion } from 'framer-motion'

type Props = {}

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0
  },
  visible: { 
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      delay: 0.1,
      ease: [.59,.07,.32,.93]
    }
  },
}

const Hero = (props: Props) => {
  return (
    <div className="relative -mt-20 h-screen flex flex-col space-y-8 items-center justify-center overflow-y-hidden overflow-x-hidden">
      <BackgroundCircles />
      <div className="relative mx-auto 
        w-[90%]
        xl:pt-[3rem] xl:w-[65rem] xl:h-1/3 xl:pl-0
        lg:pt-[10rem] lg:w-[55rem] lg:pl-3
        md:pt-[8rem] md:w-[42rem] md:pl-8
        sm:pt-[15rem] sm:pl-20
      ">
        <img 
          src="/sean_hero.png" alt="Sean Image" 
          className="z-20 absolute mx-auto rounded-[10px] object-cover
          w-[30px] h-[30px] right-[1rem] -top-32
          xl:w-[330px] xl:h-[460px] xl:-top-32 xl:right-[1rem]
          lg:w-[280px] lg:h-[320px] lg:top-[-4rem] lg:right-[5rem] 
          md:w-[250px] md:h-[270px] md:top-[-4rem] md:right-[3rem] 
          sm:w-[250px] sm:h-[270px] sm:top-[-2rem] sm:right-[6rem] 
        "/>
        
        <div 
          className="z-10 absolute bg-[#d7dadf] mx-auto rounded-[10px] object-cover
          w-[490px] h-[510px]  
          right-[-1rem] top-[-9.5rem] 
          xl:right-[-1rem] xl:top-[-9.5rem] xl:w-[490px] xl:h-[510px]
          lg:right-[3rem] lg:top-[-6rem] lg:w-[440px] lg:h-[610px]  
          md:right-[1rem] md:top-[-6rem] md:w-[370px] md:h-[530px]  
          sm:right-[4rem] sm:top-[-6rem] sm:w-[370px] sm:h-[630px]  
        "/>

        <motion.div 
          initial={{
            opacity: 0,
            x: -100
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
              duration: 1.2,
              ease: [.27, .61, .25, .95]
          }}
          className="relative z-30 overflow-x-hidden">
          <h3 
            className="font-poppins font-light tracking-widest 
            leading-[50px] 
            sm:text-xl md:text-2xl sm:leading-[30px] md:leading-[40px]
            lg:text-4xl lg:leading-[50px]
          ">
            I enjoy using 
            <span className="relative">
              &nbsp;creativity
              <svg 
                className="absolute left-2 -bottom-2" 
                viewBox="0 0 229 14" fill="none" xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path 
                  d="M2.5 6.57262C85.5 -9 177 22 227 6.57262" 
                  stroke="#D8B26E" strokeWidth="4" strokeLinecap="round"
                  variants={pathVariants}
                  initial="hidden"
                  animate="visible"
                />
              </svg>
            </span>
          </h3>
          <h3 
            className="font-poppins font-light tracking-widest 
            leading-[50px] 
            sm:text-xl md:text-2xl sm:leading-[30px] md:leading-[40px]
            lg:text-4xl lg:leading-[50px]
          ">
            to solve problems.
          </h3>
          <div className="mt-1 overflow-y-hidden sm:h-[3.4rem] md:h-[4.2rem] lg:h-[5.1rem]">
            <motion.h1 
              className="font-poppins font-semibold -tracking-tight
              text-xl sm:text-5xl md:text-6xl lg:text-7xl
              "
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                  duration: 1,
                  ease: "easeInOut"
              }}
            >
              Sean Collan Fong
            </motion.h1>
          </div>
          
          <svg 
            className="mr-8 ml-1 
            block
            md:mb-5 md:inline-block" 
            width="162" height="4" viewBox="0 0 162 4" fill="none" xmlns="http://www.w3.org/2000/svg
          ">
            <motion.path 
              d="M161.507 2L-4.82798e-05 2" 
              stroke="#5F7782" strokeWidth="3"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
          </svg>
          <h2 
            className="mt-1 inline-block uppercase font-poppins font-normal text-deep-sea tracking-[0.2rem]
            sm:text-[26px] md:text-[30px] lg:text-[40px] 
          ">
            Software Engineer
          </h2>
        </motion.div> 
      </div>
      

        
    </div>
  )
}

export default Hero
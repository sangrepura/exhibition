import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const About = (props: Props) => {
  return (
    // Page section container div
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }} 
      className="min-h-screen max-w-9xl relative flex flex-col px-10 pb-8
      justify-evenly mx-auto items-center 
      lg:flex-row-reverse lg:justify-center
      ">
      {/* Image div */}
      <div 
        className="relative self-start mt-20 mb-6 sm:-mb-10 
        xl:ml-10
        lg:ml-5 lg:mt-[-1rem]
        md:self-center md:ml-[20rem] 
      ">
        <motion.img 
          src="about_img.png" alt="About Image"
          className="max-h-[50vh] object-cover rounded-[20px] shadow-about
          xl:w-[320px] xl:h-[320px]
          lg:w-[300px] lg:h-[300px]
          md:w-[30vw] md:h-[30vw]
          sm:w-[40vw] sm:h-[40vw]
          w-[55vw] h-[55vw] 
        ">
        </motion.img>
      </div>
      {/* Text container div */}
      <div 
        className="z-10 min-h-[70%] relative pt-7
        xl:w-[53rem]
        lg:w-[44rem]
        md:w-[80%] 
        w-[100%]
      ">
        {/* Header div */}
        <div className="absolute pl-2 pr-32 rounded-b-[20px]
        lg:left-[4rem] 
        md:w-0
        sm:w-[40vw] sm:top-[-4rem]
        h-[50px] w-[55vw] top-[-4rem]
        ">
          <h3 
            className="uppercase w-[100%] font-poppins tracking-[0.1em] leading-[100px] text-center
            sm:text-[60px]
            text-[50px]
          ">
              Hello,
          </h3>
        </div>

        {/* Paragraphs */}
        <div className="pl-5 text-right font-poppins font-light
          xl:pl-[7rem]
          lg:text-[26px] lg:leading-[36px] lg:pl-[7rem] 
          sm:text-2xl
          text-xl
        ">
          <p>
            I am an undergraduate Computer Science student at&nbsp;
            <span className="font-bold text-sunset">University of California, Irvine</span>. 
            I strive to push the limits for creating innovative 
            and practical applications for everyone to use.
          </p>
          <br />
          <p>
            I spend my free time playing <span className="font-bold text-deep-sea">piano</span>, 
            experimenting with <span className="font-bold text-deep-sea">photography</span>, 
            building <span className="font-bold text-deep-sea">mechanical keyboards</span>, 
            and most importantly, socializing with all of <span className="font-bold text-deep-sea">my friends</span>!
          </p>
        </div>
      </div>
      
      
    </motion.div>

    
  )
}

export default About
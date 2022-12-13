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
      className="min-h-[100vh] max-w-7xl relative flex flex-col px-6 pb-8
      justify-evenly mx-auto items-center 
      md:text-left md:flex-row-reverse
      ">
      {/* Image div */}
      <div className="relative self-start mt-20 mb-6">
        <motion.img 
          src="about_img.png" alt="About Image"
          className="max-h-[50vh] object-cover rounded-[20px]
          sm:w-[50vw] sm:h-[50vw]
          w-[60vw] h-[60vw] 
        ">
        </motion.img>
      </div>
      {/* Text container div */}
      <div className="z-10 w-[100%] h-[70%] relative pt-7">
        {/* Header div */}
        <div className="absolute pl-2 pr-32 rounded-b-[20px] bg-[#eeeeee] bg-opacity-50 shadow-about
        sm:w-[50vw] sm:top-[-5rem]
        h-[50px] w-[60vw] top-[-4rem]
        ">
          <h3 
            className="uppercase w-[100%] font-poppins tracking-[0.1em] leading-[100px] text-[60px] text-center
            
          ">
              Hello,
          </h3>
        </div>

        {/* Paragraphs */}
        <div className="pl-5 text-right font-helvetica-light text-[26px] leading-[36px] font-normal">
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
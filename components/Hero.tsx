import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import BackgroundCircles from './BackgroundCircles'
import { useAnimation, motion, useInView } from 'framer-motion'
import useWindowSize from './hooks/useWindowSize'

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
      ease: [.59,.07,.32,.93]
    }
  },
}

const Hero = (props: Props) => {
  const plateAnimation = useAnimation();
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, {once: true});

  const windowSize = useWindowSize();

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!e) { return };
    
    const { clientX, clientY } = e;
    const moveX = clientX - window.innerWidth / 2;
    const moveY = clientY - window.innerHeight / 2;
    // const imgOffset = 0.006;
    const plateOffset = -0.01;
    // imgAnimation.start({
    //   x: moveX * imgOffset,
    //   y: moveY * imgOffset,
    // })
    plateAnimation.start({
      x: moveX * plateOffset,
      y: moveY * plateOffset
    })

  };

  return (
    <div 
      className="relative h-screen flex flex-col items-center justify-center 
      overflow-y-hidden overflow-x-hidden animate-circleload bg-[#eeeeee] 
      svgBackground z-0"
      ref={sectionRef}
      onMouseMove={e => handleMouseMove(e)}
    >
      <BackgroundCircles inView={sectionInView}/>
      <div className="relative mx-auto 
        xl:pt-[3rem] xl:w-[65rem] xl:h-1/3 xl:pl-0
        lg:pt-[10rem] lg:w-[55rem] lg:pl-3
        md:pt-[8rem] md:w-[42rem] md:pl-8
        sm:pt-[15rem] sm:pl-20 sm:w-[90%]
        w-[80%] pt-[15rem]
      ">
        <div
          className="z-20 absolute mx-auto rounded-[10px] overflow-hidden
          xl:w-[330px] xl:h-[460px] xl:-top-32 xl:right-[1rem]
          lg:w-[280px] lg:h-[320px] lg:top-[-4rem] lg:right-[5rem] 
          md:w-[250px] md:h-[270px] md:top-[-4rem] md:right-[3rem] 
          sm:w-[260px] sm:h-[300px] sm:top-[-4rem] sm:right-[6rem] 
          w-[240px] h-[320px] right-[2rem] -top-[6rem]
        ">
          <Image priority src="/images/sean_hero.png" alt="Sean Image" width={330} height={460}
          className="absolute sm:-top-5 md:-top-7 lg:-top-10 xl:top-0" 
          />
        </div>
        
        <motion.div 
          animate={plateAnimation}
          className="z-10 absolute bg-[#d7dadf] mx-auto rounded-[10px] bg-opacity-60
          xl:right-[-1rem] xl:top-[-9.5rem] xl:w-[490px] xl:h-[510px]
          lg:right-[3rem] lg:top-[-6rem] lg:w-[440px] lg:h-[610px]  
          md:right-[1rem] md:top-[-6rem] md:w-[370px] md:h-[530px]  
          sm:right-[4rem] sm:top-[-6rem] sm:w-[370px] sm:h-[620px]  
          w-[250px] h-[560px] right-[4rem] top-[-2rem] 
        "/>

        <div 
          // initial={{
          //   opacity: 0,
          //   x: -100
          // }}
          // animate={{
          //   opacity: 1,
          //   x: 0
          // }}
          // transition={{
          //   duration: 1.2,
          //   ease: [.27, .61, .25, .95]
          // }}
          className={"relative z-30 overflow-x-hidden transition-all duration-[1800ms] ease-[cubic-bezier(.27,.61,.25,.95)] " 
            + (sectionInView ? "" : "opacity-0 translate-x-[-100px]")}
          >
          <h3 
            className="font-poppins font-light tracking-widest 
            leading-[30px] text-xl
            sm:text-xl md:text-2xl sm:leading-[30px] md:leading-[40px]
            lg:text-4xl lg:leading-[50px] text-gray-500
          ">
            I enjoy using 
            <span className="relative">
              &nbsp;creativity
              <div 
                className="absolute left-1 -bottom-2"
              >
                <svg 
                  className="h-[14px] w-[120px]
                  lg:w-[220px] md:w-[140px] sm:w-[120px]" 
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
              </div>
            </span>
          </h3>
          <h3 
            className="font-poppins font-light tracking-widest 
            leading-[30px] text-xl
            sm:text-xl md:text-2xl sm:leading-[30px] md:leading-[40px]
            lg:text-4xl lg:leading-[50px] text-gray-500
          ">
            to solve problems.
          </h3>
          <div className="mt-1 sm:overflow-y-hidden h-max-[5rem] sm:h-[3.4rem] md:h-[4.2rem] lg:h-[5.1rem]">
            <h1 
              className={`font-poppins font-semibold -tracking-tight text-gray-600 \
              text-[40px] sm:text-5xl md:text-6xl lg:text-7xl leading-[40px] sm:leading-1 transition duration-[1500ms] ease-[cubic-bezier(.27,.61,.25,.95)] \
              ` + (sectionInView ? "" : "opacity-30 translate-y-[50px]")}
            >
              { ((windowSize.width ?? 0) > 500) && (<>Sean Collan Fong</>)}
              { ((windowSize.width ?? 0) <= 500) && (<>Sean C Fong</>)}
            </h1>
          </div>
          <svg 
            className="mr-3 ml-1 
            inline-block 
            w-[10vw] h-[4px]
            sm:w-[90px] sm:h-[4px] sm:mb-2 sm:mr-6
            md:w-[162px] md:h-[4px] md:mb-3
            lg:mb-5" 
            viewBox="0 0 162 4" fill="none" xmlns="http://www.w3.org/2000/svg
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
            className="mt-1 inline-block uppercase font-poppins font-normal text-deep-sea tracking-[0.15rem]
            sm:mt-0 text-[5vw] sm:text-[26px] md:text-[30px] lg:text-[40px] 
          ">
            Software Developer
          </h2>
        </div> 
      </div>        
    </div>
  )
}

export default Hero
import React, { useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import Image from 'next/image'

type Props = {}

const About = (props: Props) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true })

  const panelAnimation = useAnimation();
  const imgAnimation = useAnimation();

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!e) {return};

    const { clientX, clientY } = e;
    const moveX = clientX - window.innerWidth / 2;
    const moveY = clientY - window.innerHeight / 2;
    const imgOffset = -0.01;
    const panelOffset = 0.01;
    imgAnimation.start({
      x: moveX * imgOffset,
      y: moveY * imgOffset,
    })
    panelAnimation.start({
      x: moveX * panelOffset,
      y: moveY * panelOffset,
    })
  };

  return (
    // Page section container div
    <div
      onMouseMove={e => handleMouseMove(e)}
      className="min-h-[100vh] max-w-[150rem] relative flex flex-col px-10
      justify-evenly mx-auto items-center 
      lg:flex-row-reverse lg:justify-center
      ">
      
      {/* Image div */}
      <div 
        className="relative self-start mt-20 mb-6 sm:-mb-10 
        xl:w-[320px] xl:h-[320px] xl:ml-10
        lg:w-[300px] lg:h-[300px] lg:ml-5 lg:mt-[-1rem]
        md:w-[30vw] md:h-[30vw] md:self-center md:ml-[20rem] 
        sm:w-[40vw] sm:h-[40vw]
        w-[55vw] h-[55vw] 
      ">
        <motion.div 
          animate={imgAnimation}
          className="z-10 absolute -bottom-8 sm:bottom-0 left-0 max-h-[50vh] overflow-hidden rounded-[20px] shadow-about
          xl:w-[320px] xl:h-[320px]
          lg:w-[300px] lg:h-[300px]
          md:w-[30vw] md:h-[30vw]
          sm:w-[40vw] sm:h-[40vw]
          w-[50vw] h-[50vw] opacity-90
        ">
          <Image priority src="/images/about_img.png" alt="About Image" width={400} height={400}/>
        </motion.div>
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
            className={"uppercase w-[100%] font-poppins tracking-[0.07em] leading-[100px] text-center " +
            "sm:text-[60px] " +
            "text-[50px] transition duration-[1200ms] ease-in-out delay-200 " + 
            ((!isInView) ? ("-translate-x-20 opacity-0") : ("opacity-100 translate-x-0"))
          }>
              Hello,
          </h3>
        </div>

        {/* Paragraphs */}
        <div className="pl-5 text-right font-poppins font-light
          xl:pl-[7rem]
          lg:text-[26px] lg:leading-[36px] lg:pl-[7rem] 
          sm:text-2xl
          text-lg
        ">
          <p className={"transition duration-1000 " + ((!isInView) ? ("translate-y-20 opacity-0") : ("opacity-100 translate-y-0"))}>
            I am an undergraduate Computer Science student at&nbsp;
            <span className="font-bold text-sunset">
              University of California, Irvine
            </span>. 
            I strive to push past the limits of creating innovative 
            and practical applications for everyone to use.
          </p>
          <br />
          <p className={"transition duration-1000 delay-100 " + ((!isInView) ? ("translate-y-20 opacity-0") : ("opacity-100 translate-y-0"))}>
            I spend my free time playing <span className="font-bold text-deep-sea">piano</span>, 
            experimenting with <span className="font-bold text-deep-sea">photography</span>, 
            building <span className="font-bold text-deep-sea">mechanical keyboards</span>, 
            and most importantly, socializing with all of <span className="font-bold text-deep-sea">my friends</span>!
          </p>
        </div>
      </div>

      <motion.div 
        ref={sectionRef}
        animate={panelAnimation}
        className="absolute bg-gradient-to-r from-[rgba(215,218,223,0.5)] to-[rgba(220,220,230,0.15)] 
        xl:w-[55rem] xl:ml-[5rem]
        lg:w-[45rem] lg:h-[34rem] lg:mt-[-1rem] lg:ml-[5rem]
        md:w-[30rem] 
        sm:w-[25rem] sm:h-[40rem]
        w-[65%] h-[75vh] mt-[12rem]
        rounded-[20px] overflow-hidden
      ">
        <div 
          className={"transition duration-[1500ms] ease-in-out absolute border-[8px] border-slate-400 " +
          "rounded-full h-[500px] w-[500px] " +
          "lg:right-[-20%] lg:top-[5%] md:right-[-20%] md:top-[5%] right-[10%] top-[10%] " +
          ((isInView) ? ("translate-x-0 translate-y-0 opacity-20") : ("translate-x-32 translate-y-6 opacity-40"))
        }/>
        <div
          className={"transition duration-[1800ms] ease-in-out absolute border-[3px] border-orange-300 "+
          "rounded-full h-[450px] w-[450px] " +
          "lg:right-[-17%] lg:top-[10%] md:right-[-15%] md:top-[9%] right-[16%] top-[14%] " +
          ((isInView) ? ("translate-x-0 translate-y-0 opacity-30") : ("translate-x-32 translate-y-6 opacity-40"))
        }/>

      </motion.div>
      
      
    </div>

    
  )
}

export default About
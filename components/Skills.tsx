import React, { useRef, useState } from 'react'
import { LayoutGroup, motion, useAnimation, useInView } from 'framer-motion'
import Frontend from './SkillCards/Frontend'
import Talents from './SkillCards/Talents'
import Experience from './SkillCards/Experience'
import Backend from './SkillCards/Backend'

type Props = {}

const Skills = (props: Props) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.6 })
  const [openCard, setOpenCard] = useState(0);

  const panelAnimation = useAnimation();

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!e) {return};

    const { clientX, clientY } = e;
    const moveX = clientX - window.innerWidth / 2;
    const moveY = clientY - window.innerHeight / 2;
    const panelOffset = 0.01;
    panelAnimation.start({
      x: moveX * panelOffset,
      y: moveY * panelOffset,
    })
  };

  const handleCardClick = (cardNumber: number) => {
    // if number is same as open card, then close all cards (card 0 is open)
    if (cardNumber == openCard) {
      setOpenCard(0);
    } else {
      setOpenCard(cardNumber);
    }
  } 

  return (
      <div
        onMouseMove={e => handleMouseMove(e)}
        className="min-h-[100vh] max-w-9xl relative flex flex-col px-10
        justify-center items-center 
        lg:flex-row-reverse
      ">
        {/* Text section */}
        <div 
          className="text-right relative
          lg:w-[20rem] lg:mt-0 lg:h-[15rem]
          md:w-[30rem] 
          sm:w-[25rem] sm:h-[20rem]
          w-[75%] h-[20vh]
          self-center flex flex-col justify-end
        ">
          <div className="relative w-full h-1/2">
            <h3 
              className={"absolute w-[100vw] tracking-[0.05em] uppercase font-poppins font-normal transition duration-[1000ms] ease-in-out " +
              "text-[43px] leading-[50px] sm:text-[60px] sm:leading-[65px] " +
              "right-[-3rem] bottom-[0rem] " +
              ((!isInView) ? ("opacity-0 -translate-x-20 ") : ("opacity-100 translate-x-0 ")) +
              ((openCard) ? ("lg:opacity-50 opacity-20") : (""))
            }>
              Stack of<br /> all Trades
            </h3>
          </div>
          
          <p 
            className={"font-poppins font-light transition delay-100 duration-[1000ms] ease-in-out mt-2 " +
            "lg:text-[26px] lg:leading-[36px] lg:text-left lg:mt-8 " +
            "sm:text-2xl " +
            "text-lg " + 
            ((!isInView) ? ("opacity-0 -translate-x-20 ") : ("opacity-100 translate-x-0 ")) +
            ((openCard) ? ("lg:opacity-50 opacity-20") : (""))
          }>
            Onions have layers. <br />
            Coders ought to have layers, too. <br />
            <span className="text-sm lg:text-[18px] italic">Shrek said it first.</span> <br /><br />
          </p>
        </div>

        {/* Display section */}
        <div 
          className="relative flex flex-col h-[22rem] mt-0 self-start md:self-center
          w-[70vw] md:w-[35rem] lg:w-[30rem] lg:mr-8 xl:w-[40rem]
          ">
          <div
            className={"absolute left-0 bottom-0 w-full select-none transition ease-in-out duration-[1200ms] "  +
            ((!isInView) ? ("opacity-0 translate-x-[5rem] ") : ("opacity-100 translate-x-0 "))
            }>     
            <LayoutGroup> 
              <motion.div onClick={() => handleCardClick(1)} className="w-full skillCardContainer">
                <Frontend isOpen={openCard}/>
              </motion.div>
              
              <motion.div onClick={() => handleCardClick(2)} className="w-full skillCardContainer">
                <Talents isOpen={openCard}/>
              </motion.div>

              <motion.div onClick={() => handleCardClick(3)} className="w-full skillCardContainer">
                <Experience isOpen={openCard}/>
              </motion.div>

              <motion.div onClick={() => handleCardClick(4)} className="w-full skillCardContainer">
                <Backend isOpen={openCard}/>
              </motion.div>
            </LayoutGroup>
          </div>
          
        </div>

      {/* Background plate */}
      <motion.div
        ref={sectionRef}
        animate={panelAnimation}
        className="-z-10 absolute bg-gradient-to-l from-[rgba(215,218,223,0.5)] to-[rgba(220,220,230,0.15)]
        xl:w-[55rem]
        lg:w-[45rem] lg:h-[34rem] 
        md:w-[30rem] md:ml-5
        sm:w-[25rem] sm:h-[40rem]
        w-[65%] h-[75vh] mr-[-1rem]
        rounded-[20px] overflow-hidden
          ">
          {/* Plate circles */}
          <div 
            className={"transition duration-[1800ms] ease-in-out absolute border-[8px] border-slate-400 rounded-full h-[300px] w-[300px] " +
            "left-[-20%] bottom-[10%] lg:left-[10%] lg:bottom-[2%] " +
            ((isInView) ? ("translate-x-0 translate-y-0 opacity-20") : ("translate-x-20 -translate-y-24 opacity-40"))
          }/>
          <div 
            className={"transition duration-[1500ms] absolute border-[8px] border-cloud opacity-30 rounded-full h-[250px] w-[250px] " +
            "left-[-11%] bottom-[14%] sm:left-[-14%] lg:left-[14%] lg:bottom-[6%] xl:left-[13%] " +
            ((isInView) ? ("translate-x-0 translate-y-0 opacity-20") : ("translate-x-20 -translate-y-24 opacity-40"))
          }/>
          <div
            className={"transition duration-[2100ms] absolute border-[5px] border-orange-300 opacity-20 rounded-full h-[400px] w-[400px] " +
            "left-[10%] top-[10%] lg:left-[25%] lg:top-[4%] " +
            ((isInView) ? ("translate-x-0 translate-y-0 opacity-20") : ("-translate-x-16 translate-y-16 opacity-40"))
          }/>
        </motion.div>
    </div>
  )
}

export default Skills
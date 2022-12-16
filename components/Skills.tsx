import React, { useState } from 'react'
import { LayoutGroup, motion } from 'framer-motion'
import Frontend from './SkillCards/Frontend'
import Talents from './SkillCards/Talents'
import Experience from './SkillCards/Experience'
import Backend from './SkillCards/Backend'

type Props = {}

const Skills = (props: Props) => {
  const [openCard, setOpenCard] = useState(0);

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
      className="min-h-screen px-10 mt-32 flex items-center justify-end"
    >
      <div
        className="relative text-center
        justify-start  flex flex-col w-full
        lg:text-left lg:flex-row-reverse lg:w-[50rem] lg:mx-auto
        
      ">
        <div 
          className="mt-[0rem] w-full max-h-[50vh] text-right
          lg:mt-0
        ">
          <h3 
            className={"uppercase font-poppins font-normal transition ease-in-out " +
            "text-[43px] leading-[50px] " +
            ((openCard) ? ("opacity-30") : ("opacity-100"))
          }>
            Stack of<br /> all Trades
          </h3>
          <p 
            className={"text-right font-poppins font-light transition ease-in-out mt-2 " +
            "lg:text-[26px] lg:leading-[36px] " +
            "sm:text-2xl " +
            "text-xl " + 
            ((openCard) ? ("opacity-30") : ("opacity-100"))
          }>
          Roses are red,<br />
          Violets are blue. <br />
          Coders have <span className="font-bold text-deep-sea">layers</span>, <br />
          Like onions, <br />
          and ogres too.
          </p>
        </div>
        <div 
          className="relative flex flex-col h-[40vh] w-full mt-32">
          <div
            className="absolute left-0 bottom-[7rem] w-[80vw] lg:w-full
          ">
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
        <div
            className="absolute -z-10 bg-gradient-to-l from-[rgba(218,213,210,0.6)] to-[rgba(220,220,230,0.15)] 
            xl:w-[55rem] xl:ml-[5rem]
            lg:w-[45rem] lg:h-[34rem] lg:mt-[-1rem] lg:ml-[5rem]
            md:w-[30rem] 
            sm:w-[25rem] sm:h-[40rem]
            w-[70%] h-[60vh] right-[1.5rem] top-[-3rem]
            rounded-[20px] overflow-hidden
          ">
          {/* Plate circles */}
          <div 
            className="absolute left-[-20%] bottom-[0%] border-[8px] border-slate-400 opacity-20 rounded-full h-[300px] w-[300px]"
          />
          <div 
            className="absolute left-[-11%] bottom-[4%] border-[8px] border-cloud opacity-30 rounded-full h-[250px] w-[250px]"
          />
          <div
            className="absolute left-[20%] top-[10%] border-[5px] border-orange-300 opacity-20 rounded-full h-[400px] w-[400px]"
          />
        </div>
      </div>
    </div>

    
  )
}

export default Skills
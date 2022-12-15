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
      className="min-h-screen bg-red-100 px-10 flex items-center justify-end"
    >
      <div
        className="relative text-center
        justify-start  flex flex-col w-full
        lg:text-left lg:flex-row-reverse lg:w-[50rem] lg:mx-auto
        
      ">
        <div 
          className="mt-[0rem] w-full max-h-[50vh] text-right overflow-hidden
          lg:mt-0
        ">
          <h3 
            className="uppercase font-poppins font-normal
            text-[43px] leading-[50px]"
          >
            Stack of <br /> all Trades
          </h3>
          <p 
            className="font-poppins font-light tracking-[0.05em]
            lg:text-[26px] lg:leading-[36px]
            sm:text-2xl
            text-[20px]
          ">
          Roses are red,<br />
          Violets are blue. <br />
          Coders have layers, <br />
          Like onions <br />
          and ogres too.
          </p>
        </div>
        <div 
          className="relative flex flex-col h-[40vh] w-full mt-32">
          <div
            className="absolute left-0 bottom-0 w-[80vw] lg:w-full
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
      </div>
    </div>

    
  )
}

export default Skills
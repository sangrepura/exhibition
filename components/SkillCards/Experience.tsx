import React from 'react'
import { motion } from 'framer-motion'
import SkillSVG from './SkillSVG'

type Props = {
  isOpen: number
}

const Experience = (props: Props) => {
  const isOpen = (props.isOpen == 3);

  const cardOpenStyle = '';
  const cardCloseStyle = '';

  return (
    <motion.div 
      layout
      transition={{
        layout: { duration: 0.6, type: "spring" }
      }}
      className={'bg-gradient-to-l from-[rgba(180,193,197,0.15)] to-[rgba(180,193,197,0.7)] skillCard ' +
        (isOpen ? cardOpenStyle : cardCloseStyle)
      }>
      <motion.h4 layout="position" className="skillCardTitle">
        Experience
      </motion.h4>
      { isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative pb-5"
        >
          {/* Icon row */}
          <div className="flex flex-row w-full justify-evenly my-3 child:basis-1/5">
            <SkillSVG 
              src="/svg/experience_card_cpp.svg"
              hoverText="C++"
            />
            <SkillSVG 
              src="/svg/experience_card_python.svg"
              hoverText="Python"
            />
            <SkillSVG 
              src="/svg/experience_card_java.svg"
              hoverText="Java"
            />
          </div>
          
          {/* Paragraph */}
          <p className="text-lg text-black font-light text-center">
            Development in critical thinking and analytical skills.
            A strong foundation for intuition goes a long way.
          </p>
        </motion.div>
      )}
      
    </motion.div>
  )
}

export default Experience
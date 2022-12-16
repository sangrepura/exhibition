import React from 'react'
import { motion } from 'framer-motion'
import SkillSVG from './SkillSVG'

type Props = {
  isOpen: number
}

const Frontend = (props: Props) => {
  const isOpen = (props.isOpen == 1);

  const cardOpenStyle = '';
  const cardCloseStyle = '';

  return (
    <motion.div 
      layout
      transition={{
        layout: { duration: 0.6, type: "spring" }
      }}
      className={'bg-gradient-to-l from-[rgba(199,138,68,0.15)] to-[rgba(199,138,68,0.6)] skillCard ' +
        (isOpen ? cardOpenStyle : cardCloseStyle)
      }>
      <motion.h4 layout="position" className="font-light tracking-[0.15em] uppercase text-3xl select-none">
        Frontend
      </motion.h4>
      { isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative p-5"
        >
          {/* Icon row */}
          <div className="flex flex-row w-full justify-evenly my-3">
            <SkillSVG 
              src="/svg/frontend_card_html.svg"
              hoverText="HTML"
            />
            <SkillSVG 
              src="/svg/frontend_card_css.svg"
              hoverText="CSS"
            />
            <SkillSVG 
              src="/svg/frontend_card_js.svg"
              hoverText="JS"
            />
            <SkillSVG 
              src="/svg/frontend_card_react.svg"
              hoverText="React"
            />
            <SkillSVG 
              src="/svg/frontend_card_next.svg"
              hoverText="Next"
            />
          </div>
          
          {/* Paragraph */}
          <p className="text-lg text-black font-light tracking-wide text-center select-none">
            Modern applications require modern solutions.
            Modern solutions require modern frameworks. 
          </p>
        </motion.div>
      )}
      
    </motion.div>
  )
}

export default Frontend
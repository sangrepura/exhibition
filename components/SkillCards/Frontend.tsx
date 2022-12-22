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
      <motion.h4 layout="position" className="skillCardTitle">
        Frontend
      </motion.h4>
      { isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative pb-5"
        >
          {/* Icon row */}
          <div className="flex flex-row flex-wrap w-full justify-evenly my-3 child:basis-1/3">
            <SkillSVG 
              src="/svg/frontend_card_html.svg"
              hoverText="HTML"
            />
            <SkillSVG 
              src="/svg/frontend_card_css.svg"
              hoverText="CSS&nbsp;"
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
            <SkillSVG 
              src="/svg/frontend_card_tailwind.svg"
              hoverText="Tailwind"
            />
          </div>
          
          {/* Paragraph */}
          <p className="text-lg text-black font-light tracking-wide text-center">
            Modern problems require modern applications. 
            Modern applications use modern frameworks. <br />
            A very modern solution, indeed.
          </p>
        </motion.div>
      )}
      
    </motion.div>
  )
}

export default Frontend
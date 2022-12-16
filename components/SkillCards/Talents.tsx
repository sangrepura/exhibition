import React from 'react'
import { motion } from 'framer-motion'
import SkillSVG from './SkillSVG'

type Props = {
  isOpen: number
}

const Talents = (props: Props) => {
  const isOpen = (props.isOpen == 2);

  const cardOpenStyle = '';
  const cardCloseStyle = '';

  return (
    <motion.div 
      layout
      transition={{
        layout: { duration: 0.6, type: "spring" }
      }}
      className={'bg-gradient-to-l from-[rgba(216,178,110,0.15)] to-[rgba(216,178,110,0.7)] skillCard ' +
        (isOpen ? cardOpenStyle : cardCloseStyle)
      }>
      <motion.h4 layout="position" className="font-light tracking-[0.15em] uppercase text-3xl select-none">
        Talents
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
              src="/svg/talents_card_git.svg"
              hoverText="Git"
            />
            <SkillSVG 
              src="/svg/talents_card_vscode.svg"
              hoverText="VSCode"
            />
            <SkillSVG 
              src="/svg/talents_card_figma.svg"
              hoverText="Figma"
            />
            <SkillSVG 
              src="/svg/talents_card_photoshop.svg"
              hoverText="Photoshop"
            />
          </div>
          
          {/* Paragraph */}
          <p className="text-lg text-black font-light text-center">
            My arsenal for a most efficient workflow.
          </p>
        </motion.div>
      )}
      
    </motion.div>
  )
}

export default Talents
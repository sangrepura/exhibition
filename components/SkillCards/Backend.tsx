import React from 'react'
import { motion } from 'framer-motion'
import SkillSVG from './SkillSVG'

type Props = {
  isOpen: number
}

const Backend = (props: Props) => {
  const isOpen = (props.isOpen == 4);

  const cardOpenStyle = '';
  const cardCloseStyle = '';

  return (
    <motion.div 
      layout
      transition={{
        layout: { duration: 0.6, type: "spring" }
      }}
      className={'bg-gradient-to-l from-[rgba(95,119,130,0.15)] to-[rgba(95,119,130,0.6)] skillCard ' +
        (isOpen ? cardOpenStyle : cardCloseStyle)
      }>
      <motion.h4 layout="position" className="skillCardTitle">
        Backend
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
              src="/svg/backend_card_python.svg"
              hoverText="Python"
            />
            <SkillSVG 
              src="/svg/backend_card_node.svg"
              hoverText="Node"
            />
            <SkillSVG 
              src="/svg/backend_card_express.svg"
              hoverText="Express"
            />
            <SkillSVG 
              src="/svg/backend_card_socketio.svg"
              hoverText="Socket.io"
            />
          </div>
          
          {/* Paragraph */}
          <p className="text-lg text-black font-light tracking-wide text-center">
            This is how the magic is made.
          </p>
        </motion.div>
      )}
      
    </motion.div>
  )
}

export default Backend
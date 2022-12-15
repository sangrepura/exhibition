import React from 'react'
import { motion } from 'framer-motion'
import { IconContext } from 'react-icons'
import { FaBeer } from 'react-icons/fa'

type Props = {
  isOpen: number
}

const Frontend = (props: Props) => {
  const isOpen = (props.isOpen == 1);

  const cardOpenStyle = 'bg-sunburst';
  const cardCloseStyle = 'bg-sunburst';

  return (
    <motion.div 
      layout
      transition={{
        layout: { duration: 0.6, type: "spring" }
      }}
      className={'skillCard bg-opacity-70 ' +
        (isOpen ? cardOpenStyle : cardCloseStyle)
      }>
      <motion.h4 layout="position" className="uppercase text-3xl select-none">
        Frontend
      </motion.h4>
      { isOpen && (
        <motion.div className="bg-slate-200 bg-opacity-40 p-5 rounded-[10px]">
          <div>
            <FaBeer />
          </div>
          <p className="text-md text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Similique incidunt dolore corrupti veniam consequuntur cum, 
            nisi dolorem. Laborum enim vel eaque, magnam quod molestiae 
            aliquam fugiat doloribus autem perspiciatis optio.
          </p>
        </motion.div>
      )}
      
    </motion.div>
  )
}

export default Frontend
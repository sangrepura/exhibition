import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  isOpen: number
}

const Backend = (props: Props) => {
  const isOpen = (props.isOpen == 4);

  return (
    <motion.div 
      layout
      transition={{
        layout: { duration: 0.6, type: "spring" }
      }}
      className="font-poppins bg-deep-sea bg-opacity-70 skillCard 
    ">
      <motion.h4 layout="position" className="uppercase text-3xl select-none">
        Backend
      </motion.h4>
      { isOpen && (
        <motion.div className="bg-cloud p-5 rounded-[10px]">
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

export default Backend
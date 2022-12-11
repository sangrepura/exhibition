import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 pt-10 px-32 flex justify-between max-w-[100rem] mx-auto z-50 xl:items-center">
      <motion.div 
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.2,
          ease: [.27, .61, .25, .95]
        }}
        className="flex flex-row items-center"
      >
        <h3 className="text-2xl font-poppins text-deep-sea tracking-widest">seancfong</h3>
        
      </motion.div>

      <motion.div 
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.2,
          ease: [.27, .61, .25, .95]
        }}
        className="flex flex-row items-end text-gray-300 cursor-pointer space-x-8"
      >
        <Link href="/" className="font-poppins text-lg text-gray-500 font-light">
          exhibition
        </Link>
        <Link href="/" className="font-poppins text-lg text-gray-500 font-light">
          bulletin
        </Link>
        <Link href="/" className="font-poppins text-lg text-gray-500 font-light">
          linkedin
        </Link>
      </motion.div>
    </header>
    
  );
}

export default Header
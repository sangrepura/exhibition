import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useAnimationControls } from 'framer-motion';
import Link from 'next/link';
import useWindowSize from './hooks/useWindowSize'

type Props = {mode: boolean};

const navIconVariants = {
  idle: { rotate: 0 },
  active: {
    rotate: 450,
    transition: { 
      duration: 0.5,
      ease: "easeInOut",
      type: "spring", 
      stiffness: 80
    }
  },
  revert: {
    rotate: 0,
    transition: { 
      duration: 1,
      ease: "easeInOut" 
    }
  }
};

const Header = (props: Props) => {
  // get hero section visibility prop
  const heroVisible = props.mode;

  // get states of window and navbar
  const windowSize = useWindowSize();
  const [showNav, setShowNav] = useState(true);

  // controls for navbar
  const navIconControls = useAnimationControls();

  // checks values of window size to see if navbar should be shown
  useEffect(() => {
    if (windowSize.width)
      setShowNav(windowSize.width > 768);

  }, [windowSize.width]);


  return (
    <header className="sticky top-0 pt-10 px-32 flex justify-between max-w-[100rem] mx-auto z-50 items-center">
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
        className="relative flex flex-row items-center"
      >
        <div className="absolute -top-3 -left-[6.5rem] md:-top-2 md:-left-2 bg-[#eeeeee] bg-opacity-50 px-5 py-1 rounded-lg">
          <h3 className="text-xl md:text-2xl font-poppins text-deep-sea tracking-widest">seancfong</h3>
        </div>
        
      </motion.div>

      {/* For wider screens */}
      <AnimatePresence>
        { heroVisible && (
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
            exit={{
              opacity: 0,
              scale: 0.5,
              x: 500
            }}
            transition={{
              duration: 1.2,
              ease: [.27, .61, .25, .95]
            }}
            className="z-60 absolute top-7 right-[8%] text-right items-center md:top-10 md:items-end text-gray-300"
          >
            <button className="absolute right-0 block md:hidden" onClick={() => {setShowNav(!showNav)}}>
              <motion.svg 
                width="40" height="40" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"
                variants={navIconVariants}
                initial="idle"
                animate={showNav ? "active" : "revert"}
              >
                <path 
                  d="M103.694 19.1178C103.188 18.5902 102.698 18.0476 102.193 17.5387C101.665 17.0111 101.141 16.5247 100.595 16.0382C89.5452 5.68798 74.9666 -0.0409412 59.8416 0.000220274C43.957 -0.0371992 28.7161 6.27547 17.5089 17.5425C-5.33194 40.3646 -5.8184 77.1817 16.0084 100.625C16.4948 101.171 16.9813 101.695 17.4902 102.223C18.0178 102.728 18.5417 103.218 19.0693 103.723C30.138 114.051 44.7166 119.784 59.8416 119.743C75.8422 119.743 90.8698 113.527 102.193 102.223C125.015 79.3819 125.502 42.5649 103.694 19.1216V19.1178ZM20.5885 20.6184C30.9762 10.1708 45.1058 4.32591 59.8416 4.36333C73.9338 4.36333 87.2252 9.5871 97.5155 19.1178L92.5275 24.1283C83.603 15.9409 71.9468 11.4019 59.8453 11.4394C46.9805 11.4019 34.6658 16.506 25.6028 25.6288C16.4799 34.6918 11.3759 47.029 11.4133 59.8714C11.4133 72.0926 15.8961 83.5916 24.1022 92.5536L19.0918 97.5416C-1.02122 75.7897 -0.534762 41.7454 20.5923 20.6184H20.5885ZM89.4254 27.1892V27.2079L84.3588 32.2745C77.6346 26.2126 68.8859 22.8822 59.8416 22.901C50.0377 22.8635 40.6267 26.7776 33.7078 33.7376C26.7515 40.6378 22.8524 50.0712 22.8711 59.8714C22.8524 68.9157 26.1828 77.6457 32.226 84.3887L27.1781 89.4553C19.8102 81.3689 15.739 70.8054 15.7764 59.8714C15.739 48.1778 20.394 36.952 28.6786 28.7085C36.9222 20.4238 48.148 15.7688 59.8416 15.8062C70.8916 15.8062 81.2979 19.84 89.4254 27.1892ZM92.4489 59.8714C92.4489 68.5827 89.0587 76.7701 82.8995 82.9256C76.7402 89.0811 68.5566 92.4937 59.8453 92.4937C51.9536 92.4937 44.3312 89.6087 38.4077 84.4074V84.3887C37.8614 83.9209 37.3151 83.4532 36.7912 82.9256C36.286 82.3979 35.7958 81.8554 35.3281 81.309C30.1043 75.3855 27.2193 67.7632 27.2417 59.8714C27.2417 51.1602 30.6319 42.9728 36.7912 36.8173C42.8906 30.6767 51.1939 27.2491 59.8453 27.2678C67.8157 27.2678 75.3407 30.1341 81.283 35.3542C81.8293 35.8219 82.3943 36.2896 82.8995 36.8173C83.4271 37.3449 83.8948 37.8875 84.3626 38.4338C89.5864 44.3573 92.4714 51.9796 92.4489 59.8714V59.8714ZM35.3243 87.487C42.0486 93.5302 50.7973 96.8606 59.8416 96.8606C69.6642 96.8793 79.079 92.9839 85.9754 86.0052C92.9317 79.0863 96.8495 69.6716 96.8121 59.8714C96.8308 50.8271 93.5004 42.0972 87.4572 35.3542L92.5238 30.2876C99.873 38.3739 103.944 48.9374 103.926 59.8714C103.944 71.565 99.3079 82.7909 91.0045 91.0344C82.761 99.3378 71.5352 103.974 59.8416 103.955C48.9076 103.974 38.3441 99.9028 30.2577 92.5536L35.3243 87.487ZM99.0946 99.1245C88.707 109.572 74.5774 115.417 59.8416 115.379C45.8692 115.417 32.4019 110.137 22.1676 100.625L27.1781 95.637C36.084 103.824 47.7588 108.345 59.8603 108.326C72.7027 108.345 85.0399 103.241 94.1029 94.1177C103.203 85.0547 108.33 72.7175 108.292 59.8752C108.311 47.7737 103.791 36.1175 95.6034 27.2117L100.591 22.2012C120.704 43.9532 120.218 77.9974 99.0909 99.1245H99.0946Z" fill="#555555"
                />
              </motion.svg>
            </button>
              <AnimatePresence>
                { showNav && (
                  <div className="pt-[3rem] md:p-0 md:space-y-0 space-y-2 md:flex md:flex-row flex-col md:space-x-6">
                    <div className="overflow-hidden">
                      <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{
                          duration: 0.5,
                          delay: 0,
                          ease: "easeInOut"
                        }}
                        className="px-2 bg-opacity-30 rounded-md bg-sea md:bg-transparent md:rounded-none"
                      >
                        <Link href="/#hero" className="cursor-pointer block md:flex font-poppins text-md md:text-lg text-gray-500 font-light leading-8">
                          exhibition
                        </Link>
                      </motion.div>
                    </div>
                    <div className="overflow-hidden">
                      <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.06,
                          ease: "easeInOut"
                        }}
                        className="px-2 bg-opacity-30 rounded-md bg-sea md:bg-transparent md:rounded-none"
                      >
                        <Link href="/#hero" className="cursor-pointer block md:flex font-poppins text-md md:text-lg text-gray-500 font-light leading-8">
                          bulletin
                        </Link>
                      </motion.div>
                    </div>
                    <div className="overflow-hidden">
                      <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.12,
                          ease: "easeInOut"
                        }}
                        className="px-2 bg-opacity-30 rounded-md bg-sea md:bg-transparent md:rounded-none"
                      >
                        <a href="https://www.linkedin.com/in/seancfong/"  target='_blank' className="cursor-pointer block md:flex font-poppins text-md md:text-lg text-gray-500 font-light leading-8">
                          linkedin
                        </a>
                      </motion.div>
                    </div>
                  </div>
                )}
              </AnimatePresence> 
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        { !heroVisible && (
          <motion.div 
            initial={{
              y: -100,
              opacity: 0,
              scale: 0.5
            }}
            animate={{
              y: 0,
              opacity: 1,
              scale: 1
            }}
            exit={{
              opacity: 0,
              scale: 0.5,
              y: -100
            }}
            transition={{
              duration: 1.2,
              ease: [.27, .61, .25, .95]
            }}
            className="absolute right-[8%] top-10 flex-row items-end text-gray-300 cursor-pointer space-x-8"
          >
            {/* for larger devices */}
            <div className="hidden md:flex">
              <Link href="/#hero" className="font-poppins text-lg text-gray-500 font-light">
                back to top
              </Link>
            </div>

            {/* for smaller devices */}
            <div className="absolute -top-2 right-[8%] md:hidden">
              <Link href="/#hero" className="font-poppins text-lg text-gray-500 font-light">
                <svg width="35" height="35" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M59.844 119.688C48.008 119.688 36.4378 116.178 26.5965 109.602C16.7552 103.027 9.08482 93.6802 4.55537 82.7451C0.0259242 71.8101 -1.15918 59.7775 1.14992 48.1689C3.45902 36.5603 9.15861 25.8972 17.528 17.5279C28.7509 6.30496 43.9724 -1.18253e-07 59.844 0C75.7156 1.18253e-07 90.9371 6.30496 102.16 17.5279C113.383 28.7508 119.688 43.9723 119.688 59.8439C119.688 75.7155 113.383 90.937 102.16 102.16C96.6159 107.734 90.0212 112.154 82.7577 115.162C75.4941 118.171 67.706 119.709 59.844 119.688V119.688ZM59.844 7.9793C31.2459 7.9793 7.97938 31.2458 7.97938 59.8439C7.97938 88.442 31.2459 111.708 59.844 111.708C88.4421 111.708 111.709 88.442 111.709 59.8439C111.709 31.2458 88.4421 7.9793 59.844 7.9793Z" fill="#5f7782"/>
                  <path d="M84.9499 74.6335L59.8439 49.5278L34.738 74.6335L29.0957 68.9918L59.8439 38.2435L90.5922 68.9918L84.9499 74.6335Z" fill="#5f7782"/>
                </svg>
              </Link>
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      

        
    </header>
    
  );
}

export default Header
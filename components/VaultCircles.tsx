
import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect } from 'react'
import { TfiLock } from 'react-icons/tfi'
import { BsArrowUpCircle, BsArrowDownCircle, BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'

type Props = {
    setLoadAnimation: any
    loadAnimation: any
    isInView: boolean
    keyCombo: Array<string>
}

const renderKey = (key: string) => {
    switch (key) {
        case "ArrowUp":
            return <BsArrowUpCircle/>
        case "ArrowDown":
            return <BsArrowDownCircle/>
        case "ArrowLeft":
            return <BsArrowLeftCircle/>
        case "ArrowRight":
            return <BsArrowRightCircle/>
        default:
            return key;
    }
}

const VaultCircles = ({ setLoadAnimation, loadAnimation, isInView, keyCombo }: Props) => {
    useEffect(() => {
        if (loadAnimation === null) {
            setLoadAnimation(false);
        } else if (loadAnimation === false) {
            setLoadAnimation(true);
        }
    }, [isInView])
    
    return (
    <div className="w-full h-full flex items-center justify-center absolute">
        {/* Outer circle 1 */}
        <div className={"absolute border-[2px] border-[rgba(255,255,255,0.3)] w-[70%] aspect-square rounded-full transition duration-[1300ms] ease-in-out " + (loadAnimation ? "" : "translate-y-48 scale-75 opacity-30")}/>

        {/* Outer circle 2 */}
        <div className={"absolute border-[3px] border-[rgba(177,177,177,0.4)] w-[40%] aspect-square rounded-full delay-[100ms] transition duration-[1300ms] ease-in-out " + (loadAnimation ? "" : "translate-y-48 scale-75  opacity-30")}/>

        {/* Inner circle 1 */}
        <div className={"absolute border-[5px] border-slate-400 border-opacity-90 w-[33%] aspect-square rounded-full delay-[200ms] transition duration-[1300ms] ease-in-out " + (loadAnimation ? "" : "translate-y-48 scale-75  opacity-30")} />

        {/* Outer circle 2 */}
        <div className={"absolute border-[3px] border-orange-300 border-opacity-90 w-[30%] aspect-square rounded-full overflow-hidden bg-[rgba(218,218,218,0.5)] flex flex-col justify-center items-center delay-[300ms] transition duration-[1300ms] ease-in-out " + (loadAnimation ? "" : "translate-y-48 scale-75 opacity-30")}>
            <motion.div layout="position" className={"h-full flex items-center justify-center absolute " + ( keyCombo.length > 0 && "right-[15%]")}>
                <AnimatePresence>
                {
                    (keyCombo.length == 0) && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1, transition: { type: "spring" }}}
                            exit={{ opacity: 0, scale: 0, transition: { type: "spring" } }}
                        >
                            <TfiLock className="text-9xl text-[#888888]" />
                        </motion.div>
                    )
                }                                
                </AnimatePresence>
                
                <AnimatePresence>            
                {
                    keyCombo.slice(0,-1).map((key: string, index: number) => {
                        return <p className="text-8xl text-gray-500 mx-5">{renderKey(key)}</p>
                    })
                }
                {
                    keyCombo.length > 0 && 
                        <motion.p 
                        initial={{ scale: 1.2 }}
                        animate={{ opacity: 1, scale: 1, transition: { type: "spring" }}}
                        className="text-green-500 text-8xl mx-5">
                            {renderKey(keyCombo[keyCombo.length - 1])}
                        </motion.p>
                }
                </AnimatePresence>
            </motion.div>
            
        </div>
    </div>
  )
}

export default VaultCircles

import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { TfiLock } from 'react-icons/tfi'
import { BsArrowUpCircle, BsArrowDownCircle, BsArrowLeftCircle, BsArrowRightCircle, BsArrowReturnLeft, BsXCircle } from 'react-icons/bs'
import { isMobile } from 'react-device-detect'
import VaultControlsMobile from './VaultControlsMobile'

type Props = {
    setLoadAnimation: any
    loadAnimation: any
    isInView: boolean
    keyCombo: Array<string>
    isUnlocked: boolean
    setKeyCombo: any
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
        case "Enter":
            return <BsArrowReturnLeft/>
        default:
            return key;
    }
}

const VaultCircles = ({ isUnlocked, setLoadAnimation, loadAnimation, isInView, keyCombo, setKeyCombo }: Props) => {
    useEffect(() => {
        if (loadAnimation === null) {
            setLoadAnimation(false);
        } else if (loadAnimation === false) {
            setLoadAnimation(true);
        }
    }, [isInView])
    
    const [ mobileControls, setMobileControls ] = useState(false);
    useEffect(() => {
        setMobileControls(isMobile);
    }, [isMobile])

    return (
    <div className={"w-full h-full flex items-center justify-center absolute transition-all delay-[2000ms] " + (isUnlocked ? "invisible" : "")}>

        

        {/* Outer circle 1 */}
        <div className={"absolute border-[2px] border-[rgba(255,255,255,0.3)] w-[130%] sm:w-[100%] md:w-[70%] aspect-square rounded-full transition duration-[1300ms] ease-in-out " + (loadAnimation ? "" : "translate-y-48 scale-75 opacity-30") + (isUnlocked ? "delay-[500ms] scale-150 opacity-0" : "")}/>

        {/* Outer circle 2 */}
        <div className={"absolute border-[3px] border-[rgba(177,177,177,0.4)] w-[80%] sm:w-[60%] md:w-[40%] aspect-square rounded-full delay-[100ms] transition duration-[1300ms] ease-in-out " + (loadAnimation ? "" : "translate-y-48 scale-75  opacity-30") + (isUnlocked ? "delay-[500ms] scale-150 opacity-0" : "")}>
        {/* Mobile controls */}
        {
            mobileControls &&
            <div className={"z-40 relative w-full h-full delay-[500ms] transition duration-[1500ms] ease-in-out " + (loadAnimation ? "" : "scale-75 opacity-0 rotate-12")}>
                <div className="absolute -top-5 left-1/2 text-center -translate-x-1/2 bg-[#eeeeee] bg-opacity-70 opacity-80 rounded-full">
                    <VaultControlsMobile text={renderKey("ArrowUp")} command="ArrowUp" setKeyCombo={setKeyCombo}/>
                </div>
                <div className="absolute -bottom-5 left-1/2 text-center -translate-x-1/2 bg-[#eeeeee] bg-opacity-70 opacity-80 rounded-full">
                    <VaultControlsMobile text={renderKey("ArrowDown")} command="ArrowDown" setKeyCombo={setKeyCombo}/>
                </div>
                <div className="absolute top-1/2 -left-5 text-center -translate-y-1/2 bg-[#eeeeee] bg-opacity-70 opacity-80 rounded-full">
                    <VaultControlsMobile text={renderKey("ArrowLeft")} command="ArrowLeft" setKeyCombo={setKeyCombo}/>
                </div>
                <div className="absolute top-1/2 -right-5 text-center -translate-y-1/2 bg-[#eeeeee] bg-opacity-70 opacity-80 rounded-full">
                    <VaultControlsMobile text={renderKey("ArrowRight")} command="ArrowRight" setKeyCombo={setKeyCombo}/>
                </div>

                <div className="absolute -bottom-24 left-2 text-center bg-[#eeeeee] bg-opacity-70 opacity-80 rounded-full">
                    <VaultControlsMobile text={renderKey("a")} command="a" setKeyCombo={setKeyCombo}/>
                </div>
                <div className="absolute -bottom-24 left-1/2 text-center -translate-x-1/2 bg-[#eeeeee] bg-opacity-70 opacity-80 rounded-full">
                    <VaultControlsMobile text={<BsXCircle/>} command="Backspace" setKeyCombo={setKeyCombo}/>
                </div>
                <div className="absolute -bottom-24 right-2 text-center bg-[#eeeeee] bg-opacity-70 opacity-80 rounded-full">
                    <VaultControlsMobile text={renderKey("b")} command="b" setKeyCombo={setKeyCombo}/>
                </div>
            </div>
        }
        </div>

        {/* Inner circle 1 */}
        <div className={"absolute border-[5px] border-slate-400 border-opacity-90 w-[70%] sm:w-[50%] md:w-[33%] aspect-square rounded-full delay-[200ms] transition duration-[1300ms] ease-in-out " + (loadAnimation ? "" : "translate-y-48 scale-75  opacity-30") + (isUnlocked ? "delay-[500ms] scale-150 opacity-0" : "")} />

        {/* Outer circle 2 */}
        <div className={"absolute border-[3px] border-orange-300 border-opacity-90 w-[60%] sm:w-[45%] md:w-[30%] aspect-square rounded-full overflow-hidden bg-[rgba(218,218,218,0.5)] flex flex-col justify-center items-center delay-[300ms] transition duration-[1300ms] ease-in-out " + (loadAnimation ? "" : "translate-y-48 scale-75 opacity-30") + (isUnlocked ? "delay-[500ms] scale-150 opacity-0" : "")}>
            <motion.div layout="position" className={"h-full flex items-center justify-center absolute " + ( keyCombo.length > 0 && " right-[10%] md:right-[15%]")}>
                <AnimatePresence>
                {
                    (keyCombo.length == 0) && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1, transition: { type: "spring" }}}
                            exit={{ opacity: 0, scale: 0.5, transition: { type: "spring" } }}
                        >
                            <TfiLock className="text-8xl md:text-9xl text-[#888888]" />
                        </motion.div>
                    )
                }                                
                </AnimatePresence>
                
                <AnimatePresence>            
                {
                    keyCombo.slice(0,-1).map((key: string, index: number) => {
                        return <p className="text-7xl md:text-8xl text-gray-500 mx-5">{renderKey(key)}</p>
                    })
                }
                {
                    keyCombo.length > 0 && 
                        <motion.p 
                        initial={{ scale: 1.2 }}
                        animate={{ opacity: 1, scale: 1, transition: { type: "spring" }}}
                        className="text-blue-500 text-7xl md:text-8xl mx-5">
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
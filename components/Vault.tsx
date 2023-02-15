import React, { useEffect, useRef, useState } from 'react'
import VaultCircles from './VaultCircles';
import { useInView } from 'framer-motion'

type Props = {}

const validCombos = {
    test: ['Enter'],
    konami: ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
}

const validKeys = ['ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'Enter', '?'];


const Vault = (props: Props) => {
    const [ loadAnimation, setLoadAnimation ] = useState(null);
    const [ isUnlocked, setIsUnlocked ] = useState(false)
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef);
    const canType = useRef(false)

    const [keyCombo, setKeyCombo] = useState<Array<string>>([]);

    useEffect(() => {
        if (isInView) {
            canType.current = true
        } else {
            canType.current = false
        }
    }, [ isInView ]);

    useEffect(() => {
        console.log(keyCombo)
        if (keyCombo.toString() == validCombos.konami.toString()) {
            setIsUnlocked(true);
            canType.current = false
        }
    }, [keyCombo])

    function downHandler(e: KeyboardEvent): void {
        const { key } = e;
        if (canType.current) {
            if ( key == 'Backspace') {
                setKeyCombo(keyCombo => keyCombo.slice(0, -1))
            } else if ( validKeys.includes(key) ) {
                setKeyCombo(keyCombo => [...keyCombo, e.key])
            }

            if ( ['ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight' ].includes(key) ) {
                e.preventDefault();   
            }
        }
    }

    useEffect(() => {
      window.addEventListener("keydown", downHandler);

      // Remove event listeners on cleanup
      return () => {
        window.removeEventListener("keydown", downHandler);
      };
    }, []); 
    


  return (
    <div className="min-h-[40rem] h-screen max-h-[80rem] w-full relative flex justify-center items-center mt-80 font-poppins">
        <div className="w-[80%] h-[80%] overflow-hidden relative md:p-10 lg:px-32 z-10 flex flex-col items-center justify-center gap-5 max-w-5xl max-h-3xl">       
            {/* Back plate */}
            <div
                className={`overflow-hidden absolute bg-gradient-radial to-[rgba(215,218,223,0.6)] from-[rgba(220,220,230,0)] rounded-[20px]
                transition-all delay-100 duration-[1600ms] ease-in-out max-w-5xl max-h-3xl w-full h-full ` + 
                ( loadAnimation 
                    ? "" 
                    : "scale-[70%] opacity-40"
                )}>
            </div>

            <div
                ref={sectionRef}
                className="w-full h-full relative"
            />   
            {
                isUnlocked &&
                <div className="w-full h-full flex justify-center items-center absolute">
                    <p className="text-2xl font-light text-gray-500 tracking-wider">The Vault is currently empty (for now).</p>
                </div>
            }

            <VaultCircles isUnlocked={isUnlocked} setLoadAnimation={setLoadAnimation} loadAnimation={loadAnimation} isInView={isInView} keyCombo={keyCombo} setKeyCombo={setKeyCombo}/>
 
            
        </div>
        <div className="absolute text-center top-[7%] sm:top-[5%] left-1/2 translate-x-[-50%] w-full z-10">
            <h3 className={"semibold tracking-[0.05em] uppercase font-normal transition duration-[1800ms] ease-in-out text-5xl sm:text-6xl " + ( loadAnimation 
                    ? "" 
                    : "translate-y-20 opacity-0"
                )}>
                The Vault
            </h3> 
            <h4 className={"font-light text-gray-400 text-2xl tracking-wider transition delay-[200ms] duration-[1800ms] ease-in-out " + ( loadAnimation 
                    ? "" 
                    : "-translate-y-5 opacity-0"
                )}>
                enter in the password:
            </h4>
        </div>
        

        
    </div>
  )
}

export default Vault
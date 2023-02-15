import React from 'react'

type Props = {
    text: any
    command: string
    setKeyCombo: any
}

const VaultControlsMobile = ({ text, command, setKeyCombo }: Props) => {
  return (
    <div 
        className="w-full h-full text-6xl text-slate-500"
        onClick={() => {
            if ( command == 'Backspace') {
                setKeyCombo((keyCombo: any) => keyCombo.slice(0, -1))
            } else {
                setKeyCombo((keyCombo: any) => [...keyCombo, command])
            }
        }}
    >
        {text}
    </div>
  )
}

export default VaultControlsMobile
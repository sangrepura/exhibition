import React from 'react'
import Image from 'next/image'

type Props = {
  src: string,
  hoverText: string,
}

const SkillSVG = (props: Props) => {

  return (
    <div className="skillCardSVG">
      <Image src={props.src} alt={props.hoverText} width={60} height={60}></Image>
      <div className="absolute w-full h-full align-center skillCardSVGDesc">
        <p className="left-0 absolute uppercase opacity-0 font-poppins text-md text-gray-500 font-light text-center tracking-widest">
            {props.hoverText}
        </p>
      </div>
    </div>
  )
}

export default SkillSVG
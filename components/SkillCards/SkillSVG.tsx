import React from 'react'
import Image from 'next/image'

type Props = {
  src: string,
  hoverText: string,
}

const SkillSVG = (props: Props) => {

  return (
    <div className="skillCardSVG relative">
      <Image src={props.src} alt={props.hoverText} width={50} height={50}></Image>
      <p className="absolute uppercase opacity-0 font-poppins text-md text-gray-600 font-light text-center tracking-widest">
        {props.hoverText}
      </p>
    </div>
  )
}

export default SkillSVG
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react'
import { IoMdOpen } from 'react-icons/io'
import { IconType } from 'react-icons/lib';

type Props = {
	link: string,
	isInView: boolean,
	renderIcon: () => any,
	defaultText: string,
	hoverText: string,
	buttonStyles?: string | null
}

const ProjectLink = ({ link, isInView, renderIcon, defaultText, hoverText, buttonStyles}: Props) => {
	
	const [ expandedButton, setExpandedButton ] = useState(false);
	const icon = renderIcon();

  return (
		<div onMouseEnter={() => {setExpandedButton(true)}} onMouseLeave={() => {setExpandedButton(false)}}
			className={"z-10 relative transition delay-[400ms] duration-[1400ms] " + (isInView ? "opacity-full" : "opacity-0 translate-y-32")}>
			<a href={link} target='_blank' rel="noreferrer" 
					className={"bg-deep-sea bg-opacity-50 flex items-center gap-3 rounded-lg px-5 py-[0.4rem] transition duration-200 " + buttonStyles}
					>
					{
						expandedButton
						? <IoMdOpen className="text-3xl text-white" />
						: <span>{icon}</span>
					}
					<span 
						className="font-light text-white tracking-wider text-sm">
						{defaultText}
					</span>	
					<AnimatePresence>
						{expandedButton && ( 
							<motion.span 
								onMouseEnter={() => {setExpandedButton(false)}}
								initial={{y: 30, scale: 0}}
								animate={{y: 0, scale: 1}}
								exit={{y: 30, scale: 0, opacity: 0}}
								transition={{type: 'spring', stiffness: 200, damping: 15}}
								className="-z-10 w-full bg-deep-sea text-white text-sm font-light tracking-wider bg-opacity-80 rounded-lg py-2 absolute top-[-110%] left-0 whitespace-nowrap text-center">
								{hoverText}
							</motion.span>	
						)}
					</AnimatePresence>
			</a>
		</div>
  )
}

export default ProjectLink
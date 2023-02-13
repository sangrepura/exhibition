import { AnimatePresence, motion, useInView } from 'framer-motion';
import React, { useRef, useState } from 'react'
import { PortableText } from '@portabletext/react'
import { urlFor } from '../../lib/client';
import { AiFillGithub } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';
import { GiLaurelsTrophy } from 'react-icons/gi'
import ProjectLink from './ProjectLink';

const ptComponents = {
	marks: {
		strong: ({children}: any) => <strong className="text-xl text-sunburst">{children}</strong>,
	},
}

type Props = {
	project: any
}

const ProjectCard = ({ project }: Props) => {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true });

	const {title, subtitle, description, featuredImage, githubLink, deploymentLink, award} = project;

  return (
    <React.Fragment>
			{/* Project Content */}
			<div className="w-[80%] h-[80%] md:p-10 lg:px-32 z-10 flex flex-col items-center justify-center gap-5 max-w-5xl max-h-3xl">
				{/* Image */}
				{ featuredImage && (
					<div className={"relative aspect-video w-[110%] md:w-full h-full transition duration-[1400ms] " + (isInView ? "opacity-full" : "scale-[80%] opacity-[10%] translate-y-32")}>
						<img src={urlFor(featuredImage)} alt="Project Image" className="rounded-xl object-cover w-full h-full"/>
						<AnimatePresence>
							{
								(award && isInView) && (
									<>
										<motion.div 
											initial={{opacity: 0}}
											animate={{opacity: 1}}
											transition={{delay: 0.3, duration: 2}}
											className="absolute rounded-xl top-0 left-0 w-full h-full bg-gradient-to-b from-[rgba(150,150,150,0.5)] via-[rgba(255,255,255,0)] to-[rgba(255,255,255,0)]"/>
										<motion.span
											className="absolute top-3 -left-5 flex items-center gap-3"
											initial={{y: -50, opacity: 0}}
											animate={{y: 0, opacity: 1}}
											transition={{type: 'spring', stiffness: 200, damping: 20, delay: 1}}
										>										
											<GiLaurelsTrophy className="text-yellow-500 text-7xl md:text-8xl drop-shadow-award"/>
											<div className="text-left drop-shadow-md flex flex-col justify-start bg-[#dfdfdf] bg-opacity-90 rounded-lg px-5 py-1">
												<span className="font-medium tracking-wider uppercase text-lg">
													{award.organization}
												</span>
												<span className="font-light tracking-wider">
													{award.awardDescription}
												</span>
											</div>
										</motion.span>
									</>							
																
															
								)
							}
						</AnimatePresence>
					</div>
				)
				}

				{/* Title */}
				<div className="flex flex-col items-center">
					<h5 ref={sectionRef} className={"text-xl lg:text-2xl font-light italic transition delay-[100ms] duration-[1400ms] " + (isInView ? "opacity-full" : "opacity-0 translate-y-32")}>
						{subtitle}
					</h5>

					<span className={"relative text-4xl lg:text-[2.75rem] lg:leading-[3rem] tracking-widest flex gap-3 delay-[200ms] transition duration-[1400ms] " + (isInView ? "opacity-full" : "opacity-0 translate-y-32")}>
						<h4 className="uppercase ">
							{title}
						</h4>
					</span>


				</div>
				
				{/* Description */}
				<div className={"font-light transition delay-[300ms] duration-[1400ms] lg:text-lg text-[#333333] " + (isInView ? "opacity-full" : "opacity-0 translate-y-32")}>
					<PortableText
						value={description}
						components={ptComponents}
					/>
				</div>
				
				{/* Links */}
				<div className="flex flex-col md:flex-row justify-center items-center gap-5">
					{/* Github Link */}
					{ githubLink &&
						<ProjectLink 
							link={githubLink} isInView={isInView} renderIcon={() => <AiFillGithub className="text-3xl text-white"/>}
							defaultText={"seems legit?"} hoverText={"here's the repo!"}
							buttonStyles={"hover:bg-green-500"}
						/>
					}

					{/* Deployment Link */}
					{ deploymentLink &&
						<ProjectLink link={deploymentLink} isInView={isInView} renderIcon={() => <CgWebsite className="text-3xl text-white"/>}
							defaultText={"view deployment"} hoverText={"check it live!"}
							buttonStyles={"hover:bg-blue-500"}
						/>
					}
				</div>
				

				

			</div>

		{/* Background Plate */}
		<div
			className={`overflow-hidden absolute bg-gradient-to-r from-[rgba(215,218,223,0.5)] to-[rgba(220,220,230,0.15)] rounded-[20px]
			transition-all delay-100 duration-[1600ms] ease-in-out max-w-5xl max-h-3xl w-[80%] h-full ` + 
			( isInView 
				? "" 
				: "scale-[70%] opacity-40"
			)}>
				{/* Plate circles */}
          <div 
            className={"transition duration-[1700ms] ease-in-out absolute border-[8px] border-slate-400 rounded-full h-[300px] w-[300px] " +
            "left-[-15%] sm:left-[5%] md:left-[15%] bottom-[20%] lg:left-[20%] lg:bottom-[20%] " +
            ((isInView) ? ("translate-x-0 translate-y-0 opacity-10") : ("translate-x-[-80%] translate-y-[80%] opacity-40"))
          }/>
          <div 
            className={"transition duration-[1200ms] absolute border-[8px] border-cloud opacity-30 rounded-full h-[250px] w-[250px] " +
            "left-[50%] bottom-[14%] lg:left-[44%] lg:bottom-[6%] " +
            ((isInView) ? ("translate-x-0 translate-y-0 opacity-20") : ("translate-x-[70%] translate-y-[70%] opacity-40"))
          }/>
          <div
            className={"transition duration-[2100ms] absolute border-[5px] border-orange-300 opacity-20 rounded-full h-[400px] w-[400px] " +
            "left-[10%] top-[10%] lg:left-[38%] lg:top-[25%] " +
            ((isInView) ? ("translate-x-0 translate-y-0 opacity-[15%]") : ("translate-x-[50%] translate-y-[-50%] opacity-40"))
          }/>
		</div>
    </React.Fragment>
  )
}

export default ProjectCard
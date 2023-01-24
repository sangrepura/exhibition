import { useInView } from 'framer-motion';
import Link from 'next/link';
import React, { useRef, useState } from 'react'
import { urlFor } from '../../lib/client';
import { AiFillGithub } from 'react-icons/ai'

type Props = {
	project: any
}

const ProjectCard = ({ project }: Props) => {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true });

	const [ expandedGitButton, setExpandedGitButton ] = useState(false);

	const {title, subtitle, description, featuredImage, githubLink} = project;

  return (
    <React.Fragment>
			{/* Project Content */}
			<div className="w-[80%] h-[80%] md:p-10 lg:px-32 z-10 flex flex-col items-center justify-center gap-5 max-w-5xl max-h-3xl">
				{/* Image */}
				{featuredImage && (
					<div className={"aspect-video overflow-hidden w-[110%] md:w-full h-full transition duration-[1400ms] " + (isInView ? "opacity-full" : "scale-[80%] opacity-0 translate-y-32")}>
						<img src={urlFor(featuredImage)} alt="Project Image" className="rounded-xl object-cover w-full h-full"/>
					</div>
				)
				}

				{/* Title */}
				<div>
					<h5 ref={sectionRef} className={"text-xl font-light italic transition delay-[100ms] duration-[1400ms] " + (isInView ? "opacity-full" : "opacity-0 translate-y-32")}>{subtitle}</h5>
					<h4 className={"uppercase text-3xl tracking-widest delay-[200ms] transition duration-[1400ms] " + (isInView ? "opacity-full" : "opacity-0 translate-y-32")}>{title}</h4>
				</div>
				
				{/* Description */}
				<p className={"font-light transition delay-[300ms] duration-[1400ms] " + (isInView ? "opacity-full" : "opacity-0 translate-y-32")}>{description}</p>
				
				{/* Github Link */}
				{ githubLink &&
					<div className={"bg-slate-300 transition delay-[400ms] duration-[1400ms] " + (isInView ? "opacity-full" : "opacity-0 translate-y-32")}>
						<a href={githubLink}  target='_blank' rel="noreferrer" 
							className="bg-deep-sea bg-opacity-50 hover:bg-[#28a745] flex items-center gap-3 rounded-lg px-5 py-2 transition duration-200">
							<AiFillGithub className="text-3xl text-white"/>
							
							<span onMouseEnter={() => {setExpandedGitButton(true)}} onMouseLeave={() => {setExpandedGitButton(false)}}
								className="font-light text-white tracking-wider">{expandedGitButton ? "here's the repo!": "seems legit?"}
							</span>	
						</a>
					</div>
				}

				

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
            ((isInView) ? ("translate-x-0 translate-y-0 opacity-10") : ("translate-x-[70%] translate-y-[70%] opacity-40"))
          }/>
          <div
            className={"transition duration-[2100ms] absolute border-[5px] border-orange-300 opacity-20 rounded-full h-[400px] w-[400px] " +
            "left-[10%] top-[10%] lg:left-[38%] lg:bottom-[4%] " +
            ((isInView) ? ("translate-x-0 translate-y-0 opacity-10") : ("translate-x-[80%] translate-y-[-80%] opacity-40"))
          }/>
			</div>
    </React.Fragment>
  )
}

export default ProjectCard
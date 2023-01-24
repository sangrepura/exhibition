import { motion, useInView, useScroll } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { client } from '../lib/client';
import ProjectCard from './ProjectCards/ProjectCard';

type Props = {
  projectData: Array<any>
}

const Projects = ({ projectData = []}: Props) => {
  const [ showHeader, setShowHeader ] = useState(false);
  const sectionRef = useRef(null);
	const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  useEffect(() => {
    return scrollYProgress.onChange((latestValue) => {
      if (latestValue > 0.3) {
        setShowHeader(true);
      }
    });{}
  }, [scrollYProgress]);

  return (
    <div className="flex flex-col items-center justify-center font-poppins text-center relative overflow-hidden gap-10 lg:gap-20">
      <div>
        <h3 ref={sectionRef} 
          className={"w-[100vw] tracking-[0.05em] uppercase font-normal transition duration-[1800ms] ease-in-out " +
          "text-[43px] leading-[50px] sm:text-[60px] sm:leading-[65px] " +
          "right-[-3rem] bottom-[0rem] " +
          ((showHeader) ? ("opacity-100 translate-y-0 ") : ("opacity-0 translate-y-20 "))
        }>
          Productions
        </h3>
        <h4 className={"text-xl font-extralight italic transition delay-[100ms] duration-[1800ms] ease-in-out " + ((showHeader) ? ("opacity-100 translate-y-0 ") : ("opacity-0 translate-y-20 "))}>
          Let them roll!
        </h4>
      </div>
      
      {/* Project Content */}
      { projectData.map((project: any) => (
        <div key={project?._id} className="min-h-fit py-20 md:py-5 lg:py-0 w-full relative flex justify-center items-center">
          <ProjectCard project={project}/>
        </div>
      ))}
      
    </div>
  )
}

export default Projects
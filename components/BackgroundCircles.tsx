import React, { useEffect } from 'react'

type Props = {
    inView: boolean
}

const BackgroundCircles = ({ inView }: Props) => {
	useEffect(() => {
		console.log("inView", inView);
		
	}, [inView])

  return (
    <div 
        className="relative flex justify-center items-center opacity-70"
    >
        <div 
            className={"absolute border-[12px] border-slate-200 rounded-full h-[300px] w-[300px] mt-80 transition duration-[1300ms] ease-[cubic-bezier(.49,.02,.29,.99)] " 
						+ (inView ? "opacity-60 scale-[120%]": "opacity-30 scale-[80%]") }
        />
        <div 
					className={"absolute border-2 border-slate-200 rounded-full h-[350px] w-[350px] mt-80 transition duration-[1600ms] ease-[cubic-bezier(.49,.02,.29,.99)] " 
					+ (inView ? "opacity-60 scale-[120%]": "opacity-30 scale-[60%]") }
				/>
        <div 
					className={"absolute border-2 border-gray-300 rounded-full h-[400px] w-[400px] mt-80 transition duration-[1600ms] ease-[cubic-bezier(.49,.02,.29,.99)] " 
					+ (inView ? "opacity-60 scale-[120%]": "opacity-30 scale-[40%]") }
				/>
        <div 
					className={"absolute border-4 border-gray-300 rounded-full h-[500px] w-[500px] mt-80 transition duration-[2000ms] ease-[cubic-bezier(.49,.02,.29,.99)] " 
					+ (inView ? "opacity-60 scale-[120%]": "opacity-30 scale-[30%]") }
				/>
        <div className={"absolute border-[3px] border-orange-400 rounded-full h-[650px] w-[650px] mt-80 transition duration-[2100ms] ease-[cubic-bezier(.49,.02,.29,.99)] " 
					+ (inView ? "opacity-40 scale-[120%]": "opacity-30 scale-[30%]") }
				/>
        <div className={"absolute border-4 border-slate-300 rounded-full h-[700px] w-[700px] mt-80 transition duration-[2400ms] ease-[cubic-bezier(.49,.02,.29,.99)] " 
					+ (inView ? "opacity-60 scale-[120%]": "opacity-30 scale-[20%]") }/>
    </div>
  )
}

export default BackgroundCircles
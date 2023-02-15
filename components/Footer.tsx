import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="h-20 flex flex-col justify-center items-center font-poppins font-thin text-sm text-gray-500">
      <p>
          &copy; Sean Collan Fong 2023
      </p>
      <p>
        <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/FQlr_bFSqEdG/node-js">
          SVG icons&nbsp;
        </a> 
        by&nbsp;
        <a className="text-deep-sea font-light" target="_blank" rel="noreferrer" href="https://icons8.com">Icons8</a>
      </p>
    </div>
  )
}

export default Footer
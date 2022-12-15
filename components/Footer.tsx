import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="h-20 flex justify-center items-center">
        <p className="font-poppins font-thin text-sm text-gray-500">
            &copy; Sean Collan Fong 2022
        </p>
    </div>
  )
}

export default Footer
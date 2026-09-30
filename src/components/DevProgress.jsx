import React from 'react'
import { RiProgress1Line } from "react-icons/ri";

const DevProgress = () => {
  return (
    <div className='flex items-center justify-center m-8 text-gray-500 text-lg'>
        <RiProgress1Line size={30} />
        <span>portfolio is under development, please check back later</span>
    </div>
  )
}

export default DevProgress

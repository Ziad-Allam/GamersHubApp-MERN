import React from 'react'
import { Link } from 'react-router-dom'
import { PiGameControllerFill } from "react-icons/pi";

function Logo() {
  return (
    <Link to='/' className='flex items-center gap-1 text-white'>
      <span className='font-semibold text-lg lg:text-xl'>G A</span>
      <PiGameControllerFill className='text-amber-600 text-2xl' />
      <span className='font-semibold text-lg lg:text-xl'>E R S</span>
    </Link>
  )
}

export default Logo

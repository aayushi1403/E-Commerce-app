import React from 'react'
import { IoReorderThreeOutline } from "react-icons/io5";

function Headerbottom() {
  return (
    <div className='flex items-center justify-between px-6 py-4'>

      {/* Left */}
      <div className='flex items-center gap-2'>
        <IoReorderThreeOutline className='text-3xl w-10 h-10' />
        <span className='text-[20px]'>All Categories</span>
      </div>

      {/* Center */}
      <div className='flex items-stretch gap-8 '>
        <span className='text-[20px]'>Home</span>
        <span className='text-[20px]'>Catalog</span>
        <span className='text-[20px]'>About Us</span>
        <span className='text-[20px]'>Contact Us</span>
      </div>

      {/* Right */}
      <div className='flex items-center gap-5'>
        <a href="" className='text-[20px]'>Login</a>
        <a href="" className='text-[20px]'>Signup</a>
      </div>

    </div>
  )
}

export default Headerbottom


import React from 'react'
import { IoReorderThreeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
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
        <Link to="/"><span className='text-[20px]'>Home</span></Link>
        <Link to="/products"><span className='text-[20px]'>Catalog</span></Link>
        <Link to="/aboutus"><span className='text-[20px]'>About Us</span></Link>
        <Link to="/contactus"><span className='text-[20px]'>Contact Us</span></Link>
      </div>

      {/* Right */}
      <div className='flex items-center gap-5'>
        <Link to="/login"><a href="" className='text-[20px]'>Login</a></Link>
        <Link to="/signup"> <a href="" className='text-[20px]'>Signup</a></Link>
       
      </div>

    </div>
  )
}

export default Headerbottom


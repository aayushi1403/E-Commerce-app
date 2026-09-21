import React from 'react'
import Logo from '../Logo'
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Footertop() {
  return (
    <div className='flex justify-evenly'>
      <div>
        <Logo />
        <span>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit</span>
        <div className='flex justify-items-center gap-3 '>
          <FaGithub className='text-2xl'/>
          <FaTelegram className='text-2xl'/>
          <FaLinkedin className='text-2xl'/>
        </div>
      </div>


      <div className='flex flex-col'>
       <span className='text-2xl text-gray-500'>FEATURES</span>
        <span className='text-[18px]'>Marketing</span>
        <span className='text-[18px]'>Commerce</span>
        <span className='text-[18px]'>Analytics</span>
        <span className='text-[18px]'>Merchendise</span>
      </div>

      <div className='flex flex-col'>
       <span className='text-2xl text-gray-500'>SUPPORT</span>
       <span className='text-[18px]'>pricing</span>
        <span className='text-[18px]'>Docs</span>
        <span className='text-[18px]'>Audition</span>
        <span className='text-[18px]'>Art Status</span>
      </div>

      <div className='flex flex-col'>
       <span className='text-2xl text-gray-500'>DOCUMENTS</span>
       <span className='text-[18px]'>Terms</span>
        <span className='text-[18px]'>Conditions</span>
        <span className='text-[18px]'>Privacy</span>
        <span className='text-[18px]'>License</span>
      </div>


      <div className='flex flex-col'>
       <span className='text-2xl text-gray-500'>DELIVERY</span>
       <span className='text-[18px]'>List Of Countries</span>
        <span className='text-[18px]'>Special Information</span>
        <span className='text-[18px]'>Restrictions</span>
        <span className='text-[18px]'>Payment</span>
      </div>
    </div>
  )
}

export default Footertop

import React from 'react'
import { FaRegCopyright } from "react-icons/fa";
import img1 from '../../assets/paypal.png'
import img2 from '../../assets/applepay.png'

import img3 from '../../assets/visa.png'
function Footerbottom() {
  return (
    <div className='flex justify-between' >
      <div className='flex'>
        <FaRegCopyright className='w-8 h-8'/>
        <span className='text-[22px]'>Made By Aayushi Rawat </span>
        </div>
      <div className='flex gap-3'>
       <img src={img3} alt="" className='w-20 h-15'/>
       <img src={img2} alt="" className='w-20 h-15'/>
       <img src={img1} alt="" className='w-20 h-15'/>
      </div>
    </div>
  )
}

export default Footerbottom

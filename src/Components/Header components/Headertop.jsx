
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import Logo from '../Logo';

function Headertop() {
  return (
    <div className='flex items-center justify-center px-6 py-4'>

      {/* Left section */}
      <div className="flex items-center gap-6 ">

        <Logo />

        <div className="flex items-center gap-2 border-2 black w-100 h-10">
          <CiSearch className="text-xl size-10" />
          <input 
            type="text" 
            placeholder="Search"
            className="outline-none w-100 h-15"
          />
          <div className="ml-1">Search</div>
        </div>

      </div>

      {/* Right section */}
      <div className='flex items-center gap-6'>

        <div className="flex items-center gap-2">
          <FaRegHeart className='size-8'/>
          <span>Wishlist</span>
        </div>

        <div className="flex items-center gap-2">
          <FaShoppingCart className='size-8'/>
          <span>My Cart</span>
        </div>

        <div className="flex items-center gap-2">
          <RiAccountCircleFill className='size-8'/>
          <span>My Account</span>
        </div>

      </div>

    </div>
  )
}

export default Headertop


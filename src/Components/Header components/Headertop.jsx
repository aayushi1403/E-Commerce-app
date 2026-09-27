
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import Logo from '../Logo';
import { Link } from 'react-router-dom';
function Headertop() 
{
  return (
    <div className='flex items-center justify-center px-6 py-4'>

      {/* Left section */}
      <div className="flex items-center gap-6 ">

        <Logo />

        <div className="flex items-center gap-2 border-2 black w-100 h-15">
          <CiSearch className="text-xl size-10" />
          <input
            type="text"
            placeholder="Search"
            className="outline-none w-100 h-15"
          />
          <button className="ml-1 border-amber-50 border-2 bg-mist-600 rounded-3xl w-20 h-10 ">Search
        </button >
      </div>
      </div>

      {/* Right section */ }
  <div className='flex items-center gap-6'>

    <div className="flex items-center gap-2">
      <FaRegHeart className='size-8' />
      <Link to="/wishlist"><span>Wishlist</span></Link>
    </div>

    <div className="flex items-center gap-2">
      <FaShoppingCart className='size-8' />
      <Link to="/mycart"><span>My Cart</span></Link>
    </div>

    <div className="flex items-center gap-2">
      <RiAccountCircleFill className='size-8' />
      <Link to="/myaccount"><span>My Account</span></Link>
    </div>

  </div>

    </div >
  )
}

export default Headertop


import React from 'react'
import Headertop from './Header components/Headertop'
import Headerbottom from'./Header components/Headerbottom'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'
function Header() {
  const {totalItems}=useCart();
  return (
    <div className="bg-gradient-to-r from-gray-950 via-gray-900 to-slate-800 text-white">
      <Headertop/>
      <Headerbottom/>
    </div>
  )
}

export default Header

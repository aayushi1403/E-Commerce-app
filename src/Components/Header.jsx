import React from 'react'
import Headertop from './Header components/Headertop'
import Headerbottom from'./Header components/Headerbottom'
function Header() {
  return (
    <div className="bg-gradient-to-r from-gray-950 via-gray-900 to-slate-800 text-white">
      <Headertop/>
      <Headerbottom/>
    </div>
  )
}

export default Header

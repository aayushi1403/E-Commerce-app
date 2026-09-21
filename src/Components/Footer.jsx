import React from 'react'
import Footerbottom from './footer components/Footerbottom'
import Footertop from './footer components/Footertop'
function Footer() {
  return (
    <div className="bg-zinc-900 text-white absolute bottom-0 w-full">
      <Footertop/>
      <Footerbottom/>
    </div>
  )
}

export default Footer

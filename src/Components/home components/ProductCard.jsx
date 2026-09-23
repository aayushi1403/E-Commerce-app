import React from 'react'
import { FaStar } from "react-icons/fa";

function ProductCard({props}) {
  return (
    <div className='flex w-100 h-100 border-s-black border-2 gap-2'>
      <img src={props.images} alt="" className='w-50 h-50'/>
      <span>{props.title}</span>
      <div>{props.stars}<FaStar /></div>
      <span>{props.price}</span>
      <button>Add to Cart</button>
    </div>
  )
}

export default ProductCard

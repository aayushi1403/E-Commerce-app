import React from 'react'
import { FaStar } from "react-icons/fa";

function ProductCard({ props }) {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center justify-evenly w-100 h-100 border-s-black border-2 gap-2 rounded-3xl">
        <img
          src={props.images}
          alt=""
          className="w-50 h-50"
        />
        <span>{props.title}</span>
        <div className="flex items-center">
          {props.stars}
          <FaStar />
        </div>
        <span>{props.price}</span>
        <button className="border-s-black border-2 rounded-1xl w-40">
          Add to Cart
        </button>
      </div>
    </div>
  )
}
export default ProductCard
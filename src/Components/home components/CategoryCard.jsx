import React from 'react'

function CategoryCard({props}) {


  return (
    <div className='flex flex-col items-center justify-evenly w-75 h-75 border-s-gray-500 border-2 gap-2 rounded-3xl'>
      <img src={props.images} alt="" className='w-50 h-50' />
      <span className='text-2xl font-serif'>{props.title}</span>
    </div>
  )
}

export default CategoryCard

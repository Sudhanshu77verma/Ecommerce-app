import React from 'react'

function AllProduct() {
  return (
    <div>
      <div className='bg-white py-2 px-4 flex justify-between items-center '>
        <h1 className='font-bold text-lg'>All Product </h1>
        <button className=' border-2 border-red-400 font-semibold text-red-500 py-2 px-4 rounded-full hover:bg-red-500 hover:text-white transition-all duration-200 '>Upload Product </button>
      </div>
    </div>
  )
}

export default AllProduct
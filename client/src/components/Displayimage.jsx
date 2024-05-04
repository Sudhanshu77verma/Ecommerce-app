import React from 'react'

function Displayimage({imageUrl,onclose}) {
  return (
    <div className='flex justify-center p-4 '>
        <img src={imageUrl} className='w-full h-full  '  alt="" />
      
    </div>
  )
}

export default Displayimage
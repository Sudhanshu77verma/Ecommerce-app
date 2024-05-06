import React, { useState } from 'react'
import { MdModeEditOutline } from 'react-icons/md'
import AdminEdit from './AdminEdit'
import displayCurrency from '../helpers/Displaycurrency'

function AdminCard({data,fetchProduct}) {
    const [editProduct,seteditProduct]=useState(false)
  return (
  
          <div  className=' w-full max-w-52 bg-white p-4 rounded mt-4  '> 
          <div className="w-full flex items-center justify-center  ">
          <img src={ data.productImage[0]} className='object-contain w-20 h-20' alt=""  />
          </div>
 

    <h1  className=' font-serif text-slate-500 text-xl'>{data.productName} </h1>
    
   <div className='font-semibold'>
    {
     displayCurrency(data.sellingPrice)
    }
   </div>
     <div className='w-fit ml-auto p-1 bg-green-500 rounded-full hover:bg-red-800 text-white cursor-pointer'>
        <MdModeEditOutline onClick={()=>seteditProduct(true)}></MdModeEditOutline>

       </div>

 { editProduct && (
  <AdminEdit fetchProduct={fetchProduct} productdata={data} onclose={()=>seteditProduct(false)}></AdminEdit>
 )

 }


  </div>

    
  )
}

export default AdminCard
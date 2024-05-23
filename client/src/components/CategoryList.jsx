
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Spinner from './Spinner'
import { Link } from 'react-router-dom'

function CategoryList() {
   const  [categoryProduct,setcategoryProduct] =useState([])
   const [loading,setloading]=useState(false)
   console.log(categoryProduct)
    const fetchCategoryProduct= async()=>{
      
        try {
            setloading(true)
            const res=await fetch('/api/product/category-product')
            const resdata=await res.json()
       if(resdata.success)
        {
            setcategoryProduct(resdata.data)
            setloading(false)
    
        }
        else {
            toast.error(resdata.message)
            
        }
        } catch (error) {
            console.log(error)
            setloading(false)
            
        }
    }

    useEffect(()=>{
      fetchCategoryProduct()
    },[])

  return ( 
    <div className='container  mx-auto  p-4 '>
     
<div className='flex justify-center items-center  text-4xl '>
{
    loading && (
        <Spinner></Spinner>
    )
}
</div>

<div className='flex wrap items-center gap-4 justify-between overflow-scroll scrollbar-none'>
{
    categoryProduct.map((product,index)=>{
        return (
          <Link to={`/category-product`} key={index} >
             <div >
             
             <div className='w-14 h-14 md:w-20 md:h-20  rounded-full overflow-hidden flex items-center justify-center bg-slate-300'>
                <img src={product.productImage[0]} alt={product.category}
                className='h-full object-scale-down mix-blend-multiply hover:scale-125 transition-all duration-200 '/>
             </div>
             
             <div>
                <p className=' text-xs md:text-base text-center capitalize'>{product.category}</p>
             </div>
                </div>
          </Link> 
        )
    })
}
</div>


    </div>
  )
}

export default CategoryList
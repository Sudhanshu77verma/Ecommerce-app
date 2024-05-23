import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import Allproductcart from '../components/AllproductsinSearch'
function SearchPage() {
    const query =useLocation()
    const [data,setdata] =useState([])
    const [loading ,setloading] =useState(false)
    console.log(data)
    console.log(query.search)
  
    const fetchproduct =async()=>{
      setloading(true)
        const res= await fetch(`/api/product/search` + query.search)

        const resdata= await res.json()
        console.log(resdata)
        if(resdata.success)
            { 
              setloading(false)
                setdata(resdata.data)
            }
    }

    useEffect(()=>{
      fetchproduct()
    },[query])



  
  return (
    <div className='container mx-auto p-4 '>
      {
        loading && (
          <p className='text-2xl text-center font-semibold'> Loading ...</p>
        )
      }
      <p> Search Results : {data.length} </p>
      {
        data.length==0 && !loading && (
            
          <p className='bg-white text-lg text-center p-4'>No Product Found </p>
        )
      }


      {
        data.length !== 0 && !loading && (
          <Allproductcart data={data}></Allproductcart>
        )
      }

      
    </div>
  )
}

export default SearchPage

import React, { useEffect, useState } from 'react'
import { FaStar, FaStarHalfStroke } from 'react-icons/fa6';
import { useParams } from 'react-router-dom'
import displayCurrency from '../helpers/Displaycurrency';
import VerticalCardProduct from '../components/VertcalCardProduct';
import CategoryWiseproduct from '../components/CategoryWiseProduct';

function ProductDetail() {
   
    const [loading,setloading] =useState(false)
    const {productId} =useParams()
    const [data, setdata] = useState({
        productName: "",
        brandName: "",
        category: "",
        productImage: [],
        description: "",
        price: "",
        sellingPrice: "",
      });
  
console.log(data)
 

  const [activeImage , setactiveimage ] =useState("")

 const fetchdata =async()=>{
    try {
        setloading(true)
         const res=await fetch(`/api/product/product-detail/${productId}`)
         const resdata= await res.json()
       
      if(resdata.success)
        {   
          // setloading(false)
            setdata(resdata.data)
            setactiveimage(resdata.data.productImage[0])

        }
     
    } catch (error) {
        console.log(error)
    }
 }

 useEffect(()=>{
    fetchdata()
 },[])
  


 const productimagaeList=new Array(data.productImage.length).fill(null)
  return (
    <div className='container mx-auto p-4'>

   <div className='flex flex-col md:flex-row gap-2 md:gap-4 mt-4 '>


     <div className='  h-auto  flex flex-col  md:flex-row  gap-4 md:gap-12'>


      <div className='flex  md:flex-col gap-2   h-32 '> 

  
       {
        data.productImage.map((image,index)=>{
          return (
            <div  key={index}  className=' h-24 w-24     '>
                          <img  src={image} alt="" onClick={()=>setactiveimage(image)} className='h-full w-full object-scale-down rounded-lg hover:cursor-pointer ' />
            </div>

          )
        })
       }
     
      </div>




      <div className='h-5/6    min-h-52 w-72 md:w-96 md:max-h-96   '>
      
      
      <img src={activeImage} alt="" className='w-full h-full rounded-md shadow-lg shadow-slate-200' />

      </div>



     </div>
      








      <div className='w-56  flex flex-col items-start gap-3'>
     
     <p className='text-red-500 bg-red-200 px-2 rounded-full'>{data.brandName}</p>

     <div> <p className='font-semibold text-3xl '>{data.productName}</p></div>
      
      <div> 
        <p className='uppercase text-slate-400'>{data.category}</p>
      </div>

      <div className='flex gap-1 text-red-500'>

        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>

        <FaStarHalfStroke></FaStarHalfStroke>

      </div>
     

     <div className='flex gap-3 '>
      <p className='text-red-600 text-2xl'>{displayCurrency( data.sellingPrice)}</p>
      <p className='text-slate-400 line-through  text-2xl' >{displayCurrency(data.price)}</p>
     </div>
   
      

      <div className='flex gap-3'>

        <button className= ' w-28 h-8  text-red-500 border border-red-600 hover:bg-red-500 hover:text-white rounded-full '>Buy</button>

        <button className= 'w-32 text-white bg-red-500 hover:bg-red-800 rounded-full '>Add to Cart</button>
      </div>


     <div>
      <p className='text-xl text-slate-400'>Description:</p>
       <p className='font-normal'>{data.description}</p>
     </div>


      </div>




      </div>

  

{
  data.category && (
    <CategoryWiseproduct category={data.category} heading={"Recommended Projects"}/>

  )
}


    </div>
  )
}

export default ProductDetail
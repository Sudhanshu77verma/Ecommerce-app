import React, { useContext, useEffect, useState } from 'react'
import Context from '../context'
import displayCurrency from '../helpers/Displaycurrency'
import { MdDelete } from 'react-icons/md'
import {toast} from "react-toastify"

function Cart() {
  
    const [data,setdata] =useState([])
  console.log(data)
  const [loading,setloading] =useState(false)
  const {countcart,  fetchcount,} = useContext(Context)
  const loadingcart= new Array(countcart).fill(null)
  

  const totalqty =data.reduce((prevvalue,currentvalue) => prevvalue+currentvalue.quantity,0)
  console.log(totalqty)
//   console.log(loadingcart)
  const fetchCardProduct= async()=>{
    setloading(true)
    const res= await fetch('api/cart/alladdtocart')
    const resdata= await res.json()

    if(resdata.success)
        {    

            setloading(false)
            setdata(resdata.data)
        }
  }
    useEffect(()=>{
fetchCardProduct()

    },[])
 
    
    const increaseQty = async(_id,qty)=>{
       
      const res= await fetch('/api/cart/updated-cart',{
        method:"POST",
        headers:{
          "content-type":"application/json",
        },
        body: JSON.stringify({
                 quantity:qty+1,
                 _id:_id
        }
      )
      })


      const resdata= await res.json()
      if(resdata.success)
        {
          fetchCardProduct()
        }
    }
  

    const decreaseqty = async(_id,qty)=>{
       
      const res= await fetch('/api/cart/updated-cart',{
        method:"POST",
        headers:{
          "content-type":"application/json",
        },
        body: JSON.stringify({
                 quantity:qty-1,
                 _id:_id
        }
      )
      })


      const resdata= await res.json()
      if(resdata.success)
        {
          fetchCardProduct()
        }
    }

  const deletecardproduct =async(_id)=>{
    const res= await fetch('/api/cart/delete-card-product',{
      method:"POST",
      headers:{
        "content-type":"application/json",
      },
      body: JSON.stringify({
               
               _id:_id
      }
    )
    })


    const resdata= await res.json()
    if(resdata.success)
      {
        fetchCardProduct();
        fetchcount()
      }
  
  }
 const price =data.reduce((prev,currentvalue)=>prev + (currentvalue.quantity * currentvalue.productId.sellingPrice),0)
 
 
  const handlepayment= async(amount)=>{
  //  console.log(amount)

   try {

    const res= await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/payment/order`, {
      method:"POST",
     headers:{
      "content-type" : "application/json",
     },
     body:JSON.stringify({
      amount
     })
    })

    const data= await res.json()
    console.log(data.data)
    handlepaymentverify(data.data)
   } catch (error) {
    console.log(error)
   }
  }

 const handlepaymentverify= async(data)=>{
  console.log("called")
  const options={
    key:import.meta.env.VITE_RAZORPAY_API_KEY,
    amount:data.amount,
    currency:data.currency,
    name:"sudhanshu",
    description:"test ",
    order_id:data.id,

    handler: async(response)=>{
      console.log("response " , response)
      try {
 const res= await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/payment/verify`,{
 method:"POST",
 headers:{
  "content-type" : "application/json",
 },
 body:JSON.stringify({
  razorpay_order_id : response.razorpay_order_id,
  razorpay_payment_id :response.razorpay_payment_id,
  razorpay_signature:response.razorpay_signature
 })
     }

 )


 const verifydata=await res.json()
 if(verifydata.success)
  {
    toast.success(verifydata.message)
  }
  else {
    toast.error("Something went wrong")
  }
      } catch (error) {
        
      }
    },
    theme:{
      color:'#5f63b8',
    }
  }

  const razor= new window.Razorpay(options);
  razor.open()
 }

  return (
    <div>
     
     <div className='text-center text-3xl font-semibold py-10 mt-5 '>
           
     {

data.length === 0 && !loading && (
    <p className='bg-white py-5'>No Data Found </p> 
)
}

     </div>


     <div className='flex flex-col md:flex-row gap-3 lg:justify-between '>
         
         <div className='w-full max-w-3xl -mt-24'>
           {
            loading ? 

            (   
                loadingcart.map((ele,index)=>{
                    return (
                        <div key={index} className='w-full bg-slate-300 h-32 my-1 animate-pulse'>
                        </div>
                        )  
                    }
                    )
            )
            
           
            : 
            (
            data.map((ele,index)=>(
               
                 <div key={index} className='w-full relative bg-white h-32 my-1 flex border border-slate-300 '> 
                 <div className='h-32 w-32'>
                    <img src={ele.productId.productImage[0]} className='w-full h-full object-contain' alt="" />
                 </div>
                 <div className='  px-4 py-2 '>
                 {/* delete product */}


             <div className=' absolute  right-0 text-red-500 pr-2 hover:text-black cursor-pointer text-xl pt-2 '>
              
            <MdDelete onClick={()=>deletecardproduct(ele?.productId)}></MdDelete>

             </div>

      </div>
                  


                <div className='px-4 py-2 w-full'>
                    <h2 className='text-lg capitalize   '>{ele?.productId?.productName}</h2> 
                     <p className='capitalize text-slate-400'> {ele?.productId?.category}</p>

                     <div className='w-full flex justify-between'>
                  <p className='text-red-800 font-bold'>{displayCurrency(ele?.productId?.sellingPrice)}</p>
                  <p className='text-red-800 font-bold'>{displayCurrency(ele?.productId?.sellingPrice * ele.quantity)}</p>
                     </div>               
  
            <div className='flex gap-3 mt-1'>
              <button className=' border border-red-600 text w-6 h-6 flex   items-center justify-center  rounded hover:bg-red-600 hover:text-white'  onClick={()=>decreaseqty(ele?._id,ele?.quantity)}>-</button>
              <span>{ele?.quantity}</span>
              <button className=' border border-red-600 text w-6 h-6 flex  items-center justify-center rounded hover:bg-red-600 hover:text-white' onClick={()=>increaseQty(ele?._id,ele?.quantity)} >+ </button> 
            </div>

                </div>

                </div>

      


            ))
            )
           }
         </div> 

     

  {/* total products  */}
  
<div className='mt-5 md:mt-0 w-full '>
{
    loading ? ( <div className='h-52 bg-slate-200 border border-slate-300 animate-pulse '>
     
  </div>):( <div className='h-36 bg-white'>
   
     <h2 className='text-white bg-red-500 px-4 py-2'>Summary</h2>

    <div className='flex justify-between items-center px-3 '>
      <p className='pt-1 font-medium'>Quantity</p>
      <p className='pt-1 font-medium'>{totalqty}</p> 
    </div>
   
   <div className='flex justify-between items-center px-3'>
    <p className='pt-1 font-medium text-slate-800'>Total Price</p>
    <p className='pt-1 font-medium'>{displayCurrency(price) }</p>
   </div>


    <button className=' mt-4 text-xl bg-blue-400 w-full' onClick={()=>handlepayment(price)} >Payment</button>

  </div>)
 }

</div>

 
</div>
    </div>
  )
}

export default Cart
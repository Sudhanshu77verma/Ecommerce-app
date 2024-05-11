

import { toast } from "react-toastify"

 


const addtocart = async(e,id,fetchcount)=>{
 e.stopPropagation()
 e.preventDefault()

 const res= await fetch('/api/cart/addtocart',{
    method:"POST",
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(
        {
          productId:id
        }
    
    )
 })


 const resdata= await res.json()

  if(resdata.success)
{   
    fetchcount()
      toast.success(resdata.message)
} 
if(resdata.error)
  
    {  
       
      toast.error(resdata.message)
    }
}

export default addtocart
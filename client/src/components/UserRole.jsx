import React, { useState } from 'react'
import ROLE from '../common/role'
import {IoMdClose} from "react-icons/io"
import { toast } from 'react-toastify'

function UserRole({name,role,email,onclose,userid,fetchfunction}) {

  const [userrole,setuserRole]=useState(role)
  console.log(userrole)
  const handleonchange =(e)=>{
    setuserRole(e.target.value)
  
  }

  const updateuserhandler = async()=>{
    const res= await fetch('/api/user/update-user',{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({
        role:userrole,
        email,
        userid,
        name
      })
    })
    const data= await res.json()

    if(data.success)
    {
      toast.success(data.message)
      fetchfunction()
      onclose()
    }
  }
  return (
    <div className=' w-full h-full flex justify-center items-center mt-24 '>
         
      

        <div className='bg-white shadow-md w-full max-w-sm py-4 px-4 ml-6  rounded-md '>
<div className='flex justify-end'>
  
<button onClick={onclose} >
      <IoMdClose/>
      </button>
</div>



           <h1 className='font-bold text-xl pb-4'>Change user Role</h1> 
           <p className='font-sm'>Name : {name}</p>
           <p className='font-sm'> Email : {email}</p>
       <div className='flex items-center justify-between gap-4'>
        <p className='font-sm'>Role:</p>
       <select className=' h-10  rounded-md py-2' value={userrole} onChange={handleonchange}>

{
  Object.values(ROLE).map((ele,index)=>(
    <option key={index}>{ele}</option>
   
  ))
}
 
 </select>
       </div>
   

  <div className='text-center'>
  <button className='text-white bg-red-700 p-2 rounded-full'onClick={updateuserhandler} > Change Role</button>
  </div>
        </div>
    </div>
  )
}

export default UserRole
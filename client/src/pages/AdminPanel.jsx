import React, { useEffect } from 'react'
import { FaRegCircleUser } from 'react-icons/fa6'
import { useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import ROLE from '../common/role'
function AdminPanel() {
 

  

    const user = useSelector(state=>state?.user?.user)
    const navigate =useNavigate();
    console.log(user)

    useEffect(()=>{
      if(user?.role !== ROLE.ADMIN)
      {
        navigate('/')
      }
    },[user])
  return (
    <div className='h-[calc(100vh-120px)] md:flex hidden '>
        
        <aside className='h-full w-full max-w-60 bg-white customshadow' >

       <div className='h-24  flex justify-center items-center flex-col pt-10 '>
   
       <div className="text-3xl relative hover:cursor-pointer flex justify-center items-center ">
                  {
                  user?.ProfilePic ? (
                    <img src={user?.ProfilePic} className="w-20 h-20 rounded-full"  />
                  ) :(<FaRegCircleUser></FaRegCircleUser> )
                  

                  }
                 </div>
          <p className='capitalize text-lg font-semibold'>{user?.name}</p>
          <p className='text-sm'>{user?.role}</p>

       </div>

       <div className=''>
        <nav className='flex flex-col gap-1 p-4 '>
               
               <Link to={"all-users"} className='px-2 py-1 hover:bg-slate-200'> All users</Link>
               <Link to={"all-products"} className='px-2 py-1  hover:bg-slate-200'> product</Link>
        </nav>
       </div>
        </aside>


    <main className='w-full h-full p-3'> 
        <Outlet></Outlet>
    </main>


    </div>
  )
}

export default AdminPanel
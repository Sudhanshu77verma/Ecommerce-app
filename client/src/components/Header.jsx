

import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { setuserDetails } from "../store/userslice";

function Header() {

  const user = useSelector(state=>state.user.user)
  const [display,setdisplay]= useState(false)
  const dispatch= useDispatch()
const handlelogout= async()=>{
  const res= await fetch('/api/user/userlogout')
  const data =await res.json()
  if(data.success)
  {
    toast.success(data.message);
dispatch(setuserDetails(null))
  }
}
  return (
    <div className="h-16 shadow-lg bg-white">
      <div className="h-full container mx-auto flex items-center justify-between px-4  ">
        <div className="">
          <Link to={"/"}>
          <img
            src="https://marketplace.canva.com/EAFvDRwEHHg/1/0/1600w/canva-colorful-abstract-online-shop-free-logo-cpI8ixEpis8.jpg"
            className="w-14 rounded-full"
            alt={user && (user.name) }
          />
          </Link>
        </div>

        <div className="hidden lg:flex justify-center items-center  max-w-sm  rounded-full focus:outline-none ">
          <input
            className=" h-8 text-lg border-none w-full bg-slate-200    "
            type="text"
            placeholder="Search Product here..."
            id=""
            required
            color="green"
          ></input>

          <div>
            <CiSearch className=" text-lg h-8 min-w-[50px] bg-red-500 rounded-r-full"></CiSearch>
          </div>
        </div>

              <div className="flex flex-row items-center gap-6" >
                 
                 <div className="relative group flex flex-col items-center ">
                 <div className="text-3xl relative hover:cursor-pointer " onClick={()=>setdisplay(prev=>!prev)}>
                  {
                  user ? (
                    <img src={user.ProfilePic} className="w-8 h-8 rounded-full" alt="" />
                  ) :(<FaRegCircleUser></FaRegCircleUser> )
                  

                  }
                 </div>

                {
                  display &&(
                  
                    <div className="absolute w-32 h-fit top-8  bg-white shadow-lg rounded-md px-2  hidden group-hover:block text-center">
                 <nav>
                 <Link to={'/admin-panel'} className=" hidden md:block text-slate-500 whitespace-nowrap hover:bg-slate-100 "> Admin Panel </Link>
                 </nav>
                   </div>
                 
                  )
                }
                 </div>


                <div className="text-3xl relative">
                  <FaShoppingCart></FaShoppingCart>
                  <div className="bg-red-500 text-white w-5 h-5 p-1 flex items-center justify-center rounded-full absolute top-[-10px] right-[-10px]">
                    <p className="text-xs">0</p>
                  </div>
                  </div>
               <div>
                {
                  user ? (<button onClick={handlelogout} className=" text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"> Logout</button>):(<Link to={'/login'}>
                  <div>
                 
                 <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
               
                </div>
                  </Link>)
                }
               </div>

               

              </div>
      </div>
    </div>
  );
}

export default Header;

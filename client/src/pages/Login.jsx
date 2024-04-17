import React, { useState } from 'react'
import loginIcons from '../assest/signin.gif'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
function Login() {

    const[showPass,setShowpass] =useState(false)

  return (
     
    <section id='login'>
    <div className='mx-auto container p-5'>
    
    <div className='bg-white p-2 py-5 w-full max-w-sm mx-auto rounded '  >

   <div className='w-20 h-20 mx-auto rounded-full'>
    <img src={loginIcons} alt="" />
   </div>
    
    <form action="" className='' >
        <div>
            <label >Email</label>
              <div className=' bg-slate-100'>
              <input className='w-full h-full bg-slate-100 border-none outline-none ' type='text' placeholder='Enter your email' id='text'></input>

              </div>

        </div>
        <div>
            <label >password</label>
            <div className=' flex items-center pr-2 bg-slate-100 '>
            <input className='w-full h-full bg-transparent border-none ' type={showPass ? ("text") : ("password")} placeholder='Enter your password' id='password'></input>
             <span onClick={()=> setShowpass(!showPass)} className='cursor-pointer'> 
            {
                showPass ? (<FaEyeSlash></FaEyeSlash>):(<FaEye></FaEye>)
            }
              </span>
            </div>
        </div>

   <button className=' max-w-xs text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:scale-110 transition-all mx-auto block mt-5'> Login </button>

    </form>
    </div>

    </div>
    </section>

    
  )
}

export default Login
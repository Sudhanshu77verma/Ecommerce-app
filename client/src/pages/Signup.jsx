import React, { useEffect, useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import loginIcons from '../assest/signin.gif'
import { imageToabase } from '../helpers/imageToBase';
import  {toast}  from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
function Signup() {
  const navigate= useNavigate()
  const [showPass, setShowpass] = useState(false);
const [showconfPass,setconfirpass] =useState(false);

  const [formdata, setformdata] = useState({ name:"", email: "", password: "",confirmPassword:"",ProfilePic:"" });
  console.log(formdata);
  const handleOnchange = (e) =>
    setformdata((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));

  const handlesubmit = async(e) => {
    e.preventDefault(); 

    try {
       const res= await fetch('/api/user/signup', {
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(formdata)
        
       })

       const data=await res.json()
     
       if(data.success == true)
       {
        toast.success("Signup Successfully")
        navigate("/login")
       }
       else {
        toast.error(data.message)
       }

    } catch (error) {
      console.log(error)
      
    }
  };

  const handlepic= async(e)=>{
   const file= e.target.files[0];
     const imagePic=await imageToabase(file)
     
   console.log(imagePic)
    setformdata({name:formdata.name , email:formdata.email, password:formdata.password,confirmPassword:formdata.confirmPassword, ProfilePic: imagePic})
   
  }

  useEffect(()=>{

  },[]) 
  return (
    <section id="sign-up">
      <div className="mx-auto container p-5">
        <div className="bg-white p-2 py-5 w-full max-w-sm mx-auto rounded shadow-2xl">
          <div className="  rounded-full">
           <div>
           <img className=' w-20 h-20 mx-auto rounded-full ' src={formdata.ProfilePic===''? (loginIcons) :(formdata.ProfilePic)} alt="" />
           </div>
            <form onSubmit={handlesubmit} action="">
             
             <label >
             <div className='text-xs text-center pt-2 text-slate-800 hover:cursor-pointer'>Upload Photo</div>
              
              <input type="file" className='hidden ' onChange={handlepic}/>


             </label>



            </form>
          </div>

          <form onSubmit={handlesubmit} className="mt-6 flex flex-col gap-4">

          <div>
              <label className="text-slate-400">Name</label>
              <div className=" bg-slate-100">
                <input
                  className="w-full h-full bg-slate-200 border-none outline-none "
                  onChange={handleOnchange}
                  type="text"
                  value={formdata.name}
                  placeholder="Enter your email"
                  id="name"
                  required
                ></input>
              </div>
            </div>

            <div>
              <label className="text-slate-400">Email</label>
              <div className=" bg-slate-100">
                <input
                  className="w-full h-full bg-slate-200 border-none outline-none "
                  onChange={handleOnchange}
                  type="text"
                  value={formdata.email}
                  placeholder="Enter your email"
                  id="email"
                  required
                ></input>
              </div>
            </div>
            <div>
              <label className="text-slate-400">Password</label>
              <div className=" flex items-center pr-2 bg-slate-200 ">
                <input
                  className="w-full h-full bg-transparent border-none "
                  onChange={handleOnchange}
                  type={showPass ? "text" : "password"}
                  placeholder="Enter your password"
                  id="password"
                  value={formdata.password}
                  required
                ></input>
                <span
                  onClick={() => setShowpass(!showPass)}
                  className="cursor-pointer"
                >
                  {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>
            </div>
   

            <div>
              <label className="text-slate-400"> Confirm Password</label>
              <div className=" flex items-center pr-2 bg-slate-200 ">
                <input
                  className="w-full h-full bg-transparent border-none "
                  onChange={handleOnchange}
                  type={showconfPass ? "text" : "password"}
                  placeholder="Enter your password"
                  id="confirmPassword"
                  value={formdata.confirmPassword}
                  required
                ></input>
                <span
                  onClick={() => setconfirpass(!showconfPass)}
                  className="cursor-pointer"
                >
                  {showconfPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>
            </div>





        
            <button className="w-40 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:scale-110 transition-all mx-auto block mt-3">
              {" "}
              Sign Up{" "}
            </button>
          </form>

          <p className="mt-2 font-thin">
           Already have an account?{" "}
            <Link
              className=" text-blue-600 hover:text-red-400 "
              to={"/login"}
            >
               Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Signup
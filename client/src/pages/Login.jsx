import React, { useState } from "react";
import loginIcons from "../assest/signin.gif";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
function Login() {
  const [showPass, setShowpass] = useState(false);
  const [formdata, setformdata] = useState({ email: "", password: "" });
  console.log(formdata);
  const handleOnchange = (e) =>
    setformdata((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));

  const handlesubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section id="login">
      <div className="mx-auto container p-5">
        <div className="bg-white p-2 py-5 w-full max-w-sm mx-auto rounded shadow-2xl">
          <div className="w-20 h-20 mx-auto rounded-full">
            <img src={loginIcons} alt="" />
          </div>

          <form onSubmit={handlesubmit} className="mt-6">
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
                ></input>
                <span
                  onClick={() => setShowpass(!showPass)}
                  className="cursor-pointer"
                >
                  {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>
            </div>

            <Link
              to={"/forgot-password"}
              className=" text-blue-600 font-extralight  ml-auto block w-fit hover:text-red-500 hover:underline "
            >
              Forgot Password ?{" "}
            </Link>

            <button className="w-40 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:scale-110 transition-all mx-auto block mt-2">
              {" "}
              Login{" "}
            </button>
          </form>

          <p className="mt-2 font-thin">
            Don't have an account?{" "}
            <Link
              className=" text-blue-600 hover:text-red-400 "
              to={"/sign-up"}
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;

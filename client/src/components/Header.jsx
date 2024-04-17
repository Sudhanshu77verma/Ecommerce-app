

import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="h-16 shadow-lg bg-white">
      <div className="h-full container mx-auto flex items-center justify-between px-4  ">
        <div className="">
          <Link to={"/"}>
          <img
            src="https://marketplace.canva.com/EAFvDRwEHHg/1/0/1600w/canva-colorful-abstract-online-shop-free-logo-cpI8ixEpis8.jpg"
            className="w-14 rounded-full"
            alt="image"
          />
          </Link>
        </div>

        <div className="hidden  lg:flex justify-center items-center max-w-sm border rounded-full focus-within:shadow ">
          <input
            className="  text-lg border-none w-full pl-2"
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
              
                 <div className="text-3xl ">
                 <FaRegCircleUser ></FaRegCircleUser>
                 </div>
                <div className="text-3xl relative">
                  <FaShoppingCart></FaShoppingCart>
                  <div className="bg-red-500 text-white w-5 h-5 p-1 flex items-center justify-center rounded-full absolute top-[-10px] right-[-10px]">
                    <p className="text-xs">0</p>
                  </div>
                  </div>

            


               <Link to={'/login'}>
               <div>
              
              <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
            
             </div>
               </Link>

              </div>
      </div>
    </div>
  );
}

export default Header;

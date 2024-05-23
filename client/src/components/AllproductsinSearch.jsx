import React, { useContext } from "react";
import displayCurrency from "../helpers/Displaycurrency";
import addtocart from "../helpers/AddToCart";
import Context from "../context";



function  Allproductcart ({ data, loading})
 {
    const {fetchcount} =useContext(Context)
  return (
    <div className="container mx-auto px-4 my-6 ">
     

      <div className="  flex flex-wrap gap-6 md:gap-9 justify-center overflow-scroll scrollbar-none">
        {data.map((product, index) => {
          return (
            <div
              className="w-full min-w-[300px] md:min-w-[320px] max-w-[280px] md:max-w-[320px]  bg-white rounded-sm shadow-lg   "
              key={index}
            >
              <div className=" bg-slate-300   min-w-[120px] md:min-w-[145px] flex items-center justify-center ">
                <img
                  src={product.productImage[0]}
                  alt=""
                  className=" h-28 w-20   object-scale-down mix-blend-multiply  hover:scale-105 transition-all duration-200 "
                />
              </div>

              <div className="p-3 grid">
               <h2 className="font-medium  md:text-lg text-ellipsis line-clamp-1 capitalize"> {product.productName}</h2>
              <p className="text-slate-400 capitalize">{product.category}</p>
              <div className="flex gap-2">
                <p className="text-red-600 font-medium">{displayCurrency(product.sellingPrice)}</p>
                <p className="text-slate-500 line-through">{displayCurrency(product.price)}</p>
              </div>

              <button onClick={(e)=>addtocart(e,product._id,fetchcount)} className= "  text-sm bg-red-500 hover:bg-red-800 text-white py-1 px-0.5 rounded-full">Add to Cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Allproductcart;

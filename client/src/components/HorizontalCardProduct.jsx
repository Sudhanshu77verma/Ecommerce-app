import React, { useEffect, useState } from "react";
import fetchcategorywiseprodcut from "../helpers/fetchCategorywiseProduct";
import displayCurrency from "../helpers/Displaycurrency";
import { Link } from "react-router-dom";
import addtocart from "../helpers/AddToCart";
import { useContext } from "react";
import Context from "../context";

function HorizontalCardProduct({ category, heading }) {
  const [data, setdata] = useState([]);
  console.log("data ", data);
  const [loading, setloading] = useState(false);
  const {fetchcount} =useContext(Context)
  const fetchdata = async () => {
    setloading(true);
    const categoryProduct = await fetchcategorywiseprodcut(category);
    setloading(false);
    setdata(categoryProduct);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="container mx-auto px-4 my-6 overflow-auto">
      <h1 className="font-semibold text-2xl py-2"> {heading} </h1>

      <div className="flex items-center gap-6 md:gap-9 overflow-scroll scrollbar-none">
        {data.map((product, index) => {
          return (

            <Link key={index} to={`/product/${product?._id}`}>
            <div
              className="w-full min-w-[300px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] h-36 bg-white rounded-sm shadow-lg flex  "
              
            >
              <div className=" bg-slate-300  h-full  min-w-[120px] md:min-w-[145px] flex items-center justify-center ">
                <img
                  src={product.productImage[0]}
                  alt=""
                  className=" h-28 w-20   object-scale-down mix-blend-multiply  hover:scale-105 transition-all duration-200 "
                />
              </div>

              <div className="p-3 grid">
               <h2 className="font-medium  md:text-lg text-ellipsis line-clamp-1"> {product.productName}</h2>
              <p className="text-slate-400">{product.category}</p>
              <div className="flex gap-2">
                <p className="text-red-600 font-medium">{displayCurrency(product.sellingPrice)}</p>
                <p className="text-slate-500 line-through">{displayCurrency(product.price)}</p>
              </div>

              <button onClick={(e)=>addtocart(e,product._id,fetchcount)} className= " text-sm bg-red-500 hover:bg-red-800 text-white py-1 px-0.5 rounded-full">Add to Cart</button>
              </div>
            </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default HorizontalCardProduct;

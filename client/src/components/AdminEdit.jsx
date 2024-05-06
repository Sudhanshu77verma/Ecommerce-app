import React, { useState } from 'react'
import { FaCloudUploadAlt } from 'react-icons/fa'
import {IoMdClose} from "react-icons/io"
import ProductCategory from '../helpers/Product';
import uploadImage from '../helpers/uploadimage';
import { toast } from 'react-toastify';
function AdminEdit({onclose,productdata,fetchProduct}) {
  console.log("productdata",productdata)
    const [data, setdata] = useState({
        productName: productdata?.productName,
        brandName: productdata?.brandName,
        category: productdata?.category,
        productImage: productdata?.productImage || [],
        description: productdata?.description,
        price: productdata?.price,
        sellingPrice: productdata?.sellingPrice
      });
    //   console.log(data);
      const [productImage, setproductimage] = useState("");
      const setdatahandler = (e) => {
        setdata((prev) => {
          return {
            ...prev,
            [e.target.id]: e.target.value,
          };
        });
      };

      const handlesubmit=async(e)=>{
        e.preventDefault()  
        
        const res=await fetch(`/api/product/update-product/${productdata._id}`,{
            method:"POST",
            headers:{
               "content-type":"application/json"
            },
            body:JSON.stringify(data)
            
        })

        const Resdata= await res.json()
        if(Resdata.success)
            {
              toast.success(Resdata.message)
              fetchProduct()
              onclose()
            }
      }
      const handleUpload = async (e) => {
        const file = e.target.files[0];
        setproductimage(file.name);
        // console.log(file)
    
        const uploadImageCloudinary = await uploadImage(file);
    
        console.log(uploadImageCloudinary);
        console.log(uploadImageCloudinary.url);
        setdata((prev) => {
          return {
            ...prev,
            productImage: [...prev.productImage, uploadImageCloudinary.url],
          };
        });
    
        
      };


  return (
    <div className="fixed bg-slate-200 bg-opacity-45 w-full h-full top-0 bottom-0 left-0 right-0 flex justify-center items-center">
    <div className="bg-white rounded w-full max-w-2xl h-full max-h-[50%] overflow-y-hidden">
      <div className="w-full  flex items-center">
        <h1 className="p-4 font-bold text-lg">Edit Product </h1>
        <IoMdClose
          className=" block ml-auto hover:text-red-500 hover:cursor-pointer text-2xl mr-2"
          onClick={onclose}
        ></IoMdClose>
      </div>

      <form
        onSubmit={handlesubmit}
     className="grid overflow-y-scroll h-full pb-24"
      >
        <label htmlFor="productName">Product Name : </label>
        <input
          type="text"
          id="productName"
          className="p-1 border rounded bg-slate-100"
          placeholder="Enter Product Name..."
          value={data.productName}
          onChange={setdatahandler}
        />
        <label htmlFor="brandName">Brand Name : </label>
        <input
          type="text"
          id="brandName"
          className="p-1 border rounded bg-slate-100"
          placeholder="Enter Brand Name..."
          value={data.brandName}
          onChange={setdatahandler}
        />

        <label htmlFor="category">Category :</label>
        <select
          className="p-1 border rounded bg-slate-100"
          id="category"
          value={data.category}
          onChange={setdatahandler}
        >
          <option value={""}>Select Category</option>
          {ProductCategory.map((product, index) => (
            <option key={index} value={product.value}>
              {product.label}
            </option>
          ))}
        </select>

        <label htmlFor="productImage">Product Image : </label>
        <label htmlFor="uploadImage">
          <div className="p-2 h-32 w-full bg-slate-100 rounded flex justify-center items-center ">
            <div className="text-slate-500 flex flex-col gap-1 items-center cursor-pointer    ">
              <span className="text-2xl">
                {" "}
                <FaCloudUploadAlt></FaCloudUploadAlt>
              </span>
              <p>Upload Product Image</p>

              <input
                className="hidden"
                type="file"
                id="uploadImage"
                onChange={handleUpload}
              />
            </div>
          </div>
        </label>

        <div className="flex flex-wrap justify-between items-center gap">
          {data?.productImage[0] ? (
            data.productImage.map((img, index) => (
              <img key={index} src={img} width={80} height={80} alt="" />
            ))
          ) : (
            <p className="text-red-500 p-1"> ! Please Upload Image</p>
          )}
        </div>

        <label htmlFor="price" className="mt-2">
          Price:
        </label>
        <input
          type="number"
          id="price"
          placeholder="Enter the price "
          name="price"
          onChange={setdatahandler}
          value={data.price}
          className="p-1 border rounded bg-slate-100"
        />

        <label htmlFor="sellingPrice" className="mt-2">
          Selling Price:
        </label>
        <input
          type="number"
          id="sellingPrice"
          placeholder="Enter the price "
          name="sellingPrice"
          onChange={setdatahandler}
          value={data.sellingPrice}
          className="p-1 border rounded bg-slate-100"
        />

        <label htmlFor="description">Description :</label>
        <textarea
          name="description"
          className="h-24 resize-none "
          placeholder="Enter the product description..."
          id="description"
          value={data.description}
          rows={6}
          cols={6}
          onChange={setdatahandler}
        ></textarea>

        <button className=" mt-5 pb-5 w-full  bg-red-500 h-10 text-center text-white font-semibold hover:bg-red-700 hover:scale-90 hover:text-black transition-all duration-200 text-xl rounded-full pt-1 ">
          Edit Product
        </button>
        
      </form>
    </div>
  </div>
  )
}

export default AdminEdit
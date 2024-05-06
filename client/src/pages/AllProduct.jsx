import React, { useEffect, useState } from "react";
import UploadProduct from "../components/UploadProduct";
import { MdModeEditOutline } from "react-icons/md";
import AdminEdit from "../components/AdminEdit";
import AdminCard from "../components/AdminCard";
function AllProduct() {
  const [openUploadProduct, setopenUpload] = useState(false);
  const [product, setProduct] = useState([]);

  const [editProduct, seteditProduct] = useState(false);
  console.log(product);

  const fetchProduct = async () => {
    const res = await fetch("/api/product/get-product");
    const data = await res.json();
    if (data.success) {
      setProduct(data?.data);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      <div className="bg-white py-2 px-4 flex justify-between items-center ">
        <h1 className="font-bold text-lg">All Product </h1>
        <button
          className=" border-2 border-red-400 font-semibold text-red-500 py-2 px-4 rounded-full hover:bg-red-500 hover:text-white transition-all duration-200  "
          onClick={() => setopenUpload(true)}
        >
          Upload Product{" "}
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-5">
        {product.map((ele, index) => {
          return (
            <AdminCard
              fetchProduct={fetchProduct}
              key={index}
              data={ele}
            ></AdminCard>
          );
        })}
      </div>

      {openUploadProduct && (
        <UploadProduct
          onclose={() => setopenUpload(false)}
          fetchProduct={fetchProduct}
        ></UploadProduct>
      )}
    </div>
  );
}

export default AllProduct;

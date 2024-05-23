import React, { useEffect, useState } from "react";

import ProductCategory from "../helpers/Product";


import { useNavigate } from "react-router-dom";
import Allproductcart from "../components/AllproductsinSearch";

function CategoryProduct() {
  const navigate = useNavigate();
const [loading,setloading] =useState(false)
  const [data, setdata] = useState([]);

  console.log("data is " , data)
  const [sidebardata, setsidebardata] = useState({ sort: "", category: "" });
  console.log(sidebardata);

  const handlechange = (e) => {
    const { id, value } = e.target;
    if (e.target.name === "sort") {
      console.log(e.target);
      setsidebardata({ ...sidebardata, [e.target.name]: e.target.value });
    }
    if (e.target.id === "category") {
      setsidebardata({ ...sidebardata, [e.target.id]: e.target.value });
    }
  };
  console.log(location.search);
  const handlesubmit = (e) => {
    e.preventDefault();
    const urlparams = new URLSearchParams(location.search);

    const sort = urlparams.set("sort", sidebardata.sort);
    const category = urlparams.set("category", sidebardata.category);
    const searchQuery = urlparams.toString();
    navigate(`/category-product?${searchQuery}`);
  };

  useEffect(() => {

    const urlparams = new URLSearchParams(window.location.search);
    console.log(URLSearchParams)
    const sort = urlparams.get("sort");
    const category = urlparams.get("category");

    if (sort || category) {
      setsidebardata({
        sort: sort,
        category: category,
      });
    }
    const fetchdata = async () => {
      setloading(true)
      const searchQuery = urlparams.toString();
      const res = await fetch(`/api/product/querywiseproduct?${searchQuery}`);
      const resdata = await res.json();

      if (resdata.success) {
        setdata(resdata.data);
        setloading(false)
      }
    };

    fetchdata();
  }, [location.search]);

  return (
    <div className="container mx-auto px-4">
      <div className=" flex flex-col  md:flex-row  ">
        {/* left side */}
        <div className="bg-white w-full md:w-64 p-2 min-h-[calc(100vh)]  overflow-y-scroll scrollbar-none  ">
          <div>
            <h1 className="text-xl uppercase font-medium text-slate-400 border-b-2 pb-1 ">
              Sort By
            </h1>

            <form onSubmit={handlesubmit}>
              <div>
                <input
                  type="radio"
                  name="sort"
                  value="desc"
                  onChange={handlechange}
                  checked={sidebardata.sort === "desc"}
                />
                <label htmlFor="price"> Price High To Low</label>
              </div>

              <div>
                <input
                  type="radio"
                  name="sort"
                  value="asc"
                  checked={sidebardata.sort === "asc"}
                  onChange={handlechange}
                />
                <label htmlFor="price"> Price Low To High</label>
              </div>
              <div>
                <h1 className="text-xl uppercase font-medium text-slate-400 border-b-2 pb-2 ">
                  Category By
                </h1>
                <label htmlFor="category"></label>

                <div className="pt-2 ">
                  <label
                    className="text-slate-500 font-medium pr-6"
                    htmlFor="category"
                  >
                    Select a Category :{" "}
                  </label>
                  <select
                    className=""
                    name="category"
                    id="category"
                    value={sidebardata.value}
                    onChange={handlechange}
                  >
                    <option value="uncategorised"> Uncategorised</option>
                    {ProductCategory.map((category, index) => (
                      <option key={index} value={category.value}>
                        {category.value}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-4 h-8 pt-1 bg-red-400 w-28 text-center rounded-full text-white hover:bg-red-800">
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>

        {/* right side  */}
        <div>
     

     <Allproductcart data={data} loading={loading}></Allproductcart>




        </div>
      </div>
    </div>
  );
}

export default CategoryProduct;

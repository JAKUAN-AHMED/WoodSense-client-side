import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../../Components/Shared/Navbar";
import Footer from "../../../Components/Shared/Footer";

const CategoryList = () => {
    const craft=useLoaderData();
    const [categroy,setCategory]=useState([]);
    useEffect(()=>{
        fetch("https://wood-sense-server-side.vercel.app/items")
          .then((res) => res.json())
          .then((data) => setCategory(data));
    },[])
    const subItems=categroy.filter(item=>item.subcategory_Name===craft.subcategory_Name);
    return (
      <div>
        <Navbar></Navbar>
        <div className="font-popins">
          <div>
            <h2 className="mt-12 mb-12 text-center text-3xl font-bold font-poppins text-blue-400 border rounded shadow-lg">All {craft.subcategory_Name}</h2>
          </div>
          <div className="mt-12 mb-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            {subItems?.map((data) => (
              <div key={data._id} className="card bg-slate-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img
                    src={data.image}
                    alt="Craft Image"
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body items-start text-start">
                  <h2 className="card-title">{data.item_name}</h2>{" "}
                  <p className="text-xl">
                    {" "}
                    <span className="text-blue-400 text-xl">
                      Description :{" "}
                    </span>
                    {data.short_description}
                  </p>
                  <p className="text-xl">
                    <span className="text-red-400 text-xl">Price :</span>{" "}
                    {data.price}$
                  </p>
                  <p className="text-xl">
                    <span className="text-yellow-600 text-xl">Rating : </span>
                    {data.rating}
                  </p>
                  <p className="text-xl">
                    {" "}
                    <span className="text-xl text-blue-400">Status</span>{" "}
                    {data.stockStatus}
                  </p>
                  <p className="text-xl">
                    {" "}
                    <span className="text-xl text-blue-400">
                      Customization :{" "}
                    </span>{" "}
                    {data.customization}
                  </p>
                  <div className="card-actions flex gap-2 mt-2">
                    <button className="btn btn-square bg-blue-400 text-white w-[100px] h[50px]">
                      <Link to={`/details/${data._id}`}>View Details</Link>
                    </button>
                    <button className="btn btn-square bg-yellow-200 text-black w-[100px] h[50px] text-base">
                      <Link to={"/"}>Back</Link>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default CategoryList;
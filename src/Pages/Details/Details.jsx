import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar";
import Footer from "../../Components/Shared/Footer";

const Details = () => {
    const craft=useLoaderData();
    return (
      <div className="max-w-6xl mx-auto">
        <Navbar></Navbar>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-12 mb-12 justify-around card border rounded shadow-lg items-center p-8 bg-yellow-100">
          <div className="w-[400px]">
            <img src={craft.image} alt="" />
          </div>
          <div className="flex flex-col items-start gap-y-4 ">
            <h2 className="text-3xl font-poppins font-bold text-center">
              {craft.item_name}
            </h2>
            <p className="text-xl text-red-400 font-bold">
              {" "}
              <span className="text-blue-400">Price : </span> {craft.price}$
            </p>
            <p className="text-xl text-red-400 font-bold">
              <span className="text-blue-400">Status : </span>{" "}
              {craft.stockStatus}
            </p>
            <p className="text-xl text-blue-400 font-bold">
              <span className="text-blue-600">Subcategory : </span>{" "}
              {craft.subcategory_Name}
            </p>
            <p className="text-base text-blue-400 font-bold">
              <span className="text-black">Contact : </span>{" "}
              {craft.userEmail}
            </p>
            <p className="text-base text-blue-400 font-bold">
              <span className="text-black">Description : </span>{" "}
              {craft.short_description}
            </p>
            <p className="text-base text-blue-400 font-bold">
              <span className="text-black">Processing times : </span>{" "}
              {craft.processing_time}
            </p>
            <button className="btn btn-square bg-white text-black w-[100px] h[50px]">
              Buy
            </button>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Details;
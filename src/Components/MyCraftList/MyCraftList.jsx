import { useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/Provider/ProviderContext";

const MyCraftList = () => {
    const crafts=useLoaderData();
    const {User}=useContext(AuthContext);
    const UserEmail=User?.email;
    const [infos,setInfos]=useState([]);
    console.log(User.email)
    const Items = crafts.filter((craft) => craft.userEmail===UserEmail
    )
    const filterYes=Items.filter(item=>item.customization==='yes');
    const filterNo=Items.filter(item=>item.customization==='no');
    const handleFilter=value=>{
        if(value=='customize')
        {
            setInfos(Items);
        }
        if(value==='yes')
        {
            setInfos(filterYes);
        }
        if(value==='no')
        {
            setInfos(filterNo);
        }
    }
  return (
    <div>
      <Navbar />
      <div className="text-center mt-12 mb-2 font-popins">
        <select
          onChange={(e) => handleFilter(e.target.value)}
          name="Customize"
          id=""
          className="text-center bg-yellow-200 text-xl"
        >
          <option value="customize">Customize</option>
          <option value="yes">yes</option>
          <option value="no">no</option>
        </select>
      </div>
      <div className="mt-12 mb-12 grid grid-cols-1 md:grid-cols-3 gap-4">
        {infos?.map((data) => (
          <div key={data._id} className="card bg-slate-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={data.image} alt="Craft Image" className="rounded-xl" />
            </figure>
            <div className="card-body items-start text-start">
              <h2 className="card-title">{data.item_name}</h2>{" "}
              <p className="text-xl">
                {" "}
                <span className="text-blue-400 text-xl">Description : </span>
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
              <div className="card-actions">
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default MyCraftList;

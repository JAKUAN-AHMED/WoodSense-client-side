import { Link, useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import { useContext,useState } from "react";
import { AuthContext } from "../../Context/Provider/ProviderContext";
import Swal from "sweetalert2";


const MyCraftList = () => {
  const crafts = useLoaderData();
  const { User } = useContext(AuthContext);
  const UserEmail = User?.email;
  const [infos, setInfos] = useState([]);
  const Items = crafts.filter((craft) => craft.userEmail === UserEmail);
  const filterYes = Items.filter((item) => item.customization === "yes");
  const filterNo = Items.filter((item) => item.customization === "no");
  const handleFilter = (value) => {
    if (value == "customize") {
      setInfos(Items);
    }
    if (value === "yes") {
      setInfos(filterYes);
    }
    if (value === "no") {
      setInfos(filterNo);
    }
  };
  const handleRemove = _id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
          fetch(` https://wood-sense-server-side.vercel.app/items/${_id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Successfully deleted.",
                  icon: "success",
                });
              }
            }); }
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      });
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
              <div className="card-actions flex gap-2 mt-2">
                <button className="btn btn-square bg-blue-400 text-white w-[100px] h[50px]">
                  <Link to={`/details/${data._id}`}>View Details</Link>
                </button>
                <button className="btn btn-square bg-yellow-200 text-black w-[100px] h[50px] text-base">
                  <Link to={`/update/${data._id}`}>Update</Link>
                </button>
                <button onClick={()=>handleRemove(data._id)} className="btn btn-square bg-red-200 text-black w-[100px] h[50px] text-base">
                  Delete
                </button>
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

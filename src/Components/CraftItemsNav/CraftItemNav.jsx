import { Link, useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

const CraftItemNav = () => {
    const crafts=useLoaderData();
    return (
      <div className="max-w-6xl mx-auto">
        <Navbar></Navbar>
        <div className="overflow-x-auto">
          <table className="table table-xs table-pin-rows table-pin-cols">
            <thead>
              <tr>
                <th></th>
                <td>Name</td>
                <td>Status</td>
                <td>Price</td>
                <td>details</td>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {crafts.map((craft,idx) => (
                <tr key={idx}>
                  <th>{idx}</th>
                  <td>{craft.item_name}</td>
                  <td>{craft.stockStatus}</td>
                  <td>{craft.price}</td>
                  <button className="btn btn-square bg-yellow-200 text-black">
                    <Link to={`/details/${craft._id}`}>view</Link>
                  </button>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Footer></Footer>
      </div>
    );
};

export default CraftItemNav;
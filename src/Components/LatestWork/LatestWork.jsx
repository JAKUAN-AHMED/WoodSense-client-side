import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const LatestWork = () => {
  const [crafts, setCraft] = useState([]);
 useEffect(() => {
   AOS.init({
     duration: 1000, // You can also configure AOS here
   });
 }, []);
  useEffect(() => {
    fetch(" https://wood-sense-server-side.vercel.app/items")
      .then((res) => res.json())
      .then((data) => setCraft(data));
  }, []);

  return (
    <div className="mt-28">
      <div className="text-center gap-y-4 mt-6 flex flex-col ">
        <h2 className="text-5xl font-bold font-poppins text-center">
          <span className="text-yellow-400">Latest</span> Jute and{" "}
          <span className="text-red-400">Wooden</span> Work
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 text-center  mt-24 mb-24 gap-4">
        {crafts.slice(0,11).map((craft) => (
          <div key={craft._id} data-aos="fade-up-left">
            <img src={craft.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestWork;

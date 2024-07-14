import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./CraftItems.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CraftItems = () => {
  const [crafts, setCraft] = useState([]);
  const [sliderRef, instanceRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: { perView: 1 },
    loop: true,
  });

  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((res) => res.json())
      .then((data) => setCraft(data));
  }, []);

  useEffect(() => {
    if (instanceRef.current) {
      instanceRef.current.update();
    }
  }, [crafts, instanceRef]);

  return (
    <div className="mt-24 flex flex-col bg-white">
      <div className="text-center gap-y-4 mt-6 flex flex-col">
        <h2 className="text-5xl font-bold font-poppins text-center">
          <span className="text-blue-400">House</span> of{" "}
          <span className="text-red-400">Crafts</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident.
        </p>
      </div>
      <div ref={sliderRef} className="keen-slider mt-24">
        {crafts.map((craft) => (
          <div
            key={craft._id}
            className={`keen-slider__slide number-slide number-slide${craft._id}`}
            style={{
              backgroundImage: `url(${craft.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col items-center bg-opacity-50 bg-black p-4 rounded-lg">
              <h2 className="text-yellow-400 font-bold text-xl font-poppins text-center">
                {craft.item_name}
              </h2>
              <button className="mt-4 btn btn-square bg-transparent text-yellow-300 w-[150px] h-[50px] hover:text-black">
                <Link to={`/details/${craft._id}`}>View Details</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CraftItems;

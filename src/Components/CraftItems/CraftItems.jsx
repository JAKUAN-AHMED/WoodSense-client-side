import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./CraftItems.css";

const CraftItems =() => {
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: { perView: 1 },
  });

  return (
    <div className="mt-24 flex flex-col bg-white">
      <div className="text-center gap-y-4 mt-6 flex flex-col ">
        <h2 className="text-5xl font-bold font-poppins text-center">
          <span className="text-blue-400">House</span> of <span className="text-red-400">Crafts</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident.
        </p>
      </div>
      <div ref={sliderRef} className="keen-slider mt-24">
        <div className="keen-slider__slide number-slide1">1</div>
        <div className="keen-slider__slide number-slide2">2</div>
        <div className="keen-slider__slide number-slide3">3</div>
        <div className="keen-slider__slide number-slide4">4</div>
        <div className="keen-slider__slide number-slide5">5</div>
        <div className="keen-slider__slide number-slide6">6</div>
      </div>
    </div>
  );
};
export default CraftItems;

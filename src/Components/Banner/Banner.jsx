// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Banner.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide
          style={{
            backgroundImage: `url('https://i.ibb.co/4tFwmQ0/Jute-Wall-Hanging.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="h-[400px] md:h-[600px] flex items-center justify-center overflow-hidden">
            <div>
              <h2 className="text-3xl md:text-5xl mb-4 font-bold text-center text-yellow-400">
                Wooden <span className="text-blue-400">Utensils</span> and{" "}
                <span className="text-white">Kitchenware</span>
              </h2>
              <button className="btn btn-ghost text-yellow-200 border-2 border-yellow-200">
                <Link to={"/craftItemsNav"}>View Crafts</Link>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url('https://i.ibb.co/2ycmNrP/Wooden-Salad-Bowl.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="h-[400px] md:h-[600px] flex items-center justify-center">
            <div>
              <h2 className="text-3xl md:text-5xl mb-4 font-bold text-center text-yellow-400">
                Jute <span className="text-white">Kitchenware</span> utensils
              </h2>
              <button className="btn btn-ghost text-yellow-200 border-2 border-yellow-200">
                <Link to={"/craftItemsNav"}>View Crafts</Link>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url('https://i.ibb.co/2MBxzWc/Wooden-Coffee-Table.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="h-[400px] md:h-[600px] flex items-center justify-center">
            <div>
              <h2 className="text-3xl md:text-5xl mb-4 font-bold text-center text-yellow-400">
                wooden <span className="text-blue-400">and</span> sculptures
              </h2>
              <button className="btn btn-ghost text-yellow-200 border-2 border-yellow-200">
                <Link to={"/craftItemsNav"}>View Crafts</Link>
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

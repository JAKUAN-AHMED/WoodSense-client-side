import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiLocationArrow1 } from "react-icons/ci";
import { useEffect, useState } from "react";
import { IoMdStarHalf } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

const HappyClients = () => {
   useEffect(() => {
     AOS.init({
       duration: 1000, // You can also configure AOS here
     });
   }, []);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("aminities.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  });

  const sliderSettings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default number of slides to show
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // Medium devices and above
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640, // Small devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-12 mb-4 font-popins overflow-hidden">
      <div className="mb-8 text-center">
        <h2 className="text-5xl font-bold text-center mb-8">
          Our <span className="text-yellow-400 m">Happy</span> Clients
        </h2>
        <p className="text-slate-600">
          Our homes offer spacious living areas, modern kitchens, cozy bedrooms,
          and relaxing outdoor spaces
        </p>
      </div>
      <Slider {...sliderSettings}>
        {reviews.map((review) => (
          <div key={review.id} className="gap-4" data-aos="flip-left">
            <div className="card border rounded shadow-lg bg-[#fff5f5] font-popins text-center  m-4">
              <div className="card-body">
                <h2 className="text-3xl card-title text-center text-blue-400 flex items-center justify-center gap-4">
                  <span>
                    <CiLocationArrow1></CiLocationArrow1>
                  </span>
                  {review.productType}
                </h2>
                <p className="text-base text-red-400">{review.customerName}</p>
                <p>{review.reviewText}</p>
                <p className="flex items-center text-base text-center justify-center gap-2"><IoMdStarHalf className="text-xl"></IoMdStarHalf> {review.rating}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HappyClients;

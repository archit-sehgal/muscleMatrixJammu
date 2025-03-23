import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../assets/ptservice.jpg";
import slide2 from "../assets/ptservice.jpg";
import slide3 from "../assets/ptservice.jpg";
import slide4 from "../assets/ptservice.jpg";
import slide5 from "../assets/ptservice.jpg";
import slide6 from "../assets/ptservice.jpg";

const ImageSlider = () => {  // Renamed component from Slider to ImageSlider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // 2 seconds
    arrows: false,
    responsive: [
      {
        breakpoint: 768, // Mobile screens (width ≤ 768px)
        settings: {
          slidesToShow: 1, // Show 1 image on mobile
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Tablets (width ≤ 1024px)
        settings: {
          slidesToShow: 2, // Show 2 images on tablets
          slidesToScroll: 1,
        },
      },
    ],
  };
  

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={slide1} alt="Slide 1" className="slider-image" />
        </div>
        <div>
          <img src={slide2} alt="Slide 2" className="slider-image" />
        </div>
        <div>
          <img src={slide3} alt="Slide 3" className="slider-image" />
        </div>
        <div>
          <img src={slide4} alt="Slide 4" className="slider-image" />
        </div>
        <div>
          <img src={slide5} alt="Slide 5" className="slider-image" />
        </div>
        <div>
          <img src={slide6} alt="Slide 6" className="slider-image" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;

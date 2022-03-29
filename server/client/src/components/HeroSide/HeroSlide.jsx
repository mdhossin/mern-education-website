import React from "react";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import sliderOne from "../../assets/images/banner.jpg";
import sliderTwo from "../../assets/images/courses-2.jpg";
import sliderThree from "../../assets/images/courses-3.jpg";
const images = [
  {
    id: 1,
    imgPath: sliderOne,
    title: "Learn Everything You Want",
    desc: "Tecnolgoy is bringing to massive wave of evolution on lerning things on different ways",
  },
  {
    id: 2,
    imgPath: sliderTwo,
    title: "Start Investing in You",
    desc: "Tecnolgoy is bringing to massive wave of evolution on lerning things on different ways",
  },
  {
    id: 3,
    imgPath: sliderThree,
    title: "Explore Interesting and Career with Courses",
    desc: "Tecnolgoy is bringing to massive wave of evolution on lerning things on different ways",
  },
];

const HeroSlide = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider
        style={{ width: "100%", margin: "0px", padding: "0px" }}
        {...settings}
      >
        {images.map((image, i) => (
          <div key={`${image.id}-${i}`}>
            <div
              className="hero"
              style={{ backgroundImage: `url(${image.imgPath})` }}
            >
              <div className="hero__overlay"></div>

              <div className="hero__content">
                <h1>{image.title}</h1>
                <p>{image.desc}</p>
                <button>Ready to Get Started ?</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlide;

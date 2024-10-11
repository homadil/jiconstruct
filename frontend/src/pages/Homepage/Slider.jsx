import React from "react";
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import slider1 from "../../assets/images/dummy/download_1.jpg";
import slider2 from "../../assets/images/dummy/download_2.jpg";
import slider3 from "../../assets/images/dummy/download_3.jpg";
import { useState, useEffect } from "react";

export default function Slider() {
  const [width, setWidth] = useState(window.innerWidth);

  // Update width on window resize
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const stylesheet = {
    width: "100%",
    height:
      width <= 768
        ? "400px" // Mobile
        : width <= 1024
        ? "500px" // Tablet
        : width <= 1440
        ? "650px" // Desktop
        : width <= 1920
        ? "750px" // TV
        : "900px", // Large screen
    maxHeight: "900px",
  };

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => ""}
      onSlideChange={() => ""}
    >
      <SwiperSlide>
        <img src={slider1} alt="slide one" style={stylesheet} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider2} alt="slide two" style={stylesheet} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider3} alt="slide three" style={stylesheet} />
      </SwiperSlide>
    </Swiper>
  );
}

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
export default function Slider() {
  const stylesheet = {
    width: "100%",
    height: "650px",
  };
  return (
    <Swiper
      // install Swiper modules
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
      <SwiperSlide className="d-flex justify-content-center align-items-center">
        <img src={slider1} alt="slide one" style={stylesheet} />
      </SwiperSlide>
      <SwiperSlide className="d-flex justify-content-center align-items-center">
        <img src={slider2} alt="slide two" style={stylesheet} />
      </SwiperSlide>
      <SwiperSlide className="d-flex justify-content-center align-items-center">
        <img src={slider3} alt="slide three" style={stylesheet} />
      </SwiperSlide>
    </Swiper>
  );
}

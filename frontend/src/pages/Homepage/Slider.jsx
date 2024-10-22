import React, { useContext, useState, useEffect } from "react";
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

import { DataContext } from "../../store";
import HomeImageSlide from "../../components/HomeImageSlide";

export default function Slider() {
  const { homeHeader, backend_url, projects } = useContext(DataContext);
  const [animeToggle, setAnimeToggle] = useState(false);
  console.log(projects);
  // Restart animation on slide change
  const handleSlideChange = (swiper) => {
    setAnimeToggle(!animeToggle);
    const slides = document.querySelectorAll(".slide_text_active");
    const images = document.querySelectorAll(".slider-image-right");

    // Reset slide animations
    slides.forEach((slide, index) => {
      slide.classList.remove("fade_animation", "from_bottom", "from_top");

      const randomClass = animeToggle < 0.5 ? "from_bottom" : "from_top";
      slide.classList.add(randomClass);
    });

    // Reset and apply random animation to images
    images.forEach((image) => {
      image.classList.remove("fade_animation");
      Math.random() < 0.5
        ? image.classList.add("from_right")
        : image.classList.add("from_left");
    });

    // Set a timeout to reset all animations and apply fade_animation
    setTimeout(() => {
      images.forEach((image) => {
        image.classList.remove(
          "from_left",
          "from_right",
          "from_top",
          "from_bottom"
        );
        image.classList.add("fade_animation");
      });
      slides.forEach((slide) => {
        slide.classList.remove(
          "from_left",
          "from_right",
          "from_top",
          "from_bottom"
        );
        slide.classList.add("fade_animation");
      });
    }, 4000);
  };

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true }}
      effect="fade" // Use the fade effect
      fadeEffect={{ crossFade: true }} // Smooth fade between slides
      scrollbar={{ draggable: true }}
      onSlideChange={handleSlideChange}
    >
      {homeHeader.map((item, index) => (
        <SwiperSlide key={index}>
          <HomeImageSlide item={item} backend_url={backend_url} index={index} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

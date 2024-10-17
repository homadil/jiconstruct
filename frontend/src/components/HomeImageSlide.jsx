import React, { useEffect, useRef, useState } from "react";
import "./stylesheet/homeImageSlider.css";
export default function HomeImageSlide({ index, item, backend_url }) {
  const [width, setWidth] = useState(window.innerWidth);
  const bg = useRef();
  // Update width on window resize
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    console.log(bg);
    bg.current?.classList.add("from_left");

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const stylesheet = {
    dummy: {
      backgroundImage: `url(${backend_url}/${item.path})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      zIndex: "-100",
      position: "absolute",
      filter: "brightness(0.5)",
      height:
        width <= 768
          ? "100vh" // Mobile
          : width <= 1024
          ? "100vh" // Tablet
          : width <= 1440
          ? "100vh" // Desktop
          : width <= 1920
          ? "750px" // TV
          : "900px", // Large screen
    },
    bg: {
      width: "100%",
      position: "relative",
      display: "flex",
      height:
        width <= 768
          ? "100vh" // Mobile
          : width <= 1024
          ? "100vh" // Tablet
          : width <= 1440
          ? "100vh" // Desktop
          : width <= 1920
          ? "750px" // TV
          : "900px", // Large screen
      maxHeight: "900px",
    },
    container: {
      zIndex: "100 !important",
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      justifyContent: "space-between",
      width: "100%",
      height: "100%",
    },
  };

  const [animationClass, setAnimationClass] = useState("");

  // Trigger animation when component mounts
  useEffect(() => {
    const randomDirection = Math.random() < 0.5 ? "top" : "bottom"; // Randomly choose top or bottom for left children
    const randomRightDirection = Math.random() < 0.5 ? "left" : "right"; // Randomly choose left or right for right image

    setAnimationClass(
      `animate-${randomDirection} animate-${randomRightDirection}`
    );

    // Clean up on unmount
    return () => setAnimationClass("");
  }, [item]);

  return (
    <div className="slider-item animate" style={stylesheet.bg}>
      <div style={stylesheet.dummy} className="slide_bg" ref={bg}></div>
      <div style={stylesheet.container}>
        {/* left side */}
        <div className="left">
          {/* Slide Number */}
          <div className="slide_number slide_text_1 slide_text_active ">
            0{index + 1}
          </div>

          {/* Small Title */}
          <div className="slide_title slide_text_2 slide_text_active ">
            <span className="text-white">We Make Sure </span>
          </div>

          {/* Large Title */}
          <div className={`slider-large-title slide_text_3 slide_text_active `}>
            <div className="text-white slide_text">Classic & Modern</div>
          </div>

          <div
            className="slide_text_4 slide_text_active "
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "flex-start",
            }}
          >
            {/* Button Underline */}
            <hr
              style={{
                color: "#d5dd02",
                width: "50px",
                padding: "0",
                margin: "0",
                border: "2px solid #d5dd02",
              }}
              className={`slider-button-line`}
            />
            {/* Button */}
            <a href="javascript:;" className={`slider-button animate-fade`}>
              More About
            </a>
          </div>
        </div>

        <div className={`slider-image-right `}>
          <img
            src={`${backend_url}/${item.path}`}
            alt=""
            className="image-preview"
          />
        </div>
      </div>
      <div className="blind">
        <div className="blind_container">
          <ul className="blind_links">
            <li>
              <a href="http://" target="black">
                instagram
              </a>
            </li>

            <li>
              <a href="http://" target="black">
                twitter
              </a>
            </li>

            <li>
              <a href="http://" target="black">
                facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

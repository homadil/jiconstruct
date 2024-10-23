import React, { useEffect } from "react";
import Slider from "./Slider";
import Welcome from "./Welcome";
import Projects from "./Projects";
import Services from "./Services";
import Blog from "./Blog";
import Testimony from "./Testimony";
import Team from "./Team";
import Partner from "./Partner";
import { useLocation } from "react-router-dom";
export default function Homepage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling to the element
      }
    }
  }, [hash]);
  return (
    <div>
      {/* <!-- CONTENT START --> */}
      <div class="page-content">
        <Slider />

        <Welcome />

        <Projects />

        <Services />

        {/* <Blog /> */}

        <Testimony />

        <Team />

        <Partner />
      </div>
      {/* <!-- CONTENT END --> */}
    </div>
  );
}

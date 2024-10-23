import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { DataContext } from "../../store";
import bg from "../../assets/videos/dummy/details.mp4";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
// Utility function to parse query string
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Carousel() {
  const { projects, backend_url } = useContext(DataContext);
  const navigate = useNavigate();
  const query = useQuery();
  const service = query.get("service"); // This will get the 'service' query param
  const id = query.get("id"); // This will get the 'id' query param
  const [filteredProject, setFilteredProject] = useState([]);

  useEffect(() => {
    if (id) {
      const filteredProjects = projects.filter((pro) =>
        pro.Categories.some((cat) => cat.id === parseInt(id))
      );
      setFilteredProject(filteredProjects);
    }
  }, [id, projects]);

  if (!service) {
    navigate("/"); // Redirect to the home page if service is not found
    return null; // Return null to prevent component from rendering
  }

  return (
    <div className="page-content">
      {/* INNER PAGE BANNER */}
      <div
        className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
        data-stellar-background-ratio="0.5"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: "0.5",
            objectFit: "cover",
            zIndex: 1,
          }}
        >
          <source src={bg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="wt-bnr-inr-entry">
            <div className="banner-title-outer">
              <div className="banner-title-name">
                <h2 className="text-white">{service.toUpperCase()} Carousel</h2>
              </div>
            </div>
            <div>
              <ul className="wt-breadcrumb breadcrumb-style-2">
                <li>
                  <a href="javascript:void(0);">Home</a>
                </li>
                <li> Work carousel</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION CONTENT START */}
      <div className="section-full p-tb80 bg-gray">
        <div className="container-fluid">
          <div className="section-content">
            <div className="work-carousel-outer">
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                navigation
                autoplay
                effect="fade" // Use the fade effect
                fadeEffect={{ crossFade: true }}
                pagination={{ clickable: true }}
                className="swiper-container"
              >
                {filteredProject.map((project, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="wt-img-effect bg-cover"
                      style={{
                        position: "relative", // Ensure the content is positioned relative to the image
                        height: "400px",
                        backgroundImage: `url(${backend_url}/${project.show})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        border: "5px solid blue", // Thick blue border
                        borderRadius: "10px", // Optional: add rounded corners if desired
                      }}
                    >
                      {/* Content inside the image */}
                      <div
                        className="wt-info overflow-hide"
                        style={{
                          position: "absolute", // Absolute positioning inside the relative container
                          bottom: "10px", // Adjust to position the content near the bottom
                          left: "10px", // Adjust spacing from the left side
                          right: "10px", // Adjust spacing from the right side
                          backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white background for readability
                          padding: "15px", // Padding inside the content box
                          borderRadius: "5px", // Optional: rounded edges for the content box
                        }}
                      >
                        <h4 className="wt-title m-b10 m-t0">
                          <Link to={`/project?id=${project.id}`}>
                            {project.title}
                          </Link>
                        </h4>
                        <p>{project.description}</p>
                        <Link
                          className="site-button-link"
                          to={`/project?id=${project.id}`}
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      {/* SECTION CONTENT END */}
    </div>
  );
}

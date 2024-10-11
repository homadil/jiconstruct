import React from "react";
import bg from "../../assets/videos/dummy/project.mp4";
import postOne from "../../assets/images/dummy/download_4.avif";
import postTwo from "../../assets/images/dummy/download_3.jpg";
import postThree from "../../assets/images/dummy/download_5.jpg";
import postFour from "../../assets/images/dummy/download_6.jpg";
import postFive from "../../assets/images/dummy/download_7.jpg";
import postSix from "../../assets/images/dummy/download_8.jpg";
import postSeven from "../../assets/images/dummy/download_9.webp";
import postEight from "../../assets/images/dummy/download_10.jpg";
import postNine from "../../assets/images/dummy/download_11.webp";
import { Link } from "react-router-dom";
export default function Grid() {
  const posts = [
    {
      src: postOne,
      title: "House",
      desc: "Which is worse, that everyone has his price, or that the price is always so low.",
      filter: "cat-1",
    },
    {
      src: postTwo,
      title: "Building",
      desc: "Which is worse, that everyone has his price, or that the price is always so low.",
      filter: "cat-3",
    },
    {
      src: postEight,
      title: "House",
      desc: "Which is worse, that everyone has his price, or that the price is always so low.",
      filter: "cat-2",
    },
    {
      src: postFive,
      title: "Appartment",
      desc: "Which is worse, that everyone has his price, or that the price is always so low.",
      filter: "cat-5",
    },
    {
      src: postNine,
      title: "Bathroom",
      desc: "Which is worse, that everyone has his price, or that the price is always so low.",
      filter: "cat-1",
    },
    {
      src: postSeven,
      title: "Home",
      desc: "Which is worse, that everyone has his price, or that the price is always so low.",
      filter: "cat-4",
    },
    {
      src: postSix,
      title: "Interior",
      desc: "Which is worse, that everyone has his price, or that the price is always so low.",
      filter: "cat-2",
    },
    {
      src: postThree,
      title: "Office",
      desc: "Which is worse, that everyone has his price, or that the price is always so low.",
      filter: "cat-5",
    },
    {
      src: postNine,
      title: "Garden",
      desc: "Which is worse, that everyone has his price, or that the price is always so low.",
      filter: "cat-3",
    },
  ];

  const stylesheet = {
    height: "200px",
    width: "100%",
  };
  return (
    //  <!-- CONTENT START -->
    <div className="page-content">
      {/* INNER PAGE BANNER */}
      <div
        className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
        data-stellar-background-ratio="0.5"
        style={{ position: "relative", overflow: "hidden" }} // Ensure parent is relative
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
            opacity: "0.8",
            objectFit: "cover",
            zIndex: 1,
          }}
        >
          <source src={bg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay */}
        {/* <div
          className="overlay-main bg-black opacity-07"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
        ></div> */}

        {/* Your content */}
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div class="wt-bnr-inr-entry">
            <div class="banner-title-outer">
              <div class="banner-title-name">
                <h2 class="text-white">Work Grid</h2>
              </div>
            </div>
            {/* <!-- BREADCRUMB ROW -->                             */}

            <div>
              <ul class="wt-breadcrumb breadcrumb-style-2">
                <li>
                  <a href="javascript:void(0);">Home</a>
                </li>
                <li>Work Grid</li>
              </ul>
            </div>

            {/* <!-- BREADCRUMB ROW END -->                         */}
          </div>
        </div>
      </div>
      {/* <!-- INNER PAGE BANNER END --> */}
      {/* <!-- SECTION CONTENT START --> */}
      <div class="section-full p-t80 p-b50 bg-gray">
        <div class="container">
          {/* <!-- PAGINATION START --> */}
          <div class="filter-wrap p-b30">
            <ul class="masonry-filter link-style  text-uppercase">
              <li class="active">
                <a data-filter="*" href="#">
                  All
                </a>
              </li>
              <li>
                <a data-filter="cat-1." href="#">
                  House
                </a>
              </li>
              <li>
                <a data-filter=".cat-2" href="#">
                  Building
                </a>
              </li>
              <li>
                <a data-filter=".cat-3" href="#">
                  Office
                </a>
              </li>
              <li>
                <a data-filter=".cat-4" href="#">
                  Garden
                </a>
              </li>
              <li>
                <a data-filter=".cat-5" href="#">
                  Interior
                </a>
              </li>
            </ul>
          </div>
          {/* <!-- PAGINATION END --> */}

          {/* <!-- GALLERY CONTENT START --> */}
          <div class="portfolio-wrap mfp-gallery work-grid row clearfix">
            {/* <!-- COLUMNS 1 --> */}
            {posts.map((item, index) => {
              return (
                <div
                  key={index}
                  class={`masonry - item ${item.filter} col-lg-4 col-md-6 col-sm-12 m-b30`}
                >
                  <div class="project-img-effect-1">
                    <img src={item.src} alt="" style={stylesheet} />
                    <div class="wt-info">
                      <h4 class="wt-tilte text-white  m-b10 m-t0">
                        {item.title}
                      </h4>

                      <p>{item.desc}</p>
                    </div>

                    <Link
                      to={{
                        pathname: "/route",
                        search: `?type=project&id=${21}&service=Nothing`,
                      }}
                      class="text-white text-capitalize"
                    >
                      <i></i>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          {/* <!-- GALLERY CONTENT END -->                     */}
        </div>
      </div>
      {/* <!-- SECTION CONTENT END  --> */}
    </div>
    // <!-- CONTENT END -->
  );
}

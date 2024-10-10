import React from "react";
import { Link, useLocation } from "react-router-dom";
import bg from "../../assets/videos/dummy/details.mp4";
import postOne from "../../assets/images/dummy/download_4.avif";
import postTwo from "../../assets/images/dummy/download_3.jpg";
import postThree from "../../assets/images/dummy/download_5.jpg";
import postFive from "../../assets/images/dummy/download_7.jpg";
import { useNavigate } from "react-router-dom";
// Utility function to parse query string
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
export default function Details() {
  const navigate = useNavigate();
  const query = useQuery();
  const service = query.get("service"); // This will get the 'service' query param
  const posts = [postOne, postTwo, postThree];
  if (service === null) {
    navigate("/"); // Redirect to the home page
    return null; // Optionally return null to prevent rendering
  }
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
            opacity: "0.5",
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
                <h2 class="text-white">{service.toUpperCase()} Detail</h2>
              </div>
            </div>
            {/* <!-- BREADCRUMB ROW -->                             */}

            <div>
              <ul class="wt-breadcrumb breadcrumb-style-2">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>Project Detail</li>
              </ul>
            </div>

            {/* <!-- BREADCRUMB ROW END -->                         */}
          </div>
        </div>
      </div>
      {/* <!-- INNER PAGE BANNER END --> */}

      {/* <!-- SECTION CONTENT START --> */}
      <div class="section-full p-tb90">
        <div class="container-fluid project-detail-pic">
          <div class="row justify-content-center">
            {posts.map((item, index) => {
              return (
                <div key={index} class="col-lg-4 col-md-6 m-b30">
                  <div class="project-detail-pic ">
                    <div class="wt-media">
                      <img src={item} alt="" style={stylesheet} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div class="container">
          <div class="project-detail-outer">
            <div class="project-detail-containt">
              <div class="bg-white text-black">
                <h3>
                  This project is a true family affair, with each family member
                  contributing ideas and inspiration
                </h3>
                <p>
                  See-through delicate embroidered organza blue lining luxury
                  acetate-mix stretch pleat detailing. Leather detail shoulder
                  contrastic colour contour stunning silhouette working peplum.
                  Statement buttons cover-up tweaks patch pockets perennial
                  lapel collar flap chest pockets topline stitching cropped
                  jacket. Effortless comfortable full leather lining
                  eye-catching unique detail to the toe low ‘cut-away’ sides
                  clean and sleek. Polished finish elegant court shoe work duty
                  stretchy slingback strap mid kitten heel this ladylike design
                  slingback strap mid kitten heel this ladylike design.
                </p>
                <div class="wt-media m-b30">
                  <img src={postFive} alt="" />
                </div>
                <p>
                  Exercitation photo booth stumptown tote bag Banksy, elit small
                  batch freegan sed. Craft beer elit seitan exercitation, photo
                  booth et 8-bit kale chips proident chillwave deep v laborum.
                  Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami
                  readymade swag. Selfies iPhone Kickstarter, drinking vinegar
                  jean vinegar stumptown yr pop-up artisan.
                </p>
              </div>
            </div>
            <div class="product-block-detail">
              <ul>
                <li>
                  <h5 class="m-b10">Date</h5>
                  <p>January 08, 2019</p>
                </li>
                <li>
                  <h5 class="m-b10">Client</h5>
                  <p>Branding NthPsd Company</p>
                </li>
                <li>
                  <h5 class="m-b10">Project type</h5>
                  <p>Contruction, Brading</p>
                </li>
                <li>
                  <h5 class="m-b10">Area</h5>
                  <p>352 m2</p>
                </li>
                <li>
                  <h5 class="m-b10">Creative Director</h5>
                  <p>Lorem Ipsum doler</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- SECTION CONTENT END  --> */}
    </div>
    /* <!-- CONTENT END -->; */
  );
}

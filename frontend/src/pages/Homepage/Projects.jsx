import React from "react";
import arc_img from "../../assets/images/dummy/download_8.jpg";
import int_img from "../../assets/images/dummy/download_9.webp";
import land_img from "../../assets/images/dummy/download_10.jpg";
import floor_img from "../../assets/images/dummy/download_11.webp";
import roof_img from "../../assets/images/dummy/download_12.jpg";
import decor from "../../assets/images/dummy/download_13.webp";
export default function Projects() {
  const stylesheet = {
    height: "250px",
  };
  return (
    /* <!-- OUR PROJECTS SECTION START --> */
    <div className="section-full  p-t80 p-b80 bg-secondry">
      <div className="container">
        <div className="section-head clearfix">
          <div className="wt-tilte-main bdr-r-3 bdr-primary bdr-solid text-white">
            <small className="wt-small-title">Our Creation</small>
            {/* <h2 className="m-b5">Our Latest Projects</h2> */}
          </div>
          <div className="title-right-detail text-white">
            <p>
              Ji Construct Limited transforms visions into impactful,
              sustainable spaces. Each creation is crafted with precision to
              elevate communities, foster connections, and inspire. Explore how
              we build more than structures—we build possibilities for a
              brighter future.
            </p>
          </div>
        </div>
      </div>

      <div className="section-content">
        <div className="container-fluid">
          <div className="projects-slider-two">
            <div className="owl-carousel projects-carousel-two owl-btn-vertical-center">
              {/* <!-- COLUMNS 1 --> */}
              <div className="item">
                <div className="projects-two-info text-white">
                  <h4 className="wt-tilte m-t0" data-title="01">
                    <a href="javascript:;" className="text-white">
                      Architecture design
                    </a>
                  </h4>
                  <p>
                    We are uncompetitor in architectural solutions Friendly
                    neighbour there that power. Keep away Architecture.
                  </p>
                  <div className="wt-media img-reflection">
                    <img src={arc_img} alt="" style={stylesheet} />
                  </div>
                </div>
              </div>
              {/* <!-- COLUMNS 2 --> */}

              <div className="item">
                <div className="projects-two-info text-white">
                  <h4 className="wt-tilte m-t0" data-title="02">
                    <a href="javascript:;" className="text-white">
                      Interior design
                    </a>
                  </h4>
                  <p>
                    We are uncompetitor in architectural solutions Friendly
                    neighbour there that power. Keep away Architecture.
                  </p>
                  <div className="wt-media img-reflection">
                    <img src={int_img} alt="" style={stylesheet} />
                  </div>
                </div>
              </div>

              {/* <!-- COLUMNS 3 --> */}
              <div className="item">
                <div className="projects-two-info text-white">
                  <h4 className="wt-tilte m-t0" data-title="03">
                    <a href="javascript:;" className="text-white">
                      Landscap design
                    </a>
                  </h4>
                  <p>
                    We are uncompetitor in architectural solutions Friendly
                    neighbour there that power. Keep away Architecture.
                  </p>
                  <div className="wt-media img-reflection">
                    <img src={land_img} alt="" style={stylesheet} />
                  </div>
                </div>
              </div>

              {/* <!-- COLUMNS 4 --> */}
              <div className="item">
                <div className="projects-two-info text-white">
                  <h4 className="wt-tilte m-t0" data-title="04">
                    <a href="javascript:;" className="text-white">
                      Floor design
                    </a>
                  </h4>
                  <p>
                    We are uncompetitor in architectural solutions Friendly
                    neighbour there that power. Keep away Architecture.
                  </p>
                  <div className="wt-media img-reflection">
                    <img src={floor_img} alt="" style={stylesheet} />
                  </div>
                </div>
              </div>

              {/* <!-- COLUMNS 5 --> */}
              <div className="item">
                <div className="projects-two-info text-white">
                  <h4 className="wt-tilte m-t0" data-title="05">
                    <a href="javascript:;" className="text-white">
                      Roof top design
                    </a>
                  </h4>
                  <p>
                    We are uncompetitor in architectural solutions Friendly
                    neighbour there that power. Keep away Architecture.
                  </p>
                  <div className="wt-media img-reflection">
                    <img src={roof_img} alt="" style={stylesheet} />
                  </div>
                </div>
              </div>

              {/* <!-- COLUMNS 6 --> */}
              <div className="item">
                <div className="projects-two-info text-white">
                  <h4 className="wt-tilte m-t0" data-title="06">
                    <a href="javascript:;" className="text-white">
                      Decorations
                    </a>
                  </h4>
                  <p>
                    We are uncompetitor in architectural solutions Friendly
                    neighbour there that power. Keep away Architecture.
                  </p>
                  <div className="wt-media img-reflection">
                    <img src={decor} alt="" style={stylesheet} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    /* <!-- OUR PROJECTS SECTION END --> */
  );
}

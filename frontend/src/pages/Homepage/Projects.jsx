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
    <div class="section-full  p-t80 p-b80 bg-secondry">
      <div class="container">
        <div class="section-head clearfix">
          <div class="wt-tilte-main bdr-r-3 bdr-primary bdr-solid text-white">
            <small class="wt-small-title">All Projects</small>
            <h2 class="m-b5">Our Latest Projects</h2>
          </div>
          <div class="title-right-detail text-white">
            <p>
              We are uncompetitor in architectural solutions Friendly neighbour
              there that power. Keep away Architecture who try to Ambitions
              people do that really great.
            </p>
          </div>
        </div>
      </div>

      <div class="section-content">
        <div class="container-fluid">
          <div class="projects-slider-two">
            <div class="owl-carousel projects-carousel-two owl-btn-vertical-center">
              {/* <!-- COLUMNS 1 --> */}
              <div class="item">
                <div class="projects-two-info text-white">
                  <h4 class="wt-tilte m-t0" data-title="01">
                    <a href="javascript:;" class="text-white">
                      Architecture design
                    </a>
                  </h4>
                  <p>
                    We are uncompetitor in architectural solutions Friendly
                    neighbour there that power. Keep away Architecture.
                  </p>
                  <div class="wt-media img-reflection">
                    <img src={arc_img} alt="" style={stylesheet} />
                  </div>
                </div>
              </div>
              {/* <!-- COLUMNS 2 --> */}

              <div class="item">
                <div class="projects-two-info text-white">
                  <h4 class="wt-tilte m-t0" data-title="02">
                    <a href="javascript:;" class="text-white">
                      Interior design
                    </a>
                  </h4>
                  <p>
                    We are uncompetitor in architectural solutions Friendly
                    neighbour there that power. Keep away Architecture.
                  </p>
                  <div class="wt-media img-reflection">
                    <img src={int_img} alt="" style={stylesheet} />
                  </div>
                </div>
              </div>

              {/* <!-- COLUMNS 3 --> */}
              <div class="item">
                <div class="projects-two-info text-white">
                  <h4 class="wt-tilte m-t0" data-title="03">
                    <a href="javascript:;" class="text-white">
                      Landscap design
                    </a>
                  </h4>
                  <p>
                    We are uncompetitor in architectural solutions Friendly
                    neighbour there that power. Keep away Architecture.
                  </p>
                  <div class="wt-media img-reflection">
                    <img src={land_img} alt="" style={stylesheet} />
                  </div>
                </div>
              </div>

              {/* <!-- COLUMNS 4 --> */}
              <div class="item">
                <div class="projects-two-info text-white">
                  <h4 class="wt-tilte m-t0" data-title="04">
                    <a href="javascript:;" class="text-white">
                      Floor design
                    </a>
                  </h4>
                  <p>
                    We are uncompetitor in architectural solutions Friendly
                    neighbour there that power. Keep away Architecture.
                  </p>
                  <div class="wt-media img-reflection">
                    <img src={floor_img} alt="" style={stylesheet} />
                  </div>
                </div>
              </div>

              {/* <!-- COLUMNS 5 --> */}
              <div class="item">
                <div class="projects-two-info text-white">
                  <h4 class="wt-tilte m-t0" data-title="05">
                    <a href="javascript:;" class="text-white">
                      Roof top design
                    </a>
                  </h4>
                  <p>
                    We are uncompetitor in architectural solutions Friendly
                    neighbour there that power. Keep away Architecture.
                  </p>
                  <div class="wt-media img-reflection">
                    <img src={roof_img} alt="" style={stylesheet} />
                  </div>
                </div>
              </div>

              {/* <!-- COLUMNS 6 --> */}
              <div class="item">
                <div class="projects-two-info text-white">
                  <h4 class="wt-tilte m-t0" data-title="06">
                    <a href="javascript:;" class="text-white">
                      Decorations
                    </a>
                  </h4>
                  <p>
                    We are uncompetitor in architectural solutions Friendly
                    neighbour there that power. Keep away Architecture.
                  </p>
                  <div class="wt-media img-reflection">
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

import React from "react";
import img_one from "../../assets/images/dummy/download_4.avif";
import img_two from "../../assets/images/dummy/download_5.jpg";
import img_three from "../../assets/images/dummy/download_6.jpg";
import img_four from "../../assets/images/dummy/download_7.jpg";
export default function Welcome() {
  return (
    /* <!-- WELCOME SECTION START --> */
    <div class="section-full p-t80 p-b80 bg-gray overflow-hide">
      <div class="container">
        <div class="section-content">
          <div class="row">
            <div class="col-lg-6 col-md-12">
              <div class="arc-home-about-left">
                <div class="arc-home-left-content  bg-gray">
                  <h3 class="m-t0 wt-tilte-light">
                    Design, followed by Form & Function.
                  </h3>
                  <h2 class="m-t0 wt-title">
                    Exploring the Quality Ways through Design.
                  </h2>
                  <p>
                    We are uncompetitor in architectural solutions Friendly
                    neighbour there that power.Keep away Architecture who try to
                    Ambitions people do that really{" "}
                  </p>
                  <a href="javascript:;" class="site-button-link">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-md-12">
              <div class="arc-home-about-right portfolio-wrap">
                <div class="row">
                  <div class="col-md-6 col-sm-6 masonry-item">
                    <div class="arc-about-year text-uppercase text-right m-b20">
                      <div class="arc-about-year-pic">
                        <img src={img_four} alt="" />
                      </div>
                      <div class="arc-about-year-info">
                        <span class="title-small">
                          working <br />
                          experience
                        </span>
                        <h2 class="wt-title m-tb0">Year</h2>
                        <span class="text-outline">12</span>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6 col-sm-6 masonry-item">
                    <div class="wt-media m-b20  img-reflection">
                      <img src={img_one} alt="" />
                    </div>
                  </div>

                  <div class="col-md-6 col-sm-6 masonry-item">
                    <div class="wt-media m-b20  img-reflection">
                      <img src={img_two} alt="" />
                    </div>
                  </div>

                  <div class="col-md-6 col-sm-6 masonry-item">
                    <div class="wt-media m-b20  img-reflection">
                      <img src={img_three} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    /* <!-- WELCOME  SECTION END -->   */
  );
}

import React from "react";
import { Link } from "react-router-dom";

import aboutOne from "../../assets/images/dummy/about1.jpg";
import aboutTwo from "../../assets/images/dummy/about2.jpg";
import aboutThree from "../../assets/images/dummy/about3.webp";

import TeamOne from "../../assets/images/dummy/team1.jpg";
import TeamTwo from "../../assets/images/dummy/team2.jpg";
import TeamThree from "../../assets/images/dummy/team3.jpg";

export default function AboutUs() {
  const stylesheet = {
    height: "300px",
    width: "100%",
  };
  return (
    //  <!-- CONTENT START -->
    <div class="page-content">
      {/* <!-- INNER PAGE BANNER --> */}
      <div
        class="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
        data-stellar-background-ratio="0.5"
        style={{ backgroundImage: "url(images/dummy/about.webp)" }}
      >
        <div class="overlay-main bg-black opacity-07"></div>
        <div class="container">
          <div class="wt-bnr-inr-entry">
            <div class="banner-title-outer">
              <div class="banner-title-name">
                <h2 class="text-white">About Us</h2>
              </div>
            </div>
            {/* <!-- BREADCRUMB ROW -->                             */}

            <div>
              <ul class="wt-breadcrumb breadcrumb-style-2">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>About 1</li>
              </ul>
            </div>

            {/* <!-- BREADCRUMB ROW END -->                         */}
          </div>
        </div>
      </div>
      {/* <!-- INNER PAGE BANNER END --> */}

      {/* <!-- WELCOME SECTION START --> */}
      <div class="section-full p-t80 p-b80 bg-white overflow-hide">
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
                      neighbour there that power.Keep away Architecture who try
                      to Ambitions people do that really{" "}
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
                        <div class="arc-about-year-pic img-reflection">
                          <img src="images/about/s-1.jpg" alt="" />
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
                      <div class="wt-media m-b20 img-reflection">
                        <img src={aboutOne} alt="" />
                      </div>
                    </div>

                    <div class="col-md-6 col-sm-6 masonry-item">
                      <div class="wt-media m-b20 img-reflection">
                        <img src={aboutTwo} alt="" />
                      </div>
                    </div>

                    <div class="col-md-6 col-sm-6 masonry-item">
                      <div class="wt-media m-b20 img-reflection">
                        <img src={aboutThree} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- WELCOME  SECTION END -->   */}

      {/* <!-- OUR SERVICES START --> */}
      <div class="section-full p-t80 p-b50 bg-gray">
        <div class="container">
          <div class="section-head clearfix">
            <div class="wt-tilte-main bdr-r-3 bdr-primary bdr-solid">
              <small class="wt-small-title">Work service</small>
              <h2 class="m-b5">Our great provided</h2>
            </div>
            <div class="title-right-detail">
              <p>
                We are uncompetitor in architectural solutions Friendly
                neighbour there that power. Keep away Architecture who try to
                Ambitions people do that really great.
              </p>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="wt-icon-box-wraper m-b30 p-lr30 p-tb25 data-title-large  v-icon-effect block-bg-hover bg-white">
                <div class="icon-content m-b30">
                  <h4 class="wt-tilte-large m-t0" data-title="A">
                    Architecture design
                  </h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and type.
                  </p>
                  <a href="javascript:;" class="site-button-link">
                    Read More
                  </a>
                </div>
                <div class="icon-xl inline-icon">
                  <span class="icon-cell">
                    <i class="flaticon-mansion v-icon"></i>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="wt-icon-box-wraper m-b30 p-lr30 p-tb25 data-title-large  v-icon-effect block-bg-hover bg-white">
                <div class="icon-content m-b30">
                  <h4 class="wt-tilte-large m-t0" data-title="S">
                    smart Interior design
                  </h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and type.
                  </p>
                  <a href="javascript:;" class="site-button-link">
                    Read More
                  </a>
                </div>
                <div class="icon-xl inline-icon">
                  <span class="icon-cell">
                    <i class="flaticon-stair v-icon"></i>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="wt-icon-box-wraper m-b30 p-lr30 p-tb25 data-title-large  v-icon-effect block-bg-hover bg-white">
                <div class="icon-content m-b30">
                  <h4 class="wt-tilte-large m-t0" data-title="R">
                    Residential design
                  </h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and type.
                  </p>
                  <a href="javascript:;" class="site-button-link">
                    Read More
                  </a>
                </div>
                <div class="icon-xl inline-icon">
                  <span class="icon-cell">
                    <i class="flaticon-apartment v-icon"></i>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="wt-icon-box-wraper m-b30 p-lr30 p-tb25 data-title-large  v-icon-effect block-bg-hover bg-white">
                <div class="icon-content m-b30">
                  <h4 class="wt-tilte-large m-t0" data-title="L">
                    landscape design
                  </h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and type.
                  </p>
                  <a href="javascript:;" class="site-button-link">
                    Read More
                  </a>
                </div>
                <div class="icon-xl inline-icon">
                  <span class="icon-cell">
                    <i class="flaticon-photo v-icon"></i>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="wt-icon-box-wraper m-b30 p-lr30 p-tb25 data-title-large  v-icon-effect block-bg-hover bg-white">
                <div class="icon-content m-b30">
                  <h4 class="wt-tilte-large m-t0" data-title="P">
                    Plans and Projects
                  </h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and type.
                  </p>
                  <a href="javascript:;" class="site-button-link">
                    Read More
                  </a>
                </div>
                <div class="icon-xl inline-icon">
                  <span class="icon-cell">
                    <i class="flaticon-sketch v-icon"></i>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="wt-icon-box-wraper m-b30 p-lr30 p-tb25 data-title-large  v-icon-effect block-bg-hover bg-white">
                <div class="icon-content m-b30">
                  <h4 class="wt-tilte-large m-t0" data-title="K">
                    Kitchen design{" "}
                  </h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and type.
                  </p>
                  <a href="javascript:;" class="site-button-link">
                    Read More
                  </a>
                </div>
                <div class="icon-xl inline-icon">
                  <span class="icon-cell">
                    <i class="flaticon-kitchen v-icon"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- OUR SERVICES END --> */}

      {/* <!-- OUR TEAM START --> */}
      <div class="section-full p-t80 p-b50 bg-white">
        <div class="container">
          <div class="section-head clearfix">
            <div class="wt-tilte-main bdr-r-3 bdr-primary bdr-solid">
              <small class="wt-small-title">Our Experts</small>
              <h2 class="m-b5">Our Best Team</h2>
            </div>
            <div class="title-right-detail">
              <p>
                We are uncompetitor in architectural solutions Friendly
                neighbour there that power. Keep away Architecture who try to
                Ambitions people do that really great.
              </p>
            </div>
          </div>

          <div class="section-content">
            <div class="row justify-content-center">
              <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="wt-team-arc2">
                  <div class="wt-media">
                    <img src={TeamOne} alt="" style={stylesheet} />
                    <div class="team-social-center">
                      <ul class="team-social-icon">
                        <li>
                          <a
                            href="javascript:void(0);"
                            class="fa fa-google"
                          ></a>
                        </li>
                        <li>
                          <a href="javascript:void(0);" class="fa fa-rss"></a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            class="fa fa-facebook"
                          ></a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            class="fa fa-twitter"
                          ></a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            class="fa fa-linkedin"
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="wt-info bg-white p-a30">
                    <div class="team-detail  text-center">
                      <h4 class="m-t0">Taminm Alows</h4>
                      <p>Architect</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="wt-team-arc2">
                  <div class="wt-media">
                    <img src={TeamTwo} alt="" style={stylesheet} />
                    <div class="team-social-center">
                      <ul class="team-social-icon">
                        <li>
                          <a
                            href="javascript:void(0);"
                            class="fa fa-google"
                          ></a>
                        </li>
                        <li>
                          <a href="javascript:void(0);" class="fa fa-rss"></a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            class="fa fa-facebook"
                          ></a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            class="fa fa-twitter"
                          ></a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            class="fa fa-linkedin"
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="wt-info bg-white p-a30">
                    <div class="team-detail  text-center">
                      <h4 class="m-t0">Michael Evens</h4>
                      <p>Architect</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="wt-team-arc2">
                  <div class="wt-media">
                    <img src={TeamThree} alt="" style={stylesheet} />
                    <div class="team-social-center">
                      <ul class="team-social-icon">
                        <li>
                          <a
                            href="javascript:void(0);"
                            class="fa fa-google"
                          ></a>
                        </li>
                        <li>
                          <a href="javascript:void(0);" class="fa fa-rss"></a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            class="fa fa-facebook"
                          ></a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            class="fa fa-twitter"
                          ></a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            class="fa fa-linkedin"
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="wt-info bg-white p-a30">
                    <div class="team-detail  text-center">
                      <h4 class="m-t0">Pamela Smith</h4>
                      <p>Architect</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- OUR TEAM END -->   */}

      {/* <!-- OUR STORY SECTION START --> */}
      <div class="bg-white">
        <div class="section-content">
          <div class="row awards-win-section">
            <div
              class="col-lg-6 col-md-12  awards-win-section-left bg-cover bg-no-repeat bg-center bg-gray"
              style={{ backgroundImage: "url(images/dummy/skyscrapper.jpg)" }}
            >
              <div class="awards-win-left-content"></div>
            </div>
            <div class="col-lg-6 col-md-12 awards-win-section-right bg-gray">
              <div class="awards-win-right-content">
                <div class="awards-win">
                  <ul>
                    {/* <!-- COLUMNS 2 --> */}
                    <li>
                      <h2 class="title-year">2016</h2>
                      <h4 class=" m-b10">
                        Business Council Architectural Award - Healthcare
                      </h4>
                      <p>
                        Vitae adipiscing turpis. Aenean ligula nibh, molestie id
                        viverra a, dapibus at dolor. In iaculis viverra neque.
                      </p>
                    </li>
                    {/* <!-- COLUMNS 3 --> */}
                    <li>
                      <h2 class="title-year">2017</h2>
                      <h4 class=" m-b10">
                        DBIA Western Pacific Region Project of the Year
                      </h4>
                      <p>
                        Vitae adipiscing turpis. Aenean ligula nibh, molestie id
                        viverra a, dapibus at dolor. In iaculis viverra neque.
                      </p>
                    </li>
                    {/* <!-- COLUMNS 4 --> */}
                    <li>
                      <h2 class="title-year">2018</h2>
                      <h4 class=" m-b10">
                        ENR New York Higher Education Award
                      </h4>
                      <p>
                        Vitae adipiscing turpis. Aenean ligula nibh, molestie id
                        viverra a, dapibus at dolor. In iaculis viverra neque.{" "}
                      </p>
                    </li>
                    {/* <!-- COLUMNS 5 --> */}
                    <li>
                      <h2 class="title-year">2019</h2>
                      <h4 class=" m-b10">AIA Healthcare Design Awards</h4>
                      <p>
                        Vitae adipiscing turpis. Aenean ligula nibh, molestie id
                        viverra a, dapibus at dolor. In iaculis viverra neque.{" "}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- OUR STORY SECTION END -->*/}
    </div>
    /* <!-- CONTENT END --> */
  );
}

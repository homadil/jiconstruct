import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    /* <!-- OUR SERVICES START --> */
    <section id="service" class="section-full p-t80 p-b50 bg-gray">
      <div class="container">
        <div class="section-head clearfix">
          <div class="wt-tilte-main bdr-r-3 bdr-primary bdr-solid">
            <small class="wt-small-title">Work service</small>
            <h2 class="m-b5">Our great provided</h2>
          </div>
          <div class="title-right-detail">
            <p>
              We are uncompetitor in architectural solutions Friendly neighbour
              there that power. Keep away Architecture who try to Ambitions
              people do that really great.
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
                <Link
                  to={{
                    pathname: "/project_detail",
                    search: "?service=architecture",
                  }}
                  className="site-button-link"
                >
                  Read More
                </Link>
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
                <Link
                  to={{
                    pathname: "/project_detail",
                    search: "?service=interior",
                  }}
                  className="site-button-link"
                >
                  Read More
                </Link>
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
                <Link
                  to={{
                    pathname: "/project_detail",
                    search: "?service=residential",
                  }}
                  className="site-button-link"
                >
                  Read More
                </Link>
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
                <Link
                  to={{
                    pathname: "/project_detail",
                    search: "?service=landscape",
                  }}
                  className="site-button-link"
                >
                  Read More
                </Link>
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
                <Link
                  to={{
                    pathname: "/project_detail",
                    search: "?service=plansAndProject",
                  }}
                  className="site-button-link"
                >
                  Read More
                </Link>
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
                <Link
                  to={{
                    pathname: "/project_detail",
                    search: "?service=kitchen",
                  }}
                  className="site-button-link"
                >
                  Read More
                </Link>
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
    </section>
    /* <!-- OUR SERVICES END --> */
  );
}

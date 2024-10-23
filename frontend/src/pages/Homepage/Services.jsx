import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../store";

export default function Services() {
  const { categories, backend_url } = useContext(DataContext);

  const sortedCategories = categories.sort(
    (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
  ); // Sort by createdAt ascending
  const getFirstCharUppercase = (str) => {
    if (!str) return ""; // Return empty string if input is empty or undefined
    return str.charAt(0).toUpperCase();
  };
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
          {sortedCategories.map((categories, index) => {
            return (
              <div key={index} class="col-lg-4 col-md-6 col-sm-6">
                <div class="wt-icon-box-wraper m-b30 p-lr30 p-tb25 data-title-large  v-icon-effect block-bg-hover bg-white">
                  <div class="icon-content m-b30">
                    <h4
                      class="wt-tilte-large m-t0"
                      data-title={getFirstCharUppercase(categories.name)}
                    >
                      {categories.name}
                    </h4>
                    <p>{categories.description}</p>
                    <Link
                      to={`/project_carousel?service=${encodeURIComponent(
                        categories.name
                      )}&id=${categories.id}`}
                      className="site-button-link"
                    >
                      Read More
                    </Link>
                  </div>
                  <div class="icon-xl inline-icon">
                    <span class="icon-cell">
                      <i className={`${categories.icon} v-icon`}></i>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    /* <!-- OUR SERVICES END --> */
  );
}

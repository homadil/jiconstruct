import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../store";

export default function Services() {
  const { categories } = useContext(DataContext);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const themeDetector = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkTheme(themeDetector.matches);
    themeDetector.addEventListener("change", (e) => setIsDarkTheme(e.matches));

    return () =>
      themeDetector.removeEventListener("change", (e) =>
        setIsDarkTheme(e.matches)
      );
  }, []);

  const sortedCategories = categories.sort(
    (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
  );

  const getFirstCharUppercase = (str) => {
    return str ? str.charAt(0).toUpperCase() : "";
  };

  return (
    <section id="service" className="section-full p-t80 p-b50 bg-gray">
      <div className="container">
        <div className="section-head clearfix">
          <div className="wt-tilte-main bdr-r-3 bdr-primary bdr-solid">
            <small className="wt-small-title">Services we provide:</small>
            <h2 className="m-b5">Our great provided</h2>
          </div>
          <div className="title-right-detail">
            <p>
              We are uncompetitor in architectural solutions Friendly neighbour
              there that power. Keep away Architecture who try to Ambitions
              people do that really great.
            </p>
          </div>
        </div>
        <div className="row">
          {sortedCategories.map((category, index) => {
            return (
              <div key={index} className="col-lg-4 col-md-6 col-sm-6">
                <div
                  className="wt-icon-box-wraper m-b30 p-lr30 p-tb25 data-title-large v-icon-effect block-bg-hover"
                  style={{
                    backgroundColor: isDarkTheme ? "#333" : "#fff",
                    color: isDarkTheme ? "#ddd" : "#333",
                    boxShadow: isDarkTheme
                      ? "0px 4px 12px rgba(255, 255, 255, 0.1)"
                      : "0px 4px 12px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div className="icon-content m-b30">
                    <h4
                      className="wt-tilte-large m-t0"
                      data-title={getFirstCharUppercase(category.name)}
                      style={{
                        color: isDarkTheme ? "#ddd" : "#333",
                      }}
                    >
                      {category.name}
                    </h4>
                    <p>{category.description}</p>
                    <Link
                      to={`/project_carousel?service=${encodeURIComponent(
                        category.name
                      )}&id=${category.id}`}
                      className="site-button-link"
                      style={{
                        color: isDarkTheme ? "#9ecbff" : "#007bff",
                        textDecoration: "underline",
                      }}
                    >
                      Read More
                    </Link>
                  </div>
                  <div className="icon-xl inline-icon">
                    <span className="icon-cell">
                      <i
                        className={`${category.icon} v-icon`}
                        style={{ color: isDarkTheme ? "#fff" : "#007bff" }}
                      ></i>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

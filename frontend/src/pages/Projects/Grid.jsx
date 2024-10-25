import React, { useContext, useState, useEffect } from "react";
import bg from "../../assets/videos/dummy/project.mp4";
import { Link } from "react-router-dom";
import { DataContext } from "../../store";

export default function Grid() {
  const { projects, backend_url, truncateContent } = useContext(DataContext);
  const [filteredProjects, setFilteredProjects] = useState([]);

  const sortedProjects = projects.sort(
    (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
  );

  const categoryCounts = {};
  sortedProjects.forEach((project) => {
    project.Categories.forEach((category) => {
      const categoryName = category.name;
      if (categoryCounts[categoryName]) {
        categoryCounts[categoryName]++;
      } else {
        categoryCounts[categoryName] = 1;
      }
    });
  });

  const categories = Object.keys(categoryCounts).map((categoryName) => ({
    name: categoryName,
    amount: categoryCounts[categoryName],
  }));

  useEffect(() => {
    setFilteredProjects(projects); // Show all projects on initial render
  }, [projects]);

  const filterProjects = (category) => {
    if (category === "All") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) =>
        project.Categories.some((cat) => cat.name === category)
      );
      setFilteredProjects(filtered);
    }
  };

  const stylesheet = {
    height: "250px",
    width: "100%",
    position: "relative",
  };

  return (
    <div className="page-content">
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
            opacity: "0.8",
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
                <h2 className="text-white">Projects Grid</h2>
              </div>
            </div>

            <div>
              <ul className="wt-breadcrumb breadcrumb-style-2">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>Project Grid</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="section-full p-t80 p-b50 bg-gray">
        <div className="container">
          <div className="filter-wrap p-b30">
            <ul className="masonry-filter link-style text-uppercase">
              <li className="active">
                <a onClick={() => filterProjects("All")} href="#">
                  All
                </a>
              </li>
              {categories.map((cat, index) => (
                <li key={index}>
                  <a onClick={() => filterProjects(cat.name)} href="#">
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="portfolio-wrap mfp-gallery work-grid row clearfix"
            style={{ position: "relative" }}
          >
            {filteredProjects.map((item, index) => (
              <div
                key={index}
                className={`masonry - item cat-${
                  index + 1
                } col-lg-4 col-md-6 col-sm-12 m-b30`}
                style={{ position: "relative" }}
              >
                <div className="project-img-effect-1">
                  <img
                    src={`${backend_url}/${item.show}`}
                    alt=""
                    style={stylesheet}
                  />
                  <div className="wt-info">
                    <h4 className="wt-tilte text-white m-b10 m-t0">
                      {truncateContent(item.title, 4)}
                    </h4>
                    <p>{truncateContent(item.description, 20)}</p>
                  </div>
                  <Link
                    to={{
                      pathname: "/project_detail",
                      search: `?id=${item.id}`,
                    }}
                    className="text-white text-capitalize"
                  >
                    <i></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useContext } from "react";
import { DataContext } from "../../store";
export default function Welcome() {
  const { homeGrid, backend_url } = useContext(DataContext);

  const [homeGridFirstIndex, ...remainingHomeGrid] = homeGrid;

  if (!homeGridFirstIndex || remainingHomeGrid.length <= 0) {
    return;
  }

  return (
    /* <!-- WELCOME SECTION START --> */
    <div className="section-full p-t80 p-b80 bg-gray overflow-hide">
      <div className="container">
        <div className="section-content">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="arc-home-about-left">
                <div className="arc-home-left-content  bg-gray">
                  <h3 className="m-t0 wt-tilte-light">
                    Building Tomorrow, Today
                  </h3>
                  <h2 className="m-t0 wt-title">
                    Innovative Infrastructure and Sustainable Development
                  </h2>
                  <p>
                    Ji Construct Limited combines innovative engineering and
                    sustainability to shape the future of infrastructure.
                    Specializing in highways, eco-friendly agricultural
                    development, real estate, renewable energy, and construction
                    software solutions, we create projects that meet today’s
                    needs while preserving resources for tomorrow.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="arc-home-about-right portfolio-wrap">
                <div className="row">
                  <div className="col-md-6 col-sm-6 masonry-item">
                    <div className="arc-about-year text-uppercase text-right m-b20">
                      <div className="arc-about-year-pic">
                        <img
                          src={backend_url + "/" + homeGridFirstIndex.path}
                          style={{ height: "200px", width: "100%" }}
                          alt="homeGridFirstIndex.path"
                        />
                      </div>
                      <div className="arc-about-year-info">
                        <span className="title-small fs-5">
                          A legacy of <br />
                          innovation
                        </span>
                        <h2 className="wt-title m-tb0">and</h2>
                        <span className="title-small fs-5">expertise</span>
                      </div>
                    </div>
                  </div>

                  {remainingHomeGrid.map((item, index) => (
                    <div key={index} className="col-md-6 col-sm-6 masonry-item">
                      <div className="wt-media m-b20  img-reflection">
                        <img
                          src={backend_url + "/" + item?.path}
                          alt={item?.path}
                          style={{ height: "200px", width: "100%" }}
                        />
                      </div>
                    </div>
                  ))}
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

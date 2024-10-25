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
                    Design, followed by Form & Function.
                  </h3>
                  <h2 className="m-t0 wt-title">
                    Exploring the Quality Ways through Design.
                  </h2>
                  <p>
                    We are uncompetitor in architectural solutions Friendly
                    neighbour there that power.Keep away Architecture who try to
                    Ambitions people do that really{" "}
                  </p>
                  <a href="javascript:;" className="site-button-link">
                    Read More
                  </a>
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
                          alt=""
                        />
                      </div>
                      <div className="arc-about-year-info">
                        <span className="title-small">
                          working <br />
                          experience
                        </span>
                        <h2 className="wt-title m-tb0">Year</h2>
                        <span className="text-outline">12</span>
                      </div>
                    </div>
                  </div>

                  {remainingHomeGrid.map((item, index) => (
                    <div key={index} className="col-md-6 col-sm-6 masonry-item">
                      <div className="wt-media m-b20  img-reflection">
                        <img
                          src={backend_url + "/" + item?.path}
                          alt=""
                          height={200}
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

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Welcome from "../Homepage/Welcome";
import { DataContext } from "../../store";
import Services from "../Homepage/Services";
import Team from "../Homepage/Team";
import { Helmet } from "react-helmet-async";

export default function AboutUs() {
  const stylesheet = {
    height: "300px",
    width: "100%",
  };

  const { aboutUsHeader, homeGrid, aboutUsImage, backend_url } =
    useContext(DataContext);

  const [homeGridFirstIndex, ...remainingHomeGrid] = homeGrid;

  if (!homeGridFirstIndex || remainingHomeGrid.length <= 0) {
    return;
  }

  return (
    //  <!-- CONTENT START -->
    <div className="page-content">
      <Helmet>
        <title>Ji Construct | About Us</title>
      </Helmet>
      {/* <!-- INNER PAGE BANNER --> */}
      <div
        className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
        data-stellar-background-ratio="0.5"
        style={{
          backgroundImage: `url(${backend_url}/${aboutUsHeader[0]?.path})`,
        }}
      >
        <div className="overlay-main bg-black opacity-07"></div>
        <div className="container">
          <div className="wt-bnr-inr-entry">
            <div className="banner-title-outer">
              <div className="banner-title-name">
                <h2 className="text-white">About Us</h2>
              </div>
            </div>
            {/* <!-- BREADCRUMB ROW -->                             */}

            <div>
              <ul className="wt-breadcrumb breadcrumb-style-2">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>About Us</li>
              </ul>
            </div>

            {/* <!-- BREADCRUMB ROW END -->                         */}
          </div>
        </div>
      </div>
      {/* <!-- INNER PAGE BANNER END --> */}

      {/* <!-- WELCOME SECTION START --> */}
      <div className="section-full p-t80 p-b80 bg-white overflow-hide">
        <div className="container">
          <div className="section-content">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="arc-home-about-left">
                  <div className="arc-home-left-content  bg-gray">
                    <h3 className="m-t0 wt-tilte-light">About Us</h3>
                    <h2 className="m-t0 wt-title">
                      Transforming Vision into Reality
                    </h2>
                    <p>
                      Ji Construct Limited is at the forefront of modern
                      construction, specializing in sustainable infrastructure,
                      advanced engineering, and innovative solutions that meet
                      the diverse needs of today’s world. Founded on the
                      principles of quality, integrity, and forward-thinking, we
                      approach every project as an opportunity to create spaces
                      that empower, connect, and inspire.
                      <div className="p-4">
                        Our expertise spans highway engineering, real estate
                        development, agricultural infrastructure, renewable
                        energy solutions, and software tailored for the
                        construction sector. We don’t just build; we bring
                        together sustainable practices, cutting-edge technology,
                        and a commitment to excellence in everything we do. Our
                        projects are designed to leave a positive, lasting
                        impact on the communities and industries we serve.
                      </div>
                      <div className="p-3">
                        At Ji Construct, our team is our driving force. With
                        professionals who are passionate and highly skilled, we
                        collaborate closely with our clients and partners to
                        understand their visions and exceed their expectations.
                        Our trusted partnerships amplify our impact, enabling us
                        to deliver comprehensive solutions with reliability and
                        innovation. Together, we’re shaping the future of
                        infrastructure, one project at a time, with a focus on
                        resilience and sustainability for a brighter tomorrow.
                      </div>
                      <div>
                        Explore our journey, values, and expertise, and see how
                        Ji Construct Limited is committed to building not just
                        structures, but possibilities for generations to come.
                      </div>
                    </p>
                  </div>
                </div>
              </div>

              <Welcome />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- WELCOME  SECTION END -->   */}

      {/* <!-- OUR SERVICES START --> */}
      <Services />
      {/* <!-- OUR SERVICES END --> */}

      {/* <!-- OUR TEAM START --> */}
      <Team />
      {/* <!-- OUR TEAM END -->   */}

      {/* <!-- OUR STORY SECTION START --> */}
      <div className="bg-white">
        <div className="section-content">
          <div className="row awards-win-section">
            <div
              className="col-lg-6 col-md-12  awards-win-section-left bg-cover bg-no-repeat bg-center bg-gray"
              style={{
                backgroundImage: `url(${backend_url}/${aboutUsImage[0]?.path})`,
              }}
            >
              <div className="awards-win-left-content"></div>
            </div>
            <div className="col-lg-6 col-md-12 awards-win-section-right bg-gray">
              <div className="awards-win-right-content">
                <div className="awards-win">
                  <ul>
                    {/* <!-- COLUMNS 2 --> */}
                    <li>
                      <h2 className="title-year">2016</h2>
                      <h4 className=" m-b10">
                        Business Council Architectural Award - Healthcare
                      </h4>
                      <p>
                        Vitae adipiscing turpis. Aenean ligula nibh, molestie id
                        viverra a, dapibus at dolor. In iaculis viverra neque.
                      </p>
                    </li>
                    {/* <!-- COLUMNS 3 --> */}
                    <li>
                      <h2 className="title-year">2017</h2>
                      <h4 className=" m-b10">
                        DBIA Western Pacific Region Project of the Year
                      </h4>
                      <p>
                        Vitae adipiscing turpis. Aenean ligula nibh, molestie id
                        viverra a, dapibus at dolor. In iaculis viverra neque.
                      </p>
                    </li>
                    {/* <!-- COLUMNS 4 --> */}
                    <li>
                      <h2 className="title-year">2018</h2>
                      <h4 className=" m-b10">
                        ENR New York Higher Education Award
                      </h4>
                      <p>
                        Vitae adipiscing turpis. Aenean ligula nibh, molestie id
                        viverra a, dapibus at dolor. In iaculis viverra neque.{" "}
                      </p>
                    </li>
                    {/* <!-- COLUMNS 5 --> */}
                    <li>
                      <h2 className="title-year">2019</h2>
                      <h4 className=" m-b10">AIA Healthcare Design Awards</h4>
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

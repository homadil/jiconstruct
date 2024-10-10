import React from "react";
import teamOne from "../../assets/images/dummy/tes1.avif";
import teamTwo from "../../assets/images/dummy/test2.jpg";
import teamThree from "../../assets/images/dummy/team3.jpg";

export default function Team() {
  const stylesheet = {
    height: "400px",
    width: "100%",
  };
  return (
    /* <!-- OUR TEAM START --> */
    <section id="team" class="section-full p-t80 p-b50 bg-white our-team-two">
      <div class="container">
        <div class="section-head clearfix">
          <div class="wt-tilte-main bdr-r-3 bdr-primary bdr-solid">
            <small class="wt-small-title">Our Experts</small>
            <h2 class="m-b5">Our Best Team</h2>
          </div>
          <div class="title-right-detail">
            <p>
              We are uncompetitor in architectural solutions Friendly neighbour
              there that power. Keep away Architecture who try to Ambitions
              people do that really great.
            </p>
          </div>
        </div>

        <div class="section-content">
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="wt-team-arc2">
                <div class="wt-media">
                  <img src={teamOne} alt="" style={stylesheet} />
                  <div class="team-social-center">
                    <ul class="team-social-icon">
                      <li>
                        <a href="javascript:void(0);" class="fa fa-google"></a>
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
                        <a href="javascript:void(0);" class="fa fa-twitter"></a>
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
                  <img src={teamTwo} alt="" style={stylesheet} />
                  <div class="team-social-center">
                    <ul class="team-social-icon">
                      <li>
                        <a href="javascript:void(0);" class="fa fa-google"></a>
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
                        <a href="javascript:void(0);" class="fa fa-twitter"></a>
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
                  <img src={teamThree} alt="" style={stylesheet} />
                  <div class="team-social-center">
                    <ul class="team-social-icon">
                      <li>
                        <a href="javascript:void(0);" class="fa fa-google"></a>
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
                        <a href="javascript:void(0);" class="fa fa-twitter"></a>
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
    </section>
    /* <!-- OUR TEAM END -->   */
  );
}

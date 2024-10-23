import React, { useContext } from "react";
import { DataContext } from "../../store";

export default function Team() {
  const { teams, backend_url } = useContext(DataContext);
  const sortedTeams = teams
    .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)) // Sort by createdAt ascending
    .slice(0, 4); // Get the first four teams

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
            {sortedTeams.map((team) => {
              return (
                <div class="col-lg-4 col-md-6 col-sm-12">
                  <div class="wt-team-arc2">
                    <div class="wt-media">
                      <img
                        src={backend_url + "/" + team.image}
                        alt={team.name}
                        style={stylesheet}
                      />
                      <div class="team-social-center">
                        <ul class="team-social-icon">
                          {team?.Urls.map((url) => {
                            return (
                              <li>
                                <a
                                  href={url.link}
                                  class={`fa  ${url.image ? "" : url.icon}`}
                                >
                                  {url.image && (
                                    <img
                                      src={`${backend_url}/${url.image}`}
                                      alt=""
                                      className="img-fluid rounded-circle"
                                    />
                                  )}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>

                    <div class="wt-info bg-white p-a30">
                      <div class="team-detail  text-center">
                        <h4 class="m-t0">{team.name}</h4>
                        <p>{team.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
    /* <!-- OUR TEAM END -->   */
  );
}

const stylesheet = {
  height: "300px",
  width: "100%",
};

import React, { useContext } from "react";
import { DataContext } from "../../store";

export default function Team() {
  const { teams, backend_url } = useContext(DataContext);
  const sortedTeams = teams
    .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)) // Sort by createdAt ascending
    .slice(0, 4); // Get the first four teams

  return (
    /* <!-- OUR TEAM START --> */
    <section
      id="team"
      className="section-full p-t80 p-b50 bg-white our-team-two"
    >
      <div className="container">
        <div className="section-head clearfix">
          <div className="wt-tilte-main bdr-r-3 bdr-primary bdr-solid">
            <small className="wt-small-title">Our Team</small>
            <h2 className="m-b5">Expertise and Innovation at Work</h2>
          </div>
          <div className="title-right-detail">
            <p>
              At Ji Construct, our dedicated team brings ideas to life with
              passion and precision, leading the way in sustainable, impactful
              construction. Meet the professionals driving our success and
              shaping a better future.
            </p>
          </div>
        </div>

        <div className="section-content">
          <div className="row justify-content-center">
            {sortedTeams.map((team, index) => {
              return (
                <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                  <div className="wt-team-arc2">
                    <div className="wt-media">
                      <img
                        src={backend_url + "/" + team.image}
                        alt={team.name}
                        style={stylesheet}
                      />
                      <div className="team-social-center">
                        <ul className="team-social-icon">
                          {team?.Urls.map((url, index) => {
                            return (
                              <li key={index}>
                                <a
                                  href={url.link}
                                  className={`fa  ${url.image ? "" : url.icon}`}
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

                    <div className="wt-info bg-white p-a30">
                      <div className="team-detail  text-center">
                        <h4 className="m-t0">{team.name}</h4>
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

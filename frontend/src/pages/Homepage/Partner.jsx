import React, { useContext } from "react";
import { DataContext } from "../../store";

export default function Partner() {
  const { partners, backend_url } = useContext(DataContext);

  const sortedPartners = partners
    .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)) // Sort by createdAt ascending
    .slice(0, 8); // Get the first four teams

  return (
    /* <!-- OUR PARTNER START --> */
    <div className="section-full p-t80 p-b50 bg-white">
      <div className="container">
        <div className="section-head clearfix">
          <div className="wt-tilte-main bdr-r-3 bdr-primary bdr-solid">
            <small className="wt-small-title">Our Partners</small>
            <h2 className="m-b5">Building Success Together</h2>
          </div>
          <div className="title-right-detail">
            <p>
              Our trusted partners empower us to achieve impactful, sustainable
              solutions. Together, we’re setting new standards in construction
              and driving positive change in every project.
            </p>
          </div>
        </div>
        <div className="section-content client-logo ">
          <div className="row justify-content-center">
            {sortedPartners?.map((partner, index) => (
              <div key={index} className="col-6 col-sm-4 col-md-3">
                <a href="#" className="wt-img-effect client-logo-media shadow">
                  <img src={`${backend_url}/${partner.image}`} alt="" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    /* <!-- OUR PARTNER END --> */
  );
}

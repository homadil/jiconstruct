import React, { useContext } from "react";
import { DataContext } from "../../store";

export default function Partner() {
  const { partners, backend_url } = useContext(DataContext);

  const sortedPartners = partners
    .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)) // Sort by createdAt ascending
    .slice(0, 8); // Get the first four teams

  return (
    /* <!-- OUR PARTNER START --> */
    <div class="section-full p-t80 p-b50 bg-white">
      <div class="container">
        <div class="section-content client-logo ">
          <div class="row justify-content-center">
            {sortedPartners?.map((partner, index) => (
              <div class="col-6 col-sm-4 col-md-3">
                <a href="#" class="wt-img-effect client-logo-media shadow">
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

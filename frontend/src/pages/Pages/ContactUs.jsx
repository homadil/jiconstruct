import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../store";
export default function ContactUs() {
  const { contactUsHeader, backend_url } = useContext(DataContext);
  const [formData, setFormData] = useState({
    name: null,
    email: null,
    message: null,
  });
  function handleSubmit(params) {}
  return (
    //  <!-- CONTENT START -->
    <div class="page-content">
      {/* <!-- INNER PAGE BANNER --> */}
      <div
        class="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
        data-stellar-background-ratio="0.5"
        style={{
          backgroundImage: `url(${backend_url}/${contactUsHeader[0]?.path})`,
        }}
      >
        <div class="overlay-main bg-black opacity-07"></div>
        <div class="container">
          <div class="wt-bnr-inr-entry">
            <div class="banner-title-outer">
              <div class="banner-title-name">
                <h2 class="text-white">Contact Us</h2>
              </div>
            </div>
            {/* <!-- BREADCRUMB ROW -->                             */}

            <div>
              <ul class="wt-breadcrumb breadcrumb-style-2">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>Contact Us</li>
              </ul>
            </div>

            {/* <!-- BREADCRUMB ROW END -->                         */}
          </div>
        </div>
      </div>
      {/* <!-- INNER PAGE BANNER END --> */}

      {/* <!-- SECTION CONTENTG START --> */}
      <div class="section-full p-t80">
        {/* <!-- LOCATION BLOCK--> */}
        <div class="container">
          {/* <!-- GOOGLE MAP & CONTACT FORM --> */}
          <div class="section-content">
            <div class="contact-form p-a30 bg-gray">
              <form class="cons-contact-form" onClick={handleSubmit}>
                <div class="contact-one">
                  {/* <!-- TITLE START --> */}
                  <div class="section-head text-left">
                    <h3 class="m-b5">Get In Touch</h3>
                  </div>
                  {/* <!-- TITLE END -->   */}
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          name="username"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              name: e.currentTarget.value,
                            })
                          }
                          class="form-control"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          name="email"
                          type="text"
                          class="form-control"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              email: e.currentTarget.value,
                            })
                          }
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <textarea
                          name="message"
                          rows="4"
                          class="form-control "
                          required
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.currentTarget.value,
                            })
                          }
                          placeholder="Message"
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="text-right">
                        <button
                          name="submit"
                          type="submit"
                          value="Submit"
                          class="site-button radius-no text-uppercase font-weight-600"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div class="contact-info text-center m-t80 m-b50">
              <div class="row justify-content-center">
                <div class="col-lg-4 col-md-4">
                  <div class="wt-icon-box-wraper center m-b30">
                    <div class="icon-md m-b20">
                      <i class="sl-icon-phone"></i>
                    </div>
                    <div class="icon-content">
                      <h5 class="m-t0 font-weight-500">Phone number</h5>
                      <p>+1 (456) 789 10 12</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4">
                  <div class="wt-icon-box-wraper center m-b30">
                    <div class="icon-md m-b20">
                      <i class="sl-icon-envolope"></i>
                    </div>
                    <div class="icon-content">
                      <h5 class="m-t0 font-weight-500">Email address</h5>
                      <p>demo@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4">
                  <div class="wt-icon-box-wraper center m-b30">
                    <div class="icon-md m-b20">
                      <i class="sl-icon-map"></i>
                    </div>
                    <div class="icon-content">
                      <h5 class="m-t0 font-weight-500">Address info</h5>
                      <p>55/11 Land Street, Modern New Yourk City, USA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="gmap-outline">
        <div id="gmap_canvas2" class="google-map"></div>
      </div>
      {/* <!-- SECTION CONTENT END --> */}
    </div>
    /* <!-- CONTENT END --> */
  );
}

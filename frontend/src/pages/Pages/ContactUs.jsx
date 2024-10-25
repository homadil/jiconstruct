import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../store";
import apiRequest from "../../apiRequest";
import { Button, CircularProgress } from "@mui/material";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
export default function ContactUs() {
  const { contactUsHeader, backend_url } = useContext(DataContext);
  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState({
    name: null,
    email: null,
    message: null,
  });
  function handleSubmit(e) {
    if (!formData.email || !formData.message || !formData.name) {
      toast.error("Please Complete the input");
    }
    setLoader(true);
    apiRequest
      .post("/notifications/contact_us", formData)
      .then(() => {
        setLoader(false);
      })
      .catch(() => {
        setLoader(false);
      });
  }
  return (
    //  <!-- CONTENT START -->
    <div className="page-content">
      <Helmet>
        <title>Ji Construct | Contact Us</title>
      </Helmet>

      {/* <!-- INNER PAGE BANNER --> */}
      <div
        className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
        data-stellar-background-ratio="0.5"
        style={{
          backgroundImage: `url(${backend_url}/${contactUsHeader[0]?.path})`,
        }}
      >
        <div className="overlay-main bg-black opacity-07"></div>
        <div className="container">
          <div className="wt-bnr-inr-entry">
            <div className="banner-title-outer">
              <div className="banner-title-name">
                <h2 className="text-white">Contact Us</h2>
              </div>
            </div>
            {/* <!-- BREADCRUMB ROW -->                             */}

            <div>
              <ul className="wt-breadcrumb breadcrumb-style-2">
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
      <div className="section-full p-t80">
        {/* <!-- LOCATION BLOCK--> */}
        <div className="container">
          {/* <!-- GOOGLE MAP & CONTACT FORM --> */}
          <div className="section-content">
            <div className="contact-form p-a30 bg-gray">
              <div className="cons-contact-form">
                <div className="contact-one">
                  {/* <!-- TITLE START --> */}
                  <div className="section-head text-left">
                    <h3 className="m-b5">Get In Touch</h3>
                  </div>
                  {/* <!-- TITLE END -->   */}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
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
                          className="form-control"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          name="email"
                          type="text"
                          className="form-control"
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
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          rows="4"
                          className="form-control "
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
                    <div className="col-md-12">
                      <div className="text-right">
                        <Button
                          variant="contained"
                          color="primary"
                          sx={{ mt: 3 }}
                          type="submit"
                          onClick={handleSubmit}
                          disabled={loader} // Disable button when loading
                        >
                          {loader ? (
                            <CircularProgress
                              size={24}
                              color="inherit"
                              sx={{ mr: 1 }}
                            /> // Spinner when loading
                          ) : (
                            "Send"
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-info text-center m-t80 m-b50">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-4">
                  <div className="wt-icon-box-wraper center m-b30">
                    <div className="icon-md m-b20">
                      <i className="sl-icon-phone"></i>
                    </div>
                    <div className="icon-content">
                      <h5 className="m-t0 font-weight-500">Phone number</h5>
                      <p>+1 (456) 789 10 12</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="wt-icon-box-wraper center m-b30">
                    <div className="icon-md m-b20">
                      <i className="sl-icon-envolope"></i>
                    </div>
                    <div className="icon-content">
                      <h5 className="m-t0 font-weight-500">Email address</h5>
                      <p>demo@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="wt-icon-box-wraper center m-b30">
                    <div className="icon-md m-b20">
                      <i className="sl-icon-map"></i>
                    </div>
                    <div className="icon-content">
                      <h5 className="m-t0 font-weight-500">Address info</h5>
                      <p>55/11 Land Street, Modern New Yourk City, USA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gmap-outline">
        <div id="gmap_canvas2" className="google-map"></div>
      </div>
      {/* <!-- SECTION CONTENT END --> */}
    </div>
    /* <!-- CONTENT END --> */
  );
}

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../store";
import apiRequest from "../../apiRequest";
import { Button, CircularProgress } from "@mui/material";
export default function Footer() {
  const { blogs, backend_url, truncateContent } = useContext(DataContext);
  const sortedBlogs = blogs
    .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)) // Sort by createdAt ascending
    .slice(0, 3); // Get the first four teams

  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setLoader(true);

    apiRequest
      .post("/users/newsletter", { email })
      .then(() => {
        setLoader(false);
      })
      .catch(() => {
        setLoader(false);
      });
  }
  return (
    <footer className="site-footer footer-large  footer-dark">
      <div className="footer-social-section bg-secondry">
        <div className="container">
          <div className="footer-social-content">
            <ul>
              <li>
                <a href="javascript:;">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i className="fa fa-pinterest-p"></i>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i className="fa fa-vimeo"></i>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i className="fa fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- FOOTER BLOCKES START -->   */}
      <div className="footer-top overlay-wraper">
        <div className="overlay-main"></div>
        <div className="container-fluid">
          <div className="row">
            {/* <!-- RESENT POST --> */}
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="widget recent-posts-entry">
                <h4 className="widget-title  text-uppercase">Recent Post</h4>
                <div className="section-content">
                  <div className="widget-post-bx">
                    {sortedBlogs?.map((blog, index) => {
                      return (
                        <div key={index} className="widget-post clearfix">
                          <div className="wt-post-media">
                            <img
                              src={`${backend_url}/${blog.show}`}
                              alt={blog.title}
                            />
                          </div>
                          <div className="wt-post-info">
                            <div className="wt-post-meta">
                              <ul>
                                <li className="post-author">
                                  {blog.user.name}
                                </li>
                                <br />
                                <li className="post-comment">
                                  {" "}
                                  {blog.Comments.length} Comment
                                </li>
                              </ul>
                            </div>
                            <div className="wt-post-header">
                              <h6 className="post-title">
                                {truncateContent(blog.title, 10)}
                              </h6>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- ABOUT COMPANY --> */}
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="widget widget_about">
                <h4 className="widget-title  text-uppercase">
                  About Information
                </h4>
                <p>
                  Today we can tell you, thanks to your passion, hard work
                  creativity, and expertise, you delivered us the most beautiful
                  house great looks.
                </p>
              </div>

              <div className="widget widget_newsletter">
                <h4 className="widget-title  text-uppercase">
                  Subscribe to our newsletter!
                </h4>
                <div className="newsletter-bx">
                  <form onSubmit={handleSubmit}>
                    <div className="input-group">
                      <input
                        name="news-letter"
                        className="form-control"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.currentTarget.value);
                        }}
                        placeholder="ENTER YOUR EMAIL"
                        type="text"
                      />
                      <span className="input-group-btn">
                        <button
                          variant="contained"
                          color="primary"
                          className="site-button"
                          sx={{ mt: 3 }}
                          type="submit"
                          disabled={loader} // Disable button when loading
                        >
                          {loader ? (
                            <CircularProgress
                              size={24}
                              color="inherit"
                              sx={{ mr: 1 }}
                            /> // Spinner when loading
                          ) : (
                            <i className="fa fa-paper-plane-o"></i>
                          )}
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* <!-- USEFUL LINKS --> */}
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="widget widget_services inline-links">
                <h4 className="widget-title">Useful links</h4>
                <ul>
                  <li>
                    <Link to={"/page_about_us"}>About</Link>
                    <Link to={"/blog"}>Articles</Link>
                  </li>
                  <li>
                    <Link to={"/project"}>Gallery</Link>
                    <Link to={"/#service"}>Service</Link>
                  </li>
                  <li>
                    <Link to={"/blog"}>News</Link>
                    <Link to={"/team"}>Our team</Link>
                  </li>
                  <li>
                    <Link to={""}>Portfolio</Link>
                    <Link to={""}>Approach</Link>
                  </li>
                  <li>
                    <Link to={"/page_contact_us"}>Contact Us</Link>
                    <Link to={""}>Case Studies</Link>
                  </li>
                  <li>
                    <Link to={""}>Career</Link>
                    <Link to={"/#clients"}>Clients</Link>
                  </li>
                  <li>
                    <Link to={""}>FAQ</Link>
                    <Link to={""}>Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* <!-- TAGS --> */}
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="widget widget_address_outer m-b20">
                <h4 className="widget-title">Contact Us</h4>
                <ul className="widget_address">
                  <li>
                    No 35, Lord Lugard Street, Area 11, Garki Junction, Abuja
                  </li>
                  <li>info@jiconstruct.com</li>
                  <li>(+0091) 912-3456-073</li>
                  <li>(+0091) 912-3456-084</li>
                </ul>
              </div>
            </div>
            {/* <!-- NEWSLETTER --> */}
          </div>
        </div>
      </div>
      {/* <!-- FOOTER COPYRIGHT --> */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-logo-bar">
            <a href="index.html">
              <img src="ji_construct_logo.png" width={200} alt="" />
            </a>
            <span className="copyrights-text">© 2024 JI Construct </span>
          </div>
        </div>
      </div>
    </footer>

    /* <!-- FOOTER END -->   ; */
  );
}

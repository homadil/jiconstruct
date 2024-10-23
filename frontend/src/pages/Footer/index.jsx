import React, { useContext } from "react";
import img_one from "../../assets/images/dummy/download_1.jpg";
import img_two from "../../assets/images/dummy/download_2.jpg";
import img_three from "../../assets/images/dummy/download_3.jpg";
import { Link } from "react-router-dom";
import { DataContext } from "../../store";
export default function Footer() {
  const { blogs, backend_url, truncateContent } = useContext(DataContext);
  const sortedBlogs = blogs
    .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)) // Sort by createdAt ascending
    .slice(0, 3); // Get the first four teams

  return (
    <footer class="site-footer footer-large  footer-dark">
      <div class="footer-social-section bg-secondry">
        <div class="container">
          <div class="footer-social-content">
            <ul>
              <li>
                <a href="javascript:;">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i class="fa fa-pinterest-p"></i>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i class="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i class="fa fa-vimeo"></i>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i class="fa fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- FOOTER BLOCKES START -->   */}
      <div class="footer-top overlay-wraper">
        <div class="overlay-main"></div>
        <div class="container-fluid">
          <div class="row">
            {/* <!-- RESENT POST --> */}
            <div class="col-xl-3 col-lg-6 col-md-6">
              <div class="widget recent-posts-entry">
                <h4 class="widget-title  text-uppercase">Recent Post</h4>
                <div class="section-content">
                  <div class="widget-post-bx">
                    {sortedBlogs?.map((blog, index) => {
                      return (
                        <div key={index} class="widget-post clearfix">
                          <div class="wt-post-media">
                            <img
                              src={`${backend_url}/${blog.show}`}
                              alt={blog.title}
                            />
                          </div>
                          <div class="wt-post-info">
                            <div class="wt-post-meta">
                              <ul>
                                <li class="post-author">{blog.user.name}</li>
                                <br />
                                <li class="post-comment">
                                  {" "}
                                  {blog.Comments.length} Comment
                                </li>
                              </ul>
                            </div>
                            <div class="wt-post-header">
                              <h6 class="post-title">
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
            <div class="col-xl-3 col-lg-6 col-md-6">
              <div class="widget widget_about">
                <h4 class="widget-title  text-uppercase">About Information</h4>
                <p>
                  Today we can tell you, thanks to your passion, hard work
                  creativity, and expertise, you delivered us the most beautiful
                  house great looks.
                </p>
              </div>

              <div class="widget widget_newsletter">
                <h4 class="widget-title  text-uppercase">
                  Subscribe to our newsletter!
                </h4>
                <div class="newsletter-bx">
                  <form role="search" method="post">
                    <div class="input-group">
                      <input
                        name="news-letter"
                        class="form-control"
                        placeholder="ENTER YOUR EMAIL"
                        type="text"
                      />
                      <span class="input-group-btn">
                        <button type="submit" class="site-button">
                          <i class="fa fa-paper-plane-o"></i>
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* <!-- USEFUL LINKS --> */}
            <div class="col-xl-3 col-lg-6 col-md-6">
              <div class="widget widget_services inline-links">
                <h4 class="widget-title">Useful links</h4>
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
            <div class="col-xl-3 col-lg-6 col-md-6">
              <div class="widget widget_address_outer m-b20">
                <h4 class="widget-title">Contact Us</h4>
                <ul class="widget_address">
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
      <div class="footer-bottom">
        <div class="container">
          <div class="footer-logo-bar">
            <a href="index.html">
              <img src="ji_construct_logo.png" width={200} alt="" />
            </a>
            <span class="copyrights-text">© 2024 JI Construct </span>
          </div>
        </div>
      </div>
    </footer>

    /* <!-- FOOTER END -->   ; */
  );
}

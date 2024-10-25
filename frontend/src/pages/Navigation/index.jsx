import React from "react";
import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <div>
      {/* <!-- HEADER START --> */}
      <header className="site-header header-style-1  header-fixed nav-wide mobile-sider-drawer-menu">
        <div className="main-bar-wraper">
          <div className="main-bar p-t5">
            <div className="container">
              <div className="logo-header">
                <div className="logo-header-inner logo-header-one">
                  <Link to={"/"}>
                    <img src="ji_construct_logo.png" alt="" />
                  </Link>
                </div>
              </div>
              {/* <!-- NAV Toggle Button --> */}
              <button id="mobile-side-drawer">
                <span className="icon-bar bar-one"></span>
                <span className="icon-bar bar-two"></span>
                <span className="icon-bar bar-three"></span>
              </button>
              {/* <!-- ETRA Nav --> */}
              <div className="extra-nav">
                <div className="extra-cell">
                  <a href="#search" className=" text-white">
                    <i className="fa fa-search"></i>
                  </a>
                </div>
              </div>
              {/* <!-- ETRA Nav --> */}

              {/* <!-- SITE Search --> */}
              <div id="search">
                <span className="close"></span>
                <form
                  role="search"
                  id="searchform"
                  action="/search"
                  method="get"
                  className="radius-xl"
                >
                  <div className="input-group">
                    <input
                      className="form-control"
                      value=""
                      name="q"
                      type="search"
                      placeholder="Type to search"
                    />
                    <span className="input-group-append">
                      <button type="button" className="search-btn">
                        <i className="sl-icon-magnifier"></i>
                      </button>
                    </span>
                  </div>
                </form>
              </div>
              {/* <!-- MAIN Vav --> */}
              <div className="header-nav">
                <ul className=" nav navbar-nav">
                  <li className="active">
                    <Link to={"/"}>Home</Link>
                  </li>

                  <li className="nav-item">
                    <Link to={"/blog"}>News</Link>
                  </li>

                  {/* <li>
                    <a href="javascript:;">Post detail</a>
                    <ul className="sub-menu">
                      <li>
                        <Link to={"/post_image"}>Post Image</Link>
                      </li>
                      <li>
                        <Link to={"/post_gallery"}>Post Gallery</Link>
                      </li>
                      <li>
                        <Link to={"/post_video"}>Post Video</Link>
                      </li>
                      <li>
                        <Link to={"/post_sidebar"}>Post Right Sidebar</Link>
                      </li>
                    </ul>
                  </li> */}

                  <li>
                    <Link to={"/project"}>Projects</Link>
                  </li>

                  {/*
                   <li className="submenu-direction">
                    <a href="javascript:;">Projects</a>
                    <ul className="sub-menu">
                      <li>
                        <Link to={"/project_masonry"}>Project Masonry</Link>
                      </li>
                      <li>
                        <Link to={"/project_carousel"}>Project Carousel</Link>
                      </li>
                      <li>
                        <Link to={"/project_detail"}>Project Detail</Link>
                      </li>
                    </ul>
                  </li>
                   */}

                  <li>
                    <Link to={"/page_about_us"}>About us</Link>
                  </li>
                  <li>
                    <Link to={"/page_contact_us"}>Contact us</Link>
                  </li>

                  {false && (
                    <li className="submenu-direction">
                      <a href="javascript:;">Authentication</a>
                      <ul className="sub-menu">
                        {true ? (
                          <li>
                            <li>
                              <Link to={"/sign_in"}>Login</Link>
                            </li>
                            <li>
                              <Link to={"/sign_up"}>Register</Link>
                            </li>
                          </li>
                        ) : (
                          <li>
                            <Link to={"/project_detail"}>Project Detail</Link>
                          </li>
                        )}
                      </ul>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- HEADER END --> */}
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <div>
      {/* <!-- HEADER START --> */}
      <header class="site-header header-style-1  header-fixed nav-wide mobile-sider-drawer-menu">
        <div class="main-bar-wraper">
          <div class="main-bar p-t5">
            <div class="container">
              <div class="logo-header">
                <div class="logo-header-inner logo-header-one">
                  <Link to={"/"}>
                    <img src="ji_construct_logo.png" alt="" />
                  </Link>
                </div>
              </div>
              {/* <!-- NAV Toggle Button --> */}
              <button id="mobile-side-drawer">
                <span class="icon-bar bar-one"></span>
                <span class="icon-bar bar-two"></span>
                <span class="icon-bar bar-three"></span>
              </button>
              {/* <!-- ETRA Nav --> */}
              <div class="extra-nav">
                <div class="extra-cell">
                  <a href="#search" class=" text-white">
                    <i class="fa fa-search"></i>
                  </a>
                </div>
              </div>
              {/* <!-- ETRA Nav --> */}

              {/* <!-- SITE Search --> */}
              <div id="search">
                <span class="close"></span>
                <form
                  role="search"
                  id="searchform"
                  action="/search"
                  method="get"
                  class="radius-xl"
                >
                  <div class="input-group">
                    <input
                      class="form-control"
                      value=""
                      name="q"
                      type="search"
                      placeholder="Type to search"
                    />
                    <span class="input-group-append">
                      <button type="button" class="search-btn">
                        <i class="sl-icon-magnifier"></i>
                      </button>
                    </span>
                  </div>
                </form>
              </div>
              {/* <!-- MAIN Vav --> */}
              <div class="header-nav">
                <ul class=" nav navbar-nav">
                  <li class="active">
                    <Link to={"/"}>Home</Link>
                  </li>

                  <li className="nav-item">
                    <Link to={"/blog"}>News</Link>
                  </li>

                  {/* <li>
                    <a href="javascript:;">Post detail</a>
                    <ul class="sub-menu">
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
                    <Link to={"/project_grid"}>Projects</Link>
                  </li>

                  {/*
                   <li class="submenu-direction">
                    <a href="javascript:;">Projects</a>
                    <ul class="sub-menu">
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
                    <li class="submenu-direction">
                      <a href="javascript:;">Authentication</a>
                      <ul class="sub-menu">
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

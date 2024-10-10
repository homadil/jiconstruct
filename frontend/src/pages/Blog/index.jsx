import React from "react";
import postOne from "../../assets/images/dummy/download_4.avif";
import postTwo from "../../assets/images/dummy/download_3.jpg";
import postThree from "../../assets/images/dummy/download_5.jpg";
import postFour from "../../assets/images/dummy/download_6.jpg";
import postFive from "../../assets/images/dummy/download_7.jpg";
import postSix from "../../assets/images/dummy/download_8.jpg";
import postSeven from "../../assets/images/dummy/download_9.webp";
import postEight from "../../assets/images/dummy/download_10.jpg";
import postNine from "../../assets/images/dummy/download_11.webp";
import author from "../../assets/images/dummy/team2.jpg";
export default function Blog() {
  const posts = [
    postOne,
    postTwo,
    postEight,
    postFive,
    postFour,
    postNine,
    postSeven,
    postSix,
    postThree,
    postNine,
  ];
  return (
    <div>
      {/* <!-- CONTENT START --> */}
      <div class="page-content">
        {/* <!-- INNER PAGE BANNER --> */}
        <div
          class="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
          data-stellar-background-ratio="0.5"
          style={{ backgroundImage: "url(images/dummy/news.webp)" }}
        >
          <div class="overlay-main bg-black opacity-07"></div>
          <div class="container">
            <div class="wt-bnr-inr-entry">
              <div class="banner-title-outer">
                <div class="banner-title-name">
                  <h2 class="text-white">News Listing</h2>
                </div>
              </div>
              {/* <!-- BREADCRUMB ROW -->                             */}

              <div>
                <ul class="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <a href="javascript:void(0);">Home</a>
                  </li>
                  <li>News Listing</li>
                </ul>
              </div>

              {/* <!-- BREADCRUMB ROW END -->                         */}
            </div>
          </div>
        </div>
        {/* <!-- INNER PAGE BANNER END --> */}

        {/* <!-- SECTION CONTENT START --> */}
        <div class="section-full p-t80 p-b50 bg-gray">
          {/* <!-- GALLERY CONTENT START --> */}
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-12 col-sm-12">
                <div class="news-listing ">
                  {/* <!-- COLUMNS 1 --> */}
                  <div class="blog-post blog-md date-style-1 clearfix  m-b60 bg-white">
                    <div class="wt-post-media wt-img-effect zoom-slow">
                      <a href="javascript:void(0);">
                        <img src={postOne} alt="" />
                      </a>
                    </div>
                    <div class="wt-post-info p-a30">
                      <div class="wt-post-meta ">
                        <ul>
                          <li class="post-date">
                            <strong>25 </strong> <span>Aug 2019</span>{" "}
                          </li>
                          <li class="post-author">
                            <i class="fa fa-user"></i>
                            <a href="javascript:void(0);">
                              By <span>Admin</span>
                            </a>{" "}
                          </li>
                          <li class="post-comment">
                            <i class="fa fa fa-comments"></i>
                            <a href="javascript:void(0);">
                              10 <span>Comment</span>
                            </a>{" "}
                          </li>
                        </ul>
                      </div>
                      <div class="wt-post-title ">
                        <h3 class="post-title">
                          <a href="javascript:void(0);" class=" m-t0">
                            Being a famous designer is like being a famous.
                          </a>
                        </h3>
                      </div>
                      <div class="wt-post-text">
                        <p>
                          The longer I live, the more beautiful life becomes. If
                          you foolishly ignore beauty, you will soon find
                          yourself without it. Your life will be impoverished.
                          But if you invest in beauty, it will remain with you
                          all the days of your life.
                        </p>
                      </div>
                      <a href="javascript:void(0);" class="site-button-link">
                        Read More
                      </a>
                    </div>
                  </div>

                  {/* <!-- COLUMNS 2 --> */}
                  <div class="blog-post blog-md date-style-1 clearfix  m-b60 bg-white">
                    <div class="wt-post-media wt-img-effect zoom-slow">
                      <a href="javascript:void(0);">
                        <img src={postTwo} alt="" />
                      </a>
                    </div>
                    <div class="wt-post-info p-a30">
                      <div class="wt-post-meta ">
                        <ul>
                          <li class="post-date">
                            <strong>25 </strong> <span>Aug 2019</span>{" "}
                          </li>
                          <li class="post-author">
                            <i class="fa fa-user"></i>
                            <a href="javascript:void(0);">
                              By <span>Admin</span>
                            </a>{" "}
                          </li>
                          <li class="post-comment">
                            <i class="fa fa fa-comments"></i>
                            <a href="javascript:void(0);">
                              10 <span>Comment</span>
                            </a>{" "}
                          </li>
                        </ul>
                      </div>
                      <div class="wt-post-title ">
                        <h3 class="post-title">
                          <a href="javascript:void(0);" class=" m-t0">
                            Architecture is not based on concrete and steel.
                          </a>
                        </h3>
                      </div>
                      <div class="wt-post-text">
                        <p>
                          The longer I live, the more beautiful life becomes. If
                          you foolishly ignore beauty, you will soon find
                          yourself without it. Your life will be impoverished.
                          But if you invest in beauty, it will remain with you
                          all the days of your life.
                        </p>
                      </div>
                      <a href="javascript:void(0);" class="site-button-link">
                        Read More
                      </a>
                    </div>
                  </div>

                  {/* <!-- COLUMNS 3 --> */}
                  <div class="blog-post blog-md date-style-1 clearfix  m-b60 bg-white">
                    <div class="wt-post-media wt-img-effect zoom-slow">
                      <a href="javascript:void(0);">
                        <img src={postThree} alt="" />
                      </a>
                    </div>
                    <div class="wt-post-info p-a30">
                      <div class="wt-post-meta ">
                        <ul>
                          <li class="post-date">
                            <strong>25 </strong> <span>Aug 2019</span>{" "}
                          </li>
                          <li class="post-author">
                            <i class="fa fa-user"></i>
                            <a href="javascript:void(0);">
                              By <span>Admin</span>
                            </a>{" "}
                          </li>
                          <li class="post-comment">
                            <i class="fa fa fa-comments"></i>
                            <a href="javascript:void(0);">
                              10 <span>Comment</span>
                            </a>{" "}
                          </li>
                        </ul>
                      </div>
                      <div class="wt-post-title ">
                        <h3 class="post-title">
                          <a href="javascript:void(0);" class=" m-t0">
                            An object should be judged by whether.
                          </a>
                        </h3>
                      </div>
                      <div class="wt-post-text">
                        <p>
                          The longer I live, the more beautiful life becomes. If
                          you foolishly ignore beauty, you will soon find
                          yourself without it. Your life will be impoverished.
                          But if you invest in beauty, it will remain with you
                          all the days of your life.
                        </p>
                      </div>
                      <a href="javascript:void(0);" class="site-button-link">
                        Read More
                      </a>
                    </div>
                  </div>

                  {/* <!-- COLUMNS 4 --> */}
                  <div class="blog-post blog-md date-style-1 clearfix  m-b60 bg-white">
                    <div class="wt-post-media wt-img-effect zoom-slow">
                      <a href="javascript:void(0);">
                        <img src={postFour} alt="" />
                      </a>
                    </div>
                    <div class="wt-post-info p-a30">
                      <div class="wt-post-meta ">
                        <ul>
                          <li class="post-date">
                            <strong>25 </strong> <span>Aug 2019</span>{" "}
                          </li>
                          <li class="post-author">
                            <i class="fa fa-user"></i>
                            <a href="javascript:void(0);">
                              By <span>Admin</span>
                            </a>{" "}
                          </li>
                          <li class="post-comment">
                            <i class="fa fa fa-comments"></i>
                            <a href="javascript:void(0);">
                              10 <span>Comment</span>
                            </a>{" "}
                          </li>
                        </ul>
                      </div>
                      <div class="wt-post-title ">
                        <h3 class="post-title">
                          <a href="javascript:void(0);" class=" m-t0">
                            Very often the opinion of the clients must be.
                          </a>
                        </h3>
                      </div>
                      <div class="wt-post-text">
                        <p>
                          The longer I live, the more beautiful life becomes. If
                          you foolishly ignore beauty, you will soon find
                          yourself without it. Your life will be impoverished.
                          But if you invest in beauty, it will remain with you
                          all the days of your life.
                        </p>
                      </div>
                      <a href="javascript:void(0);" class="site-button-link">
                        Read More
                      </a>
                    </div>
                  </div>

                  {/* <!-- COLUMNS 5 --> */}
                  <div class="blog-post blog-md date-style-1 clearfix  m-b60 bg-white">
                    <div class="wt-post-media wt-img-effect zoom-slow">
                      <a href="javascript:void(0);">
                        <img src={postFive} alt="" />
                      </a>
                    </div>
                    <div class="wt-post-info p-a30">
                      <div class="wt-post-meta ">
                        <ul>
                          <li class="post-date">
                            <strong>25</strong> <span>Aug 2019</span>{" "}
                          </li>
                          <li class="post-author">
                            <i class="fa fa-user"></i>
                            <a href="javascript:void(0);">
                              By <span>Admin</span>
                            </a>{" "}
                          </li>
                          <li class="post-comment">
                            <i class="fa fa fa-comments"></i>
                            <a href="javascript:void(0);">
                              10 <span>Comment</span>
                            </a>{" "}
                          </li>
                        </ul>
                      </div>
                      <div class="wt-post-title ">
                        <h3 class="post-title">
                          <a href="javascript:void(0);" class=" m-t0">
                            Architects spend an entire life with this.
                          </a>
                        </h3>
                      </div>
                      <div class="wt-post-text">
                        <p>
                          The longer I live, the more beautiful life becomes. If
                          you foolishly ignore beauty, you will soon find
                          yourself without it. Your life will be impoverished.
                          But if you invest in beauty, it will remain with you
                          all the days of your life.
                        </p>
                      </div>
                      <a href="javascript:void(0);" class="site-button-link">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <ul class="pagination m-t0 m-b20">
                  <li class="page-item">
                    <a href="#" class="page-link">
                      «
                    </a>
                  </li>
                  <li class="page-item">
                    <a href="#" class="page-link">
                      1
                    </a>
                  </li>
                  <li class="page-item">
                    <a href="#" class="page-link">
                      2
                    </a>
                  </li>
                  <li class="page-item">
                    <a href="#" class="page-link">
                      3
                    </a>
                  </li>
                  <li class="page-item">
                    <a href="#" class="page-link">
                      4
                    </a>
                  </li>
                  <li class="page-item">
                    <a href="#" class="page-link">
                      5
                    </a>
                  </li>
                  <li class="page-item">
                    <a href="#" class="page-link">
                      »
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!-- SIDE BAR START --> */}
              <div class="col-lg-4 col-md-12 col-sm-12 rightSidebar">
                <aside class="side-bar">
                  {/* <!-- SEARCH --> */}
                  <div class="widget p-a30 bg-white">
                    <h4 class="widget-title">Search</h4>
                    <div class="search-bx">
                      <form role="search" method="post">
                        <div class="input-group">
                          <input
                            name="news-letter"
                            type="text"
                            class="form-control"
                            placeholder="Write your text"
                          />
                          <span class="input-group-btn">
                            <button type="submit" class="site-button">
                              <i class="fa fa-search"></i>
                            </button>
                          </span>
                        </div>
                      </form>
                    </div>
                  </div>

                  {/* <!-- Categories -->                                         */}
                  <div class="widget bg-white  widget_services p-a30 bg-white">
                    <h4 class="widget-title">Categories</h4>
                    <ul>
                      <li>
                        <a href="javascript:void(0);">Architecture</a>
                        <span> (28)</span>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Awards</a>
                        <span> (05)</span>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Reseller</a>
                        <span> (24)</span>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Uncategorized</a>
                        <span> (15)</span>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Interviews</a>
                        <span> (20)</span>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Event</a>
                        <span> (90)</span>
                      </li>
                    </ul>
                  </div>

                  {/* <!-- OUR GALLERY  --> */}
                  <div class="widget widget_gallery mfp-gallery p-a30 bg-white">
                    <h4 class="widget-title">Our Gallery</h4>
                    <div class="row no-gutters justify-content-center">
                      {posts.map((item, index) => {
                        return (
                          <div className="col-6 col-sm-4" key={index}>
                            <div className="wt-post-thum m-1">
                              <a
                                href={`images/gallery/pic${index}.jpg`}
                                className="mfp-link"
                              >
                                <img src={item} alt="" />
                              </a>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* <!-- ABOUT AUTHOR --> */}
                  <div class="widget widget-team p-a30 bg-white">
                    <h4 class="widget-title">About Author</h4>
                    <div class="widget-post m-b15">
                      <img src={author} alt="" class="img-responsive" />
                    </div>
                    <div class="team-detail  text-center">
                      <h4 class="m-t0">Taminm Alows</h4>
                      <p>
                        We are the dolor sit ametLorem Ipsum Proin gravida nibh
                        vel velit auctor aliquet. Aenean sollicitudin.
                      </p>
                    </div>
                  </div>

                  {/* <!-- RECENT POSTS --> */}
                  <div class="widget  recent-posts-entry p-a30 bg-white">
                    <h4 class="widget-title">Recent Posts</h4>
                    <div class="section-content">
                      <div class="widget-post-bx">
                        <div class="widget-post clearfix">
                          <div class="wt-post-media">
                            <img src={postFour} alt="" />
                          </div>
                          <div class="wt-post-info">
                            <div class="wt-post-meta">
                              <ul>
                                <li class="post-author">Aug 14, 2019</li>
                              </ul>
                            </div>
                            <div class="wt-post-header">
                              <h5 class="post-title">
                                Years behold fourth tree creeping god
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div class="widget-post clearfix">
                          <div class="wt-post-media">
                            <img src={postNine} alt="" />
                          </div>
                          <div class="wt-post-info">
                            <div class="wt-post-meta">
                              <ul>
                                <li class="post-author">Aug 19, 2019</li>
                              </ul>
                            </div>
                            <div class="wt-post-header">
                              <h5 class="post-title">
                                Tips for Self-Made Home Interiors Layout
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div class="widget-post clearfix">
                          <div class="wt-post-media">
                            <img src={postOne} alt="" />
                          </div>
                          <div class="wt-post-info">
                            <div class="wt-post-meta">
                              <ul>
                                <li class="post-author">Aug 28, 2019</li>
                              </ul>
                            </div>
                            <div class="wt-post-header">
                              <h5 class="post-title">
                                Design of Building: From Planning to Peforming
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- OUR CLIENT --> */}
                  <div class="widget p-a30 bg-white">
                    <h4 class="widget-title">Our Client</h4>
                    <div class="owl-carousel widget-client p-t10">
                      {/* <!-- COLUMNS 1 -->  */}
                      <div class="item">
                        <div class="ow-client-logo">
                          <div class="client-logo wt-img-effect on-color">
                            <a href="#">
                              <img src="images/client-logo/w1.png" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* <!-- COLUMNS 2 -->  */}
                      <div class="item">
                        <div class="ow-client-logo">
                          <div class="client-logo wt-img-effect on-color">
                            <a href="#">
                              <img src="images/client-logo/w2.png" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* <!-- COLUMNS 3 -->  */}
                      <div class="item">
                        <div class="ow-client-logo">
                          <div class="client-logo wt-img-effect on-color">
                            <a href="#">
                              <img src="images/client-logo/w3.png" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- TAGS --> */}
                  <div class="widget widget_tag_cloud p-a30 bg-white">
                    <h4 class="widget-title">Tags</h4>
                    <div class="tagcloud">
                      <a href="javascript:void(0);">Trouble </a>
                      <a href="javascript:void(0);">Programmers</a>
                      <a href="javascript:void(0);">Never</a>
                      <a href="javascript:void(0);">Tell</a>
                      <a href="javascript:void(0);">Doing</a>
                      <a href="javascript:void(0);">Person</a>
                      <a href="javascript:void(0);">Inventors Tag</a>
                      <a href="javascript:void(0);">Between </a>
                      <a href="javascript:void(0);">Abilities</a>
                      <a href="javascript:void(0);">Fault </a>
                      <a href="javascript:void(0);">Gets </a>
                      <a href="javascript:void(0);">Macho</a>
                    </div>
                  </div>
                </aside>
              </div>
              {/* <!-- SIDE BAR END --> */}
            </div>
          </div>
          {/* <!-- GALLERY CONTENT END --> */}
        </div>
        {/* <!-- SECTION CONTENT END  --> */}
      </div>
      {/* <!-- CONTENT END --> */}
    </div>
  );
}

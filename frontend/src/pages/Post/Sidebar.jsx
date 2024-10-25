import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { DataContext } from "../../store";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
export default function Sidebar() {
  const { blogs, formatDate, formatDateTime } = useContext(DataContext);
  const query = new URLSearchParams(useLocation().search); // Correct way to get query parameters
  const id = query.get("id");

  // Parse the ID safely and find the corresponding blog
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  // Get the latest 3 posts without modifying the original array
  const recentPosts = blogs.slice(0, 3);

  const { day, month, year } = formatDate(blog?.date);

  return (
    //  <!-- CONTENT START -->
    <div className="page-content ">
      {/* <!-- INNER PAGE BANNER --> */}
      <div
        className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
        data-stellar-background-ratio="0.5"
        style={{ backgroundImage: "url(images/dummy/news.webp)" }}
      >
        <div className="overlay-main bg-black opacity-07"></div>
        <div className="container">
          <div className="wt-bnr-inr-entry">
            <div className="banner-title-outer">
              <div className="banner-title-name">
                <h2 className="text-white">{blog.title}</h2>
              </div>
            </div>
            {/* <!-- BREADCRUMB ROW -->                             */}

            <div>
              <ul className="wt-breadcrumb breadcrumb-style-2">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>/news/{blog.title}</li>
              </ul>
            </div>

            {/* <!-- BREADCRUMB ROW END -->                         */}
          </div>
        </div>
      </div>
      {/* <!-- INNER PAGE BANNER END --> */}

      {/* <!-- SECTION CONTENT START --> */}
      <div className="section-full p-t80 p-b50 bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12">
              {/* <!-- BLOG START --> */}
              <div className="blog-post date-style-1 blog-detail text-black">
                <div className="wt-post-media wt-img-effect zoom-slow">
                  <a href="javascript:void(0);">
                    <img src={blog.show_image} alt="" />
                  </a>
                </div>
                <div className="wt-post-info p-a30 bg-white">
                  <div className="wt-post-meta ">
                    <ul>
                      <li className="post-date">
                        <strong>{day} </strong>{" "}
                        <span>
                          {month} {year}
                        </span>{" "}
                      </li>
                      <li className="post-author">
                        <i className="fa fa-user"></i>
                        <a href="javascript:void(0);">
                          By <span>{blog.author.name}</span>
                        </a>{" "}
                      </li>
                      <li className="post-comment">
                        <i className="fa fa fa-comments"></i>
                        <a href="javascript:void(0);">
                          <span>{blog.comment_count} Comments</span>
                        </a>{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="wt-post-title ">
                    <h3 className="post-title">
                      <a href="javascript:void(0);" className=" m-t0">
                        {blog.title}
                      </a>
                    </h3>
                  </div>
                  <div className="wt-post-text">
                    <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                  </div>

                  <div className="wt-blog-post-media ">
                    <div className="row m-t30">
                      {blog.images.map((item, index) => {
                        return (
                          <div key={index} className="col-md-6 m-b30">
                            <div className="wt-media">
                              <img src={item} alt="" height={300} />
                            </div>
                          </div>
                        );
                      })}
                      {blog.videos.map((item, index) => {
                        return (
                          <div key={index} className="col-md-6 m-b30 ">
                            <div className="wt-media">
                              <video src={item} alt="" autoPlay />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {blog.quote !== null ? (
                    <blockquote className="bg-gray">
                      <i className="fa fa-quote-left"></i>
                      {blog.quote}
                    </blockquote>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className="clear p-a30 m-b30 bg-white" id="comment-list">
                <div className="comments-area" id="comments">
                  <h4 className="comments-title">
                    {blog.comment.length} Comments
                  </h4>
                  <div>
                    {/* <!-- COMMENT LIST START --> */}
                    <ol className="comment-list">
                      <li className="comment">
                        {/* <!-- COMMENT BLOCK --> */}
                        {blog.comment.map((item, index) => {
                          const date = formatDateTime(item.date);
                          return (
                            <li key={index} className="comment odd parent">
                              <div className="comment-body">
                                <div className="comment-meta">
                                  <a href="javascript:void(0);">{date}</a>
                                </div>
                                <div className="comment-author vcard">
                                  <img
                                    className="avatar photo"
                                    src={item.profile_image}
                                    alt=""
                                  />
                                  <cite className="fn">{item.name}</cite>
                                  <span className="says">says:</span>
                                </div>

                                <p>{item.content}</p>
                                <div className="reply"></div>
                              </div>

                              {/* <!-- SUB COMMENT BLOCK -->
                              {item.comment.map((item, index) => {
                                const date = formatDateTime(item?.date);
                                return (
                                  <ol className="children">
                                    <li className="comment odd parent">
                                      <div className="comment-body">
                                        <div className="comment-meta">
                                          <a href="javascript:void(0);">
                                            {date}
                                          </a>
                                        </div>
                                        <div className="comment-author vcard">
                                          <img
                                            className="avatar photo"
                                            src={item.profile_image}
                                            alt=""
                                          />
                                          <cite className="fn">{item.name}</cite>
                                          <span className="says">says:</span>
                                        </div>

                                        <p>{item.content}</p>
                                        <div className="reply"></div>
                                      </div>
                                    </li>
                                  </ol>
                                );
                              })} */}
                            </li>
                          );
                        })}
                      </li>
                    </ol>
                    {/* <!-- COMMENT LIST END --> */}

                    {/* <!-- LEAVE A REPLY START --> */}
                    <div className="comment-respond m-t30" id="respond">
                      <h4 className="comment-reply-title" id="reply-title">
                        Leave a Comments
                        <small>
                          <a
                            style={{ display: "none" }}
                            href="#"
                            id="cancel-comment-reply-link"
                            rel="nofollow"
                          >
                            Cancel reply
                          </a>
                        </small>
                      </h4>

                      <form
                        className="comment-form"
                        id="commentform"
                        method="post"
                      >
                        <p className="comment-form-author">
                          <label for="author">
                            Name <span className="required">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            value=""
                            name="user-comment"
                            placeholder="Author"
                            id="author"
                          />
                        </p>

                        <p className="comment-form-email">
                          <label for="email">
                            Email <span className="required">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            value=""
                            name="email"
                            placeholder="Email"
                            id="email"
                          />
                        </p>

                        <p className="comment-form-url">
                          <label for="url">Website</label>
                          <input
                            className="form-control"
                            type="text"
                            value=""
                            name="url"
                            placeholder="Website"
                            id="url"
                          />
                        </p>

                        <p className="comment-form-comment">
                          <label for="comment">Comment</label>
                          <textarea
                            className="form-control"
                            rows="8"
                            name="comment"
                            placeholder="Comment"
                            id="comment"
                          ></textarea>
                        </p>

                        <p className="form-submit">
                          <button
                            className="site-button radius-no text-uppercase font-weight-600"
                            type="button"
                          >
                            Submit
                          </button>
                        </p>
                      </form>
                    </div>
                    {/* <!-- LEAVE A REPLY END --> */}
                  </div>
                </div>
              </div>
              {/* <!-- BLOG END --> */}
            </div>

            {/* <!-- SIDE BAR START --> */}
            <div className="col-lg-4 col-md-12 col-sm-12 rightSidebar">
              <aside className="side-bar">
                {/* <!-- SEARCH --> */}
                <div className="widget p-a30 bg-white">
                  <h4 className="widget-title">Search</h4>
                  <div className="search-bx">
                    <form role="search" method="post">
                      <div className="input-group">
                        <input
                          name="news-letter"
                          type="text"
                          className="form-control"
                          placeholder="Write your text"
                        />
                        <span className="input-group-btn">
                          <button type="submit" className="site-button">
                            <i className="fa fa-search"></i>
                          </button>
                        </span>
                      </div>
                    </form>
                  </div>
                </div>

                {/* <!-- Categories -->                                         */}
                <div className="widget bg-white  widget_services p-a30 bg-white">
                  <h4 className="widget-title">Categories</h4>
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
                <div className="widget widget_gallery mfp-gallery p-a30 bg-white">
                  <h4 className="widget-title">Our Gallery</h4>
                  <div className="row no-gutters justify-content-center">
                    <div className="col-6 col-sm-4 ">
                      <div className="wt-post-thum m-1">
                        <a href="images/gallery/pic1.jpg" className="mfp-link">
                          <img src="images/gallery/thumb/pic1.jpg" alt="" />
                        </a>
                      </div>
                    </div>

                    <div className="col-6 col-sm-4 ">
                      <div className="wt-post-thum m-1">
                        <a href="images/gallery/pic2.jpg" className="mfp-link">
                          <img src="images/gallery/thumb/pic2.jpg" alt="" />
                        </a>
                      </div>
                    </div>

                    <div className="col-6 col-sm-4 ">
                      <div className="wt-post-thum  m-1">
                        <a href="images/gallery/pic3.jpg" className="mfp-link">
                          <img src="images/gallery/thumb/pic3.jpg" alt="" />
                        </a>
                      </div>
                    </div>

                    <div className="col-6 col-sm-4 ">
                      <div className="wt-post-thum m-1">
                        <a href="images/gallery/pic4.jpg" className="mfp-link">
                          <img src="images/gallery/thumb/pic4.jpg" alt="" />
                        </a>
                      </div>
                    </div>

                    <div className="col-6 col-sm-4 ">
                      <div className="wt-post-thum m-1">
                        <a href="images/gallery/pic5.jpg" className="mfp-link">
                          <img src="images/gallery/thumb/pic5.jpg" alt="" />
                        </a>
                      </div>
                    </div>

                    <div className="col-6 col-sm-4 ">
                      <div className="wt-post-thum m-1">
                        <a href="images/gallery/pic6.jpg" className="mfp-link">
                          <img src="images/gallery/thumb/pic6.jpg" alt="" />
                        </a>
                      </div>
                    </div>

                    <div className="col-6 col-sm-4 ">
                      <div className="wt-post-thum m-1">
                        <a href="images/gallery/pic7.jpg" className="mfp-link">
                          <img src="images/gallery/thumb/pic7.jpg" alt="" />
                        </a>
                      </div>
                    </div>

                    <div className="col-6 col-sm-4 ">
                      <div className="wt-post-thum m-1">
                        <a href="images/gallery/pic8.jpg" className="mfp-link">
                          <img src="images/gallery/thumb/pic8.jpg" alt="" />
                        </a>
                      </div>
                    </div>

                    <div className="col-6 col-sm-4 ">
                      <div className="wt-post-thum  m-1">
                        <a href="images/gallery/pic7.jpg" className="mfp-link">
                          <img src="images/gallery/thumb/pic9.jpg" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- ABOUT AUTHOR --> */}
                <div className="widget widget-team p-a30 bg-white">
                  <h4 className="widget-title">About Author</h4>
                  <div className="widget-post m-b15">
                    <img
                      src="images/our-team1/pic1.jpg"
                      alt=""
                      className="img-responsive"
                    />
                  </div>
                  <div className="team-detail  text-center">
                    <h4 className="m-t0">Taminm Alows</h4>
                    <p>
                      We are the dolor sit ametLorem Ipsum Proin gravida nibh
                      vel velit auctor aliquet. Aenean sollicitudin.
                    </p>
                  </div>
                </div>

                {/* <!-- RECENT POSTS --> */}
                <div className="widget  recent-posts-entry p-a30 bg-white">
                  <h4 className="widget-title">Recent Posts</h4>
                  <div className="section-content">
                    <div className="widget-post-bx">
                      {recentPosts.map((item, index) => {
                        const { day, month, year } = formatDate(blog?.date);
                        return (
                          <div key={index} className="widget-post clearfix">
                            <div className="wt-post-media">
                              <img src={item.show_image} alt="" />
                            </div>
                            <div className="wt-post-info">
                              <div className="wt-post-meta">
                                <ul>
                                  <li className="post-author">
                                    {month} {day}, {year}
                                  </li>
                                </ul>
                              </div>
                              <div className="wt-post-header">
                                <h5 className="post-title">{item.title}</h5>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* <!-- OUR CLIENT --> */}
                <div className="widget p-a30 bg-white">
                  <h4 className="widget-title">Our Client</h4>
                  <div className="owl-carousel widget-client p-t10">
                    {/* <!-- COLUMNS 1 -->  */}
                    <div className="item">
                      <div className="ow-client-logo">
                        <div className="client-logo wt-img-effect on-color">
                          <a href="#">
                            <img src="images/client-logo/w1.png" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* <!-- COLUMNS 2 -->  */}
                    <div className="item">
                      <div className="ow-client-logo">
                        <div className="client-logo wt-img-effect on-color">
                          <a href="#">
                            <img src="images/client-logo/w2.png" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* <!-- COLUMNS 3 -->  */}
                    <div className="item">
                      <div className="ow-client-logo">
                        <div className="client-logo wt-img-effect on-color">
                          <a href="#">
                            <img src="images/client-logo/w3.png" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- TAGS --> */}
                <div className="widget widget_tag_cloud p-a30 bg-white">
                  <h4 className="widget-title">Tags</h4>
                  <div className="tagcloud">
                    {blog.tag.map((item, index) => {
                      return (
                        <a key={index} href="javascript:void(0);">
                          {item}{" "}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </aside>
            </div>
            {/* <!-- SIDE BAR END -->                        */}
          </div>
        </div>
      </div>
      {/* <!-- SECTION CONTENT END --> */}
    </div>
    /* <!-- CONTENT END --> */
  );
}

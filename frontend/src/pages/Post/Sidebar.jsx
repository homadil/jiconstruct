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
    <div class="page-content ">
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
                <h2 class="text-white">{blog.title}</h2>
              </div>
            </div>
            {/* <!-- BREADCRUMB ROW -->                             */}

            <div>
              <ul class="wt-breadcrumb breadcrumb-style-2">
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
      <div class="section-full p-t80 p-b50 bg-gray">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-12 col-sm-12">
              {/* <!-- BLOG START --> */}
              <div class="blog-post date-style-1 blog-detail text-black">
                <div class="wt-post-media wt-img-effect zoom-slow">
                  <a href="javascript:void(0);">
                    <img src={blog.show_image} alt="" />
                  </a>
                </div>
                <div class="wt-post-info p-a30 bg-white">
                  <div class="wt-post-meta ">
                    <ul>
                      <li class="post-date">
                        <strong>{day} </strong>{" "}
                        <span>
                          {month} {year}
                        </span>{" "}
                      </li>
                      <li class="post-author">
                        <i class="fa fa-user"></i>
                        <a href="javascript:void(0);">
                          By <span>{blog.author.name}</span>
                        </a>{" "}
                      </li>
                      <li class="post-comment">
                        <i class="fa fa fa-comments"></i>
                        <a href="javascript:void(0);">
                          <span>{blog.comment_count} Comments</span>
                        </a>{" "}
                      </li>
                    </ul>
                  </div>
                  <div class="wt-post-title ">
                    <h3 class="post-title">
                      <a href="javascript:void(0);" class=" m-t0">
                        {blog.title}
                      </a>
                    </h3>
                  </div>
                  <div class="wt-post-text">
                    <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                  </div>

                  <div class="wt-blog-post-media ">
                    <div class="row m-t30">
                      {blog.images.map((item, index) => {
                        return (
                          <div key={index} class="col-md-6 m-b30">
                            <div class="wt-media">
                              <img src={item} alt="" height={300} />
                            </div>
                          </div>
                        );
                      })}
                      {blog.videos.map((item, index) => {
                        return (
                          <div key={index} class="col-md-6 m-b30 ">
                            <div class="wt-media">
                              <video src={item} alt="" autoPlay />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {blog.quote !== null ? (
                    <blockquote class="bg-gray">
                      <i class="fa fa-quote-left"></i>
                      {blog.quote}
                    </blockquote>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div class="clear p-a30 m-b30 bg-white" id="comment-list">
                <div class="comments-area" id="comments">
                  <h4 class="comments-title">{blog.comment.length} Comments</h4>
                  <div>
                    {/* <!-- COMMENT LIST START --> */}
                    <ol class="comment-list">
                      <li class="comment">
                        {/* <!-- COMMENT BLOCK --> */}
                        {blog.comment.map((item, index) => {
                          const date = formatDateTime(item.date);
                          return (
                            <li key={index} class="comment odd parent">
                              <div class="comment-body">
                                <div class="comment-meta">
                                  <a href="javascript:void(0);">{date}</a>
                                </div>
                                <div class="comment-author vcard">
                                  <img
                                    class="avatar photo"
                                    src={item.profile_image}
                                    alt=""
                                  />
                                  <cite class="fn">{item.name}</cite>
                                  <span class="says">says:</span>
                                </div>

                                <p>{item.content}</p>
                                <div class="reply"></div>
                              </div>

                              {/* <!-- SUB COMMENT BLOCK -->
                              {item.comment.map((item, index) => {
                                const date = formatDateTime(item?.date);
                                return (
                                  <ol class="children">
                                    <li class="comment odd parent">
                                      <div class="comment-body">
                                        <div class="comment-meta">
                                          <a href="javascript:void(0);">
                                            {date}
                                          </a>
                                        </div>
                                        <div class="comment-author vcard">
                                          <img
                                            class="avatar photo"
                                            src={item.profile_image}
                                            alt=""
                                          />
                                          <cite class="fn">{item.name}</cite>
                                          <span class="says">says:</span>
                                        </div>

                                        <p>{item.content}</p>
                                        <div class="reply"></div>
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
                    <div class="comment-respond m-t30" id="respond">
                      <h4 class="comment-reply-title" id="reply-title">
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

                      <form class="comment-form" id="commentform" method="post">
                        <p class="comment-form-author">
                          <label for="author">
                            Name <span class="required">*</span>
                          </label>
                          <input
                            class="form-control"
                            type="text"
                            value=""
                            name="user-comment"
                            placeholder="Author"
                            id="author"
                          />
                        </p>

                        <p class="comment-form-email">
                          <label for="email">
                            Email <span class="required">*</span>
                          </label>
                          <input
                            class="form-control"
                            type="text"
                            value=""
                            name="email"
                            placeholder="Email"
                            id="email"
                          />
                        </p>

                        <p class="comment-form-url">
                          <label for="url">Website</label>
                          <input
                            class="form-control"
                            type="text"
                            value=""
                            name="url"
                            placeholder="Website"
                            id="url"
                          />
                        </p>

                        <p class="comment-form-comment">
                          <label for="comment">Comment</label>
                          <textarea
                            class="form-control"
                            rows="8"
                            name="comment"
                            placeholder="Comment"
                            id="comment"
                          ></textarea>
                        </p>

                        <p class="form-submit">
                          <button
                            class="site-button radius-no text-uppercase font-weight-600"
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
                    <div class="col-6 col-sm-4 ">
                      <div class="wt-post-thum m-1">
                        <a href="images/gallery/pic1.jpg" class="mfp-link">
                          <img src="images/gallery/thumb/pic1.jpg" alt="" />
                        </a>
                      </div>
                    </div>

                    <div class="col-6 col-sm-4 ">
                      <div class="wt-post-thum m-1">
                        <a href="images/gallery/pic2.jpg" class="mfp-link">
                          <img src="images/gallery/thumb/pic2.jpg" alt="" />
                        </a>
                      </div>
                    </div>

                    <div class="col-6 col-sm-4 ">
                      <div class="wt-post-thum  m-1">
                        <a href="images/gallery/pic3.jpg" class="mfp-link">
                          <img src="images/gallery/thumb/pic3.jpg" alt="" />
                        </a>
                      </div>
                    </div>

                    <div class="col-6 col-sm-4 ">
                      <div class="wt-post-thum m-1">
                        <a href="images/gallery/pic4.jpg" class="mfp-link">
                          <img src="images/gallery/thumb/pic4.jpg" alt="" />
                        </a>
                      </div>
                    </div>

                    <div class="col-6 col-sm-4 ">
                      <div class="wt-post-thum m-1">
                        <a href="images/gallery/pic5.jpg" class="mfp-link">
                          <img src="images/gallery/thumb/pic5.jpg" alt="" />
                        </a>
                      </div>
                    </div>

                    <div class="col-6 col-sm-4 ">
                      <div class="wt-post-thum m-1">
                        <a href="images/gallery/pic6.jpg" class="mfp-link">
                          <img src="images/gallery/thumb/pic6.jpg" alt="" />
                        </a>
                      </div>
                    </div>

                    <div class="col-6 col-sm-4 ">
                      <div class="wt-post-thum m-1">
                        <a href="images/gallery/pic7.jpg" class="mfp-link">
                          <img src="images/gallery/thumb/pic7.jpg" alt="" />
                        </a>
                      </div>
                    </div>

                    <div class="col-6 col-sm-4 ">
                      <div class="wt-post-thum m-1">
                        <a href="images/gallery/pic8.jpg" class="mfp-link">
                          <img src="images/gallery/thumb/pic8.jpg" alt="" />
                        </a>
                      </div>
                    </div>

                    <div class="col-6 col-sm-4 ">
                      <div class="wt-post-thum  m-1">
                        <a href="images/gallery/pic7.jpg" class="mfp-link">
                          <img src="images/gallery/thumb/pic9.jpg" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- ABOUT AUTHOR --> */}
                <div class="widget widget-team p-a30 bg-white">
                  <h4 class="widget-title">About Author</h4>
                  <div class="widget-post m-b15">
                    <img
                      src="images/our-team1/pic1.jpg"
                      alt=""
                      class="img-responsive"
                    />
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
                      {recentPosts.map((item, index) => {
                        const { day, month, year } = formatDate(blog?.date);
                        return (
                          <div key={index} class="widget-post clearfix">
                            <div class="wt-post-media">
                              <img src={item.show_image} alt="" />
                            </div>
                            <div class="wt-post-info">
                              <div class="wt-post-meta">
                                <ul>
                                  <li class="post-author">
                                    {month} {day}, {year}
                                  </li>
                                </ul>
                              </div>
                              <div class="wt-post-header">
                                <h5 class="post-title">{item.title}</h5>
                              </div>
                            </div>
                          </div>
                        );
                      })}
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

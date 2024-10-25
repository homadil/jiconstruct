import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { DataContext } from "../../store";
import apiRequest from "../../apiRequest";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
export default function Video() {
  const query = useQuery();
  const id = query.get("id"); // This will get the 'id' query param
  const [formData, setFormData] = useState({
    content: "",
    author: "",
    email: "",
    website: "",
  });
  const navigate = useNavigate();
  const { blogs, backend_url, formatDate, formatDateTime, setBlogs } =
    useContext(DataContext);
  const blog = blogs.filter((blog) => blog.id === parseInt(id))[0];
  if (!blog) {
    return navigate("/blog");
  }

  const { day, month, year } = formatDate(blog.createdAt);
  function handleSubmit(e) {
    e.preventDefault();
    apiRequest.post(`blogs/${blog.id}/comments`, formData).then((res) => {
      // Update the blogs state with the new comment
      setBlogs((prevBlogs) =>
        prevBlogs.map((prevBlog) => {
          if (prevBlog.id === blog.id) {
            // Add the new comment to the existing comments array
            return {
              ...prevBlog,
              Comments: [...prevBlog.Comments, res.comment],
            };
          }
          return prevBlog; // Return the previous blog unchanged
        })
      );

      setFormData({ content: "", author: "", email: "", website: "" });
    });
  }
  return (
    // <!-- CONTENT START -->
    <div className="page-content ">
      {/* <!-- INNER PAGE BANNER --> */}
      <div
        className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
        data-stellar-background-ratio="0.5"
        style={{
          backgroundImage: `url(${backend_url}/${blog.show})`, // Corrected syntax
        }}
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
                <li>{blog.title}</li>
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
          {/* <!-- BLOG START --> */}
          <div className="blog-post date-style-1 blog-detail text-black bg-white">
            <div className="wt-post-media clearfix">
              <div className="grid-post row">
                {blog.Media.map((media, index) => {
                  return (
                    <div key={index} className="col-md-6">
                      <div className="portfolio-item wt-img-effect zoom-slow m-b30">
                        {media.exe === "image" ? (
                          <img
                            src={`${backend_url}/${media.path}`}
                            alt={media.type}
                          />
                        ) : (
                          <video
                            src={`${backend_url}/${media.path}`}
                            control
                          ></video>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="wt-post-info p-a30 p-t0">
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
                      By{" "}
                      <span>
                        {blog?.user.role} ({blog?.user.name})
                      </span>
                    </a>{" "}
                  </li>
                  <li className="post-comment">
                    <i className="fa fa fa-comments"></i>
                    <a href="javascript:void(0);">
                      {blog?.Comments.length} <span>Comment</span>
                    </a>{" "}
                  </li>
                </ul>
              </div>
              <div className="wt-post-title ">
                <h3 className="post-title">
                  <a href="javascript:void(0);" className=" m-t0">
                    {blog?.title}
                  </a>
                </h3>
              </div>
              <div className="wt-post-text">
                <p>{blog?.description}</p>
              </div>

              {blog.quote && (
                <blockquote className="bg-gray">
                  <i className="fa fa-quote-left"></i>
                  <span>{blog.quote}</span>
                </blockquote>
              )}

              <div
                className="wt-post-text"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              ></div>
            </div>
          </div>

          <div className="clear p-a30 m-b30 bg-white" id="comment-list">
            <div className="comments-area" id="comments">
              <h4 className="comments-title">
                {blog.Comments.length} Comments
              </h4>
              <div>
                {/* <!-- COMMENT LIST START --> */}
                <ol className="comment-list">
                  <li className="comment">
                    {/* <!-- COMMENT BLOCK --> */}
                    {blog.Comments.map((comment, index) => {
                      const date = formatDateTime(comment.createdAt);
                      return (
                        <div className="comment-body">
                          <div className="comment-meta">
                            <a href="javascript:void(0);">{date}</a>
                          </div>
                          <div className="comment-author vcard">
                            <img
                              className="avatar photo"
                              src={
                                comment.user
                                  ? `${backend_url}/${comment?.user.profile_image}`
                                  : "https://picsum.photos/200/300"
                              }
                              alt=""
                            />
                            <cite className="fn">
                              {comment.user
                                ? comment.user.name
                                : comment.author}
                            </cite>
                            <span className="says">says:</span>
                          </div>

                          <p>{comment.content}</p>
                        </div>
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
                    onSubmit={handleSubmit}
                  >
                    <p className="comment-form-author">
                      <label htmlFor="author">
                        Name <span className="required">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        value={formData.author}
                        name="author"
                        required
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            author: e.currentTarget.value,
                          })
                        }
                        placeholder="Author"
                        id="author"
                      />
                    </p>

                    <p className="comment-form-email">
                      <label htmlFor="email">
                        Email <span className="required">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        value={formData.email}
                        name="email"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            email: e.currentTarget.value,
                          })
                        }
                        placeholder="Email"
                        id="email"
                      />
                    </p>

                    <p className="comment-form-url">
                      <label htmlFor="url">Website</label>
                      <input
                        className="form-control"
                        type="text"
                        value={formData.website}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            website: e.currentTarget.value,
                          })
                        }
                        name="url"
                        placeholder="Website"
                        id="url"
                      />
                    </p>

                    <p className="comment-form-comment">
                      <label htmlFor="comment">Comment</label>
                      <textarea
                        className="form-control"
                        rows="8"
                        name="comment"
                        required
                        placeholder="Comment"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            content: e.currentTarget.value,
                          })
                        }
                        id="comment"
                      ></textarea>
                    </p>

                    <p className="form-submit">
                      <button
                        className="site-button radius-no text-uppercase font-weight-600"
                        type="submit"
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
      </div>
      {/* <!-- SECTION CONTENT END --> */}
    </div>
    /* <!-- CONTENT END --> */
  );
}

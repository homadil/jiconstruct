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
    <div class="page-content ">
      {/* <!-- INNER PAGE BANNER --> */}
      <div
        class="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
        data-stellar-background-ratio="0.5"
        style={{
          backgroundImage: `url(${backend_url}/${blog.show})`, // Corrected syntax
        }}
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
                <li>{blog.title}</li>
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
          {/* <!-- BLOG START --> */}
          <div class="blog-post date-style-1 blog-detail text-black bg-white">
            <div class="wt-post-media clearfix">
              <div class="grid-post row">
                {blog.Media.map((media, index) => {
                  return (
                    <div key={index} class="col-md-6">
                      <div class="portfolio-item wt-img-effect zoom-slow m-b30">
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

            <div class="wt-post-info p-a30 p-t0">
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
                      By{" "}
                      <span>
                        {blog?.user.role} ({blog?.user.name})
                      </span>
                    </a>{" "}
                  </li>
                  <li class="post-comment">
                    <i class="fa fa fa-comments"></i>
                    <a href="javascript:void(0);">
                      {blog?.Comments.length} <span>Comment</span>
                    </a>{" "}
                  </li>
                </ul>
              </div>
              <div class="wt-post-title ">
                <h3 class="post-title">
                  <a href="javascript:void(0);" class=" m-t0">
                    {blog?.title}
                  </a>
                </h3>
              </div>
              <div class="wt-post-text">
                <p>{blog?.description}</p>
              </div>

              {blog.quote && (
                <blockquote class="bg-gray">
                  <i class="fa fa-quote-left"></i>
                  <span>{blog.quote}</span>
                </blockquote>
              )}

              <div
                className="wt-post-text"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              ></div>
            </div>
          </div>

          <div class="clear p-a30 m-b30 bg-white" id="comment-list">
            <div class="comments-area" id="comments">
              <h4 class="comments-title">{blog.Comments.length} Comments</h4>
              <div>
                {/* <!-- COMMENT LIST START --> */}
                <ol class="comment-list">
                  <li class="comment">
                    {/* <!-- COMMENT BLOCK --> */}
                    {blog.Comments.map((comment, index) => {
                      const date = formatDateTime(comment.createdAt);
                      return (
                        <div class="comment-body">
                          <div class="comment-meta">
                            <a href="javascript:void(0);">{date}</a>
                          </div>
                          <div class="comment-author vcard">
                            <img
                              class="avatar photo"
                              src={
                                comment.user
                                  ? `${backend_url}/${comment?.user.profile_image}`
                                  : "https://picsum.photos/200/300"
                              }
                              alt=""
                            />
                            <cite class="fn">
                              {comment.user
                                ? comment.user.name
                                : comment.author}
                            </cite>
                            <span class="says">says:</span>
                          </div>

                          <p>{comment.content}</p>
                        </div>
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

                  <form
                    class="comment-form"
                    id="commentform"
                    method="post"
                    onSubmit={handleSubmit}
                  >
                    <p class="comment-form-author">
                      <label for="author">
                        Name <span class="required">*</span>
                      </label>
                      <input
                        class="form-control"
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

                    <p class="comment-form-email">
                      <label for="email">
                        Email <span class="required">*</span>
                      </label>
                      <input
                        class="form-control"
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

                    <p class="comment-form-url">
                      <label for="url">Website</label>
                      <input
                        class="form-control"
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

                    <p class="comment-form-comment">
                      <label for="comment">Comment</label>
                      <textarea
                        class="form-control"
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

                    <p class="form-submit">
                      <button
                        class="site-button radius-no text-uppercase font-weight-600"
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

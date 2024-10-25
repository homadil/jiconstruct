import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import bg from "../../assets/videos/dummy/details.mp4";
import postOne from "../../assets/images/dummy/download_4.avif";
import postTwo from "../../assets/images/dummy/download_3.jpg";
import postThree from "../../assets/images/dummy/download_5.jpg";
import postFive from "../../assets/images/dummy/download_7.jpg";
import { useNavigate } from "react-router-dom";
import apiRequest from "../../apiRequest";
import { DataContext } from "../../store";
import { Helmet } from "react-helmet-async";
// Utility function to parse query string
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
export default function Details() {
  const query = useQuery();
  const id = query.get("id"); // This will get the 'id' query param
  const [formData, setFormData] = useState({
    content: "",
    author: "",
    email: "",
    website: "",
  });
  const navigate = useNavigate();
  const { projects, backend_url, formatDate, formatDateTime, setProjects } =
    useContext(DataContext);
  const project = projects.filter((project) => project.id === parseInt(id))[0];
  if (!project) {
    return navigate("/project");
  }

  const { day, month, year } = formatDate(project.createdAt);
  function handleSubmit(e) {
    e.preventDefault();
    apiRequest.post(`projects/${project.id}/comments`, formData).then((res) => {
      // Update the blogs state with the new comment
      setProjects((prevProjects) =>
        prevProjects.map((prevProject) => {
          if (prevProject.id === project.id) {
            // Add the new comment to the existing comments array
            return {
              ...prevProject,
              Comments: [...prevProject.Comments, res.comment],
            };
          }
          return prevProject; // Return the previous blog unchanged
        })
      );

      setFormData({ content: "", author: "", email: "", website: "" });
    });
  }

  return (
    //  <!-- CONTENT START -->
    <div className="page-content">
      <Helmet>
        <title>Ji Construct | Project | {project?.title || "Details"}</title>
      </Helmet>

      {/* INNER PAGE BANNER */}
      <div
        className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
        data-stellar-background-ratio="0.5"
        style={{ position: "relative", overflow: "hidden" }} // Ensure parent is relative
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: "0.5",
            objectFit: "cover",
            zIndex: 1,
          }}
        >
          <source src={bg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Your content */}
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="wt-bnr-inr-entry">
            <div className="banner-title-outer">
              <div className="banner-title-name">
                <h2 className="text-white">
                  {project.title.toUpperCase()} Detail
                </h2>
              </div>
            </div>
            {/* <!-- BREADCRUMB ROW -->                             */}

            <div>
              <ul className="wt-breadcrumb breadcrumb-style-2">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>{project.title}</li>
              </ul>
            </div>

            {/* <!-- BREADCRUMB ROW END -->                         */}
          </div>
        </div>
      </div>
      {/* <!-- INNER PAGE BANNER END --> */}

      {/* <!-- SECTION CONTENT START --> */}
      <div className="section-full p-tb90">
        <div className="container-fluid project-detail-pic">
          <div className="row justify-content-center">
            {project.Media.map((media, index) => {
              return (
                <div key={index} className="col-lg-4 col-md-6 m-b30">
                  <div className="project-detail-pic ">
                    <div className="wt-media">
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
                </div>
              );
            })}
          </div>
        </div>

        <div className="container">
          <div className="project-detail-outer">
            <div className="project-detail-containt">
              <div className="bg-white text-black">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="wt-media m-b30">
                  <img
                    src={`${backend_url}/${project.show}`}
                    alt={project.name}
                  />
                </div>
                <div
                  className="wt-post-text"
                  dangerouslySetInnerHTML={{ __html: project.content }}
                ></div>
              </div>
            </div>
            <div className="product-block-detail">
              <ul>
                <li>
                  <h5 className="m-b10">Date</h5>
                  <p>
                    {month} {day}, {year}
                  </p>
                </li>
                <li>
                  <h5 className="m-b10">Client</h5>
                  <p>{project.client.toUpperCase()}</p>
                </li>
                <li>
                  <h5 className="m-b10">Project type</h5>
                  {project.Tags.slice(0, 3).map((tag) => {
                    return (
                      <span className="m-b10" key={tag.id}>
                        {tag.name},{" "}
                      </span>
                    );
                  })}
                </li>
                <li>
                  <h5 className="m-b10">Location</h5>
                  <p>
                    {project.location?.address}, {project.location?.city},{" "}
                    {project.location?.state}, {project.location?.country}
                  </p>
                </li>
                <li>
                  <h5 className="m-b10">Creative Director</h5>
                  <p>{project.director.toUpperCase()}</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="clear p-a30 m-b30 bg-white" id="comment-list">
            <div className="comments-area" id="comments">
              <h4 className="comments-title">
                {project.Comments.length} Comments
              </h4>
              <div>
                {/* <!-- COMMENT LIST START --> */}
                <ol className="comment-list">
                  <li className="comment">
                    {/* <!-- COMMENT BLOCK --> */}
                    {project.Comments.map((comment, index) => {
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
                      <label for="author">
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
                      <label for="email">
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
                      <label for="url">Website</label>
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
                      <label for="comment">Comment</label>
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
        </div>
      </div>
      {/* <!-- SECTION CONTENT END  --> */}
    </div>
    /* <!-- CONTENT END -->; */
  );
}

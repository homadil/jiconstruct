import React, { useContext } from "react";
import { DataContext } from "../../store";
import { Link } from "react-router-dom";
const getLatestPostAndSortedBlogs = (blogs) => {
  // Step 1: Create a shallow copy of the blogs array
  const blogsCopy = blogs.slice();

  // Step 2: Remove the first blog post (latest) from the copied array
  const latest = blogsCopy.shift();

  // Step 3: Sort the remaining blogs by date (latest first) in the copied array
  const sortedBlogs = blogsCopy.sort(
    (a, b) => new Date(b?.date) - new Date(a?.date)
  );

  // Step 4: Limit the sorted blogs to 4 posts
  const limitedBlogs = sortedBlogs.slice(0, 4);

  return { latest, limitedBlogs };
};
export default function Blog() {
  const { blogs, formatDate, truncateContent, backend_url } =
    useContext(DataContext);
  const { latest, limitedBlogs } = getLatestPostAndSortedBlogs(blogs);
  const { day, month, year } = formatDate(latest?.createdAt);

  if (latest == undefined) {
    return;
  }
  return (
    /* <!-- OUR BLOG START --> */
    <div className="section-full p-t80 p-b50 bg-white">
      <div className="container">
        <div className="section-head clearfix">
          <div className="wt-tilte-main bdr-r-3 bdr-primary bdr-solid">
            <small className="wt-small-title">Blog Section</small>
            <h2 className="m-b5">Our Latest Blog</h2>
          </div>
          <div className="title-right-detail">
            <p>
              We are uncompetitor in architectural solutions Friendly neighbour
              there that power. Keep away Architecture who try to Ambitions
              people do that really great.
            </p>
          </div>
        </div>
        <div className="row equal-wraper">
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="latest-blog-3-pattern">
              <div
                className="blog-post latest-blog-3 overlay-wraper post-overlay  large?-date bg-cover bg-no-repeat bg-top-center"
                // input url here
                style={{
                  backgroundImage: `url(${backend_url}/${latest?.show})`,
                }}
              >
                <div className="overlay-main opacity-05 bg-black"></div>
                <div className="wt-post-info p-a30 text-white">
                  <div className="post-overlay-position">
                    <div className="post-content-outer bdr-l-8 bdr-solid bdr-primary p-a15">
                      <div className="wt-post-meta ">
                        <ul>
                          <li className="post?-date">
                            <strong>{day}</strong>
                            <span>
                              {month} {year}
                            </span>
                          </li>
                          <li className="post-author">
                            <i className="fa fa-user-o"></i>By{" "}
                            <a href="javascript:;">{latest.user.name}</a>{" "}
                          </li>
                          <li className="post-comment">
                            <i className="fa fa-comments-o"></i>{" "}
                            <a href="javascript:;">
                              {latest.Comments.length} comment
                            </a>{" "}
                          </li>
                        </ul>
                      </div>
                      <div className="wt-post-title ">
                        <h3 className="post-title">
                          <Link
                            to={{
                              pathname: "/blog_detail",
                              search: `?id=${latest.id}`,
                            }}
                            className="text-white text-capitalize"
                          >
                            {latest.title}
                          </Link>
                        </h3>
                      </div>
                      <div className="wt-post-readmore ">
                        <Link
                          to={{
                            pathname: "/blog_detail",
                            search: `?id=${latest.id}`,
                          }}
                          className="site-button-link white"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                    <div className="blog-social-icon">
                      <ul className="social-tooltips-outer">
                        {latest?.Urls.map((url, index) => {
                          return (
                            <li key={index}>
                              <a href={url.link} className={`fa ${url.icon}`}>
                                <span className="social-tooltips">
                                  {url.name}
                                </span>
                                {url.icon == "" && (
                                  <img
                                    className="avatar photo rounded-4"
                                    src={`${backend_url}/${url.image}`}
                                    alt={url.name}
                                  />
                                )}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="row latest-blog-2-outer m-t30">
              {limitedBlogs.map((item, index) => {
                const { day, month, year } = formatDate(item?.createdAt);
                return (
                  <div key={index} className="col-lg-6 col-md-6 col-sm-6">
                    <div className="blog-post latest-blog-2 mid-size?-date bdr-1 bdr-solid bdr-gray  p-a20">
                      <div className="wt-post-info">
                        <div className="wt-post-meta ">
                          <ul>
                            <li className="post?-date">
                              <strong>{day} </strong>{" "}
                              <span>
                                {month} {year}
                              </span>{" "}
                            </li>
                            <li className="post-author">
                              <i className="fa fa-user-o"></i>
                              <a href="javascript:void(0);">
                                By <span>{item.user.name}</span>
                              </a>{" "}
                            </li>
                            <li className="post-comment">
                              <i className="fa fa-comments-o"></i>{" "}
                              <a href="javascript:void(0);">
                                {item.Comments.length} Comment
                              </a>{" "}
                            </li>
                          </ul>
                        </div>
                        <div className="wt-post-title ">
                          <h4 className="post-title">
                            <Link
                              to={{
                                pathname: "/blog_detail",
                                search: `?id=${item.id}`,
                              }}
                              className="text-capitalize"
                            >
                              {item.title}
                            </Link>
                          </h4>
                        </div>
                        <div className="wt-post-text ">
                          <p>{truncateContent(item.description, 20)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
    /* <!-- OUR BLOG END --> */
  );
}

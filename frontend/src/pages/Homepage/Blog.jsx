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
    <div class="section-full p-t80 p-b50 bg-white">
      <div class="container">
        <div class="section-head clearfix">
          <div class="wt-tilte-main bdr-r-3 bdr-primary bdr-solid">
            <small class="wt-small-title">Blog Section</small>
            <h2 class="m-b5">Our Latest Blog</h2>
          </div>
          <div class="title-right-detail">
            <p>
              We are uncompetitor in architectural solutions Friendly neighbour
              there that power. Keep away Architecture who try to Ambitions
              people do that really great.
            </p>
          </div>
        </div>
        <div class="row equal-wraper">
          <div class="col-xl-6 col-lg-6 col-md-12">
            <div class="latest-blog-3-pattern">
              <div
                class="blog-post latest-blog-3 overlay-wraper post-overlay  large?-date bg-cover bg-no-repeat bg-top-center"
                // input url here
                style={{
                  backgroundImage: `url(${backend_url}/${latest?.show})`,
                }}
              >
                <div class="overlay-main opacity-05 bg-black"></div>
                <div class="wt-post-info p-a30 text-white">
                  <div class="post-overlay-position">
                    <div class="post-content-outer bdr-l-8 bdr-solid bdr-primary p-a15">
                      <div class="wt-post-meta ">
                        <ul>
                          <li class="post?-date">
                            <strong>{day}</strong>
                            <span>
                              {month} {year}
                            </span>
                          </li>
                          <li class="post-author">
                            <i class="fa fa-user-o"></i>By{" "}
                            <a href="javascript:;">{latest.user.name}</a>{" "}
                          </li>
                          <li class="post-comment">
                            <i class="fa fa-comments-o"></i>{" "}
                            <a href="javascript:;">
                              {latest.Comments.length} comment
                            </a>{" "}
                          </li>
                        </ul>
                      </div>
                      <div class="wt-post-title ">
                        <h3 class="post-title">
                          <Link
                            to={{
                              pathname: "/blog_detail",
                              search: `?id=${latest.id}`,
                            }}
                            class="text-white text-capitalize"
                          >
                            {latest.title}
                          </Link>
                        </h3>
                      </div>
                      <div class="wt-post-readmore ">
                        <Link
                          to={{
                            pathname: "/blog_detail",
                            search: `?id=${latest.id}`,
                          }}
                          class="site-button-link white"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                    <div class="blog-social-icon">
                      <ul class="social-tooltips-outer">
                        {latest?.Urls.map((url, index) => {
                          console.log(url);
                          return (
                            <li key={index}>
                              <a href={url.link} className={`fa ${url.icon}`}>
                                <span class="social-tooltips">{url.name}</span>
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
          <div class="col-xl-6 col-lg-6 col-md-12">
            <div class="row latest-blog-2-outer m-t30">
              {limitedBlogs.map((item, index) => {
                const { day, month, year } = formatDate(item?.createdAt);
                return (
                  <div key={index} class="col-lg-6 col-md-6 col-sm-6">
                    <div class="blog-post latest-blog-2 mid-size?-date bdr-1 bdr-solid bdr-gray  p-a20">
                      <div class="wt-post-info">
                        <div class="wt-post-meta ">
                          <ul>
                            <li class="post?-date">
                              <strong>{day} </strong>{" "}
                              <span>
                                {month} {year}
                              </span>{" "}
                            </li>
                            <li class="post-author">
                              <i class="fa fa-user-o"></i>
                              <a href="javascript:void(0);">
                                By <span>{item.user.name}</span>
                              </a>{" "}
                            </li>
                            <li class="post-comment">
                              <i class="fa fa-comments-o"></i>{" "}
                              <a href="javascript:void(0);">
                                {item.Comments.length} Comment
                              </a>{" "}
                            </li>
                          </ul>
                        </div>
                        <div class="wt-post-title ">
                          <h4 class="post-title">
                            <Link
                              to={{
                                pathname: "/blog_detail",
                                search: `?id=${item.id}`,
                              }}
                              class="text-capitalize"
                            >
                              {item.title}
                            </Link>
                          </h4>
                        </div>
                        <div class="wt-post-text ">
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

import React, { useContext } from "react";
import { DataContext } from "../../store";
import { Link } from "react-router-dom";
const getLatestPostAndSortedBlogs = (blogs) => {
  // Step 1: Remove the first blog post (latest) and store it in a separate variable
  const latest = blogs.splice(0, 1)[0];

  // Step 2: Sort the remaining blogs by? date (latest first)
  blogs.sort((a, b) => new Date(b?.date) - new Date(a?.date));

  // Step 3: Limit the blogs to 4 posts
  const limitedBlogs = blogs.slice(0, 4);

  return { latest, limitedBlogs };
};

export default function Blog() {
  const { blogs, formatDate, truncateContent } = useContext(DataContext);
  const { latest, limitedBlogs } = getLatestPostAndSortedBlogs(blogs);
  const { day, month, year } = formatDate(latest?.date);
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
                style={{ backgroundImage: "url(images/dummy/download14.webp)" }}
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
                            <a href="javascript:;">{latest.author.name}</a>{" "}
                          </li>
                          <li class="post-comment">
                            <i class="fa fa-comments-o"></i>{" "}
                            <a href="javascript:;">
                              {latest.comment_count} comment
                            </a>{" "}
                          </li>
                        </ul>
                      </div>
                      <div class="wt-post-title ">
                        <h3 class="post-title">
                          <Link
                            to={{
                              pathname: "/route",
                              search: `?type=blog&id=${latest.id}`,
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
                            pathname: "/route",
                            search: `?type=blog&id=${latest.id}`,
                          }}
                          class="site-button-link white"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                    <div class="blog-social-icon">
                      <ul class="social-tooltips-outer">
                        <li>
                          <a href="javascript:void(0);" class="fa fa-google">
                            <span class="social-tooltips">Google</span>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);" class="fa fa-rss">
                            <span class="social-tooltips">Rss</span>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);" class="fa fa-facebook">
                            <span class="social-tooltips">Facebook</span>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);" class="fa fa-twitter">
                            <span class="social-tooltips">Twitter</span>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);" class="fa fa-linkedin">
                            <span class="social-tooltips">Linkedin</span>
                          </a>
                        </li>
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
                const { day, month, year } = formatDate(item?.date);
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
                                By <span>{item.author.name}</span>
                              </a>{" "}
                            </li>
                            <li class="post-comment">
                              <i class="fa fa-comments-o"></i>{" "}
                              <a href="javascript:void(0);">
                                {item.comment_count} Comment
                              </a>{" "}
                            </li>
                          </ul>
                        </div>
                        <div class="wt-post-title ">
                          <h4 class="post-title">
                            <Link
                              to={{
                                pathname: "/route",
                                search: `?type=blog&id=${item.id}`,
                              }}
                              class="text-capitalize"
                            >
                              {item.title}
                            </Link>
                          </h4>
                        </div>
                        <div class="wt-post-text ">
                          <p>{truncateContent(item.desc, 20)}</p>
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

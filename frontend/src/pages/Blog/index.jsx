import React, { useContext, useState } from "react";
import author from "../../assets/images/dummy/team2.jpg";
import { DataContext } from "../../store";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination"; // Example pagination library
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper/modules";

export default function Blog() {
  const {
    newsHeader,
    blogs,
    backend_url,
    formatDate,
    truncateContent,
    partners,
    tags,
  } = useContext(DataContext);

  const sortedBlogs = blogs.sort(
    (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(sortedBlogs);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Set how many blogs to show per page

  // Handle search query change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    const filtered = sortedBlogs.filter((blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBlogs(filtered);
    setCurrentPage(1); // Reset to the first page on new search
  };

  // Paginate the blogs (filteredBlogs if searching, otherwise sortedBlogs)
  const paginatedBlogs = (searchQuery ? filteredBlogs : sortedBlogs).slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const allMediaPaths = sortedBlogs
    .flatMap((blog) => blog.Media.map((media) => media.path))
    .slice(0, 9);

  const categoryCounts = {};

  // Loop through each blog
  sortedBlogs.forEach((blog) => {
    // Loop through each category in the blog
    blog.Categories.forEach((category) => {
      const categoryName = category.name;

      // If category is already in the object, increment the count, otherwise set it to 1
      if (categoryCounts[categoryName]) {
        categoryCounts[categoryName]++;
      } else {
        categoryCounts[categoryName] = 1;
      }
    });
  });

  // Convert the categoryCounts object into an array of objects
  const categories = Object.keys(categoryCounts).map((categoryName) => ({
    name: categoryName,
    amount: categoryCounts[categoryName],
  }));

  const users = sortedBlogs.flatMap((blog) => blog.user);

  const recentBlogs = sortedBlogs.slice(0, 3);

  return (
    <div>
      {/* <!-- CONTENT START --> */}
      <div class="page-content">
        {/* <!-- INNER PAGE BANNER --> */}
        <div
          class="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
          data-stellar-background-ratio="0.5"
          style={{
            backgroundImage: `url(${backend_url}/${newsHeader[0]?.path})`, // Corrected syntax
          }}
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
                    <Link to={"/"}>Home</Link>
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
              <div className="col-lg-8 col-md-12 col-sm-12">
                <div className="news-listing m-t20">
                  {paginatedBlogs.length ? (
                    paginatedBlogs.map((blog) => {
                      const { day, month, year } = formatDate(blog.createdAt);
                      return (
                        <div
                          className="blog-post blog-md date-style-1 clearfix m-b60 bg-white"
                          key={blog.id}
                        >
                          <div className="wt-post-media wt-img-effect zoom-slow">
                            <a href="javascript:void(0);">
                              <img
                                src={`${backend_url}/${blog.show}`}
                                alt={blog.title}
                              />
                            </a>
                          </div>
                          <div className="wt-post-info p-a30">
                            <div className="wt-post-meta">
                              <ul>
                                <li className="post-date">
                                  <strong>{day}</strong>
                                  <span>
                                    {month} {year}
                                  </span>
                                </li>
                                <li className="post-author">
                                  <i className="fa fa-user"></i>
                                  <a href="javascript:void(0);">
                                    By{" "}
                                    <span>
                                      {blog.user.role} ({blog.user.name})
                                    </span>
                                  </a>
                                </li>
                                <li className="post-comment">
                                  <i className="fa fa-comments"></i>
                                  <a href="javascript:void(0);">
                                    {blog.Comments.length} <span>Comments</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="wt-post-title">
                              <h3 className="post-title">
                                <a href="javascript:void(0);" className="m-t0">
                                  {blog.title}
                                </a>
                              </h3>
                            </div>
                            <div className="wt-post-text">
                              <p>{truncateContent(blog.description, 100)}</p>
                            </div>
                            <Link
                              className="site-button-link"
                              to={`/blog_detail?id=${blog.id}`}
                            >
                              Read More
                            </Link>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <p>No blogs found for "{searchQuery}"</p>
                  )}
                </div>

                {/* Pagination */}
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={itemsPerPage}
                  totalItemsCount={
                    searchQuery ? filteredBlogs.length : sortedBlogs.length
                  }
                  pageRangeDisplayed={5}
                  onChange={handlePageChange}
                  itemClass="page-item"
                  linkClass="page-link"
                />
              </div>

              {/* <!-- SIDE BAR START --> */}
              <div class="col-lg-4 col-md-12 col-sm-12 rightSidebar">
                <aside class="side-bar">
                  {/* <!-- SEARCH --> */}
                  <div class="widget p-a30 bg-white">
                    <h4 class="widget-title">Search</h4>
                    <div class="search-bx">
                      <form
                        role="search"
                        method="post"
                        onSubmit={handleSearchSubmit}
                      >
                        <div className="input-group">
                          <input
                            name="search-query"
                            type="text"
                            className="form-control"
                            placeholder="Write your text"
                            value={searchQuery}
                            onChange={handleSearchChange}
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
                  <div class="widget bg-white  widget_services p-a30 bg-white">
                    <h4 class="widget-title">Categories</h4>
                    <ul>
                      {categories?.map((cat) => {
                        return (
                          <li>
                            <a href="javascript:void(0);">{cat.name}</a>
                            <span> ({cat.amount})</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* <!-- OUR GALLERY  --> */}
                  <div class="widget widget_gallery mfp-gallery p-a30 bg-white">
                    <h4 class="widget-title">Our Gallery</h4>
                    <div class="row no-gutters justify-content-center">
                      {allMediaPaths.map((item, index) => {
                        return (
                          <div className="col-6 col-sm-4" key={index}>
                            <div className="wt-post-thum m-1" key={index}>
                              <a href={`#`} className="mfp-link">
                                <img src={`${backend_url}/${item}`} alt="" />
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

                    <Swiper
                      modules={[Navigation, Scrollbar, A11y, Autoplay]}
                      spaceBetween={0}
                      slidesPerView={1}
                      autoplay={{ delay: 5000 }}
                      pagination={{ clickable: true }}
                      effect="fade" // Use the fade effect
                      fadeEffect={{ crossFade: true }} // Smooth fade between slides
                      scrollbar={{ draggable: true }}
                    >
                      {users.map((item, index) => (
                        <SwiperSlide key={index}>
                          <div class="widget-post m-b15">
                            <img
                              src={
                                item.profile_image == null
                                  ? author
                                  : `${backend_url}/${item.profile_image}`
                              }
                              alt=""
                              class="img-responsive"
                            />
                          </div>
                          <div class="team-detail  text-center">
                            <h4 class="m-t0">{item.name}</h4>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>

                  {/* <!-- RECENT POSTS --> */}
                  <div class="widget  recent-posts-entry p-a30 bg-white">
                    <h4 class="widget-title">Recent Posts</h4>
                    <div class="section-content">
                      <div class="widget-post-bx">
                        {recentBlogs?.map((blog, index) => {
                          const { day, month, year } = formatDate(
                            blog.createdAt
                          );
                          return (
                            <div class="widget-post clearfix" key={index}>
                              <div class="wt-post-media">
                                <img
                                  src={`${backend_url}/${blog?.show}`}
                                  alt=""
                                  class="img-responsive"
                                />
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
                                  <h5 class="post-title">{blog.title}</h5>
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
                    <h4 class="widget-title">Our Partners</h4>
                    <Swiper
                      modules={[Navigation, Scrollbar, A11y, Autoplay]}
                      spaceBetween={0}
                      slidesPerView={5}
                      autoplay
                      effect="fade" // Use the fade effect
                      fadeEffect={{ crossFade: true }} // Smooth fade between slides
                      scrollbar={{ draggable: true }}
                    >
                      {partners?.map((partner, index) => {
                        return (
                          <SwiperSlide key={index}>
                            <div class="item" key={index}>
                              <div class="ow-client-logo">
                                <div class="client-logo wt-img-effect on-color">
                                  <a href="#">
                                    <img
                                      src={`${backend_url}/${partner?.image}`}
                                      alt=""
                                      class="img-responsive"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>

                  {/* <!-- TAGS --> */}
                  <div class="widget widget_tag_cloud p-a30 bg-white">
                    <h4 class="widget-title">Tags</h4>
                    <div class="tagcloud">
                      {tags.map((tag, index) => {
                        return (
                          <a key={index} href="javascript:void(0);">
                            {tag.name}{" "}
                          </a>
                        );
                      })}
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

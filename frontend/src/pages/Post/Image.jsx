import React from "react";

export default function Image() {
  return (
    //   <!-- CONTENT START -->
    <div className="page-content ">
      {/* <!-- INNER PAGE BANNER --> */}
      <div
        className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
        data-stellar-background-ratio="0.5"
        style={{ backgroundImage: "url(images/banner/2.jpg)" }}
      >
        <div className="overlay-main bg-black opacity-07"></div>
        <div className="container">
          <div className="wt-bnr-inr-entry">
            <div className="banner-title-outer">
              <div className="banner-title-name">
                <h2 className="text-white">Post Image</h2>
              </div>
            </div>
            {/* <!-- BREADCRUMB ROW -->                             */}

            <div>
              <ul className="wt-breadcrumb breadcrumb-style-2">
                <li>
                  <a href="javascript:void(0);">Home</a>
                </li>
                <li>Post Image</li>
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
          <div className="blog-post date-style-1 blog-detail text-black">
            <div className="wt-post-media wt-img-effect zoom-slow">
              <a href="javascript:void(0);">
                <img src="images/blog/default/thum2.jpg" alt="" />
              </a>
            </div>
            <div className="wt-post-info p-a30 bg-white">
              <div className="wt-post-meta ">
                <ul>
                  <li className="post-date">
                    <strong>25 </strong> <span>Aug 2019</span>{" "}
                  </li>
                  <li className="post-author">
                    <i className="fa fa-user"></i>
                    <a href="javascript:void(0);">
                      By <span>Admin</span>
                    </a>{" "}
                  </li>
                  <li className="post-comment">
                    <i className="fa fa fa-comments"></i>
                    <a href="javascript:void(0);">
                      10 <span>Comment</span>
                    </a>{" "}
                  </li>
                </ul>
              </div>
              <div className="wt-post-title ">
                <h3 className="post-title">
                  <a href="javascript:void(0);" className=" m-t0">
                    Architecture is not based on concrete and steel.
                  </a>
                </h3>
              </div>
              <div className="wt-post-text">
                <p>
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy with my
                  whole heart. I am alone, and feel the charm of existence in
                  this spot, which was created for the bliss of souls like mine.
                  I am so happy, my dear friend, so absorbed in the exquisite
                  sense of me. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>
              </div>

              <div className="wt-blog-post-media">
                <div className="row m-t30">
                  <div className="col-md-4 m-b30">
                    <div className="wt-media">
                      <img src="images/projects/pic-4.jpg" alt="" />
                    </div>
                  </div>

                  <div className="col-md-4 m-b30">
                    <div className="wt-media">
                      <img src="images/projects/pic-5.jpg" alt="" />
                    </div>
                  </div>

                  <div className="col-md-4 m-b30">
                    <div className="wt-media">
                      <img src="images/projects/pic-1.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <blockquote className="bg-gray">
                <i className="fa fa-quote-left"></i>A bene fraticinida. Est
                barbatus parma, cesaris. Regius era virtualiter imperiums palus
                est. Domesticus, dexter parmas sed mire magicae.
              </blockquote>

              <div className="wt-post-text">
                <p>
                  Ut porta risus ac justo laoreet congue. Morbi sed varius odio,
                  id vestibulum tellus. Aliquam sem felis, vehicula at quam vel,
                  pellentesque malesuada lectus. Curabitur quis sem non odio
                  dictum posuere vel nec orci. Nunc laoreet lectus efficitur,
                  laoreet ipsum in, congue nunc. Praesent fringilla, ipsum
                  euismod eleifend pulvinar, elit nulla tristique enim, nec
                  sagittis lacus leo non mi. Integer velit mauris, laoreet id
                  gravida sed, vehicula vitae elit. Nunc ornare bibendum
                  laoreet. Donec egestas, orci sagittis faucibus consequat, leo
                  est mattis turpis, sit amet imperdiet ante massa ut risus.
                </p>
              </div>

              <div className="wt-blog-post-media ">
                <div className="row">
                  <div className="col-md-6 m-t30">
                    <div className="wt-media">
                      <img src="images/gallery/pic3.jpg" alt="" />
                    </div>
                  </div>

                  <div className="col-md-6 m-t30">
                    <div className="wt-media">
                      <img src="images/gallery/pic1.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clear p-a30 m-b30 bg-white" id="comment-list">
            <div className="comments-area" id="comments">
              <h4 className="comments-title">3 Comments</h4>
              <div>
                {/* <!-- COMMENT LIST START --> */}
                <ol className="comment-list">
                  <li className="comment">
                    {/* <!-- COMMENT BLOCK --> */}
                    <div className="comment-body">
                      <div className="comment-meta">
                        <a href="javascript:void(0);">
                          March 6, 2019 at 7:15 am
                        </a>
                      </div>
                      <div className="comment-author vcard">
                        <img
                          className="avatar photo"
                          src="images/comment-pic/1.jpg"
                          alt=""
                        />
                        <cite className="fn">Diego</cite>
                        <span className="says">says:</span>
                      </div>

                      <p>
                        Eheu. Teres exemplars ducunt ad idoleum. Ubi est peritus
                        cotta? Abaculus potuss, tanquam peritus zeta. Cur
                        hippotoxota ortum? Eras volare, tanquam audax poeta.
                        Scutums peregrinatione in ferox piscinam! Cum amor
                        assimilant, omnes.
                      </p>
                      <div className="reply">
                        <a
                          href="javscript:;"
                          className="comment-reply-link letter-spacing-2 text-uppercase"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                    {/* <!-- SUB COMMENT BLOCK --> */}
                    <ol className="children">
                      <li className="comment odd parent">
                        <div className="comment-body">
                          <div className="comment-meta">
                            <a href="javascript:void(0);">
                              March 8, 2019 at 9:15 am
                            </a>
                          </div>
                          <div className="comment-author vcard">
                            <img
                              className="avatar photo"
                              src="images/comment-pic/2.jpg"
                              alt=""
                            />
                            <cite className="fn">Brayden</cite>
                            <span className="says">says:</span>
                          </div>

                          <p>
                            Orexis peregrinationess, tanquam barbatus decor. Cum
                            elevatus manducare, omnes liberies vitare.
                          </p>
                          <div className="reply">
                            <a
                              href="javscript:;"
                              className="comment-reply-link letter-spacing-2 text-uppercase"
                            >
                              Read More
                            </a>
                          </div>
                        </div>

                        <ol className="children">
                          <li className="comment odd parent">
                            <div className="comment-body">
                              <div className="comment-meta">
                                <a href="javascript:void(0);">
                                  March 9, 2019 at 11:15 am
                                </a>
                              </div>
                              <div className="comment-author vcard">
                                {/* <img  className="avatar photo" src="images/comment-pic/3.jpg" alt=""> */}
                                <cite className="fn">Diego</cite>
                                <span className="says">says:</span>
                              </div>

                              <p>
                                Vel velit auctor aliquet. Aenean sollicitudin,
                                lorem quis bibendum auctor Lorem ipsum dolor sit
                                amet of Lorem Ipsum. Proin gravida nibh..
                              </p>
                              <div className="reply">
                                <a
                                  href="javscript:;"
                                  className="comment-reply-link letter-spacing-2 text-uppercase"
                                >
                                  Read More
                                </a>
                              </div>
                            </div>
                          </li>
                        </ol>
                      </li>
                    </ol>
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

                  <form className="comment-form" id="commentform" method="post">
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
      </div>
      {/* <!-- SECTION CONTENT END --> */}
    </div>
    /* <!-- CONTENT END --> */
  );
}

import React from "react";

export default function Gallery() {
  return (
    //   <!-- CONTENT START -->
    <div class="page-content ">
      {/* <!-- INNER PAGE BANNER --> */}
      <div
        class="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
        data-stellar-background-ratio="0.5"
        style={{ backgroundImage: "url(images/banner/1.jpg)" }}
      >
        <div class="overlay-main bg-black opacity-07"></div>
        <div class="container">
          <div class="wt-bnr-inr-entry">
            <div class="banner-title-outer">
              <div class="banner-title-name">
                <h2 class="text-white">Post Gallery</h2>
              </div>
            </div>
            {/* <!-- BREADCRUMB ROW -->                             */}

            <div>
              <ul class="wt-breadcrumb breadcrumb-style-2">
                <li>
                  <a href="javascript:void(0);">Home</a>
                </li>
                <li>Post Gallery</li>
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
          <div class="blog-post date-style-1 blog-detail text-black">
            <div class="wt-post-media">
              {/* <!--Fade slider--> */}
              <div class="owl-carousel owl-fade-slider-one owl-btn-vertical-center owl-dots-bottom-right m-b30">
                <div class="item">
                  <div class="wt-thum-bx">
                    <img src="images/blog/default/thum1.jpg" alt="" />
                  </div>
                </div>

                <div class="item">
                  <div class="wt-thum-bx">
                    <img src="images/blog/default/thum2.jpg" alt="" />
                  </div>
                </div>

                <div class="item">
                  <div class="wt-thum-bx">
                    <img src="images/blog/default/thum3.jpg" alt="" />
                  </div>
                </div>
              </div>
              {/* <!--fade slider END--> */}
            </div>

            <div class="wt-post-info p-a30 bg-white">
              <div class="wt-post-meta ">
                <ul>
                  <li class="post-date">
                    <strong>25 </strong> <span>Aug 2019</span>{" "}
                  </li>
                  <li class="post-author">
                    <i class="fa fa-user"></i>
                    <a href="javascript:void(0);">
                      By <span>Admin</span>
                    </a>{" "}
                  </li>
                  <li class="post-comment">
                    <i class="fa fa fa-comments"></i>
                    <a href="javascript:void(0);">
                      10 <span>Comment</span>
                    </a>{" "}
                  </li>
                </ul>
              </div>
              <div class="wt-post-title ">
                <h3 class="post-title">
                  <a href="javascript:void(0);" class=" m-t0">
                    Architecture is not based on concrete and steel.
                  </a>
                </h3>
              </div>
              <div class="wt-post-text">
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

              <div class="wt-blog-post-media">
                <div class="row m-t30">
                  <div class="col-md-4  m-b30">
                    <div class="wt-media">
                      <img src="images/projects/pic-4.jpg" alt="" />
                    </div>
                  </div>

                  <div class="col-md-4  m-b30">
                    <div class="wt-media">
                      <img src="images/projects/pic-5.jpg" alt="" />
                    </div>
                  </div>

                  <div class="col-md-4 m-b30">
                    <div class="wt-media">
                      <img src="images/projects/pic-1.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <blockquote class="bg-gray">
                <i class="fa fa-quote-left"></i>A bene fraticinida. Est barbatus
                parma, cesaris. Regius era virtualiter imperiums palus est.
                Domesticus, dexter parmas sed mire magicae.
              </blockquote>

              <div class="wt-post-text">
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
            </div>
          </div>

          <div class="clear p-a30 m-b30 bg-white" id="comment-list">
            <div class="comments-area" id="comments">
              <h4 class="comments-title">3 Comments</h4>
              <div>
                {/* <!-- COMMENT LIST START --> */}
                <ol class="comment-list">
                  <li class="comment">
                    {/* <!-- COMMENT BLOCK --> */}
                    <div class="comment-body">
                      <div class="comment-meta">
                        <a href="javascript:void(0);">
                          March 6, 2019 at 7:15 am
                        </a>
                      </div>
                      <div class="comment-author vcard">
                        <img
                          class="avatar photo"
                          src="images/comment-pic/1.jpg"
                          alt=""
                        />
                        <cite class="fn">Diego</cite>
                        <span class="says">says:</span>
                      </div>

                      <p>
                        Eheu. Teres exemplars ducunt ad idoleum. Ubi est peritus
                        cotta? Abaculus potuss, tanquam peritus zeta. Cur
                        hippotoxota ortum? Eras volare, tanquam audax poeta.
                        Scutums peregrinatione in ferox piscinam! Cum amor
                        assimilant, omnes.
                      </p>
                      <div class="reply">
                        <a
                          href="javscript:;"
                          class="comment-reply-link letter-spacing-2 text-uppercase"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                    {/* <!-- SUB COMMENT BLOCK --> */}
                    <ol class="children">
                      <li class="comment odd parent">
                        <div class="comment-body">
                          <div class="comment-meta">
                            <a href="javascript:void(0);">
                              March 8, 2019 at 9:15 am
                            </a>
                          </div>
                          <div class="comment-author vcard">
                            <img
                              class="avatar photo"
                              src="images/comment-pic/2.jpg"
                              alt=""
                            />
                            <cite class="fn">Brayden</cite>
                            <span class="says">says:</span>
                          </div>

                          <p>
                            Orexis peregrinationess, tanquam barbatus decor. Cum
                            elevatus manducare, omnes liberies vitare.
                          </p>
                          <div class="reply">
                            <a
                              href="javscript:;"
                              class="comment-reply-link letter-spacing-2 text-uppercase"
                            >
                              Read More
                            </a>
                          </div>
                        </div>

                        <ol class="children">
                          <li class="comment odd parent">
                            <div class="comment-body">
                              <div class="comment-meta">
                                <a href="javascript:void(0);">
                                  March 9, 2019 at 11:15 am
                                </a>
                              </div>
                              <div class="comment-author vcard">
                                <img
                                  class="avatar photo"
                                  src="images/comment-pic/3.jpg"
                                  alt=""
                                />
                                <cite class="fn">Diego</cite>
                                <span class="says">says:</span>
                              </div>

                              <p>
                                Vel velit auctor aliquet. Aenean sollicitudin,
                                lorem quis bibendum auctor Lorem ipsum dolor sit
                                amet of Lorem Ipsum. Proin gravida nibh..
                              </p>
                              <div class="reply">
                                <a
                                  href="javscript:;"
                                  class="comment-reply-link letter-spacing-2 text-uppercase"
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
      </div>
      {/* <!-- SECTION CONTENT END --> */}
    </div>
    /* <!-- CONTENT END --> */
  );
}

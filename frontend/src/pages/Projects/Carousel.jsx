import React from "react";

export default function Carousel() {
  return (
    //    <!-- CONTENT START -->
    <div class="page-content">
      {/* <!-- INNER PAGE BANNER --> */}
      <div
        class="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
        data-stellar-background-ratio="0.5"
        style={{ backgroundImage: "url(images/banner/3.jpg)" }}
      >
        <div class="overlay-main bg-black opacity-07"></div>
        <div class="container">
          <div class="wt-bnr-inr-entry">
            <div class="banner-title-outer">
              <div class="banner-title-name">
                <h2 class="text-white">Work carousel</h2>
              </div>
            </div>
            {/* <!-- BREADCRUMB ROW -->                             */}

            <div>
              <ul class="wt-breadcrumb breadcrumb-style-2">
                <li>
                  <a href="javascript:void(0);">Home</a>
                </li>
                <li> Work carousel</li>
              </ul>
            </div>

            {/* <!-- BREADCRUMB ROW END -->                         */}
          </div>
        </div>
      </div>
      {/* <!-- INNER PAGE BANNER END --> */}

      {/* <!-- SECTION CONTENT START --> */}
      <div class="section-full p-tb80 bg-gray">
        <div class="container-fluid">
          <div class="section-content">
            <div class="work-carousel-outer">
              <div class="owl-carousel work-carousel owl-btn-vertical-center">
                {/* <!-- COLUMNS 1 --> */}
                <div class="item">
                  <div
                    class="wt-img-effect bg-cover"
                    style={{ backgroundImage: "url(images/gallery/pic1.jpg)" }}
                  >
                    <div class="wt-info overflow-hide">
                      <h4 class="wt-title m-b10 m-t0">
                        <a href="javascript:void(0);">
                          Delivering architecture, planning, and design globally
                          the creative eye
                        </a>
                      </h4>
                      <p>
                        Morbi mattis ex non urna condimentum, eget eleifend diam
                        molestie. Curabitur lorem enim, maximus non null
                        speriores
                      </p>
                      <a href="javascript:void(0);" class="site-button-link">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!-- COLUMNS 2 --> */}
                <div class="item">
                  <div
                    class="wt-img-effect bg-cover"
                    style={{ backgroundImage: "url(images/gallery/pic2.jpg)" }}
                  >
                    <div class="wt-info overflow-hide">
                      <h4 class="wt-title m-b10 m-t0">
                        <a href="javascript:void(0);">
                          Capitalizing on the unique qualities of each place the
                          creative eye.
                        </a>
                      </h4>
                      <p>
                        Morbi mattis ex non urna condimentum, eget eleifend diam
                        molestie. Curabitur lorem enim, maximus non null
                        speriores
                      </p>
                      <a href="javascript:void(0);" class="site-button-link">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!-- COLUMNS 3 --> */}
                <div class="item">
                  <div
                    class="wt-img-effect bg-cover"
                    style={{ backgroundImage: "url(images/gallery/pic3.jpg)" }}
                  >
                    <div class="wt-info overflow-hide">
                      <h4 class="wt-title m-b10 m-t0">
                        <a href="javascript:void(0);">
                          Delivering architecture, planning, and design globally
                          the creative eye.
                        </a>
                      </h4>
                      <p>
                        Morbi mattis ex non urna condimentum, eget eleifend diam
                        molestie. Curabitur lorem enim, maximus non null
                        speriores
                      </p>
                      <a href="javascript:void(0);" class="site-button-link">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!-- COLUMNS 4 --> */}
                <div class="item">
                  <div
                    class="wt-img-effect  bg-cover"
                    style={{ backgroundImage: "url(images/gallery/pic4.jpg)" }}
                  >
                    <div class="wt-info overflow-hide">
                      <h4 class="wt-title m-b10 m-t0">
                        <a href="javascript:void(0);">
                          Improving quality of life with an integrated unified
                          approach the creative eye.
                        </a>
                      </h4>
                      <p>
                        Morbi mattis ex non urna condimentum, eget eleifend diam
                        molestie. Curabitur lorem enim, maximus non null
                        speriores
                      </p>
                      <a href="javascript:void(0);" class="site-button-link">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!-- COLUMNS 5 --> */}
                <div class="item">
                  <div
                    class="wt-img-effect bg-cover"
                    style={{ backgroundImage: "url(images/gallery/pic5.jpg)" }}
                  >
                    <div class="wt-info overflow-hide">
                      <h4 class="wt-title m-b10 m-t0">
                        <a href="javascript:void(0);">
                          Unique solutions for your home through a personalized
                          process the creative eye.
                        </a>
                      </h4>
                      <p>
                        Morbi mattis ex non urna condimentum, eget eleifend diam
                        molestie. Curabitur lorem enim, maximus non null
                        speriores
                      </p>
                      <a href="javascript:void(0);" class="site-button-link">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- SECTION CONTENT END  --> */}
    </div>
    // <!-- CONTENT END -->
  );
}

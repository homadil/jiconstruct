import React, { useContext, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Thumbs,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/thumbs";
import { DataContext } from "../../store";
import Loader from "../../components/Loader";

export default function Testimony() {
  const { testimonies, backend_url } = useContext(DataContext);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  if (!testimonies || testimonies.length === 0) {
    return <Loader />;
  }
  return (
    <section
      id="clients"
      className="section-full p-tb80 testimonial-slider-outer bg-white bg-cover bg-left-center"
      style={{ backgroundImage: "url(images/background/bg-1.jpg)" }}
    >
      <div className="container">
        <div className="section-head clearfix">
          <div className="wt-tilte-main bdr-r-3 bdr-primary bdr-solid">
            <small className="wt-small-title">Best Clients</small>
            <h2 className="m-b5">Our Client says</h2>
          </div>
          <div className="title-right-detail">
            <p>
              We are uncompetitive in architectural solutions Friendly neighbors
              there that power. Keep away Architecture who try to Ambitions
              people do that really great.
            </p>
          </div>
        </div>

        <div className="testimonial-slider">
          {/* Main Swiper */}
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[Navigation, Pagination, Scrollbar, A11y, Thumbs]} // Include the Thumbs module
            className="mainSwiper"
          >
            {testimonies.map((tes, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="item">
                    <div className="testimonial-slider-content clearfix">
                      <div className="testimonial-1 clearfix">
                        <div className="testimonial-text">
                          <div className="testimonial-paragraph">
                            <div className="quote-left"></div>
                            <p>{tes?.comment}</p>
                          </div>
                          <div className="testimonial-detail">
                            <h4 className="testimonial-name m-b5">
                              {tes?.name}
                            </h4>
                          </div>
                          <div className="testimonial-detail">
                            <span className="testimonial-position">
                              {tes?.position}
                            </span>
                          </div>
                        </div>
                        <div className="testimonial-pic-block">
                          <div className="testimonial-pic">
                            <img
                              src={backend_url + "/" + tes?.image}
                              alt={tes?.name}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Thumbnail Swiper */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Swiper
              onSwiper={setThumbsSwiper} // Pass the thumbnail swiper instance to the state
              spaceBetween={10}
              slidesPerView={3}
              modules={[Thumbs, Navigation, Pagination]}
              watchSlidesProgress
              navigation
              className="thumbSwiper"
            >
              {testimonies.map((tes, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="item">
                      <div className="wt-media">
                        <img
                          src={backend_url + "/" + tes?.image}
                          alt={tes?.name}
                          style={stylesheet}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
const stylesheet = {
  height: "60px",
};

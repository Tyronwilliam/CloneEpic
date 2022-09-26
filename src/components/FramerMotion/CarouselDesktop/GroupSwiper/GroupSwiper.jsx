import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css/pagination";

import PropTypes from "prop-types";
import "swiper/css";
import "./groupswiper.scss";
function GroupSwiper({ children, navigationPrevRef, navigationNextRef }) {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={15}
      pagination={{
        clickable: true,
      }}
      navigation={{
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
      }}
      modules={[Navigation]}
      className="swiperGroup"
    >
      {children}
    </Swiper>
  );
}
GroupSwiper.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
};
export default GroupSwiper;

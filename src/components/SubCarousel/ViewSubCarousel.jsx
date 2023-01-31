import React, { useRef } from "react";
import CardGroup from "../Card/CardGroup/CardGroup";
import GroupSwiper from "../FramerMotion/CarouselDesktop/GroupSwiper/GroupSwiper";
import PropTypes from "prop-types";
import { BiChevronRight } from "react-icons/bi";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { SwiperSlide } from "swiper/react";
import "./viewsubcarousel.scss";
import { Link } from "react-router-dom";

function ViewSubCarousel({ title, data }) {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <section className="sub_carousel_container">
      <div className="sub_carousel_entete">
        <div className="sub_carousel_tilte">
          <h2>{title}</h2>
          <BiChevronRight />
        </div>
        <div className="sub_carousel_direction">
          <div className="button next" ref={navigationPrevRef}>
            <FiChevronLeft />
          </div>
          <div className=" button prev" ref={navigationNextRef} data-cy="next">
            <FiChevronRight />
          </div>
        </div>
      </div>
      <GroupSwiper
        navigationPrevRef={navigationPrevRef}
        navigationNextRef={navigationNextRef}
      >
        {data?.map((game) => {
          {
          }
          return (
            <SwiperSlide className="group_swiperSlide" key={game.id}>
              {/* <Link to={`/detail/fr/${game.slug}`} className="link"> */}
                <CardGroup
                  img={game.background_image}
                  title={game.name}
                  promo="-50%"
                  oldPrice="29,99"
                  price="14.99"
                  slug={game.slug}
                />
              {/* </Link> */}
            </SwiperSlide>
          );
        })}
      </GroupSwiper>
    </section>
  );
}
ViewSubCarousel.propTypes = {
  title: PropTypes.string.isRequired,
  //   data: PropTypes.arrayOf(PropTypes.shape({})),
};
export default ViewSubCarousel;

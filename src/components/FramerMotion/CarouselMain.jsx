import React from "react";
// Import Swiper React components
import { Swiper } from "swiper/react";
// Import Swiper styles
// import "swiper/scss";
import "swiper/scss/effect-coverflow";
import "swiper/scss/pagination";
import "./carouselMain.scss";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { SwiperSlide } from "swiper/react";
import { useState } from "react";
import CardMain from "../Card/CardMain/CardMain";
import { useAxios } from "../../Hooks/useAxios";
import { Link } from "react-router-dom";

function CarouselMain() {
  const apiKey = process.env.REACT_APP_RAWG_API_KEY;
  const { response, loading, error } = useAxios({
    method: "GET",
    url: `https://api.rawg.io/api/games?key=${apiKey}&page_size=6`,
  });

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="swiper_mobile"
      >
        {response?.map((game) => {
          return (
            <SwiperSlide key={game.id} className="swiper_slide_img">
              <Link to={`/detail/fr/${game.slug}`} className="link">
                <CardMain
                  title={game.name}
                  price={game.rating}
                  img={game.short_screenshots[0].image}
                  slug={game.slug}
                />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default CarouselMain;

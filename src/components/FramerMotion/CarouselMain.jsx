import React from "react";
// Import Swiper React components
import { Swiper } from "swiper/react";
// Import Swiper styles
import "swiper/scss";
import "swiper/scss/effect-coverflow";
import "swiper/scss/pagination";
import "./carouselMain.scss";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import { useState } from "react";
import CardMain from "../Card/CardMain/CardMain";
import useFetch from "../../Hooks/useFetch";

function CarouselMain() {
  const [games, setGames] = useState([]);
  const { get } = useFetch();
  const apiKey = process.env.REACT_APP_RAWG_API_KEY;
  useEffect(() => {
    get(`https://api.rawg.io/api/games?key=${apiKey}&page_size=6`).then(
      (res) => {
        console.log(res);
        setGames(res);
      }
    );
  }, []);
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
        {games?.map((game) => {
          return (
            <SwiperSlide key={game.id} className="swiper_slide_img">
              <CardMain
                title={game.name}
                price={game.rating}
                img={game.short_screenshots[0].image}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default CarouselMain;

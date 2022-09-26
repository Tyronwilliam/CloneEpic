import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper";
import "swiper/css/autoplay";

import "./carouseldesktop.scss";
import { Link } from "react-router-dom";
import { useAxios } from "../../../Hooks/useAxios";
import { useEffect } from "react";
function CarouselDesktop() {
  const [current, setCurrent] = useState(null);
  const [swiper, setSwiper] = useState(null);
  const apiKey = process.env.REACT_APP_RAWG_API_KEY;
  const slideToo = (index) => {
    swiper.slideToLoop(index, false);
  };
  const { response, loading, error } = useAxios({
    method: "GET",
    url: `https://api.rawg.io/api/games?key=${apiKey}&page_size=6`,
  });

  return (
    <section className="carousel_desktop">
      <div className="current">
        <Swiper
          className="swiper_desktop"
          loop={true}
          initialSlide="1"
          slidesPerView={1}
          modules={[Autoplay]}
          autoplay={{ delay: 9000 }}
          onSlideChange={(swiper) => {
            setCurrent(swiper.realIndex);
          }}
          onSwiper={setSwiper}
        >
          {response?.map((game, index) => {
            return (
              <SwiperSlide className="swiper_sliding" key={index}>
                <Link to={`/detail/fr/${game.slug}`}>
                  <img
                    src={game.background_image}
                    className="current_img"
                    alt=""
                  />
                </Link>
                <div className="current_text">
                  <h1>{game.name}</h1>
                  <p className="current_main_p">
                    Soumettez-vous au chrome en changeant les structures en
                    chrome, en vous transformant vous-même en chrome et en
                    exploitant la puissance des armes de chrome.
                  </p>
                  <div className="current_price">
                    <p>Gratuit</p>
                    <button>Ajouter à la liste de souhaits</button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="preview">
        {response?.map((game, index) => {
          return (
            <div
              onClick={() => {
                slideToo(index);
              }}
              key={index}
              className={
                index == current ? "preview_card activeSlide" : "preview_card "
              }
            >
              <div className="container_preview_img">
                <img
                  src={game.short_screenshots[0].image}
                  className="preview_img"
                  alt=""
                />
              </div>
              <div className="preview_title">
                <p>{game.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CarouselDesktop;

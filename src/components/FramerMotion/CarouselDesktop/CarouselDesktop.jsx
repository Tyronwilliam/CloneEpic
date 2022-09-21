import React, { useState } from "react";
import { useEffect } from "react";
import useFetch from "../../../Hooks/useFetch";
import { Swiper, SwiperSlide } from "swiper/react";

// import "../../../../.env";
import { Autoplay } from "swiper";
import "swiper/css/autoplay";
// Import Swiper styles
// import "swiper/scss";
import "./carouseldesktop.scss";
function CarouselDesktop() {
  const [games, setGames] = useState([]);
  const [active, setActive] = useState(true);
  const [current, setCurrent] = useState(null);
  const { get } = useFetch();
  const apiKey = process.env.REACT_APP_RAWG_API_KEY;
  useEffect(() => {
    get(`https://api.rawg.io/api/games?key=${apiKey}&page_size=6`).then(
      (res) => {
        setGames(res);
      }
    );
    console.log(apiKey);
    setCurrent(5);
  }, []);
  useEffect(() => {}, []);
  return (
    <section className="carousel_desktop">
      <div className="current">
        <Swiper
          className="swiper_desktop"
          loop={true}
          slidesPerView={1}
          modules={[Autoplay]}
          autoplay={{ delay: 9000 }}
          onSlideChange={(swiper) => {
            setCurrent(swiper.realIndex);
            console.log(swiper.realIndex, "mon index swiper");
          }}
        >
          {games.length > 0 &&
            games?.map((game, index) => {
              return (
                <SwiperSlide className="swiper_sliding" key={index}>
                  <img
                    src={game.background_image}
                    className="current_img"
                    alt=""
                  />
                  <div className="current_text">
                    <h1>{game.name}</h1>
                    <p>
                      Soumettez-vous au chrome en changeant les structures en
                      chrome, en vous transformant vous-même en chrome et en
                      exploitant la puissance des armes de chrome.
                    </p>
                    <div className="current_price">
                      <p>Gratuit</p>
                      <div className="current_bg">
                        <button>Ajouter à la liste de souhaits</button>
                        <div className="white_bg"></div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
      <div className="preview">
        {games.length > 0 &&
          games?.map((game, index) => {
            return (
              <div
                key={index}
                className={
                  index == current
                    ? "preview_card activeSlide"
                    : "preview_card "
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

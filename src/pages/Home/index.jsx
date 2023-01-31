import React from "react";
import { useEffect } from "react";
import Aside from "../../components/Aside/Aside";
import FreeCard from "../../components/Card/FreeCard/FreeCard";
import CarouselDesktop from "../../components/FramerMotion/CarouselDesktop/CarouselDesktop";
import CarouselMain from "../../components/FramerMotion/CarouselMain";
import ViewSubCarousel from "../../components/SubCarousel/ViewSubCarousel";
import { useAxios } from "../../Hooks/useAxios";
import { AiOutlineGift } from "react-icons/ai";
import "./home.scss";
function Home() {
  const apiKey = process.env.REACT_APP_RAWG_API_KEY;
  const { response, loading, error } = useAxios({
    method: "GET",
    url: `https://api.rawg.io/api/games?key=${apiKey}&page_size=36&ordering=updated`,
  });
  const {
    response: response2,
    loading: loading2,
    error: error2,
  } = useAxios({
    method: "GET",
    url: `https://api.rawg.io/api/publishers?key=${apiKey}&page_size=3`,
  });
  const {
    response: response3,
    loading: loading3,
    error: error3,
  } = useAxios({
    method: "GET",
    url: `https://api.rawg.io/api/games?key=${apiKey}&page_size=36&ordering=released`,
  });
  const {
    response: response4,
    loading: loading4,
    error: error4,
  } = useAxios({
    method: "GET",
    url: `https://api.rawg.io/api/collections/lists/popular?key=${apiKey}&page_size=4&`,
  });
  useEffect(() => {
    console.log(response4, "aiaiaiai");
  }, [response4]);
  const dataAside = response2;
  const data = response;
  return (
    <main className="main_home">
      <section className="section_home">
        <CarouselMain />
        <CarouselDesktop />
        <ViewSubCarousel title="Jeux en promotion" data={data} />
        <Aside datas={dataAside} />
        <ViewSubCarousel
          title="Focus des créateurs sur l'héritage hispanique et latinx"
          data={response3}
        />
      </section>
      <section className="free_games">
        <div className="free_games_title">
          <div>
            <AiOutlineGift className="emoji" />
            <h1>Jeux gratuits</h1>
          </div>
          <div className="free_more">
            <a href="#">
              <p>afficher plus</p>
            </a>
          </div>
        </div>
        <div className="free_content">
          {response4?.map((free, index) => {
            return (
              <FreeCard
                slug={free.slug}
                img={free.game_background.url}
                title={free.name}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Home;

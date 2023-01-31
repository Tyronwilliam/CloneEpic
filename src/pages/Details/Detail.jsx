import React, { useEffect } from "react";
import {  useParams } from "react-router-dom";
import { useAxiosDetail } from "../../Hooks/useAxiosDetail";
import "./detail.scss";
import Rate from "../../components/detailComponent/rating/Rate";
import AsideDetail from "../../components/detailComponent/Aside/AsideDetail";
import { BsEmojiHeartEyes } from "react-icons/bs";
import { BsMouse } from "react-icons/bs";
import { BiBath } from "react-icons/bi";
import { BsPencil } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { TbMoodCrazyHappy } from "react-icons/tb";
function Detail() {
  let id = useParams();
  const apiKey = process.env.REACT_APP_RAWG_API_KEY;
  const { response, loading, error } = useAxiosDetail({
    method: "GET",
    url: `https://api.rawg.io/api/games/${id.id}?key=${apiKey}`,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(response);
  }, [response]);

  return (
    <main className="detail_container">
      <section className="section_detail">
        <section className="section_flex">
          <article className="right">
            {/* Title of game */}
            {response?.name === undefined ? (
              <h1>This game has no name</h1>
            ) : (
              <h1>{response?.name}</h1>
            )}
            {/* Rating */}
            <Rate rate={response?.rating_top} tag={response?.tags} />

            <div className="right_img">
              {/* IMG */}
              <a href={response?.website} target="_blank">
                <img src={response?.background_image} alt="" />
              </a>
            </div>
            <div>
              {/* Description */}
              <div className="detail_desc">
                <p>{response?.description_raw}</p>
              </div>
              <div>
                {/* GENRES AND CARACTERIQTIQUE */}
                <div className="detail_genre_caract">
                  <div className="detail_content_infos">
                    <h4>Genres</h4>
                    <div className="detail_content_text">
                      {response?.genres.map((genre, index) => {
                        return <p key={index}>{genre.name}</p>;
                      })}
                    </div>
                  </div>
                  <div className="detail_content_infos">
                    <h4>Caractéristiques</h4>
                    <div className="detail_content_text">
                      <p>Lorem Ipsum</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Descritpion 2 GREY */}
            <div className="detail_more">
              <p>REMARQUE :</p>
              <p>
                Le bonus cash de 1 000 000 GTA$ dans GTA Online inclus dans
                l'édition Premium avec le Pack d'entrée dans le monde criminel
                peut prendre jusqu'à 7 à 10 jours pour figurer dans le compte en
                jeu du joueur après sa première session dans GTA Online.
              </p>
            </div>
          </article>
          <aside className="left">
            {/* INfos game */}
            <AsideDetail
              released={response?.released}
              dev={response?.developers[0].name}
            />
          </aside>
        </section>
        <section>
          {/* EVAL */}
          <div className="detail_evaluation">
            <h3>Évaluations des joueurs Epic</h3>
            <span>
              {" "}
              Collectées auprès des joueurs de l'écosystème Epic Games.
            </span>
          </div>
          {/* TAG */}
          <div className="detail_tag">
            <div className="tags">
              <div className="tags_img">
                <BsEmojiHeartEyes className="emoji" />
              </div>
              <div className="tags_content">
                <span>Ce jeu est</span>
                <span>Extrêmement amusant</span>
              </div>
            </div>
            <div className="tags">
              <div className="tags_img">
                <BsMouse className="emoji" />
              </div>
              <div className="tags_content">
                <span>Ce jeu a des</span>
                <span>commandes rapides à maîtriser</span>
              </div>
            </div>
            <div className="tags">
              <div className="tags_img">
                <BiBath className="emoji" />
              </div>
              <div className="tags_content">
                <span>Ce jeu est</span>
                <span>Relaxant</span>
              </div>
            </div>
            <div className="tags">
              <div className="tags_img">
                <TbMoodCrazyHappy className="emoji" />
              </div>
              <div className="tags_content">
                <span>Ce jeu a un</span>
                <span>gameplay obsédant</span>
              </div>
            </div>
            <div className="tags">
              <div className="tags_img">
                <BsPencil className="emoji" />
              </div>
              <div className="tags_content">
                <span>Ce jeu a une</span>
                <span>Super intrigue</span>
              </div>
            </div>
            <div className="tags">
              <div className="tags_img">
                <BiWorld className="emoji" />
              </div>
              <div className="tags_content">
                <span>Ce jeu a des</span>
                <span>Propose des personnages diversifiés</span>
              </div>
            </div>
          </div>
          {/* Evalution */}
          <div className="detail_evaluation">
            <h3>Évaluations</h3>
          </div>
          <div className="container_eval-circle">
            {response?.ratings.slice(0, -1).map((rating, index) => {
              return (
                <div className="container_svg">
                  <div className="single-chart" key={index}>
                    <svg
                      viewBox="0 0 35 35"
                      class="circular-chart"
                      height="75"
                      width="75"
                    >
                      <path
                        className="circle-bg"
                        d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="circle"
                        stroke-dasharray={`${rating.percent}, 100`}
                        d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <text x="18" y="20.35" className="percentage">
                        {rating.percent}&#x25;
                      </text>
                    </svg>
                  </div>
                  <div>
                    <p>{rating.title}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CONFIG */}
          <div className="config_main_title">
            <h3>Configuration</h3>
          </div>
          <aside className="config">
            <div className="config_title">
              <span>windows</span>
            </div>
            <div className="config_flex">
              <div className="left">
                <div className="config_box">
                  <div>
                    <span className="min_max">Minimum</span>
                  </div>
                  <div className="right_box">
                    <span className="min_max">Configuration recommandée</span>
                  </div>
                </div>
                <div className="config_box">
                  <div>
                    <span className="">Processeur</span>
                    <span>
                      Intel Core 2 Quad CPU Q6600 @ 2,40 GHz (4 CPU) / AMD
                      Phenom 9850 Quad-Core Processor (4 CPU) @ 2,5 GHz
                    </span>
                  </div>
                  <div className="right_box">
                    <span className="">Processeur </span>
                    <span>
                      Intel Core i5 3470 @ 3,2 GHz (4 CPU) / AMD X8 FX-8350 @ 4
                      GHz (8 CPU)
                    </span>
                  </div>
                </div>
                {/* THIRD */}
                <div className="config_box">
                  <div>
                    <span className="">Mémoire</span>
                    <span>4 Go de RAM</span>
                  </div>
                  <div className="right_box">
                    <span className="">Mémoire</span>
                    <span>8 Go de RAM</span>
                  </div>
                </div>
                {/* FOURTH */}
                <div className="config_box">
                  <div>
                    <span className="">Carte graphique</span>
                    <span>
                      NVIDIA 9800 GT 1 Go / AMD HD 4870 1 Go (DX 10, 10.1, 11)
                    </span>
                  </div>
                  <div className="right_box">
                    <span className="">Carte graphique</span>
                    <span>NVIDIA GTX 660 2 Go / AMD HD7870 2 Go</span>
                  </div>
                </div>
                {/* FIFITH */}
                <div className="config_box">
                  <div>
                    <span className="">Carte son</span>
                    <span>100 % compatible avec DirectX 10</span>
                  </div>
                  <div className="right_box">
                    <span className="">Carte son</span>
                    <span>100 % compatible avec DirectX 10</span>
                  </div>
                </div>
                {/* SIXTH */}
                <div className="config_box">
                  <div>
                    <span className=""> Disque dur</span>
                    <span>90 GB available space</span>
                  </div>
                  <div className="right_box">
                    <span className="">Disque dur</span>
                    <span>90 GB available space</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </section>
      </section>
    </main>
  );
}

export default Detail;

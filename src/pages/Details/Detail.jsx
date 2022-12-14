import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
    console.log(response, "hello world ");
  }, [response]);

  return (
    <main className="detail_container">
      <section className="section_detail">
        <section className="section_flex">
          <article className="right">
            {/* Title of game */}
            <h1>{response?.name}</h1>
            {/* Rating */}
            <Rate rate={response?.rating_top} tag={response?.tags} />

            <div className="right_img">
              {/* IMG */}
              <Link to={response?.website}>
                <img src={response?.background_image} alt="" />
              </Link>
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
                    <h4>Caract??ristiques</h4>
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
                l'??dition Premium avec le Pack d'entr??e dans le monde criminel
                peut prendre jusqu'?? 7 ?? 10 jours pour figurer dans le compte en
                jeu du joueur apr??s sa premi??re session dans GTA Online.
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
            <h3>??valuations des joueurs Epic</h3>
            <span>
              {" "}
              Collect??es aupr??s des joueurs de l'??cosyst??me Epic Games.
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
                <span>Extr??mement amusant</span>
              </div>
            </div>
            <div className="tags">
              <div className="tags_img">
                <BsMouse className="emoji" />
              </div>
              <div className="tags_content">
                <span>Ce jeu a des</span>
                <span>commandes rapides ?? ma??triser</span>
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
                <span>gameplay obs??dant</span>
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
                <span>Propose des personnages diversifi??s</span>
              </div>
            </div>
          </div>
          {/* Evalution */}
          <div className="detail_evaluation">
            <h3>??valuations</h3>
          </div>
          <div className="container_eval-circle">
            {response?.ratings.slice(0,-1).map((rating, index) => {
              return (
                <div className="container_svg">
                  <div class="single-chart" key={index}>
                    <svg
                      viewBox="0 0 35 35"
                      class="circular-chart"
                      height="75"
                      width="75"
                    >
                      <path
                        class="circle-bg"
                        d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        class="circle"
                        stroke-dasharray={`${rating.percent}, 100`}
                        d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <text x="18" y="20.35" class="percentage">
                        {rating.percent}{" "}
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

          {/* cONFIG */}
        </section>
      </section>
    </main>
  );
}

export default Detail;

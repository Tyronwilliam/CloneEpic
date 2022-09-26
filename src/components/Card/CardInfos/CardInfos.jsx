import React from "react";
import "./cardinfos.scss";
function CardInfos({ img, title, text, more }) {
  return (
    <>
      <div className="card_infos_link">
        <a href="#">
          <img src={img} alt="" />
        </a>
      </div>
      <div className="card_infos_content">
        <h2>{title}</h2>
        <p>{text}</p>

        <a href="#">
          {" "}
          <span>{more} </span>
        </a>
      </div>
    </>
  );
}

export default CardInfos;

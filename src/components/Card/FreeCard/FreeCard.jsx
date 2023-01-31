import React from "react";
import "./freecard.scss";
import { Link } from "react-router-dom";
function FreeCard({ slug, img, title }) {
  return (
    <div className="free_card">
      <div className="free_block_img_text">
        <div className="free_block_img">
          <div className="bg_opac">
            <Link to={`/detail/fr/${slug}`} className="link"></Link>
          </div>
          <img src={img} alt="" />
        </div>
        <div className="free_block_text">
          <span>GRATUIT</span>
        </div>
      </div>
      <div className="free_title">
        <p>{title}</p>
        <p>Gratuit jusqu'au 29 sept. à 17:00 </p>
      </div>
    </div>
  );
}

export default FreeCard;

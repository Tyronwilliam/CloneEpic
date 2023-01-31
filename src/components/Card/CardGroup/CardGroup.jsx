import React from "react";
import PropTypes from "prop-types";
import "./cardgroup.scss";
import { BsPlusCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

function CardGroup({ img, title, promo, oldPrice, price, slug }) {
  return (
    <div className="card_group">
      <div className="card_link">
        <div className="bg_opac">
          <Link to={`/detail/fr/${slug}`} className="link"></Link>
          <BsPlusCircle
            className="card_icone"
            onClick={() => console.log("hello")}
          />
        </div>

        <img src={img} alt="" />
      </div>
      <div className="card_group_text">
        <p>Jeu de base</p>
        <h3>{title}</h3>
        <div className="card_group_price">
          <span className="card_promo">{promo}</span>

          <div className="card_pricing">
            <span>{oldPrice}€</span>
            <span>{price}€</span>
          </div>
        </div>
      </div>
    </div>
  );
}
CardGroup.propTypes = {
  // img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  promo: PropTypes.string.isRequired,
  oldPrice: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
export default CardGroup;

import React from "react";
import PropTypes from "prop-types";
import "./cardmain.scss";
function CardMain({ img, title, text, price }) {
  return (
    <div className="card">
      <img src={img} alt="" className="background" />
      <div className="content">
        <p>{title}</p>
        <p>
          Soumettez-vous au chrome en changeant les structures en chrome, en
          vous transformant vous-même en chrome et en exploitant la puissance
          des armes de chrome.
        </p>
        <p>Gratuit</p>
      </div>
    </div>
  );
}
CardMain.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
};
export default CardMain;

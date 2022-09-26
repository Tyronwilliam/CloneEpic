import React from "react";
import Button from "../../Button/Button";
import "./asidedetail.scss";
function AsideDetail({  dev, released }) {
  return (
    <div className="aside_container">
      <p className="aside_title">jeu de base</p>
      <div className="aside_price">
        <ul className="aside_list">
          <li className="aside_content">-50%</li>
          <li className="aside_content">29,99</li>
          <li className="aside_content">14,99€</li>
        </ul>
      </div>
      <div className="container_button">
        <Button myClass="one" content={"Acheter"} />
        <Button myClass={"two"} content={"AJOUTER AU PANIER"} />
        <Button myClass={"three"} content={"ajouter à la liste de souhaits"} />
      </div>
      <div className="aside_container_tech">
        <div className="aside_tech">
          <span>Type de remboursement</span>
          <span>Remboursable en libre-service</span>
        </div>
        <div className="aside_tech">
          <span>Développeur</span>
          <span>{dev}</span>
        </div>
        <div className="aside_tech">
          <span>Editeur</span>
          <span>{dev}</span>
        </div>
        <div className="aside_tech">
          <span>Date de sortie</span>
          <span>{released}</span>
        </div>
        <div className="aside_tech">
          <span>Plateforme</span>
          <span>{released}</span>
        </div>
      </div>
    </div>
  );
}

export default AsideDetail;

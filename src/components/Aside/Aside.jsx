import React from "react";
import CardInfos from "../Card/CardInfos/CardInfos";
import "./aside.scss";
function Aside({ datas }) {
  return (
    <aside className="aside">
      {datas?.map((infos, index) => {
        return (
          <div className={`aside_card_container`} key={index}>
            <CardInfos
              img={infos.image_background}
              title={infos.name}
              text="Obtenez jusqu'à 67% de remise sur des contenus The Outer Worlds et 60% sur Ancestors: The Humankind Odyssey jusqu'au 4 octobre."
              more="En savoir plus"
            />
          </div>
        );
      })}
    </aside>
  );
}

export default Aside;

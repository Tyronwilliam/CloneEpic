import React from "react";
import "./nav.scss";
import { MdPeople } from "react-icons/md";

function Nav() {
  const style = {
    height: "28px",
    width: "30px",
    color: "#ccc",
  };
  return (
    <nav className="bigNav">
      {/* LIST */}
      <ul className="list_desk">
        <li className="li_desk">BOUTIQUE</li>
        <li className="li_desk">FAQ</li>
        <li className="li_desk">AIDE</li>
        <li className="li_desk">UNREAL ENGINE</li>
      </ul>
      <div className="container_body_nav_desk">
        {/* CONNEXTION  */}
        <div className="connect_desk">
          <MdPeople style={style} />
          <p>CONNEXION</p>
        </div>
        <div className="download_desk">
          <p>TELECHARGER LE LANCEUR EPIC GAME</p>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

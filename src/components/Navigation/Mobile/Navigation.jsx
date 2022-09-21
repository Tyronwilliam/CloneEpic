import React from "react";
import { MdPeople } from "react-icons/md";

import "./navigation.scss";
function Navigation({ isOpen }) {
  const style = {
    marginLeft: "50px",
    height: "28px",
    width: "30px",
    color: "#ccc",
  };
  const OpenClose = isOpen ? "nav" : "navClose";
  return (
    <>
      {isOpen ? (
        <nav className={`nav`}>
          {/* LIST */}
          <ul>
            <li>BOUTIQUE</li>
            <li>FAQ</li>
            <li>AIDE</li>
            <li>UNREAL ENGINE</li>
          </ul>
          {/* CONNEXTION  */}
          <div>
            <div className="connect">
              <MdPeople style={style} />
              <p>CONNEXION</p>
            </div>
            <div className="download">
              <p>TELECHARGER LE LANCEUR EPIC GAME</p>
            </div>
          </div>
        </nav>
      ) : null}
    </>
  );
}

export default Navigation;

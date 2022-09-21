import React from "react";
import epic from "../../asset/Epic_Games_logo.svg.png";
import "./header.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import Navigation from "../Navigation/Mobile/Navigation";
import useBoolean from "../../Hooks/useBoolean";
import Nav from "../Navigation/Desktop/Nav";
function Header() {
  const style = { width: "100%", height: "80%", color: "white" };

  const { toggle, isOpen } = useBoolean();
  return (
    <header className="header">
      {/* LOGO */}
      <div className="container_img">
        <a href="https://store.epicgames.com/fr/">
          {" "}
          <img src={epic} alt="Logo" />
        </a>{" "}
      </div>
      {/* BURGER */}
      <div className="container_burger">
        {isOpen === false ? (
          <div className="burger" onClick={toggle}>
            <GiHamburgerMenu style={style} />
          </div>
        ) : (
          <div className="burger-nav" onClick={toggle}>
            <AiOutlineClose className="close" />
          </div>
        )}
      </div>
      <Nav />
      <Navigation isOpen={isOpen} />
    </header>
  );
}

export default Header;

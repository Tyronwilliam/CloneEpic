import React from "react";
import "./footer.scss";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

function Footer() {
  function scroll() {
    window.scrollTo(0, 0);
  }
  return (
    <footer className="footer">
      <div className="container_footer">
        <div className="reseau_backtop">
          <div className="footer_reseaux">
            <a href="https://www.facebook.com/epicgames" target="_blank">
              <BsInstagram className="reseau" />
            </a>
            <a
              href="https://www.youtube.com/channel/UC5Qk8mWBwtMyEj7iQQYRk1A"
              target="_blank"
            >
              <BsTwitter className="reseau" />
            </a>
          </div>
          <div>
            <BsFillArrowUpSquareFill className="reseau" onClick={scroll} />
          </div>
        </div>
        <div className="disclaimer">
          <div className="disclaimer_content">
            <p>Thank to </p>{" "}
            <a href="https://rawg.io/apidocs" target="_blank">
              <span>RAWG Video Games Database API</span>
            </a>
            <p>and to Epic Games</p>
          </div>
          <div className="disclaimer_content">
            <p>This Website is only for educational purpose</p>
          </div>
          <div className="disclaimer_content">
            <p> Please not that i got the design from</p>
            <a href="https://store.epicgames.com/fr/" target="_blank">
              Epic Games
            </a>
          </div>
          <div className="disclaimer_content">
            <p>
              This site is non-profit and aims to improve my development skills
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

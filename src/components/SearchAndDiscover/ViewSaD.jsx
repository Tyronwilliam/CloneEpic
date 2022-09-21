import React from "react";
import "./viewSaD.scss";
import Discover from "./Discover/Discover";
import Search from "./Search/Search";
function ViewSaD() {
  return (
    <section className="container">
      <div className="sub_container">
        <Search />
        <Discover />
        <div></div>
      </div>
    </section>
  );
}

export default ViewSaD;

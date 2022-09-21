import React from "react";
import CarouselDesktop from "../../components/FramerMotion/CarouselDesktop/CarouselDesktop";
import CarouselMain from "../../components/FramerMotion/CarouselMain";

import "./home.scss";
function Home() {
  return (
    <main className="main_home">
      <section className="section_home">
        <CarouselMain />
        <CarouselDesktop />
      </section>
    </main>
  );
}

export default Home;

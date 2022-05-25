import React from "react";
import klayImage from "../../assets/klay.jpeg";

const NewIntro = () => {
  return (
    <>
      <section className="intro" id="home">
        <div className="weather">
          <div className="sun"></div>
          <div className="cloud"></div>
        </div>
        <h1 className="section__title section__title--intro">
          Hi, I am <strong>Klay Clarke</strong>
        </h1>
      </section>
    </>
  );
};

export default NewIntro;

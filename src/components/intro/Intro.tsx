import React from "react";
import klayImage from "../../assets/klay.jpeg";

type IntroProps = {};

const Intro: React.FC<IntroProps> = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-greeting">Hello, My name is</h2>
          <h1 className="i-name header">Klay Clarke</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Developer</div>
              <div className="i-title-item">Bass Player</div>
              <div className="i-title-item">Poet</div>
            </div>
          </div>
          <p className="i-description">
            I am a web developer embracing the cycle of learning, trying, and
            failing until I succeed. Currently focused on building web
            applications, I one day hope to contribute to the software that make
            modern music production possible.
          </p>
          <br />
          <a href="#portfolio">
            <button type="button">Explore my projects</button>
          </a>
          <br />
          <a href="#about">
            <button type="button" className="v2">
              Learn more about me
            </button>
          </a>
        </div>
      </div>
      <div className="i-right">
        <div className="i-right-wrapper"></div>
      </div>
    </div>
  );
};

const NewIntro = () => {
  return (
    <>
      <section className="intro" id="home">
        <div className="sun"></div>
        <h1 className="section__title section__title--intro">
          Hi, I am <strong>Klay Clarke</strong>
        </h1>
        <div className="cloud"></div>
      </section>
    </>
  );
};

export default NewIntro;

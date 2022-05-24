import React from "react";
import "./intro.css";

type IntroProps = {};

const Intro: React.FC<IntroProps> = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-greeting">Hello, My name is</h2>
          <h1 className="i-name">Klay Clarke</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Avid Typescript User</div>
              <div className="i-title-item">Novice Bass Player</div>
              <div className="i-title-item">Amateur Poet</div>
            </div>
          </div>
          <div className="i-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perspiciatis soluta enim corporis. Facere ea veritatis, quae, illo
            porro consectetur inventore modi non harum dolores asperiores dolor
            hic corporis quo officia.
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-right-wrapper"></div>
      </div>
    </div>
  );
};
export default Intro;
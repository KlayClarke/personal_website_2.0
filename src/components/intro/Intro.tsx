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
              <div className="i-title-item">Developer</div>
              <div className="i-title-item">Bass Player</div>
              <div className="i-title-item">Poet</div>
            </div>
          </div>
          <div className="i-description">
            I am a web developer embracing the cycle of learning, trying, and
            failing until I succeed. Currently focused on building web
            applications, I one day hope to contribute to the software that make
            modern music production possible.
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

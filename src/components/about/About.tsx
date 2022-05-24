import React from "react";
import "./about.css";
import musicImage from "../../assets/music.png";
import researchImage from "../../assets/research.png";

type AboutProps = {};

const About: React.FC<AboutProps> = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card">
          <img src={musicImage} alt="music notes" />
        </div>
        <br />
        <div className="a-card">
          <img src={researchImage} alt="research clip art" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          My technological interests developed somewhat unconventionally:
        </p>
        <br />
        <p className="a-desc">
          While in college, I began producing music. The learning curve was
          steep, but my preferred applications -{" "}
          <span>
            <a href="">Ableton</a>{" "}
          </span>{" "}
          and{" "}
          <span>
            <a href="">Logic Pro X</a>
          </span>{" "}
          - intelligently assist users, making it easy for beginners to get
          started and for experienced producers to get the ball rolling. I'd
          also fell in love with{" "}
          <span>
            <a href="">Stata</a>
          </span>{" "}
          and{" "}
          <span>
            <a href="">R</a>
          </span>{" "}
          , statistical software that helped me analyze and manipulate data
          while serving as a novice research assistant in UConn's Sociology
          Department. After graduation, I decided to learn more about (1) how
          these tools worked and (2) how teams of engineers collaborated to
          build such powerful software. I would soon find myself learning (and
          loving) Javascript and Python instead.
        </p>
      </div>
    </div>
  );
};
export default About;

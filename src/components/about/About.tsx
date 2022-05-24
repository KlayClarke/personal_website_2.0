import React from "react";
import "./about.css";

type AboutProps = {};

const About: React.FC<AboutProps> = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card"></div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quisquam
          illo eligendi hic. Asperiores ipsa nostrum facilis facere, porro
          cupiditate voluptates esse maxime nihil veniam consectetur ipsam
          minima voluptatibus eos?
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, sint!
          Voluptas vitae fugiat explicabo. Praesentium saepe odit minima, sed
          culpa maiores doloremque tempora inventore nemo, dolor pariatur
          obcaecati, ipsum maxime. Beatae asperiores ab assumenda quis nisi
          accusamus sint fugit est vel numquam, optio ipsa doloribus in
          laboriosam consequuntur. Ad facere cumque culpa aspernatur voluptas
          dolore distinctio! Aut expedita fugit officia? Accusamus, asperiores
          amet! Debitis a, consectetur nihil odit expedita quas inventore vel,
          eveniet dolor ut neque provident fugiat ea sint hic obcaecati tempora,
          saepe aut! Expedita hic quasi aut deleniti.
        </p>
      </div>
    </div>
  );
};
export default About;

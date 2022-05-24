import React from "react";
import "./project.css";

type ProjectProps = {
  name: string;
  description: string;
  stack: string;
  img: string;
  githubLink: string;
  demoLink: string;
};

const Project: React.FC<ProjectProps> = ({
  name,
  description,
  stack,
  img,
  githubLink,
  demoLink,
}) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={demoLink} target={"_blank"} rel="noreferrer">
        <img src={img} alt={`${name} image`} className="p-img" />
      </a>
    </div>
  );
};
export default Project;

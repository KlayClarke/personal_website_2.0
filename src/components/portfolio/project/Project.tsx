import React from "react";
import githubLogo from "../../../assets/GitHub-Logos/GitHub_Logo.png";
import "./project.css";

type ProjectProps = {
  name: string;
  description: string;
  stack: string;
  img: string;
  githubLink: string;
  demoLink?: string;
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
        <div className="p-browser-left">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
        <div className="p-browser-right">
          <a
            href={githubLink}
            target={"_blank"}
            rel="noreferrer"
            className="p-github-link"
          >
            <img src={githubLogo} alt="github logo" className="p-github" />
          </a>
        </div>
      </div>
      {demoLink ? (
        <a href={demoLink} target={"_blank"} rel="noreferrer">
          <img src={img} alt={`${name} image`} className="p-img" />
        </a>
      ) : (
        <>
          <img src={img} alt={`${name} image`} className="p-img" />
        </>
      )}
    </div>
  );
};
export default Project;

import React from "react";
import Project from "./project/Project";
import "./portfolio.css";
import { projects } from "../../data";

type PortfolioProps = {};

const Portfolio: React.FC<PortfolioProps> = () => {
  return (
    <div className="portfolio" id="portfolio">
      <div className="portfolio__texts">
        <h1 className="portfolio__title header">
          Explore some projects I've worked on below
        </h1>
        <p className="portfolio__description">
          The projects below were created using a variety of tools that include
          - but are not limited to - ReactJS, NextJS, MongoDB, and Firebase
        </p>
      </div>
      <div className="portfolio__list">
        {projects.map((p, index) => (
          <Project
            key={index}
            name={p.name}
            description={p.description}
            stack={p.stack}
            img={p.img}
            githubLink={p.githubLink}
            demoLink={p.demoLink}
          />
        ))}
      </div>
    </div>
  );
};
export default Portfolio;

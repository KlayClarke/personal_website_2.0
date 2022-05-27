import React from "react";
import Project from "./project/Project";
import { projects } from "../../data";

type PortfolioProps = {};

const Portfolio: React.FC<PortfolioProps> = () => {
  return (
    <div className="portfolio" id="portfolio">
      <div className="portfolio__texts">
        <h1 className="portfolio__title header">
          I am a self-taught web developer embracing the cycle of learning,
          trying and failing until I succeed.
        </h1>
        <p className="portfolio__description">
          Explore some projects I've worked on below
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

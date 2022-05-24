import React from "react";
import Project from "../project/Project";
import "./portfolio.css";

type PortfolioProps = {};

const Portfolio: React.FC<PortfolioProps> = () => {
  return (
    <div className="portfolio">
      <div className="portfolio__texts">
        <h1 className="portfolio__title">
          Explore some projects I've worked on below
        </h1>
        <h3 className="portfolio__description">
          The projects below were created using a variety of tools. These tools
          include - but are not limited to - NextJS, Typescript, MongoDB, and
          Firebase
        </h3>
      </div>
      <div className="portfolio__list">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
};
export default Portfolio;

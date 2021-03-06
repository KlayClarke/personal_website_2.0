import redditClone from "../src/assets/redditclone.jpg";
import freshenV3 from "../src/assets/freshenv3.png";
import freshenV2 from "../src/assets/freshen_image.png";
import pw from "../src/assets/pw.png";
import inspo from "../src/assets/inspo.jpg";

export const projects = [
  {
    name: "Reddit clone",
    description:
      "Given my expansive use of Reddit and my current desire to learn Typescript, why not teach myself Typescript while also rebuilding Reddit?",
    stack: "Created using Typescript, NextJS, Firebase, Chakra UI, Vercel",
    img: redditClone,
    githubLink: "https://github.com/KlayClarke/reddit-clone",
    demoLink: "https://reddit-clone-ashy-one.vercel.app/",
  },
  {
    name: "freshen Version 3",
    description: "An update to my 'freshen' idea.",
    stack: "Created using NextJS, MongoDB (Prisma), TailwindCSS, Vercel",
    img: freshenV3,
    githubLink: "https://github.com/KlayClarke/freshenv3",
    demoLink: "https://freshenv3.vercel.app/",
  },
  {
    name: "inspo",
    descrption: "A photo sharing application that uses FastAPI, Azure, etc.",
    stack:
      "Created using React, FastAPI, PostgreSQL, Azure, Docker, Chakra UI, Google Cloup Platform",
    img: inspo,
    githubLink: "https://github.com/KlayClarke/InspoFrontend",
    demoLink: "https://inspo-one.vercel.app/",
  },
  {
    name: "freshen Version 2",
    description:
      "'freshen' is a Yelp-like assistant that helps users find reputable and trustworthy hairstylists across the tri-state area. Users who own hair salons and barbershops can also add their own shop to our database, making it available to others.",
    stack: "Created using Express, MongoDB, CSS, Heroku",
    img: freshenV2,
    githubLink: "https://github.com/KlayClarke/freshenv2",
    demoLink: "https://thawing-reaches-97496.herokuapp.com/",
  },
  {
    name: "Personal Website",
    description: "Personal website",
    stack: "Created using Typescript, ReactJS",
    img: pw,
    githubLink: "https://github.com/KlayClarke/personal_website_2.0",
  },
];

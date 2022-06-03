import redditClone from "../src/assets/redditclone.jpg";
import freshenV3 from "../src/assets/freshenv3.png";
import freshenV2 from "../src/assets/freshen_image.png";
import pw from "../src/assets/pw.png";
import vStore from "../src/assets/vStore.png";

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
  //   {
  //     name: "vStore",
  //     descrption: "A video streaming application that uses FastAPI, AWS, etc.",
  //     stack: "Created using React, FastAPI, PostgreSQL, AWS, Docker, Chakra UI",
  //     img: vStore,
  //     githubLink: "https://github.com/KlayClarke/vStoreBackend",
  //     demoLink: "https://v-store.vercel.app/",
  //   },
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

const NewAbout = () => {
  return (
    <section className="about-me" id="about">
      <div className="cloud"></div>
      <br />
      <h2 className="section__title section__title--about">More About Me</h2>
      <div className="about-me__body">
        <p>
          While in college, I began producing music. The learning curve was
          steep, but my preferred applications -{" "}
          <span className="music-span">
            <a href="https://www.ableton.com/" target={"_blank"}>
              Ableton
            </a>{" "}
          </span>{" "}
          and{" "}
          <span className="music-span">
            <a href="https://www.apple.com/logic-pro/" target={"_blank"}>
              Logic Pro X
            </a>
          </span>{" "}
          - intelligently assist users, making it easy for beginners to get
          started and for experienced producers to get the ball rolling.
          <br />
          <br />
          I'd also fell in love with{" "}
          <span className="stats-span">
            <a href="https://www.stata.com/" target={"_blank"}>
              Stata
            </a>
          </span>{" "}
          and{" "}
          <span className="stats-span">
            <a href="https://www.r-project.org/" target={"_blank"}>
              R
            </a>
          </span>{" "}
          , statistical software that helped me analyze and manipulate data
          while serving as a novice research assistant in UConn's Sociology
          Department. After graduation, I decided to learn more about (1) how
          these tools worked and (2) how teams of engineers collaborate to build
          such powerful software. I would soon find myself learning (and loving)
          Javascript and Python instead.
        </p>
        <p>
          Learn more here:{" "}
          <span className="socials-span">
            <a href="https://github.com/KlayClarke" target={"_blank"}>
              GitHub
            </a>
          </span>
          <span className="socials-span">
            <a
              href="https://www.linkedin.com/in/klayclarke000"
              target={"_blank"}
            >
              LinkedIn
            </a>
          </span>
        </p>
      </div>
    </section>
  );
};

export default NewAbout;

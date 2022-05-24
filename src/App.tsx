import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Intro />
      <Portfolio />
      <About />
    </div>
  );
}

export default App;

import "./App.css";
import NewIntro from "./components/intro/Intro";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <NewIntro />
      <Portfolio />
      <About />
    </div>
  );
}

export default App;

import "./App.css";
import NewIntro from "./components/intro/Intro";
import NewAbout from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <NewIntro />
      <Portfolio />
      <NewAbout />
    </div>
  );
}

export default App;

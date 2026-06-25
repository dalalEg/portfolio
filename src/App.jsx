import "./App.css";

import Navbar from "./components/Navbar";
import BasicInformation from "./components/Basic information";
import About from "./components/about";
import Skills from "./components/skills";
import FeaturedProject from "./components/FeaturedProject";

function App() {
  return (
    <div className="app">
      <Navbar />
      <BasicInformation />
      <About />
      <Skills />
      <FeaturedProject />
    </div>
  );
}

export default App;
import "./App.css";

import Navbar from "./components/Navbar";
import BasicInformation from "./components/Basic information";
import About from "./components/About";
import Skills from "./components/Skills";
import FeaturedProject from "./components/FeaturedProject";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app">
      <Navbar />
      <BasicInformation />
      <About />
      <Skills />
      <FeaturedProject />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
import "./App.css";
import { Suspense, lazy } from "react";

import Navbar from "./components/Navbar";
import BasicInformation from "./components/Basic information";

const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const FeaturedProject = lazy(() => import("./components/FeaturedProject"));
const Experience = lazy(() => import("./components/Experience"));
const Education = lazy(() => import("./components/Education"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  const sectionFallback = <div className="section-loading" aria-hidden="true" />;

  return (
    <div className="app">
      <Navbar />
      <BasicInformation />

      <Suspense fallback={sectionFallback}>
        <About />
      </Suspense>
      <Suspense fallback={sectionFallback}>
        <Skills />
      </Suspense>
      <Suspense fallback={sectionFallback}>
        <FeaturedProject />
      </Suspense>
      <Suspense fallback={sectionFallback}>
        <Experience />
      </Suspense>
      <Suspense fallback={sectionFallback}>
        <Education />
      </Suspense>
      <Suspense fallback={sectionFallback}>
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;
import { useEffect, useState } from "react";
import "../styles/Navbar.css";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [activeId, setActiveId] = useState("home");

  const handleSectionClick = (sectionId) => {
    setActiveId(sectionId);

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const updateActiveSection = () => {
      const offset = 140;
      let currentSection = "home";
      let smallestDistance = Number.POSITIVE_INFINITY;

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (!element) return;

        const distance = Math.abs(element.getBoundingClientRect().top - offset);
        if (distance < smallestDistance) {
          smallestDistance = distance;
          currentSection = section.id;
        }
      });

      setActiveId(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <header className="navbar">
      <div className="logo">ED</div>
      <nav className="nav-links">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={activeId === section.id ? "active" : ""}
            onClick={(event) => {
              event.preventDefault();
              handleSectionClick(section.id);
            }}
          >
            {section.label}
          </a>
        ))}
        <a className="resume-link" href="/Dalal-Eghbaria.pdf" download>
          Resume
        </a>
      </nav>
    </header>
  );
}
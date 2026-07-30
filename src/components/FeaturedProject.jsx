import "../styles/FeaturedProject.css";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/portfolioData";

export default function FeaturedProject() {
  return (
    <motion.section
      id="projects"
      className="featured-project"
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45 }}
    >
      <div className="content-card">
        <h2>Projects</h2>

        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </motion.section>
  );
}

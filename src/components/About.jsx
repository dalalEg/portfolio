import { motion } from "framer-motion";
import "../styles/About.css";

export default function About() {
  return (
    <motion.section
      id="about"
      className="about"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.4 }}
    > 
    <div className="content-card">
      <h2>About Me</h2>

      <p>
        Computer Science graduate from the Technion with experience
        building full-stack web applications, REST APIs, and software
        systems. Skilled in Python, C++, JavaScript, React, Django,
        PostgreSQL, Docker, and modern development workflows.
      </p>

      <p>
        I enjoy solving complex problems, designing scalable systems,
        and building software that combines strong engineering
        practices with excellent user experience.
      </p>
    </div>
    </motion.section>
  );
}
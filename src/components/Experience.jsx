import { motion } from "framer-motion";
import { experience } from "../data/portfolioData";
import "../styles/Experience.css";

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="experience"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
    >
      <h2>Experience</h2>
      <article className="content-card">
        <h3>{experience.title}</h3>
        <ul>
          {experience.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </article>
    </motion.section>
  );
}

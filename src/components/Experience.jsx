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
      <article className="content-card experience-card">
        <h2>Experience</h2>
        <article className="experience-entry">
          <h3>{experience.title}</h3>

          <div className="experience-meta">
            <span className="experience-badge">{experience.company} - {experience.location}</span>
            <span className="experience-badge">{experience.timeframe}</span>
          </div>

          <h4>Key Responsibilities</h4>
          <ul className="experience-list">
            {experience.points.map((point) => (
              <li key={point} className="experience-point">
                {point}
              </li>
            ))}
          </ul>
        </article>
      </article>
    </motion.section>
  );
}

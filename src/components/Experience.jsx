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
    <div className="content-card">
      <h2>Experience</h2>
        <h3>{experience.title}</h3>
        <p className="experience-company">{experience.company}</p>
        <p className="experience-location">{experience.location}</p>
        <p className="experience-timeframe">{experience.timeframe}</p>
        <h4>Key Responsibilities</h4>
        <ul>
          {experience.points.map((point) => (
            <li key={point} className="experience-point">{point}</li>
          ))}
        </ul>
    </div>
    </motion.section>
  );
}

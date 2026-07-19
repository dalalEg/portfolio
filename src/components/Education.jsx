import { motion } from "framer-motion";
import { education } from "../data/portfolioData";
import "../styles/Education.css";

export default function Education() {
  return (
    <motion.section
      id="education"
      className="education"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
    >
            <article className="content-card">

      <h2>Education</h2>
        <h3>{education.school}</h3>
        <p className="education-degree">{education.degree}</p>
        <h4>Relevant Coursework</h4>
        <div className="course-grid">
          {education.coursework.map((course) => (
            <span key={course} className="course-badge">
              {course}
            </span>
          ))}
        </div>
      </article>
    </motion.section>
  );
}

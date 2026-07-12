import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";
import "../styles/Skills.css";

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="skills"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.4 }}
    >
      <h2>Skills</h2>

      <SkillCategory title="Languages" items={skills.languages} />
      <SkillCategory title="Frontend" items={skills.frontend} />
      <SkillCategory title="Backend" items={skills.backend} />
      <SkillCategory title="Database" items={skills.database} />
      <SkillCategory title="Tools" items={skills.tools} />
    </motion.section>
  );
}

function SkillCategory({ title, items }) {
  return (
    <div className="skill-category">
      <h3>{title}</h3>

      <div className="skills-grid">
        {items.map((skill) => (
          <div key={skill} className="skill-badge">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
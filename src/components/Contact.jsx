import { motion } from "framer-motion";
import { contact } from "../data/portfolioData";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
    >
      <article className="content-card contact-card">
        <h2>Let's Connect!</h2>
        <p>
          I am open to discussing software engineering opportunities,
          collaboration ideas, and interesting projects.
        </p>
        <p className="contact-subtext">
          Reach out directly or explore my work through the links below.
        </p>

        <div className="contact-links" aria-label="Contact links">
          <a href={contact.email}>📧 Email: dalal.eg@campus.technion.ac.il</a>
          <a href={contact.github} target="_blank" rel="noreferrer">
            🐙 GitHub: dalalEg
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer">
            🔗 LinkedIn: Dalal Eghbaria
          </a>
          <a href={contact.resume} target="_blank" rel="noreferrer">
            📄 Resume
          </a>
        </div>
      </article>
    </motion.section>
  );
}

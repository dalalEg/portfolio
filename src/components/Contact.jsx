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
      <h2>Contact</h2>
      <article className="content-card contact-card">
        <a href={contact.email}>Email</a>
        <a href={contact.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={contact.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </article>
    </motion.section>
  );
}

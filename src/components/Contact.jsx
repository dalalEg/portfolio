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
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions. Feel free to reach out via
          email or connect with me on GitHub and LinkedIn.  
        </p>
        You can click the links below to get in touch or download my resume for more details about my professional journey.
        <a href={contact.email}> 📧 Email : dalal.eg@campus.technion.ac.il  </a>
        <a href={contact.github} target="_blank" rel="noreferrer">
          🐙 GitHub: dalalEg
        </a>
        <a href={contact.linkedin} target="_blank" rel="noreferrer">
          🔗 LinkedIn: Dalal Eghbaria
        </a>
        <a href="/Dalal-Eghbaria.pdf" download>
          📄 Download Resume
        </a>
      </article>
     
    </motion.section>
  );
}

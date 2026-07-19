import { motion } from "framer-motion";
import "../styles/Basic.css";

export default function BasicInformation() {
    return (
        <motion.section
            id="home"
            className="basic-information"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="content-card">
                <h1>Dalal Eghbaria</h1>
                <h2>Software Developer</h2>
                <h3>Full-Stack Development | Backend Engineering</h3>
                <p>
                    Computer Science graduate from the Technion with experience building full-stack web applications using React, Django REST Framework, and PostgreSQL. Passionate about designing scalable systems,
                     developing robust APIs, and creating reliable user experiences.
                </p>
                <div className="buttons">
                    <a href="https://github.com/dalalEg" target="_blank" rel="noreferrer">
                        GitHub
                    </a>
                    <a href="https://linkedin.com/in/dalal-eghbaria-a9283820a" target="_blank" rel="noreferrer">
                        LinkedIn
                    </a>
                </div>
            </div>
        </motion.section>
    );
}
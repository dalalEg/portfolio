import { contact } from "../data/portfolioData";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="footer-inner">
        <p className="footer-copy">© {new Date().getFullYear()} Dalal Eghbaria</p>
        <p className="footer-tech">Built with React + Vite</p>

        <div className="footer-links">
          <a href={contact.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={contact.resume} target="_blank" rel="noreferrer">
            Resume
          </a>
          <a href={contact.email}>Email</a>
        </div>
      </div>
    </footer>
  );
}

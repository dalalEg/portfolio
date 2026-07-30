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
        <div className="certifications-list">
          <article className="edu-cert-card">
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

          {education.certifications?.length > 0 && (
            <>
              <h3 className="certifications-heading">Licenses & Certifications</h3>
              {education.certifications.map((cert) => (
                <article key={cert.title} className="edu-cert-card">
                  <h5>{cert.title}</h5>
                  <p className="cert-meta">
                    {cert.issuer}
                    {cert.issued ? ` - Issued ${cert.issued}` : ""}
                  </p>

                  {cert.credentialId && (
                    <p className="cert-id">Credential ID: {cert.credentialId}</p>
                  )}

                  {cert.skills?.length > 0 && (
                    <div className="cert-skills">
                      {cert.skills.map((skill) => (
                        <span key={skill} className="cert-skill-badge">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="cert-links">
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Show credential
                    </a>
                    {cert.relatedLink?.url && (
                      <a
                        href={cert.relatedLink.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {cert.relatedLink.label}
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </>
          )}
        </div>
      </article>
    </motion.section>
  );
}

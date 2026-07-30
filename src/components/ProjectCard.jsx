import { motion } from "framer-motion";

export default function ProjectCard({ project, index }) {
  const delay = 0.08 * index;

  return (
    <motion.article
      className="project-showcase"
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay }}
    >
      <header className="project-header">
        <p className="project-eyebrow">{project.eyebrow}</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
      </header>

      <div className="project-tech">
        {project.techStack.map((tech) => (
          <span key={tech} className="tech-badge">
            {tech}
          </span>
        ))}
      </div>

      {project.architecture ? (
        <div className="architecture-grid" aria-label={`${project.title} architecture diagram`}>
          {project.architecture.map((node, architectureIndex) => {
            const isArrow = node === "->" || node === "|";
            return (
              <div
                key={`${project.title}-${node}-${architectureIndex}`}
                className={isArrow ? "arch-arrow" : "arch-node"}
              >
                {node}
              </div>
            );
          })}
        </div>
      ) : null}

      {project.keyFeatures || project.metrics ? (
        <div className="project-content-grid">
          {project.keyFeatures ? (
            <div className="project-panel">
              <h4>Key Features</h4>
              <ul>
                {project.keyFeatures.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {project.metrics ? (
            <div className="project-panel metrics-panel">
              <h4>Impact Metrics</h4>
              <div className="metrics-grid">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="metric-card">
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      ) : null}

      <div className="project-actions">
        <a href={project.links.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        {project.links.liveDemo ? (
          <a href={project.links.liveDemo} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        ) : null}
        {project.links.learnMore ? (
          <a href={project.links.learnMore} target="_blank" rel="noreferrer">
            Learn More
          </a>
        ) : null}
      </div>

      {project.galleryItems ? (
        <div className="gallery-grid" aria-label={`${project.title} screenshots`}>
          {project.galleryItems.map((item) => (
            <figure key={item.title} className="gallery-shot">
              {item.image ? (
                <img className="gallery-image" src={item.image} alt={item.title} />
              ) : (
                <div className="gallery-frame" aria-hidden="true" />
              )}
              <figcaption>
                <strong>{item.title}</strong>
                <span>{item.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      ) : null}
    </motion.article>
  );
}

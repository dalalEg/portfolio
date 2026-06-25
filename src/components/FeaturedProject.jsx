import "../styles/FeaturedProject.css";
import { techStack, keyFeatures, metrics, projectLinks, galleryItems } from "../data/portfolioData";

export default function FeaturedProject() {
  return (
    <section id="projects" className="featured-project">
      <h2>Featured Project</h2>

      <article className="project-showcase">
        <header className="project-header">
          <p className="project-eyebrow">Flagship Build</p>
          <h3>Movie Theater Booking System</h3>
          <p className="project-description">
            A production-style full-stack booking platform where users browse movies,
            reserve seats, complete payments, and receive automated notifications.
            Built to demonstrate backend depth, API design, and scalable architecture.
          </p>
        </header>

        <div className="project-tech">
          {techStack.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        <div className="architecture-grid" aria-label="System architecture diagram">
          <div className="arch-node">React Frontend</div>
          <div className="arch-arrow"> --- </div>
          <div className="arch-node">Django REST API</div>
          <div className="arch-arrow"> --- </div>
          <div className="arch-node">PostgreSQL</div>
          <div className="arch-arrow">+</div>
          <div className="arch-node">Redis + Celery</div>
        </div>

        <div className="project-content-grid">
          <div className="project-panel">
            <h4>Key Features</h4>
            <ul>
              {keyFeatures.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="project-panel metrics-panel">
            <h4>Impact Metrics</h4>
            <div className="metrics-grid">
              {metrics.map((metric) => (
                <div key={metric.label} className="metric-card">
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="project-actions">
          <a href={projectLinks.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={projectLinks.liveDemo} target="_blank" rel="noreferrer">
            Live Demo
          </a>
          <a href={projectLinks.youtubeDemo} target="_blank" rel="noreferrer">
            YouTube Demo
          </a>
        </div>

        <div className="gallery-grid" aria-label="Project screenshot gallery">
          {galleryItems.map((item) => (
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
      </article>
    </section>
  );
}

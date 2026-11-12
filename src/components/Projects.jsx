import { asset, projects, siteConfig } from "@/data/site";
import { ArrowUpRight, GitHub } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="projects__head">
          <SectionHeading
            align="left"
            eyebrow="Portfolio · 07 Projects"
            title={
              <>
                Selected work that{" "}
                <span className="text-gradient">speaks for itself</span>.
              </>
            }
            description="A collection of websites and interfaces I've designed and built — each one focused on clarity, performance and a polished user experience."
          />

          <Reveal delay={120} className="projects__head-link">
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow"
            >
              More on GitHub
              <ArrowUpRight width="16" height="16" />
            </a>
          </Reveal>
        </div>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <Reveal
              key={project.id}
              delay={(index % 3) * 80}
              className={`project-reveal${
                index < 2 ? " project-reveal--featured" : ""
              }`}
            >
              <article className="project-card">
                <div className="project-card__media">
                  <img
                    src={asset(project.image)}
                    alt={`${project.title} — project preview`}
                    width="1200"
                    height="750"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="project-card__tag">{project.category}</span>
                  <span className="project-card__index">0{index + 1}</span>
                  <div className="project-card__shine" aria-hidden="true" />
                </div>

                <div className="project-card__body">
                  <div className="project-card__title-row">
                    <h3 className="project-card__title">{project.title}</h3>
                    <span className="project-card__dot" aria-hidden="true" />
                  </div>
                  <p className="project-card__description">{project.description}</p>

                  <ul className="project-card__tech" aria-label="Technologies used">
                    {project.tech.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>

                  <div className="project-card__actions">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--primary btn--sm"
                      aria-label={`View the ${project.title} live demo`}
                    >
                      Live Demo
                      <ArrowUpRight width="15" height="15" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--outline btn--sm"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <GitHub width="15" height="15" />
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

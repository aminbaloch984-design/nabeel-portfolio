import { skills } from "@/data/site";
import { ArrowUpRight, Icon } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <SectionHeading
          eyebrow="My Toolbox"
          title={
            <>
              Skills that shape{" "}
              <span className="text-gradient">great experiences</span>.
            </>
          }
          description="The technologies I use every day to design, build and ship modern websites — from semantic structure to polished interactions."
        />

        <div className="skills__grid">
          {skills.map((skill, index) => (
            <Reveal key={skill.name} delay={index * 70}>
              <article
                className="skill-card"
                style={{ "--accent": skill.accent, "--level": `${skill.level}%` }}
              >
                <div className="skill-card__head">
                  <span className="skill-card__icon">
                    <Icon name={skill.icon} width="30" height="30" />
                  </span>
                  <span className="skill-card__level">
                    {skill.level}
                    <small>%</small>
                  </span>
                </div>

                <h3 className="skill-card__name">{skill.name}</h3>
                <p className="skill-card__blurb">{skill.blurb}</p>

                <div
                  className="skill-bar"
                  role="progressbar"
                  aria-label={`${skill.name} proficiency`}
                  aria-valuenow={skill.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <span className="skill-bar__fill" />
                </div>
                <span className="skill-card__meta">Proficiency</span>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="skills__note">
          <p>
            <span className="skills__note-dot" aria-hidden="true" />
            Always learning, always refining — currently exploring advanced
            Next.js patterns and motion design.
          </p>
          <a href="#projects" className="link-arrow">
            See it in action
            <ArrowUpRight width="16" height="16" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

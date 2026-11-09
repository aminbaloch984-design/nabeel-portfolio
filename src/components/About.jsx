import { aboutHighlights, asset, siteConfig } from "@/data/site";
import { ArrowRight, Check, Sparkles } from "./Icons";
import Reveal from "./Reveal";

const quickFacts = [
  { label: "Focus", value: "React & Next.js" },
  { label: "Approach", value: "Design-led & detail-driven" },
  { label: "Availability", value: "Open to new projects" },
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <Reveal className="about__visual">
          <div className="about-card">
            <div className="about-card__glow" aria-hidden="true" />
            <div className="about-card__grid" aria-hidden="true" />
            <div className="about-card__ring about-card__ring--one" aria-hidden="true" />
            <div className="about-card__ring about-card__ring--two" aria-hidden="true" />

            <div className="about-card__top">
              <span className="about-card__tag">
                <Sparkles width="14" height="14" />
                Frontend Developer
              </span>
              <span className="about-card__status">
                <span className="pulse-dot pulse-dot--green" aria-hidden="true" />
                Open to work
              </span>
            </div>

            <div className="about-card__portrait">
              <img
                src={asset("/logo-mark.png")}
                alt="Nabeel — React.js and Next.js developer logo"
                className="about-card__logo"
                width="489"
                height="351"
                loading="lazy"
              />
            </div>

            <div className="about-card__caption">
              <div>
                <strong>{siteConfig.name}</strong>
                <span>{siteConfig.title}</span>
              </div>
              <div className="about-card__stack">
                <span>React</span>
                <span>Next.js</span>
                <span>UI</span>
              </div>
            </div>
          </div>

          <div className="about-float about-float--one">
            <span className="about-float__icon" aria-hidden="true">
              &lt;/&gt;
            </span>
            <div>
              <strong>Clean code</strong>
              <span>Built to scale</span>
            </div>
          </div>

          <div className="about-float about-float--two">
            <span className="about-float__icon about-float__icon--violet" aria-hidden="true">
              <Check width="16" height="16" />
            </span>
            <div>
              <strong>Pixel perfect</strong>
              <span>Every breakpoint</span>
            </div>
          </div>
        </Reveal>

        <div className="about__content">
          <Reveal>
            <span className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" />
              About Me
            </span>
            <h2 className="section-head__title section-head__title--left">
              A developer who cares about the{" "}
              <span className="text-gradient">details</span>.
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <p className="about__lead">
              I&apos;m Nabeel, a passionate frontend web developer who turns ideas
              into modern, fast and user-friendly websites.
            </p>
            <p className="about__text">
              My focus is on building interfaces that feel effortless. I enjoy
              working at the intersection of design and code — shaping clean
              layouts, smooth interactions and responsive experiences that work
              beautifully on every screen. From a blank canvas to a polished
              product, I care about the details that make a website feel premium.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <ul className="about__list">
              {aboutHighlights.map((item) => (
                <li key={item}>
                  <span className="about__check" aria-hidden="true">
                    <Check width="13" height="13" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={200}>
            <dl className="about__facts">
              {quickFacts.map((fact) => (
                <div className="about-fact" key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={260} className="about__actions">
            <a href="#contact" className="btn btn--primary">
              <span>Let&apos;s Work Together</span>
              <ArrowRight width="18" height="18" />
            </a>
            <a href="#skills" className="link-arrow">
              Explore my skills
              <ArrowRight width="16" height="16" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

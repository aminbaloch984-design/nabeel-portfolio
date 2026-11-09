import { heroStats, siteConfig } from "@/data/site";
import { ArrowRight, ArrowUpRight, GitHub, LinkedIn, Mail, NextIcon, ReactIcon, Sparkles, WhatsApp } from "./Icons";

const codeLines = [
  <>
    <span className="tok-keyword">const</span>{" "}
    <span className="tok-var">developer</span> <span className="tok-punct">= {"{"}</span>
  </>,
  <>
    <span className="tok-prop">name</span>
    <span className="tok-punct">:</span>{" "}
    <span className="tok-string">&quot;Nabeel&quot;</span>
    <span className="tok-punct">,</span>
  </>,
  <>
    <span className="tok-prop">role</span>
    <span className="tok-punct">:</span>{" "}
    <span className="tok-string">&quot;Frontend Developer&quot;</span>
    <span className="tok-punct">,</span>
  </>,
  <>
    <span className="tok-prop">stack</span>
    <span className="tok-punct">:</span> <span className="tok-punct">[</span>
    <span className="tok-string">&quot;React&quot;</span>
    <span className="tok-punct">,</span>{" "}
    <span className="tok-string">&quot;Next.js&quot;</span>
    <span className="tok-punct">]</span>
    <span className="tok-punct">,</span>
  </>,
  <>
    <span className="tok-prop">passion</span>
    <span className="tok-punct">:</span>{" "}
    <span className="tok-string">&quot;Clean UI, real impact&quot;</span>
    <span className="tok-punct">,</span>
  </>,
  <span className="tok-punct">{"};"}</span>,
  <span className="tok-blank">&nbsp;</span>,
  <>
    <span className="tok-keyword">function</span>{" "}
    <span className="tok-fn">build</span>
    <span className="tok-punct">(</span>
    <span className="tok-var">idea</span>
    <span className="tok-punct">)</span> <span className="tok-punct">{"{"}</span>
  </>,
  <>
    {"  "}
    <span className="tok-keyword">return</span>{" "}
    <span className="tok-fn">createExperience</span>
    <span className="tok-punct">(</span>
    <span className="tok-var">idea</span>
    <span className="tok-punct">);</span>
  </>,
  <span className="tok-punct">{"}"}</span>,
];

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <div className="hero__badge hero-anim" style={{ "--anim-delay": "0ms" }}>
            <span className="pulse-dot" aria-hidden="true" />
            <span>{siteConfig.availability}</span>
            <span className="hero__badge-divider" aria-hidden="true" />
            <span className="hero__badge-role">{siteConfig.role}</span>
          </div>

          <h1 className="hero__title hero-anim" style={{ "--anim-delay": "80ms" }}>
            <span className="hero__title-line">Hi, I&apos;m</span>
            <span className="hero__name">
              Nabeel<span className="hero__name-dot">.</span>
            </span>
          </h1>

          <h2 className="hero__subtitle hero-anim" style={{ "--anim-delay": "160ms" }}>
            I Build <span className="text-gradient">Modern &amp; Responsive</span> Websites.
          </h2>

          <p className="hero__tagline hero-anim" style={{ "--anim-delay": "240ms" }}>
            {siteConfig.tagline}
          </p>

          <p className="hero__support hero-anim" style={{ "--anim-delay": "300ms" }}>
            A frontend web developer focused on creating fast, accessible and
            beautifully crafted digital experiences with React.js and Next.js.
          </p>

          <div className="hero__actions hero-anim" style={{ "--anim-delay": "380ms" }}>
            <a href="#projects" className="btn btn--primary btn--lg">
              <span>View My Work</span>
              <ArrowRight width="19" height="19" />
            </a>
            <a href="#contact" className="btn btn--ghost btn--lg">
              <Mail width="19" height="19" />
              <span>Contact Me</span>
            </a>
          </div>

          <div className="hero__meta hero-anim" style={{ "--anim-delay": "460ms" }}>
            <div className="hero__socials" aria-label="Social links">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="GitHub profile"
              >
                <GitHub width="18" height="18" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="LinkedIn profile (placeholder link)"
              >
                <LinkedIn width="18" height="18" />
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Chat on WhatsApp"
              >
                <WhatsApp width="18" height="18" />
              </a>
            </div>

            <div className="hero__stats">
              {heroStats.map((stat) => (
                <div className="hero-stat" key={stat.label}>
                  <span className="hero-stat__value">{stat.value}</span>
                  <span className="hero-stat__label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hero__visual hero-anim" style={{ "--anim-delay": "220ms" }}>
          <div className="visual-halo" aria-hidden="true" />
          <div className="visual-ring visual-ring--outer" aria-hidden="true" />
          <div className="visual-ring visual-ring--inner" aria-hidden="true" />
          <div className="visual-sphere" aria-hidden="true" />

          <div className="code-window">
            <div className="code-window__bar">
              <div className="code-window__dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <span className="code-window__file">portfolio.jsx</span>
              <span className="code-window__tag">JS</span>
            </div>

            <div className="code-window__body">
              <pre className="code-block" aria-hidden="true">
                {codeLines.map((line, index) => (
                  <span className="code-line" key={index}>
                    <span className="code-line__no">{index + 1}</span>
                    <code>{line}</code>
                  </span>
                ))}
              </pre>
            </div>

            <div className="code-window__status">
              <span className="code-window__status-left">
                <span className="status-dot" aria-hidden="true" />
                Compiled successfully
              </span>
              <span className="code-window__status-right">React · Next.js</span>
            </div>
          </div>

          <div className="float-chip float-chip--react" aria-hidden="true">
            <span className="float-chip__icon float-chip__icon--react">
              <ReactIcon width="20" height="20" />
            </span>
            <span>
              <strong>React.js</strong>
              <small>Component UI</small>
            </span>
          </div>

          <div className="float-chip float-chip--next" aria-hidden="true">
            <span className="float-chip__icon float-chip__icon--next">
              <NextIcon width="20" height="20" />
            </span>
            <span>
              <strong>Next.js</strong>
              <small>App Router</small>
            </span>
          </div>

          <div className="float-badge" aria-hidden="true">
            <Sparkles width="16" height="16" />
            <span>Pixel-perfect, always</span>
          </div>

          <div className="visual-node visual-node--one" aria-hidden="true" />
          <div className="visual-node visual-node--two" aria-hidden="true" />
          <div className="visual-node visual-node--three" aria-hidden="true" />
        </div>
      </div>

      <div className="container hero__footer">
        <a href="#about" className="scroll-cue" aria-label="Scroll to the About section">
          <span className="scroll-cue__line" aria-hidden="true" />
          <span>Scroll to explore</span>
          <ArrowUpRight width="14" height="14" className="scroll-cue__icon" />
        </a>
        <div className="hero__footer-note">
          <span className="hero__footer-dot" aria-hidden="true" />
          Crafted with React &amp; Next.js
        </div>
      </div>
    </section>
  );
}

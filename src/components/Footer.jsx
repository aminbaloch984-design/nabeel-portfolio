import { asset, navLinks, siteConfig } from "@/data/site";
import { ArrowUp, ArrowUpRight, GitHub, LinkedIn, Mail, WhatsApp } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#home" className="brand" aria-label="Nabeel — back to top">
              <img
                src={asset("/logo-mark.png")}
                alt=""
                className="brand__logo"
                width="58"
                height="42"
              />
              <span className="brand__name">
                {siteConfig.name}
                <span>.</span>
              </span>
            </a>
            <p className="footer__tagline">
              Turning ideas into powerful digital experiences — one clean,
              responsive interface at a time.
            </p>
            <div className="footer__socials">
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
                href={`mailto:${siteConfig.email}`}
                className="social-btn"
                aria-label={`Email ${siteConfig.emailDisplay}`}
              >
                <Mail width="18" height="18" />
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
          </div>

          <nav className="footer__nav" aria-label="Footer navigation">
            <span className="footer__heading">Explore</span>
            <div className="footer__links">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          <div className="footer__contact">
            <span className="footer__heading">Get in touch</span>
            <a href={`mailto:${siteConfig.email}`} className="footer__contact-link">
              {siteConfig.emailDisplay}
              <ArrowUpRight width="14" height="14" />
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__contact-link"
            >
              WhatsApp
              <ArrowUpRight width="14" height="14" />
            </a>
            <span className="footer__availability">
              <span className="pulse-dot pulse-dot--green" aria-hidden="true" />
              {siteConfig.availability}
            </span>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2026 Nabeel. All Rights Reserved.</p>
          <div className="footer__bottom-right">
            <span>Designed &amp; built by Nabeel</span>
            <a href="#home" className="footer__top-link" aria-label="Back to top">
              Back to top
              <span className="footer__top-icon">
                <ArrowUp width="15" height="15" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

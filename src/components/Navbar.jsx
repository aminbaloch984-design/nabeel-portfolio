"use client";

import { useEffect, useState } from "react";
import { asset, navLinks, siteConfig } from "@/data/site";
import { ArrowUpRight, Close, GitHub, LinkedIn, Menu, WhatsApp } from "./Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  /* Header state + reading progress */
  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(top > 12);
      setProgress(scrollable > 0 ? Math.min(top / scrollable, 1) : 0);

      const marker = top + window.innerHeight * 0.34;
      let current = "#home";
      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section && section.offsetTop <= marker) current = link.href;
      });
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  /* Mobile menu: lock scroll + escape to close */
  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    const media = window.matchMedia("(min-width: 900px)");
    const onBreakpoint = (event) => {
      if (event.matches) setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    media.addEventListener("change", onBreakpoint);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      media.removeEventListener("change", onBreakpoint);
    };
  }, [open]);

  return (
    <>
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />

      <header
        className={`site-header${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}
      >
        <div className="container nav">
          <a
            href="#home"
            className="brand"
            aria-label="Nabeel — back to top"
            onClick={() => setOpen(false)}
          >
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

          <nav className="nav__links" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav__link${active === link.href ? " is-active" : ""}`}
                aria-current={active === link.href ? "true" : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav__actions">
            <a href="#contact" className="btn btn--primary btn--sm nav__cta">
              <span>Let&apos;s Talk</span>
              <ArrowUpRight width="16" height="16" />
            </a>

            <button
              type="button"
              className="nav__toggle"
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <Close /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      <button
        type="button"
        className={`mobile-nav__backdrop${open ? " is-open" : ""}`}
        aria-label="Close navigation menu"
        tabIndex={open ? 0 : -1}
        onClick={() => setOpen(false)}
      />

      <div
        id="mobile-navigation"
        className={`mobile-nav${open ? " is-open" : ""}`}
        aria-hidden={!open}
      >
        <nav className="mobile-nav__links" aria-label="Mobile navigation">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={`mobile-nav__link${active === link.href ? " is-active" : ""}`}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
            >
              <span className="mobile-nav__index">0{index + 1}</span>
              {link.label}
              <ArrowUpRight width="18" height="18" />
            </a>
          ))}
        </nav>

        <div className="mobile-nav__footer">
          <a
            href="#contact"
            className="btn btn--primary mobile-nav__cta"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
          >
            Start a project
            <ArrowUpRight width="18" height="18" />
          </a>
          <div className="mobile-nav__socials">
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              tabIndex={open ? 0 : -1}
            >
              <GitHub width="19" height="19" />
            </a>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile (placeholder link)"
              tabIndex={open ? 0 : -1}
            >
              <LinkedIn width="19" height="19" />
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              tabIndex={open ? 0 : -1}
            >
              <WhatsApp width="19" height="19" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

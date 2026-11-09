"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/data/site";
import {
  ArrowUpRight,
  Check,
  Copy,
  GitHub,
  LinkedIn,
  Mail,
  Send,
  WhatsApp,
} from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const EMPTY_FORM = { name: "", email: "", subject: "", message: "" };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values) {
  const errors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your name (at least 2 characters).";
  } else if (values.name.trim().length > 80) {
    errors.name = "That name is a little too long.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (values.subject.trim().length > 120) {
    errors.subject = "Please keep the subject under 120 characters.";
  }

  if (values.message.trim().length < 10) {
    errors.message = "Please add a few more details (at least 10 characters).";
  } else if (values.message.trim().length > 1200) {
    errors.message = "Please keep your message under 1200 characters.";
  }

  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const copyTimer = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    return () => {
      if (copyTimer.current) clearTimeout(copyTimer.current);
    };
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((previous) => ({ ...previous, [name]: value }));
    setSent(false);
    if (errors[name]) {
      setErrors((previous) => ({ ...previous, [name]: undefined }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstField = Object.keys(nextErrors)[0];
      const field = formRef.current?.elements?.namedItem(firstField);
      if (field && typeof field.focus === "function") field.focus();
      return;
    }

    const subject =
      values.subject.trim() || `Project enquiry from ${values.name.trim()}`;
    const body = [
      `Hi Nabeel,`,
      "",
      values.message.trim(),
      "",
      "—",
      values.name.trim(),
      values.email.trim(),
    ].join("\n");

    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
    } catch {
      setCopied(false);
      window.location.href = `mailto:${siteConfig.email}`;
      return;
    }

    if (copyTimer.current) clearTimeout(copyTimer.current);
    copyTimer.current = setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <SectionHeading
          eyebrow="Get In Touch"
          title={
            <>
              Have an idea? <span className="text-gradient">Let&apos;s talk</span>.
            </>
          }
          description="Whether you need a brand new website, a landing page or a fresh redesign — I'd love to hear about it."
        />

        <div className="contact__grid">
          <Reveal className="contact__info">
            <h3 className="contact__info-title">
              Let&apos;s build something great together.
            </h3>
            <p className="contact__info-text">
              Tell me a little about your project and what you want to achieve.
              I&apos;ll get back to you as soon as possible with the next steps.
            </p>

            <div className="contact__methods">
              <div className="contact-method">
                <span className="contact-method__icon">
                  <Mail width="20" height="20" />
                </span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="contact-method__main"
                  aria-label={`Email Nabeel at ${siteConfig.emailDisplay}`}
                >
                  <span className="contact-method__label">Email</span>
                  <span className="contact-method__value">
                    {siteConfig.emailDisplay}
                  </span>
                </a>
                <button
                  type="button"
                  className="contact-method__copy"
                  onClick={handleCopy}
                  aria-label={copied ? "Email address copied" : "Copy email address"}
                >
                  {copied ? <Check width="17" height="17" /> : <Copy width="17" height="17" />}
                  <span aria-hidden="true">{copied ? "Copied" : "Copy"}</span>
                </button>
                <span className="sr-only" role="status" aria-live="polite">
                  {copied ? "Email address copied to clipboard." : ""}
                </span>
              </div>

              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method"
                aria-label="Chat on WhatsApp"
              >
                <span className="contact-method__icon contact-method__icon--green">
                  <WhatsApp width="20" height="20" />
                </span>
                <span className="contact-method__main">
                  <span className="contact-method__label">WhatsApp</span>
                  <span className="contact-method__value">
                    {siteConfig.whatsappDisplay}
                  </span>
                </span>
                <ArrowUpRight width="17" height="17" className="contact-method__arrow" />
              </a>

              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method"
                aria-label="GitHub profile"
              >
                <span className="contact-method__icon">
                  <GitHub width="20" height="20" />
                </span>
                <span className="contact-method__main">
                  <span className="contact-method__label">GitHub</span>
                  <span className="contact-method__value">View my repositories</span>
                </span>
                <ArrowUpRight width="17" height="17" className="contact-method__arrow" />
              </a>

              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method"
                aria-label="LinkedIn profile (placeholder link)"
              >
                <span className="contact-method__icon contact-method__icon--blue">
                  <LinkedIn width="20" height="20" />
                </span>
                <span className="contact-method__main">
                  <span className="contact-method__label">LinkedIn</span>
                  <span className="contact-method__value">Connect with me</span>
                </span>
                <ArrowUpRight width="17" height="17" className="contact-method__arrow" />
              </a>
            </div>

            <div className="contact__availability">
              <span className="pulse-dot pulse-dot--green" aria-hidden="true" />
              <span>{siteConfig.availability}</span>
            </div>
          </Reveal>

          <Reveal delay={110} className="contact__form-wrap">
            <form
              className="contact-form"
              onSubmit={handleSubmit}
              noValidate
              ref={formRef}
            >
              <div className="contact-form__head">
                <h3>Send a message</h3>
                <p>Fill in the form and I&apos;ll get back to you.</p>
              </div>

              <div className="contact-form__row">
                <div className="field">
                  <label htmlFor="contact-name">
                    Name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    value={values.name}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "error-name" : undefined}
                    maxLength={80}
                  />
                  {errors.name ? (
                    <span className="field__error" id="error-name">
                      {errors.name}
                    </span>
                  ) : null}
                </div>

                <div className="field">
                  <label htmlFor="contact-email">
                    Email <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={values.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "error-email" : undefined}
                    maxLength={120}
                  />
                  {errors.email ? (
                    <span className="field__error" id="error-email">
                      {errors.email}
                    </span>
                  ) : null}
                </div>
              </div>

              <div className="field">
                <label htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="What is this about? (optional)"
                  value={values.subject}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? "error-subject" : undefined}
                  maxLength={120}
                />
                {errors.subject ? (
                  <span className="field__error" id="error-subject">
                    {errors.subject}
                  </span>
                ) : null}
              </div>

              <div className="field">
                <label htmlFor="contact-message">
                  Message <span aria-hidden="true">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={values.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "error-message message-count" : "message-count"
                  }
                  maxLength={1200}
                />
                <span className="field__hint" id="message-count">
                  {values.message.length}/1200 characters
                </span>
                {errors.message ? (
                  <span className="field__error" id="error-message">
                    {errors.message}
                  </span>
                ) : null}
              </div>

              <button type="submit" className="btn btn--primary btn--lg contact-form__submit">
                <span>Send Message</span>
                <Send width="18" height="18" />
              </button>

              <p className="contact-form__note">
                This form opens your email app with your message ready to send.
                No data is stored on this website.
              </p>

              <div
                className={`contact-form__success${sent ? " is-visible" : ""}`}
                role="status"
                aria-live="polite"
              >
                <span className="contact-form__success-icon" aria-hidden="true">
                  <Check width="16" height="16" />
                </span>
                <p>
                  Your email app is opening with your message. If it doesn&apos;t,
                  email me directly at{" "}
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.emailDisplay}</a>.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

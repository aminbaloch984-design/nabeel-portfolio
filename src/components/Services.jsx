import { services } from "@/data/site";
import { ArrowRight, ArrowUpRight, Icon } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <SectionHeading
          eyebrow="What I Do"
          title={
            <>
              Services built around{" "}
              <span className="text-gradient">your goals</span>.
            </>
          }
          description="From a single landing page to a full website, I bring the same care to every project: thoughtful design, clean code and a smooth experience."
        />

        <div className="services__grid">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={(index % 3) * 80}>
              <article className="service-card">
                <span className="service-card__number" aria-hidden="true">
                  0{index + 1}
                </span>
                <span className="service-card__icon">
                  <Icon name={service.icon} width="24" height="24" />
                </span>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__description">{service.description}</p>
                <a
                  href="#contact"
                  className="service-card__link"
                  aria-label={`Discuss ${service.title} with Nabeel`}
                >
                  Discuss this service
                  <ArrowUpRight width="15" height="15" />
                </a>
                <span className="service-card__glow" aria-hidden="true" />
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="services-cta">
            <div className="services-cta__glow" aria-hidden="true" />
            <div className="services-cta__copy">
              <span className="eyebrow">
                <span className="eyebrow__dot" aria-hidden="true" />
                Have an idea?
              </span>
              <h3>Let&apos;s turn it into something people love to use.</h3>
            </div>
            <a href="#contact" className="btn btn--primary btn--lg">
              <span>Start a Project</span>
              <ArrowRight width="19" height="19" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

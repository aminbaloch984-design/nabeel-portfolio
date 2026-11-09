import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}) {
  return (
    <Reveal className={`section-head section-head--${align}`}>
      <span className="eyebrow">
        <span className="eyebrow__dot" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className="section-head__title">{title}</h2>
      {description ? <p className="section-head__description">{description}</p> : null}
    </Reveal>
  );
}

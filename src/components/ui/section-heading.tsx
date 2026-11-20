import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  aside,
  center,
  dark,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  aside?: ReactNode;
  center?: boolean;
  dark?: boolean;
}) {
  const className = [
    "section-heading",
    center ? "section-heading--center" : "",
    dark ? "section-heading--dark" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className}>
      <div className="section-heading__content">
        {eyebrow ? (
          <div className="eyebrow">
            <span className="eyebrow-line" />
            {eyebrow}
          </div>
        ) : null}
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
      {aside ? <div className="section-heading__aside">{aside}</div> : null}
    </div>
  );
}
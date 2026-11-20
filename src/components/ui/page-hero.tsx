import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="page-hero__grid" aria-hidden="true" />
      <div className="container page-hero__inner">
        {eyebrow ? (
          <div className="eyebrow eyebrow--light">
            <span className="eyebrow-line" />
            {eyebrow}
          </div>
        ) : null}
        <h1>{title}</h1>
        <p>{description}</p>
        {children ? <div className="page-hero__actions">{children}</div> : null}
      </div>
    </section>
  );
}
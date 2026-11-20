import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "white" | "dark" | "text";

const variantClass: Record<Variant, string> = {
  primary: "action-link action-link--primary",
  outline: "action-link action-link--outline",
  white: "action-link action-link--white",
  dark: "action-link action-link--dark",
  text: "action-link action-link--text",
};

export function ActionLink({
  href,
  children,
  variant = "primary",
  external,
  showIcon = true,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  showIcon?: boolean;
}) {
  const className = variantClass[variant];
  const isExternal = external ?? (href.startsWith("mailto:") || href.startsWith("http"));

  if (isExternal) {
    return (
      <a className={className} href={href}>
        <span>{children}</span>
        {showIcon ? <ArrowUpRight size={17} /> : null}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      <span>{children}</span>
      {showIcon ? <ArrowUpRight size={17} /> : null}
    </Link>
  );
}
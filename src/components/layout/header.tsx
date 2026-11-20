"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { BrandMark } from "@/components/brand/brand-mark";
import { contactHref, navLinks, siteConfig } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link className="brand" href="/">
          <span className="brand-mark" aria-hidden>
            <BrandMark />
          </span>
          <span className="brand-copy">
            <strong>{siteConfig.name}</strong>
            <span>{siteConfig.tagline.toUpperCase()}</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary">
          {navLinks.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href.slice(0, -1));
            return (
              <Link
                key={item.href}
                className="nav-link"
                href={item.href}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="site-header__actions">
          <a className="header-cta" href={contactHref}>
            Contact <ArrowUpRight size={16} />
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-label="Toggle navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="mobile-nav" aria-label="Mobile primary">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <a href={contactHref} onClick={() => setOpen(false)}>
            Contact
          </a>
        </nav>
      ) : null}
    </header>
  );
}
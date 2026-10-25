
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const navLinks = [
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
] as const;

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  return (
    <header className="site-header sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur-xl">
      <div className="container-page flex h-[72px] items-center justify-between gap-5">
        <Link
          href="/#home"
          className="text-xl font-extrabold tracking-[-0.075em] text-foreground focus-ring"
          aria-label="MSAL, back to top"
          onClick={() => setIsOpen(false)}
        >
          MSAL<span className="text-accent">.</span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link focus-ring"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={profile.cvUrl}
            download="Moh_Syafiq_Ade_Luwindra_CV.pdf"
            className="button button-dark hidden sm:inline-flex"
          >
            Download CV
            <span aria-hidden="true">↘</span>
          </a>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-line text-xl text-foreground focus-ring md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((open) => !open)}
          >
            <span aria-hidden="true">
              {isOpen ? "×" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {isOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-line bg-white p-4 md:hidden"
        >
          <div className="container-page flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-foreground hover:bg-slate-100 focus-ring"
              >
                {link.label}
              </Link>
            ))}

            <a
              href={profile.cvUrl}
              download="Moh_Syafiq_Ade_Luwindra_CV.pdf"
              className="mt-2 rounded-lg bg-foreground px-3 py-3 text-center text-sm font-semibold text-white focus-ring sm:hidden"
              onClick={() => setIsOpen(false)}
            >
              Download CV
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

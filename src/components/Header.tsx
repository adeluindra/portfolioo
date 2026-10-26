
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const navLinks = [
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#certifications", label: "Certifications" },
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
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur-xl">
      <div className="container-page flex h-[72px] items-center justify-between gap-5">
        {/* LOGO */}
        <Link
          href="/#home"
          className="shrink-0 text-xl font-extrabold tracking-[-0.075em] text-foreground focus-ring"
          aria-label="MSAL, back to homepage"
          onClick={() => setIsOpen(false)}
        >
          MSAL<span className="text-accent">.</span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 lg:flex xl:gap-7"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link whitespace-nowrap focus-ring"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* HEADER ACTIONS */}
        <div className="flex shrink-0 items-center gap-3">
          <a
            href={profile.cvUrl}
            download="Moh_Syafiq_Ade_Luwindra_CV.pdf"
            className="button button-dark hidden xl:inline-flex"
          >
            Download CV
            <span aria-hidden="true">↘</span>
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-line text-xl text-foreground focus-ring lg:hidden"
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

      {/* MOBILE NAVIGATION */}
      {isOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-line bg-white shadow-lg lg:hidden"
        >
          <div className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-blue-50 hover:text-accent focus-ring"
              >
                {link.label}
              </Link>
            ))}

            <a
              href={profile.cvUrl}
              download="Moh_Syafiq_Ade_Luwindra_CV.pdf"
              onClick={() => setIsOpen(false)}
              className="mt-3 rounded-xl bg-foreground px-4 py-3 text-center text-sm font-semibold text-white focus-ring"
            >
              Download CV ↘
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

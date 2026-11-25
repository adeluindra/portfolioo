"use client";

import { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

type ScrollAnimationsProps = {
  /**
   * Also reveal the direct children of the first section's
   * container one by one (used by the case study pages).
   */
  heroStagger?: boolean;
};

const REVEAL_SELECTOR =
  "[data-reveal]:not([data-motion-card]), figure:not([data-motion-card]), dl > div";

const CLEAR_PROPS =
  "opacity,visibility,transform,transitionProperty";

/**
 * Wraps every word of a heading in a clipped span so words can
 * slide up one by one while preserving nested elements/styling.
 */
function splitWords(heading: HTMLElement) {
  const label = heading.textContent?.replace(/\s+/g, " ").trim() ?? "";

  if (!label) {
    return null;
  }

  const original = heading.innerHTML;
  const words: HTMLElement[] = [];
  const textNodes: Text[] = [];
  const walker = document.createTreeWalker(
    heading,
    NodeFilter.SHOW_TEXT,
  );

  while (walker.nextNode()) {
    textNodes.push(walker.currentNode as Text);
  }

  textNodes.forEach((node) => {
    const fragment = document.createDocumentFragment();

    (node.nodeValue ?? "").split(/(\s+)/).forEach((part) => {
      if (!part) {
        return;
      }

      if (/^\s+$/.test(part)) {
        fragment.appendChild(document.createTextNode(part));
        return;
      }

      const outer = document.createElement("span");
      outer.className = "split-word";
      outer.setAttribute("aria-hidden", "true");

      const inner = document.createElement("span");
      inner.className = "split-word-inner";
      inner.textContent = part;

      outer.appendChild(inner);
      fragment.appendChild(outer);
      words.push(inner);
    });

    node.replaceWith(fragment);
  });

  heading.setAttribute("aria-label", label);

  return {
    words,
    restore: () => {
      heading.innerHTML = original;
      heading.removeAttribute("aria-label");
    },
  };
}

function getTopLevelTargets(
  scope: HTMLElement,
  extraSelector?: string,
): HTMLElement[] {
  const found = new Set<HTMLElement>(
    scope.querySelectorAll<HTMLElement>(REVEAL_SELECTOR),
  );

  if (extraSelector) {
    scope
      .querySelectorAll<HTMLElement>(extraSelector)
      .forEach((element) => found.add(element));
  }

  return [...found].filter((element) => {
    if (element.closest("[data-motion-card]")) {
      return false;
    }

    let parent = element.parentElement;

    while (parent && parent !== scope) {
      if (found.has(parent)) {
        return false;
      }

      parent = parent.parentElement;
    }

    return true;
  });
}

export function ScrollAnimations({
  heroStagger = false,
}: ScrollAnimationsProps) {
  useIsomorphicLayoutEffect(() => {
    const main = document.querySelector<HTMLElement>("main");

    if (!main) {
      return;
    }

    const restores: Array<() => void> = [];

    const ctx = gsap.context(() => {
      const sections = Array.from(
        main.querySelectorAll<HTMLElement>(":scope > section"),
      );

      sections.forEach((section, sectionIndex) => {
        const isHero = sectionIndex === 0;

        /* 1. Headings inside this section: reveal word by word */
        const headings = section.querySelectorAll<HTMLElement>("h1, h2");

        headings.forEach((heading) => {
          const split = splitWords(heading);

          if (!split || split.words.length === 0) {
            return;
          }

          restores.push(split.restore);

          if (isHero) {
            gsap.fromTo(
              split.words,
              { yPercent: 115, opacity: 0 },
              {
                yPercent: 0,
                opacity: 1,
                duration: 0.85,
                ease: "power4.out",
                stagger: 0.09,
                delay: 0.1,
                clearProps: "transform,opacity",
              },
            );
          } else {
            gsap.set(split.words, { yPercent: 115, opacity: 0 });

            ScrollTrigger.create({
              trigger: heading,
              start: "top 84%",
              once: true,
              onEnter: () => {
                gsap.to(split.words, {
                  yPercent: 0,
                  opacity: 1,
                  duration: 0.8,
                  ease: "power4.out",
                  stagger: 0.075,
                  clearProps: "transform,opacity",
                });
              },
            });
          }
        });

        /* 2. Elements inside this section: enter one by one */
        const extraHeroSelector =
          isHero && heroStagger
            ? ":scope > .container-page > *:not(h1):not(h2)"
            : undefined;

        const targets = getTopLevelTargets(section, extraHeroSelector);

        if (targets.length === 0) {
          return;
        }

        if (isHero) {
          gsap.fromTo(
            targets,
            { autoAlpha: 0, y: 28, transitionProperty: "none" },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
              stagger: 0.08,
              delay: 0.05,
              clearProps: CLEAR_PROPS,
            },
          );
        } else {
          gsap.set(targets, {
            autoAlpha: 0,
            y: 36,
            transitionProperty: "none",
          });

          ScrollTrigger.batch(targets, {
            start: "top 86%",
            once: true,
            interval: 0.1,
            onEnter: (batch) => {
              const elements = batch as HTMLElement[];
              const passedAbove: HTMLElement[] = [];
              const visible: HTMLElement[] = [];

              elements.forEach((el) => {
                if (el.getBoundingClientRect().bottom < 0) {
                  passedAbove.push(el);
                } else {
                  visible.push(el);
                }
              });

              if (passedAbove.length > 0) {
                gsap.set(passedAbove, { clearProps: CLEAR_PROPS });
              }

              if (visible.length > 0) {
                const staggerStep =
                  visible.length > 4 ? 0.52 / visible.length : 0.14;

                gsap.to(visible, {
                  autoAlpha: 1,
                  y: 0,
                  duration: 0.75,
                  ease: "power3.out",
                  stagger: staggerStep,
                  overwrite: "auto",
                  clearProps: CLEAR_PROPS,
                });
              }
            },
          });
        }
      });
    }, main);

    // Keep ScrollTrigger positions accurate as lazy images finish loading.
    let rafId = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    const scheduleRefresh = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    };

    const resizeObserver = new ResizeObserver(scheduleRefresh);
    resizeObserver.observe(main);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      ctx.revert();
      restores.splice(0).forEach((restore) => restore());
    };
  }, [heroStagger]);

  return null;
}

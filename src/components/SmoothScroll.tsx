"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      anchors: {
        offset: -88,
      },
      stopInertiaOnNavigate: true,
      respectReducedMotion: false,
    });

    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const lenis = lenisRef.current;

    if (!lenis) {
      return;
    }

    if (!window.location.hash) {
      lenis.scrollTo(0, { immediate: true });
    }

    const rafId = requestAnimationFrame(() => {
      lenis.resize();
      ScrollTrigger.refresh();
    });

    return () => cancelAnimationFrame(rafId);
  }, [pathname]);

  return null;
}

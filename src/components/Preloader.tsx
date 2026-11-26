"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "motion/react";

import { profile } from "@/data/profile";

declare global {
  interface Window {
    __msalPreloaderDone?: boolean;
  }
}

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const durationMs = 1050;
    const startTime = performance.now();
    let rafId = 0;
    let revealTimer: ReturnType<typeof setTimeout> | undefined;
    let hideTimer: ReturnType<typeof setTimeout> | undefined;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / durationMs, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(eased * 100);

      if (t < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        revealTimer = setTimeout(() => {
          setExiting(true);
          document.body.style.overflow = "";
          window.__msalPreloaderDone = true;
          window.dispatchEvent(new CustomEvent("preloader:reveal"));

          hideTimer = setTimeout(() => {
            setVisible(false);
          }, 500);
        }, 140);
      }
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      if (revealTimer) {
        clearTimeout(revealTimer);
      }
      if (hideTimer) {
        clearTimeout(hideTimer);
      }
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <MotionConfig reducedMotion="never">
      <AnimatePresence>
        {visible && (
          <motion.div
            key="adeluindra-preloader"
            data-lenis-prevent
            aria-hidden="true"
            initial={{ opacity: 1 }}
            animate={{ opacity: exiting ? 0 : 1 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white bg-[radial-gradient(circle_at_center,#f1f5f9_0%,#ffffff_52%)] px-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{
                opacity: exiting ? 0 : 1,
                y: exiting ? -8 : 0,
              }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex flex-col items-center text-center"
            >
              <p className="text-3xl font-bold tracking-[-0.04em] text-[#0f172a] sm:text-4xl">
                {profile.displayName}
              </p>

              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                Portfolio Loading
              </p>

              <div className="mt-6 h-[1.5px] w-44 overflow-hidden bg-slate-200 sm:w-52">
                <div
                  className="h-full bg-[#0f172a]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
}

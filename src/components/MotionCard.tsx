"use client";

import type { ReactNode } from "react";
import { MotionConfig, motion } from "motion/react";

type MotionCardProps = {
  as?: "article" | "div" | "figure" | "li";
  index?: number;
  hoverY?: number;
  hoverScale?: number;
  className?: string;
  children: ReactNode;
};

const elements = {
  article: motion.article,
  div: motion.div,
  figure: motion.figure,
  li: motion.li,
} as const;

export function MotionCard({
  as = "article",
  index = 0,
  hoverY = -6,
  hoverScale = 1.012,
  className,
  children,
}: MotionCardProps) {
  const Component = elements[as];

  return (
    <MotionConfig reducedMotion="never">
      <Component
        data-motion-card=""
        initial={{ opacity: 0, y: 34, scale: 0.98 }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.6,
            delay: (index % 6) * 0.11,
            ease: [0.22, 1, 0.36, 1],
          },
        }}
        viewport={{ once: true, amount: 0.12, margin: "0px 0px -40px 0px" }}
        whileHover={{
          y: hoverY,
          scale: hoverScale,
          transition: {
            type: "spring",
            stiffness: 380,
            damping: 24,
          },
        }}
        transition={{
          type: "spring",
          stiffness: 380,
          damping: 28,
        }}
        className={className}
      >
        {children}
      </Component>
    </MotionConfig>
  );
}

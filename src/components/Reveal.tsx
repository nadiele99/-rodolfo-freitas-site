"use client";

import { m } from "motion/react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Distância do fade-up em px. */
  y?: number;
  as?: "div" | "li" | "header" | "figure";
};

/**
 * Fade-up discreto ao entrar na viewport (uma única vez).
 * Respeita prefers-reduced-motion via <MotionConfig reducedMotion="user">.
 */
export function Reveal({ children, className, delay = 0, y = 18, as = "div" }: Props) {
  const Tag = m[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}

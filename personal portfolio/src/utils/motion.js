// ─── Framer Motion Variants ───────────────────────────────────────────────────

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut", delay },
  }),
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export const slideLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export const hoverLift = {
  rest: { y: 0, boxShadow: "0 4px 24px rgba(0,0,0,0.4)" },
  hover: {
    y: -6,
    boxShadow: "0 12px 40px rgba(0,0,0,0.6), 0 0 30px rgba(124,58,237,0.15)",
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

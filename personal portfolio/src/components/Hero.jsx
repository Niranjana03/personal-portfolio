import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { HERO } from "../data/portfolio";
import { RESUME_DATA_URL } from "../data/resume";
import { useTypewriter, useParticleCanvas } from "../hooks";
import { fadeUp } from "../utils/motion";

export default function Hero() {
  const canvasRef = useRef(null);
  useParticleCanvas(canvasRef, 70);
  const typedRole = useTypewriter(HERO.roles, { speed: 80, deleteSpeed: 45, pause: 2200 });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      />

      {/* Ambient orbs */}
      <div
        className="orb w-[600px] h-[600px] top-[-15%] left-[-10%] opacity-[0.07]"
        style={{ background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="orb w-[500px] h-[500px] bottom-[-10%] right-[-8%] opacity-[0.05]"
        style={{ background: "radial-gradient(circle, #a855f7 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="orb w-[300px] h-[300px] top-[40%] right-[20%] opacity-[0.04]"
        style={{ background: "radial-gradient(circle, #ec4899 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Greeting */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="font-mono text-xs tracking-[0.2em] uppercase text-violet-400 mb-6"
        >
          {HERO.greeting}
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight mb-4 leading-none"
        >
          <span className="gradient-text">{HERO.name}</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="h-10 flex items-center justify-center mb-6"
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-subtle">
            {typedRole}
            <span
              className="inline-block w-0.5 h-6 ml-0.5 bg-violet-400 animate-[blink_1s_step-end_infinite] align-middle"
              aria-hidden="true"
            />
          </h2>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="text-base sm:text-lg text-muted max-w-lg mx-auto mb-10 leading-relaxed text-balance"
        >
          {HERO.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href={RESUME_DATA_URL} download="Niranjana_Resume.pdf" className="btn-primary">
            <Download size={15} />
            {HERO.cta.label}
          </a>
          <a
            href={HERO.ctaSecondary.href}
            onClick={(e) => { e.preventDefault(); document.querySelector(HERO.ctaSecondary.href)?.scrollIntoView({ behavior: "smooth" }); }}
            className="btn-secondary"
          >
            <Mail size={15} />
            {HERO.ctaSecondary.label}
          </a>
        </motion.div>


      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
      >
        <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}

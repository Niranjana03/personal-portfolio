import { motion } from "framer-motion";
import { ABOUT } from "../data/portfolio";
import { useInView } from "../hooks";
import { fadeUp, staggerContainer } from "../utils/motion";

function HighlightCard({ emoji, title, desc, delay }) {
  const [ref, inView] = useInView();
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={delay}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="glass-card rounded-xl p-5 transition-all duration-300 cursor-default group"
    >
      <div className="text-2xl mb-3">{emoji}</div>
      <h4 className="text-sm font-semibold text-bright mb-1 group-hover:text-violet-300 transition-colors">{title}</h4>
      <p className="text-xs text-muted leading-relaxed">{desc}</p>
    </motion.div>
  );
}

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <p className="section-label">About Me</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-bright mb-6">
            Building interfaces <br className="hidden sm:block" />
            <span className="gradient-text">people love to use</span>
          </h2>
          <p className="text-base text-subtle leading-relaxed max-w-2xl">
            {ABOUT.intro}
          </p>
        </motion.div>

        {/* Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {ABOUT.highlights.map((h, i) => (
            <HighlightCard key={h.title} {...h} delay={i * 0.08} />
          ))}
        </div>

        {/* Skill chips */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.4}
          className="flex flex-wrap gap-2"
        >
          <p className="w-full text-xs font-mono text-muted uppercase tracking-widest mb-2">
            — Core stack
          </p>
          {ABOUT.skills.map((s) => (
            <span key={s} className="tech-pill">{s}</span>
          ))}
        </motion.div>
      </div>

      {/* Subtle section divider orb */}
      <div
        className="orb w-64 h-64 top-0 right-0 opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle, #7c3aed, transparent)" }}
        aria-hidden="true"
      />
    </section>
  );
}

import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";
import { EXPERIENCE } from "../data/portfolio";
import { useInView } from "../hooks";
import { fadeUp, slideLeft } from "../utils/motion";

function ExperienceCard({ role, company, period, current, description, responsibilities, tech, index }) {
  const [ref, inView] = useInView(0.1);
  const delay = index * 0.15;

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={delay}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/40 via-violet-500/20 to-transparent" />

      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(124,58,237,0.6)] ring-2 ring-void" />

      <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:border-violet-500/25">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
          <div>
            <h3 className="text-base font-bold text-bright mb-0.5">{role}</h3>
            <div className="flex items-center gap-2">
              <Briefcase size={12} className="text-violet-400" />
              <span className="text-sm font-medium text-violet-300">{company}</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <Calendar size={11} className="text-muted" />
            <span className="font-mono text-xs text-muted">{period}</span>
            {current && (
              <span className="ml-2 px-2 py-0.5 rounded-full text-[0.65rem] font-mono font-medium bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
                Present
              </span>
            )}
          </div>
        </div>

        <p className="text-sm text-subtle mb-4 leading-relaxed">{description}</p>

        <ul className="space-y-2 mb-5">
          {responsibilities.map((r) => (
            <li key={r} className="flex items-start gap-2 text-xs text-muted leading-relaxed">
              <ChevronRight size={12} className="text-violet-500 mt-0.5 shrink-0" />
              {r}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5">
          {tech.map((t) => (
            <span key={t} className="tech-pill">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const [ref, inView] = useInView();

  return (
    <section id="experience" className="relative py-28 px-6 bg-[rgba(255,255,255,0.01)]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <p className="section-label">Work Experience</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-bright">
            Where I've <span className="gradient-text">grown</span>
          </h2>
        </motion.div>

        <div>
          {EXPERIENCE.map((exp, i) => (
            <ExperienceCard key={exp.company} {...exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

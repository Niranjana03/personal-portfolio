import { motion } from "framer-motion";
import { PROJECTS } from "../data/portfolio";
import { useInView } from "../hooks";
import { fadeUp } from "../utils/motion";

const ACCENT_MAP = {
  violet: {
    bg: "rgba(124,58,237,0.08)",
    border: "rgba(124,58,237,0.2)",
    glow: "rgba(124,58,237,0.12)",
    pill: "bg-violet-500/10 text-violet-300 border-violet-500/20",
  },
  fuchsia: {
    bg: "rgba(217,70,239,0.08)",
    border: "rgba(217,70,239,0.2)",
    glow: "rgba(217,70,239,0.12)",
    pill: "bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20",
  },
};

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView(0.1);
  const accent = ACCENT_MAP[project.color] ?? ACCENT_MAP.violet;

  return (
    <motion.article
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={index * 0.12}
      className="group relative glass-card rounded-2xl overflow-hidden transition-all duration-300"
    >
      {/* Project image */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient overlay so text below reads cleanly */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1a] via-[#0f0f1a]/40 to-transparent" />

        {/* Icon badge over image */}
        <div
          className="absolute bottom-3 left-4 w-10 h-10 rounded-xl flex items-center justify-center text-xl shadow-lg"
          style={{ background: accent.bg, border: `1px solid ${accent.border}`, backdropFilter: "blur(8px)" }}
        >
          {project.icon}
        </div>

        {/* Index badge */}
        <span className="absolute top-3 right-3 font-mono text-[0.6rem] text-white/40 tracking-widest bg-black/30 px-2 py-0.5 rounded-full backdrop-blur-sm">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Card body */}
      <div className="p-6">
        <h3 className="text-base font-bold text-bright mb-1 group-hover:text-violet-200 transition-colors leading-tight">
          {project.title}
        </h3>
        <p className="text-xs font-mono text-violet-400 mb-3">{project.subtitle}</p>
        <p className="text-sm text-subtle leading-relaxed mb-5">{project.description}</p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[0.7rem] font-mono font-medium border ${accent.pill}`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Hover glow overlay */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: `inset 0 0 40px ${accent.glow}` }}
        aria-hidden="true"
      />
    </motion.article>
  );
}

export default function Projects() {
  const [ref, inView] = useInView();

  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <p className="section-label">Featured Projects</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-bright">
            Things I've <span className="gradient-text">built</span>
          </h2>
          <p className="mt-4 text-sm text-subtle max-w-lg">
            A selection of projects spanning frontend engineering, machine learning, and business analytics.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

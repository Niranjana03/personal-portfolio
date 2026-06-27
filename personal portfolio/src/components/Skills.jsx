import { motion } from "framer-motion";
import { SKILLS } from "../data/portfolio";
import { useInView } from "../hooks";
import { fadeUp } from "../utils/motion";

const CATEGORIES = [...new Set(SKILLS.map((s) => s.category))];

const EMOJI_MAP = {
  React: "⚛️", JavaScript: "🟨", "HTML5 / CSS3": "🎨",
  Python: "🐍", Django: "🎯", SQL: "🗄️", "REST APIs": "🔗", "Git / GitHub": "🐙",
};

function SkillBar({ name, level, category, delay }) {
  const [ref, inView] = useInView(0.1);

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={delay}
      className="group"
    >
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <span className="text-base">{EMOJI_MAP[name] ?? "🔧"}</span>
          <span className="text-sm font-medium text-subtle group-hover:text-bright transition-colors">{name}</span>
        </div>
        <span className="font-mono text-[0.65rem] text-muted">{level}%</span>
      </div>
      <div className="h-1 rounded-full bg-white/[0.05] overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: delay + 0.2 }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView();

  return (
    <section id="skills" className="relative py-28 px-6 bg-[rgba(255,255,255,0.01)]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <p className="section-label">Technical Skills</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-bright">
            My <span className="gradient-text">toolkit</span>
          </h2>
          <p className="mt-4 text-sm text-subtle max-w-lg">
            Technologies I reach for daily — and the ones I'm actively deepening.
          </p>
        </motion.div>

        {/* Grouped by category */}
        <div className="grid md:grid-cols-2 gap-10">
          {CATEGORIES.map((cat) => (
            <div key={cat} className="glass-card rounded-xl p-6">
              <p className="text-[0.65rem] font-mono text-violet-400 uppercase tracking-widest mb-5">{cat}</p>
              <div className="space-y-5">
                {SKILLS.filter((s) => s.category === cat).map((skill, i) => (
                  <SkillBar key={skill.name} {...skill} delay={i * 0.07} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* All-skills icon row */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.5}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {SKILLS.map((s) => (
            <motion.div
              key={s.name}
              whileHover={{ scale: 1.08, y: -2 }}
              className="glass-card rounded-xl px-4 py-3 flex flex-col items-center gap-1.5 cursor-default transition-all duration-200 min-w-[72px]"
            >
              <span className="text-xl">{EMOJI_MAP[s.name] ?? "🔧"}</span>
              <span className="text-[0.65rem] font-mono text-muted">{s.name.split(" ")[0]}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

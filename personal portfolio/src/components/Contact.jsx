import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, GitBranch, Link, Globe, CheckCircle } from "lucide-react";
import { CONTACT } from "../data/portfolio";
import { useInView } from "../hooks";
import { fadeUp } from "../utils/motion";

const ICON_MAP = { linkedin: Link, github: GitBranch, globe: Globe };

export default function Contact() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Hey Niranjana — from ${form.name || "your portfolio"}`);
    const body = encodeURIComponent(form.message);
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden">
      <div
        className="orb w-[500px] h-[500px] bottom-0 left-1/2 -translate-x-1/2 opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #7c3aed, transparent)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <p className="section-label">Get In Touch</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-bright">
            {CONTACT.heading}
          </h2>
          <p className="mt-4 text-sm text-subtle max-w-md">{CONTACT.subheading}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.1}
            className="space-y-8"
          >
            <div className="glass-card rounded-xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                <Mail size={16} className="text-violet-400" />
              </div>
              <div>
                <p className="text-[0.65rem] font-mono text-muted uppercase tracking-widest mb-0.5">Email</p>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-sm font-medium text-subtle hover:text-violet-300 transition-colors"
                >
                  {CONTACT.email}
                </a>
              </div>
            </div>

            <div>
              <p className="text-[0.65rem] font-mono text-muted uppercase tracking-widest mb-4">Find me on</p>
              <div className="flex flex-col gap-3">
                {CONTACT.socials.map((s) => {
                  const Icon = ICON_MAP[s.icon] ?? Globe;
                  return (
                    <motion.a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 text-sm text-subtle hover:text-violet-300 transition-colors group"
                    >
                      <Icon size={15} className="text-violet-500 group-hover:text-violet-300 transition-colors" />
                      {s.label}
                      <span className="text-[0.65rem] font-mono text-muted/50 ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </div>


          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.2}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-xl p-7 space-y-5">
              <div>
                <label htmlFor="name" className="block text-[0.7rem] font-mono text-muted uppercase tracking-widest mb-2">
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  className="w-full bg-white/[0.03] border border-white/[0.07] rounded-lg px-4 py-3 text-sm text-subtle placeholder-muted/40 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[0.7rem] font-mono text-muted uppercase tracking-widest mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="I'd love to chat about..."
                  className="w-full bg-white/[0.03] border border-white/[0.07] rounded-lg px-4 py-3 text-sm text-subtle placeholder-muted/40 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all resize-none"
                />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">
                {sent ? (
                  <>
                    <CheckCircle size={15} className="text-emerald-300" />
                    Opening mail client…
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

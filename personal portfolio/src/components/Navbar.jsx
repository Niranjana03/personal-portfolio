import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import { NAV_LINKS } from "../data/portfolio";
import { RESUME_DATA_URL } from "../data/resume";
import { useScrollSpy } from "../hooks";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
  const active = useScrollSpy(sectionIds, 120);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNav = (href) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(10,10,15,0.85)] backdrop-blur-xl border-b border-white/[0.04] shadow-[0_1px_0_rgba(255,255,255,0.04)]"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNav("#hero"); }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-500 flex items-center justify-center shadow-glow-sm">
              <Code2 size={14} className="text-white" />
            </div>
            <span className="font-bold text-[0.95rem] tracking-tight text-bright">
              niranjana<span className="text-violet-400">.</span>
            </span>
          </motion.a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace("#", "");
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                    className={`nav-link ${active === id ? "active" : ""}`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a href={RESUME_DATA_URL} download="Niranjana_Resume.pdf" className="hidden md:inline-flex btn-primary text-xs py-2 px-4">
              Resume
            </a>
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-white/[0.08] text-subtle hover:text-bright hover:border-violet-500/40 transition-colors"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[rgba(10,10,15,0.97)] backdrop-blur-xl border-b border-white/[0.06] md:hidden"
          >
            <ul className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                    className="block py-3 text-sm font-medium text-subtle hover:text-bright transition-colors border-b border-white/[0.04] last:border-0"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <a href="/resume.pdf" className="btn-primary w-full justify-center text-sm">
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

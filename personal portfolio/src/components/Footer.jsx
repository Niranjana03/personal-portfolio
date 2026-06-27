import { Heart, Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-violet-600 to-fuchsia-500 flex items-center justify-center">
            <Code2 size={10} className="text-white" />
          </div>
          <span className="text-sm font-bold text-bright tracking-tight">
            niranjana<span className="text-violet-400">.</span>
          </span>
        </div>

        <p className="text-xs text-muted flex items-center gap-1.5">
          Built with
          <Heart size={11} className="text-violet-400 fill-violet-400" />
          using React &amp; Tailwind CSS · © 2026
        </p>

        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-muted font-mono">Available for hire</span>
        </div>
      </div>
    </footer>
  );
}

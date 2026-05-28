export default function Footer() {
  return (
    <footer className="border-t border-border py-6 px-[clamp(20px,6vw,100px)]
                       max-w-[1100px] mx-auto flex items-center justify-between flex-wrap gap-3">
      <p className="text-[11px] text-text-dim font-mono">
        designed &amp; built by <span className="text-green">Rishit Singh</span>
      </p>
      <p className="font-pixel text-[9px] text-text-dim">
        v1.0.0 · <span className="text-green">2026</span>
      </p>
    </footer>
  )
}

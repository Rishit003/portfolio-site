import { motion } from 'framer-motion'
import { personal } from '../data'

const links = ['skills', 'projects', 'timeline', 'contact']

export default function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-[1000] h-[52px] flex items-center justify-between
                 px-[clamp(20px,4vw,60px)] border-b border-border bg-bg/85 backdrop-blur-[12px]"
    >
      {/* logo */}
      <a href="#hero" className="font-pixel text-[10px] text-green tracking-[0.05em]">
        rs<span className="text-text-dim">@portfolio</span>{' '}
        <span className="text-green">~</span>
      </a>

      {/* links — hidden on mobile */}
      <div className="hidden sm:flex gap-7">
        {links.map(l => (
          <a
            key={l}
            href={`#${l}`}
            className="relative text-[12px] text-text-dim tracking-[0.08em] transition-colors hover:text-text
                       before:content-['>'] before:absolute before:-left-3 before:text-green
                       before:opacity-0 before:transition-opacity hover:before:opacity-100"
          >
            {l}
          </a>
        ))}
      </div>

      {/* status */}
      <div className="flex items-center gap-2 text-[11px] text-text-dim">
        <span className="w-[6px] h-[6px] rounded-full bg-green shadow-[0_0_8px_#00ff88] animate-pulse2" />
        <span className="hidden sm:inline">open to opportunities</span>
      </div>
    </motion.nav>
  )
}

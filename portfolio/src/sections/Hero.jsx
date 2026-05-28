import { motion } from 'framer-motion'
import { Github, Linkedin, Download } from 'lucide-react'
import { useTypewriter } from '../hooks/useTypewriter'
import { personal, typedPhrases } from '../data'
import { fadeUp, staggerContainer } from '../components/variants'

export default function Hero() {
  const typed = useTypewriter(typedPhrases)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center
                 pt-[52px] px-[clamp(20px,6vw,100px)] max-w-[1100px] mx-auto"
    >
      {/* Grid bg */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,255,136,0.03) 1px,transparent 1px),' +
            'linear-gradient(90deg,rgba(0,255,136,0.03) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <motion.div
        variants={staggerContainer(0.15, 0.1)}
        initial="hidden"
        animate="visible"
        className="relative z-10"
      >
        {/* comment */}
        <motion.p variants={fadeUp} className="font-pixel text-[9px] text-green tracking-[0.2em] mb-5">
          // hello, world
        </motion.p>

        {/* name */}
        <motion.h1
          variants={fadeUp}
          className="font-pixel text-[clamp(28px,5vw,56px)] leading-[1.15] text-text mb-4"
        >
          Rishit<br />
          <span className="text-green">Singh.</span>
        </motion.h1>

        {/* title */}
        <motion.p
          variants={fadeUp}
          className="font-chill text-[clamp(16px,2.5vw,22px)] text-amber tracking-[0.05em] mb-6"
        >
          {personal.title}
        </motion.p>

        {/* description */}
        <motion.p
          variants={fadeUp}
          className="max-w-[520px] text-text-mid text-[13px] leading-[1.8] mb-10 whitespace-pre-line"
        >
          {personal.description}
        </motion.p>

        {/* CTA buttons */}
        <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
          <HeroBtn href={personal.github} primary icon={<Github size={14} />}>GitHub</HeroBtn>
          <HeroBtn href={personal.linkedin} icon={<Linkedin size={14} />}>LinkedIn</HeroBtn>
          <HeroBtn href={personal.resume} icon={<Download size={14} />}>Resume</HeroBtn>
        </motion.div>
      </motion.div>

      {/* terminal prompt bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.4 }}
        className="absolute bottom-10 left-[clamp(20px,6vw,100px)] flex items-center gap-2 text-[12px] text-text-dim"
      >
        <span className="text-green">$</span>
        <span>{typed}</span>
        <span className="inline-block w-2 h-[14px] bg-green animate-blink align-middle" />
      </motion.div>
    </section>
  )
}

function HeroBtn({ href, children, icon, primary }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`
        relative inline-flex items-center gap-2 px-5 py-[10px]
        font-mono text-[12px] tracking-[0.08em] border overflow-hidden
        transition-colors duration-200 group
        ${primary
          ? 'border-green text-green'
          : 'border-border2 text-text-dim hover:text-green hover:border-green'}
      `}
    >
      <span
        className="absolute inset-0 bg-[#00c86644] scale-x-0 origin-left
                   transition-transform duration-200 group-hover:scale-x-100"
      />
      <span className="relative flex items-center gap-2">
        {icon}
        {children}
      </span>
    </motion.a>
  )
}

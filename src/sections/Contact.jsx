import { motion } from 'framer-motion'
import { Github, Linkedin, Download, Mail } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import { personal } from '../data'
import { fadeUp } from '../components/variants'

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-border py-[clamp(60px,8vw,120px)]
                 px-[clamp(20px,6vw,100px)] max-w-[1100px] mx-auto"
    >
      <SectionLabel>05 // contact</SectionLabel>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="relative border border-border bg-bg2 p-[clamp(30px,4vw,56px)] overflow-hidden"
      >
        {/* glow */}
        <div className="pointer-events-none absolute -top-16 -right-16 w-52 h-52 rounded-full
                        bg-[radial-gradient(circle,rgba(0,255,136,0.06),transparent_70%)]" />

        <h2 className="font-pixel text-[clamp(14px,2vw,20px)] text-text mb-3">
          let's build something.
        </h2>
        <p className="text-text-mid text-[13px] max-w-[480px] mb-8 leading-[1.7]">
          I'm actively looking for internship &amp; full-time roles in AI/ML and full-stack.
          If you're working on something interesting, I'd love to chat.
        </p>

        <a
          href={`mailto:${personal.email}`}
          className="inline-flex items-center gap-2 text-green text-[16px] mb-8
                     border-b border-[#00c86644] pb-[2px] transition-colors
                     hover:border-green"
        >
          <Mail size={16} />
          {personal.email}
        </a>

        <div className="flex flex-wrap gap-3">
          <SocialBtn href={personal.github} icon={<Github size={14} />}>github</SocialBtn>
          <SocialBtn href={personal.linkedin} icon={<Linkedin size={14} />}>linkedin</SocialBtn>
          <SocialBtn href={personal.resume} icon={<Download size={14} />}>resume</SocialBtn>
        </div>
      </motion.div>
    </section>
  )
}

function SocialBtn({ href, children, icon }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ color: '#00ff88', borderColor: '#00ff88' }}
      className="inline-flex items-center gap-[7px] px-4 py-[9px] text-[12px]
                 border border-border text-text-dim tracking-[0.06em] transition-colors duration-150"
    >
      {icon}
      {children}
    </motion.a>
  )
}

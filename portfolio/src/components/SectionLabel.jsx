import { motion } from 'framer-motion'

export default function SectionLabel({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="flex items-center gap-3 mb-10"
    >
      <span className="font-pixel text-[9px] text-green tracking-[0.2em] uppercase">
        {children}
      </span>
      <div className="flex-1 h-px bg-gradient-to-r from-border2 to-transparent" />
    </motion.div>
  )
}

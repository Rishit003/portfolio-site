import { motion } from 'framer-motion'
import SectionLabel from '../components/SectionLabel'
import { skillGroups } from '../data'
import { fadeUp, staggerContainer } from '../components/variants'

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-border py-[clamp(60px,8vw,120px)]
                 px-[clamp(20px,6vw,100px)] max-w-[1100px] mx-auto"
    >
      <SectionLabel>02 // skills</SectionLabel>

      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {skillGroups.map(group => (
          <motion.div
            key={group.title}
            variants={fadeUp}
            whileHover={{ borderColor: '#2a2a2a' }}
            className="border border-border bg-bg2 p-5 transition-colors duration-200"
          >
            <div className="font-pixel text-[9px] text-amber tracking-[0.15em] mb-4 flex items-center gap-2">
              <span className="text-border2">//</span>
              {group.title}
            </div>
            <div className="flex flex-wrap gap-2">
              {group.tags.map(tag => (
                <motion.span
                  key={tag}
                  whileHover={{ color: '#00ff88', borderColor: '#00c86644' }}
                  className="px-[10px] py-1 text-[11px] bg-bg3 border border-border
                             text-text-mid tracking-[0.05em] transition-colors duration-150"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

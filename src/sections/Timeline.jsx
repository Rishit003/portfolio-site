import { motion } from 'framer-motion'
import SectionLabel from '../components/SectionLabel'
import { timeline } from '../data'

const tagColors = {
  internship:  'text-green   border-green/30',
  society:     'text-amber   border-amber/30',
  achievement: 'text-blue-400 border-blue-400/30',
  education:   'text-text-mid border-border2',
  milestone:   'text-purple-400 border-purple-400/30',
}

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="border-t border-border py-[clamp(60px,8vw,120px)]
                 px-[clamp(20px,6vw,100px)] max-w-[1100px] mx-auto"
    >
      <SectionLabel>04 // timeline</SectionLabel>

      <div className="relative pl-7">
        {/* vertical line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-green to-transparent" />

        {timeline.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
            className="relative mb-9 last:mb-0"
          >
            {/* diamond dot */}
            <span
              className={`absolute -left-[29px] top-[5px] w-[10px] h-[10px] rotate-45 border
                          ${item.active
                            ? 'bg-green border-green shadow-[0_0_10px_#00ff88]'
                            : 'bg-bg border-green'}`}
            />

            {/* meta row */}
            <div className="flex items-center gap-3 flex-wrap mb-[6px]">
              <span className="font-pixel text-[9px] text-green">{item.date}</span>
              <span
                className={`text-[10px] px-[7px] py-[2px] border bg-bg3
                            ${tagColors[item.tag] ?? 'text-text-mid border-border2'}`}
              >
                {item.tag}
              </span>
            </div>

            <h3 className="text-[14px] text-text mb-[5px] font-normal">{item.title}</h3>
            <p className="text-[12px] text-text-mid leading-[1.7]">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

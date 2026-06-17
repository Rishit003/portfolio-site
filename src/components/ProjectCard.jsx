import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { fadeUp } from './variants'

export default function ProjectCard({ project }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4, borderColor: '#00ff88' }}
      transition={{ duration: 0.2 }}
      className="border border-border bg-bg2 overflow-hidden flex flex-col
                 transition-colors duration-200 group"
    >
      {/* image / placeholder */}
      {project.image ? (
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-[180px] object-cover block border-b border-border"
        />
      ) : (
        <div
          className="relative w-full h-[180px] bg-bg3 border-b border-border
                     flex items-center justify-center overflow-hidden"
        >
          {/* grid overlay */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0,255,136,0.04) 1px,transparent 1px),' +
                'linear-gradient(90deg,rgba(0,255,136,0.04) 1px,transparent 1px)',
              backgroundSize: '30px 30px',
            }}
          />
          <span className="relative font-pixel text-[9px] text-border2 tracking-[0.2em] z-10">
            SCREENSHOT.png
          </span>
        </div>
      )}

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-[10px]">
          {project.featured && (
            <span className="font-pixel text-[8px] bg-green text-bg px-[7px] py-[3px] tracking-[0.1em] shrink-0 self-start">
              featured
            </span>
          )}
          <p className="font-pixel text-[11px] text-text tracking-[0.05em] leading-[1.4] flex-1">
            {project.name}
          </p>
          <div className="flex gap-[10px] shrink-0">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-dim hover:text-green transition-colors duration-150"
            >
              <Github size={15} />
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-dim hover:text-green transition-colors duration-150"
            >
              <ExternalLink size={15} />
            </a>
          </div>
        </div>

        <p className="text-[12px] text-text-mid leading-[1.7] mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-[6px]">
          {project.stack.map(t => (
            <span
              key={t}
              className="text-[10px] px-2 py-[3px] bg-bg3 border border-border text-text-dim font-mono"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

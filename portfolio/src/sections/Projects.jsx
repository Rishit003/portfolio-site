import { motion } from 'framer-motion'
import SectionLabel from '../components/SectionLabel'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data'
import { staggerContainer } from '../components/variants'

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-border py-[clamp(60px,8vw,120px)]
                 px-[clamp(20px,6vw,100px)] max-w-[1100px] mx-auto"
    >
      <SectionLabel>03 // projects</SectionLabel>

      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-5"
      >
        {projects.map(p => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </motion.div>
    </section>
  )
}

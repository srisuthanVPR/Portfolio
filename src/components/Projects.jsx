import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data'

const filters = ['All', 'AI', 'Web', 'IoT']

const Projects = () => {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter((p) => p.type === active)

  return (
    <section id="projects" className="section-padding py-20">
      <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="badge">Projects</div>
          <h3 className="mt-4 font-display text-3xl font-bold">Work I’m proud of</h3>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            These projects highlight how I combine AI, IoT, and full-stack development to solve real problems.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                active === filter
                  ? 'border-brand-400 bg-brand-500 text-white'
                  : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-brand-300'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {filtered.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card flex flex-col justify-between"
          >
            <div>
              <h4 className="text-xl font-semibold">{project.title}</h4>
              <p className="mt-3 text-slate-600 dark:text-slate-300">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-full bg-white/70 dark:bg-white/10 px-3 py-1 text-xs font-semibold">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <button className="mt-6 btn-ghost self-start">View Project</button>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects

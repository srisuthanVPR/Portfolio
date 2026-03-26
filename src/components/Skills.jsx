import { motion } from 'framer-motion'
import { FiCode, FiGlobe, FiTool, FiDatabase } from 'react-icons/fi'
import { skills } from '../data'

const icons = {
  Languages: FiCode,
  Web: FiGlobe,
  Tools: FiTool,
  Databases: FiDatabase,
}

const Skills = () => {
  return (
    <section id="skills" className="section-padding py-20">
      <div className="mb-10">
        <div className="badge">Skills</div>
        <h3 className="mt-4 font-display text-3xl font-bold">My working stack</h3>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          A mix of languages, front-end tools, and the platforms I reach for every day.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {Object.entries(skills).map(([category, items], index) => {
          const Icon = icons[category]
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card"
            >
              <div className="flex items-center gap-3">
                {Icon && <Icon className="text-brand-400" />}
                <h4 className="text-xl font-semibold">{category}</h4>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span key={skill} className="rounded-full bg-white/70 dark:bg-white/10 px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default Skills

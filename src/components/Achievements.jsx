import { motion } from 'framer-motion'
import { achievements } from '../data'

const Achievements = () => {
  return (
    <section id="achievements" className="section-padding py-20">
      <div className="mb-10">
        <div className="badge">Achievements</div>
        <h3 className="mt-4 font-display text-3xl font-bold">Milestones so far</h3>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          A snapshot of the challenges I enjoy and the progress I’m proud of.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {achievements.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card"
          >
            <h4 className="text-lg font-semibold">{item.title}</h4>
            <p className="mt-3 text-slate-600 dark:text-slate-300">{item.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Achievements

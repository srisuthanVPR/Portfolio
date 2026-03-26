import { motion } from 'framer-motion'
import { education } from '../data'

const Education = () => {
  return (
    <section id="education" className="section-padding py-20">
      <div className="mb-10">
        <div className="badge">Education</div>
        <h3 className="mt-4 font-display text-3xl font-bold">Learning journey</h3>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {education.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="card"
          >
            <h4 className="text-lg font-semibold">{item.title}</h4>
            <p className="mt-2 text-slate-600 dark:text-slate-300">{item.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Education

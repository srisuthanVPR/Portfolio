import { motion } from 'framer-motion'
import { certifications } from '../data'

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding py-20">
      <div className="mb-10">
        <div className="badge">Certifications</div>
        <h3 className="mt-4 font-display text-3xl font-bold">Things I’ve earned</h3>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="card"
          >
            <h4 className="text-lg font-semibold">{item}</h4>
            <p className="mt-2 text-slate-500 dark:text-slate-400">Certification</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Certifications

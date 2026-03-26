import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="section-padding py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="card"
      >
        <div className="badge">About Me</div>
        <h3 className="mt-4 font-display text-3xl font-bold">Story-driven, not template-driven.</h3>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          I'm a B.Tech CSBS student at Sri Eshwar College who genuinely enjoys making AI feel useful in the real world.
          I care about smart systems that help people learn faster, solve community problems, and make tech feel less scary.
          These days I'm especially drawn to education tech, social impact projects, and building products that are simple to use but powered by solid engineering.
        </p>
      </motion.div>
    </section>
  )
}

export default About

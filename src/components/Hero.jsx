import { motion } from 'framer-motion'
import { FiArrowUpRight, FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi'
import TypingEffect from './TypingEffect'

const Hero = () => {
  return (
    <section id="home" className="pt-32 lg:pt-36">
      <div className="section-padding">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="badge">AI & Full Stack Developer</div>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm Suthan 
            </h1>
            <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-slate-700 dark:text-slate-200">
              I build AI-powered solutions and full-stack applications
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              I like turning messy real-world problems into clean, usable products. <TypingEffect words={["AI workflows", "smart systems", "human-first web apps"]} />
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a className="btn-primary" href="#projects">
                View Projects <FiArrowUpRight className="ml-2" />
              </a>
              <a className="btn-ghost" href="#">
                Download Resume <FiDownload className="ml-2" />
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-slate-600 dark:text-slate-300">
              <a href="https://github.com/srisuthanVPR" aria-label="GitHub" target="_blank" rel="noreferrer" className="hover:text-brand-400 transition">
                <FiGithub size={22} />
              </a>
              <a href="https://www.linkedin.com/in/srisuthan-v-p-r-38b6a7333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="hover:text-brand-400 transition">
                <FiLinkedin size={22} />
              </a>
              <span className="text-sm">Placeholders for now  links can go live anytime.</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative">
              <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-brand-500/30 blur-2xl" />
              <div className="absolute bottom-0 left-10 h-20 w-20 rounded-full bg-cyan-400/30 blur-2xl" />
              <div className="card relative overflow-hidden">
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="text-sm uppercase tracking-wider text-slate-500 dark:text-slate-400">Currently</p>
                    <p className="mt-2 text-xl font-semibold">Building AI solutions for education + social impact</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="rounded-2xl bg-white/70 dark:bg-white/10 p-4">
                      <p className="text-slate-500 dark:text-slate-400">Focus</p>
                      <p className="mt-2 font-semibold">AI + Web + IoT</p>
                    </div>
                    <div className="rounded-2xl bg-white/70 dark:bg-white/10 p-4">
                      <p className="text-slate-500 dark:text-slate-400">Mindset</p>
                      <p className="mt-2 font-semibold">Curious, hands-on, practical</p>
                    </div>
                    <div className="rounded-2xl bg-white/70 dark:bg-white/10 p-4">
                      <p className="text-slate-500 dark:text-slate-400">Location</p>
                      <p className="mt-2 font-semibold">Tamil Nadu, India</p>
                    </div>
                    <div className="rounded-2xl bg-white/70 dark:bg-white/10 p-4">
                      <p className="text-slate-500 dark:text-slate-400">Collaboration</p>
                      <p className="mt-2 font-semibold">Open to internships</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

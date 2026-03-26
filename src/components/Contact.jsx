import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone } from 'react-icons/fi'

const initialState = { name: '', email: '', message: '' }

const Contact = () => {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const validate = () => {
    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!form.email.trim()) nextErrors.email = 'Please enter your email.'
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Please enter a valid email.'
    }
    if (!form.message.trim()) nextErrors.message = 'Please share a short message.'
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!validate()) return

    setStatus('loading')
    try {
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (response.ok) {
        setStatus('success')
        setForm(initialState)
        setErrors({})
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section-padding py-20">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card"
        >
          <div className="badge">Contact</div>
          <h3 className="mt-4 font-display text-3xl font-bold">Let's build something meaningful.</h3>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            If you have a project, internship, or idea that needs an AI + full-stack push, I'd love to hear about it.
          </p>
          <div className="mt-6 flex flex-col gap-3 text-slate-600 dark:text-slate-300">
            <div className="flex items-center gap-3">
              <FiMail />
              <span>srisuthan.vpr2024csbs@sece.ac.in</span>
            </div>
            <div className="flex items-center gap-3">
              <FiPhone />
              <span>+91 9384400882</span>
            </div>
          </div>
          <p className="mt-6 text-xs text-slate-500 dark:text-slate-400">
            Note: Replace the Formspree link with your own form ID to enable email delivery.
          </p>
        </motion.div>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="card flex flex-col gap-4"
        >
          <div>
            <label className="text-sm font-semibold">Name</label>
            <input
              className="mt-2 w-full rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-white/5 px-4 py-3 outline-none"
              type="text"
              value={form.name}
              onChange={(event) => setForm({ ...form, name: event.target.value })}
            />
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
          </div>
          <div>
            <label className="text-sm font-semibold">Email</label>
            <input
              className="mt-2 w-full rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-white/5 px-4 py-3 outline-none"
              type="email"
              value={form.email}
              onChange={(event) => setForm({ ...form, email: event.target.value })}
            />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
          </div>
          <div>
            <label className="text-sm font-semibold">Message</label>
            <textarea
              className="mt-2 w-full rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-white/5 px-4 py-3 outline-none min-h-[140px]"
              value={form.message}
              onChange={(event) => setForm({ ...form, message: event.target.value })}
            />
            {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="btn-primary"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'success' && (
            <p className="text-sm text-emerald-500">Thanks! Your message has been sent.</p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-500">Something went wrong. Please try again.</p>
          )}
        </motion.form>
      </div>
    </section>
  )
}

export default Contact

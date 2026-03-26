import { useState } from 'react'
import { Link } from 'react-scroll'
import { FiMenu, FiX } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle'
import { navLinks } from '../data'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="section-padding">
        <nav className="mt-4 flex items-center justify-between rounded-3xl glass px-4 sm:px-6 py-3 shadow-soft">
          <div className="font-display text-lg font-bold text-slate-900 dark:text-white">
            Suthan.
          </div>
          <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-700 dark:text-slate-200">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.id}
                spy
                smooth
                offset={-90}
                duration={600}
                activeClass="text-brand-400"
                className="cursor-pointer hover:text-brand-400 transition"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
          </div>
          <button
            className="lg:hidden inline-flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 p-2"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </nav>
      </div>
      {open && (
        <div className="lg:hidden section-padding">
          <div className="mt-3 rounded-3xl glass p-6 shadow-soft">
            <div className="flex flex-col gap-4 text-sm font-semibold text-slate-700 dark:text-slate-200">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.id}
                  spy
                  smooth
                  offset={-90}
                  duration={600}
                  onClick={() => setOpen(false)}
                  activeClass="text-brand-400"
                  className="cursor-pointer hover:text-brand-400 transition"
                >
                  {link.label}
                </Link>
              ))}
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar

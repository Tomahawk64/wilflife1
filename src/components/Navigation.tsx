'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Story', href: '#about' },
  { label: 'Mentorship', href: '#mentorship' },
  { label: 'Expeditions', href: '#tours' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Active section detection
  useEffect(() => {
    const ids = navLinks.map(l => l.href.replace('#', ''))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ids.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 2.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 px-8 py-5 transition-all duration-700 ${
          scrolled ? 'nav-blur bg-warm-black/35' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-editorial text-ivory text-xl tracking-[0.15em] uppercase opacity-90 hover:opacity-100 transition-opacity duration-300"
          >
            Tarun
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = active === link.href.replace('#', '')
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative font-sans text-[10px] tracking-[0.22em] uppercase group transition-colors duration-300"
                  style={{ color: isActive ? 'var(--ivory)' : 'rgba(212,196,168,0.6)' }}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-1 left-0 h-px bg-evening-orange transition-all duration-500"
                    style={{ width: isActive ? '100%' : '0%' }}
                  />
                  <span className="absolute -bottom-1 left-0 h-px bg-sand/30 w-0 group-hover:w-full transition-all duration-500" />
                </a>
              )
            })}
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 font-sans text-[10px] tracking-[0.22em] uppercase text-warm-black bg-ivory px-5 py-2.5 hover:bg-sand hover:shadow-[0_0_20px_rgba(196,112,42,0.2)] transition-all duration-400"
          >
            Join Expedition
          </a>

          {/* Burger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 z-50 relative"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-px bg-ivory transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-px bg-ivory transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-px bg-ivory transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-warm-black/97 backdrop-blur-xl flex flex-col items-center justify-center gap-10"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 + 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="font-editorial text-4xl text-ivory tracking-wide hover:text-evening-orange transition-colors duration-300"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="mt-6 font-sans text-xs tracking-[0.2em] uppercase text-warm-black bg-ivory px-8 py-3"
            >
              Join Expedition
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

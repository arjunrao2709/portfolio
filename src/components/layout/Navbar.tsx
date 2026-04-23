'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Menu } from 'lucide-react'

const navLinks = [
  { label: 'Work', href: '#projects' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Experience', href: '#experience' },
  { label: 'Research', href: '#publications' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  function handleNavClick(href: string) {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-canvas/95 backdrop-blur-sm border-b border-border' : ''
        }`}
      >
        <div className="px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto h-16 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-serif text-base font-bold text-ink hover:text-accent transition-colors duration-200"
          >
            Arjun Rao
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm text-ink-2 hover:text-ink transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-ink-2 hover:text-ink transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-canvas flex flex-col justify-center px-8"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-6 text-ink-2 hover:text-ink transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
            <p className="font-serif text-sm font-bold text-ink mb-10">Arjun Rao</p>
            <nav className="flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
                  onClick={() => handleNavClick(link.href)}
                  className="font-serif text-4xl font-bold text-ink hover:text-accent transition-colors duration-200 text-left leading-tight"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

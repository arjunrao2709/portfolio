'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Menu } from 'lucide-react'

const navLinks = [
  { label: 'Work', href: '#projects' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Research', href: '#publications' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md border-b border-stone-200' : ''
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24 h-14 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm font-semibold text-accent-primary hover:text-stone-900 transition-colors duration-200"
          >
            AR
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-xs text-text-muted hover:text-stone-900 transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-text-muted hover:text-stone-900 transition-colors"
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col items-start justify-center px-8"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-6 text-text-muted hover:text-stone-900 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-2xl font-medium text-stone-900 hover:text-accent-primary transition-colors duration-200 text-left"
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

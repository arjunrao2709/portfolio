'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/types'

const cardConfig: Record<string, { bg: string; accentColor: string; textColor: string }> = {
  theklub: {
    bg: '#0B2D1E',
    accentColor: '#52B788',
    textColor: 'rgba(255,255,255,0.85)',
  },
  ula: {
    bg: '#0C1F3A',
    accentColor: '#60A5FA',
    textColor: 'rgba(255,255,255,0.85)',
  },
  stylepass: {
    bg: '#2A0F1C',
    accentColor: '#F4A0C0',
    textColor: 'rgba(255,255,255,0.85)',
  },
}

const fallback = { bg: '#111', accentColor: '#999', textColor: 'rgba(255,255,255,0.7)' }

export default function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const cfg = cardConfig[project.id] ?? fallback

  return (
    <Link href={`/work/${project.id}`} className="group block">
      <motion.div
        whileHover={{ y: featured ? -3 : -4 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className={`relative overflow-hidden ${featured ? 'aspect-[16/8]' : 'aspect-[4/3]'}`}
        style={{ backgroundColor: cfg.bg }}
      >
        {/* Background title texture */}
        <div
          className="absolute inset-0 flex items-center justify-end pr-6 opacity-[0.05] select-none pointer-events-none overflow-hidden"
          aria-hidden
        >
          <span
            className="font-serif font-black text-white"
            style={{ fontSize: featured ? '10rem' : '7rem', lineHeight: 1, whiteSpace: 'nowrap' }}
          >
            {project.title}
          </span>
        </div>

        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ backgroundColor: cfg.accentColor }} />

        {/* WIP badge */}
        {project.wip && (
          <div className="absolute top-4 right-4 z-10">
            <span className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full border border-white/20 text-white/50">
              In progress
            </span>
          </div>
        )}

        {/* Card content */}
        <div className="absolute inset-0 p-7 md:p-8 flex flex-col justify-between">
          {/* Top row */}
          <div className="flex items-center justify-between">
            <span
              className="text-[10px] font-semibold tracking-widest uppercase"
              style={{ color: cfg.accentColor }}
            >
              {project.tags[0]}
            </span>
            <ArrowUpRight
              className="w-4 h-4 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              style={{ color: cfg.accentColor, opacity: 0.6 }}
            />
          </div>

          {/* Bottom content */}
          <div>
            <h3
              className={`font-serif font-bold text-white leading-tight mb-2 transition-colors duration-300 ${
                featured ? 'text-4xl md:text-5xl' : 'text-2xl md:text-3xl'
              }`}
            >
              {project.title}
            </h3>
            <p className="text-xs mb-3" style={{ color: cfg.textColor, opacity: 0.5 }}>
              {project.role} · {project.year}
            </p>
            <p
              className={`text-sm leading-relaxed max-w-md transition-all duration-300 ${
                featured ? 'opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0' : 'hidden md:block opacity-0 group-hover:opacity-100'
              }`}
              style={{ color: cfg.textColor }}
            >
              {project.tagline}
            </p>
          </div>
        </div>

        {/* Hover shimmer */}
        <div className="absolute inset-0 bg-white/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.div>
    </Link>
  )
}

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/types'

const cardConfig: Record<string, { bg: string; accentColor: string }> = {
  theklub:   { bg: '#0B2D1E', accentColor: '#52B788' },
  ula:       { bg: '#0C1F3A', accentColor: '#60A5FA' },
  stylepass: { bg: '#2A0F1C', accentColor: '#F4A0C0' },
}
const fallback = { bg: '#111', accentColor: '#888' }

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
        {/* Background title texture — decorative */}
        {!project.image && (
          <div
            className="absolute inset-0 flex items-center justify-end pr-6 opacity-[0.04] select-none pointer-events-none overflow-hidden"
            aria-hidden="true"
          >
            <span
              className="font-serif font-black text-white"
              style={{ fontSize: featured ? '10rem' : '7rem', lineHeight: 1, whiteSpace: 'nowrap' }}
            >
              {project.title}
            </span>
          </div>
        )}

        {/* Full-bleed background image */}
        {project.image && (
          <>
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top pointer-events-none select-none"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Bottom gradient so text stays readable */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.75) 35%, rgba(0,0,0,0.2) 65%, rgba(0,0,0,0.05) 100%)' }}
            />
          </>
        )}

        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ backgroundColor: cfg.accentColor }} />

        {/* WIP badge */}
        {project.wip && (
          <div className="absolute top-4 right-4 z-10">
            <span className="text-xs font-medium tracking-wide px-2.5 py-1 rounded-full border border-white/40 text-white/80 bg-black/20">
              In progress
            </span>
          </div>
        )}

        {/* Card content */}
        <div className="absolute inset-0 p-7 md:p-8 flex flex-col justify-between">
          {/* Top row */}
          <div className="flex items-center justify-between">
            <span
              className="text-xs font-semibold tracking-widest uppercase px-2.5 py-1 rounded-sm"
              style={{
                color: cfg.accentColor,
                backgroundColor: 'rgba(0,0,0,0.45)',
                backdropFilter: 'blur(6px)',
              }}
            >
              {project.tags[0]}
            </span>
            <ArrowUpRight
              className="w-4 h-4 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              style={{ color: cfg.accentColor, opacity: 0.7 }}
            />
          </div>

          {/* Bottom content */}
          <div>
            <h3
              className={`font-serif font-bold text-white leading-tight mb-2 ${
                featured ? 'text-4xl md:text-5xl' : 'text-2xl md:text-3xl'
              }`}
            >
              {project.title}
            </h3>
            <p className="text-sm text-white/80 mb-3">
              {project.role} · {project.year}
            </p>
            <p
              className={`text-sm text-white/90 leading-relaxed max-w-lg ${
                featured ? '' : 'hidden md:block'
              }`}
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

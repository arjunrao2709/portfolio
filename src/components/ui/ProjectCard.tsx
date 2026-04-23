'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import type { Project } from '@/types'
import { cn } from '@/lib/cn'

interface ProjectCardProps {
  project: Project
  featured?: boolean
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ backgroundColor: '#141414' }}
      transition={{ duration: 0.2 }}
      className={cn(
        'group relative bg-bg-dark border border-white/8 p-8 md:p-10 flex flex-col h-full',
        featured ? 'min-h-[400px]' : 'min-h-[280px]'
      )}
    >
      {/* Yellow top accent line */}
      <div className="w-8 h-[2px] bg-accent-primary mb-8" />

      {/* Role + Year */}
      <div className="flex items-center gap-3 mb-5">
        <span className="font-body text-xs font-semibold uppercase tracking-widest text-accent-primary">
          {project.role}
        </span>
        <span className="font-body text-xs text-text-muted">{project.year}</span>
      </div>

      {/* Title */}
      <h3
        className={cn(
          'font-display font-bold text-white mb-3 leading-tight',
          featured ? 'text-4xl md:text-5xl' : 'text-2xl md:text-3xl'
        )}
      >
        {project.title}
      </h3>

      {/* Tagline */}
      <p className="font-body text-text-muted mb-5 text-base leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-body text-xs text-text-muted uppercase tracking-wider border border-white/10 px-2 py-0.5"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* CTA */}
      <Link
        href={`/work/${project.id}`}
        className="inline-flex items-center gap-2 font-body font-semibold text-xs uppercase tracking-widest text-white group-hover:text-accent-primary transition-colors duration-200"
      >
        <span>View Case Study</span>
        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
      </Link>
    </motion.div>
  )
}

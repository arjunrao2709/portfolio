'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import Badge from './Badge'
import type { Project } from '@/types'
import { cn } from '@/lib/cn'

interface ProjectCardProps {
  project: Project
  featured?: boolean
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'group relative bg-bg-card rounded-2xl overflow-hidden border border-white/5 cursor-pointer',
        featured ? 'h-full min-h-[420px]' : 'min-h-[320px]'
      )}
      style={{ borderTopColor: project.accent, borderTopWidth: '3px' }}
    >
      {/* Background gradient on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
        style={{ background: `radial-gradient(circle at 30% 50%, ${project.accent}, transparent 70%)` }}
      />

      <div className={cn('relative z-10 p-8 flex flex-col h-full', featured ? 'p-10' : 'p-8')}>
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <Badge key={tag} label={tag} variant="default" />
          ))}
        </div>

        {/* Role + Year */}
        <div className="flex items-center gap-3 mb-4">
          <span
            className="font-body text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
            style={{ color: project.accent, backgroundColor: `${project.accent}20`, border: `1px solid ${project.accent}40` }}
          >
            {project.role}
          </span>
          <span className="font-body text-xs text-text-muted">{project.year}</span>
        </div>

        {/* Title */}
        <h3
          className={cn(
            'font-display font-bold text-text-primary group-hover:text-white transition-colors mb-3',
            featured ? 'text-4xl md:text-5xl' : 'text-2xl md:text-3xl'
          )}
        >
          {project.title}
        </h3>

        {/* Tagline */}
        <p className="font-body text-accent-bright font-medium mb-4 text-lg">
          {project.tagline}
        </p>

        {/* Description */}
        <p className="font-body text-text-muted leading-relaxed flex-1">
          {project.description}
        </p>

        {/* CTA */}
        <Link
          href={`/work/${project.id}`}
          className="mt-8 inline-flex items-center gap-2 font-body font-semibold text-sm uppercase tracking-widest"
          style={{ color: project.accent }}
        >
          <span>View Case Study</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        </Link>
      </div>
    </motion.div>
  )
}

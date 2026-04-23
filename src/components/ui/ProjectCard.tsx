'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { Project } from '@/types'
import { cn } from '@/lib/cn'

const projectColors: Record<string, string> = {
  stylepass: 'bg-stone-100',
  theklub:   'bg-stone-800',
  ula:       'bg-stone-200',
}

interface ProjectCardProps {
  project: Project
  featured?: boolean
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const bg = projectColors[project.id] ?? 'bg-stone-100'

  return (
    <Link href={`/work/${project.id}`} className="group block">
      {/* Thumbnail */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
        className={cn(
          'w-full rounded-sm overflow-hidden mb-4',
          bg,
          featured ? 'aspect-[4/3]' : 'aspect-[4/3]'
        )}
      >
        <div className="w-full h-full flex items-end p-5">
          <span className="text-xs font-medium opacity-30 uppercase tracking-widest">
            {project.title}
          </span>
        </div>
      </motion.div>

      {/* Meta */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-sm font-semibold text-stone-900 mb-0.5 group-hover:text-accent-primary transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-xs text-text-muted">{project.role} · {project.year}</p>
        </div>
        <div className="flex flex-wrap gap-1.5 justify-end">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs text-text-muted">{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  )
}

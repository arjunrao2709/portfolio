'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
  featured?: boolean
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ backgroundColor: '#111111' }}
      transition={{ duration: 0.15 }}
      className="group bg-bg-dark"
    >
      <Link href={`/work/${project.id}`} className="block px-6 md:px-10 py-8 md:py-10">
        <div className="flex items-start justify-between gap-8">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs text-accent-primary font-medium">{project.role}</span>
              <span className="text-xs text-text-muted">{project.year}</span>
            </div>

            <h3 className={`font-semibold text-white mb-2 leading-snug ${featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
              {project.title}
            </h3>

            <p className="text-sm text-text-muted leading-relaxed max-w-xl mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs text-text-muted/60 border border-white/[0.07] px-2 py-0.5">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0 mt-1" />
        </div>
      </Link>
    </motion.div>
  )
}

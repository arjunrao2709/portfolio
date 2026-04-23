'use client'

import { motion } from 'framer-motion'
import { itemVariants } from '@/components/motion/StaggerContainer'
import type { PhilosophyItem } from '@/types'

interface PhilosophyCardProps {
  item: PhilosophyItem
}

export default function PhilosophyCard({ item }: PhilosophyCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      className="group border-b border-white/10 py-10 last:border-b-0"
    >
      <div className="flex gap-8 items-start">
        <span className="font-display font-bold text-4xl text-accent-primary shrink-0 leading-none mt-1">
          {item.number}
        </span>
        <div className="space-y-3">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-text-primary group-hover:text-accent-bright transition-colors duration-300">
            {item.headline}
          </h3>
          <p className="font-body text-text-muted leading-relaxed text-lg">
            {item.body}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

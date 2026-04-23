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
      className="group border-b border-white/8 py-10 last:border-b-0"
    >
      <div className="flex gap-8 items-start">
        <span className="font-body text-xs font-semibold text-accent-primary shrink-0 mt-1.5 tracking-widest">
          {item.number}
        </span>
        <div className="space-y-3">
          <h3 className="font-display font-bold text-xl md:text-2xl text-white group-hover:text-accent-primary transition-colors duration-200">
            {item.headline}
          </h3>
          <p className="font-body text-text-muted leading-relaxed">
            {item.body}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

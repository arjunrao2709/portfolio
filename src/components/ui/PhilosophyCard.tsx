'use client'

import { motion } from 'framer-motion'
import { itemVariants } from '@/components/motion/StaggerContainer'
import type { PhilosophyItem } from '@/types'

export default function PhilosophyCard({ item }: { item: PhilosophyItem }) {
  return (
    <motion.div variants={itemVariants} className="border-b border-stone-200 py-7 last:border-b-0">
      <div className="flex gap-6">
        <span className="text-xs text-accent-primary font-medium mt-0.5 shrink-0 tabular-nums">{item.number}</span>
        <div>
          <h3 className="text-sm font-semibold text-stone-900 mb-1.5">{item.headline}</h3>
          <p className="text-xs text-text-muted leading-relaxed">{item.body}</p>
        </div>
      </div>
    </motion.div>
  )
}

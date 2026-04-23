'use client'

import { motion } from 'framer-motion'
import { itemVariants } from '@/components/motion/StaggerContainer'
import type { PhilosophyItem } from '@/types'

export default function PhilosophyCard({ item }: { item: PhilosophyItem }) {
  return (
    <motion.div
      variants={itemVariants}
      className="border-b border-white/[0.06] py-8 last:border-b-0"
    >
      <div className="flex gap-6">
        <span className="text-xs text-accent-primary font-medium mt-1 shrink-0 tabular-nums">
          {item.number}
        </span>
        <div>
          <h3 className="text-base font-medium text-white mb-2">{item.headline}</h3>
          <p className="text-sm text-text-muted leading-relaxed">{item.body}</p>
        </div>
      </div>
    </motion.div>
  )
}

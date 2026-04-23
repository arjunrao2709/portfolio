'use client'

import { motion } from 'framer-motion'
import { itemVariants } from '@/components/motion/StaggerContainer'

export default function BrandLogo({ name }: { name: string }) {
  return (
    <motion.span
      variants={itemVariants}
      className="text-sm font-medium text-black/30 hover:text-black/70 transition-colors duration-200 cursor-default whitespace-nowrap"
    >
      {name}
    </motion.span>
  )
}

'use client'

import { motion } from 'framer-motion'
import { itemVariants } from '@/components/motion/StaggerContainer'

interface BrandLogoProps {
  name: string
}

export default function BrandLogo({ name }: BrandLogoProps) {
  return (
    <motion.div
      variants={itemVariants}
      className="flex items-center justify-center px-8 py-4"
    >
      <span className="font-display font-bold text-xl md:text-2xl text-black/25 hover:text-black transition-colors duration-300 cursor-default whitespace-nowrap">
        {name}
      </span>
    </motion.div>
  )
}

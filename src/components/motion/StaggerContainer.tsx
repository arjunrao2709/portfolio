'use client'

import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
}

interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
  stagger?: number
}

export default function StaggerContainer({ children, className, stagger = 0.1 }: StaggerContainerProps) {
  const variants = {
    ...containerVariants,
    visible: {
      transition: { staggerChildren: stagger },
    },
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

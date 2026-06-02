'use client'

import { useScroll, motion } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-px bg-evening-orange z-[100] origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  )
}

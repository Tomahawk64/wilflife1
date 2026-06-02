'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setLoading(false), 400)
          return 100
        }
        return prev + Math.random() * 18
      })
    }, 80)

    return () => clearInterval(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] bg-[#FAF7F2] flex flex-col items-center justify-center"
        >
          {/* Logo */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-editorial font-light text-charcoal text-4xl mb-16 tracking-widest"
          >
            Tarun
          </motion.p>

          {/* Progress bar */}
          <div className="w-48 h-px bg-[#C8B89A]/30 relative">
            <motion.div
              className="absolute top-0 left-0 h-full bg-evening-orange"
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#8B7A5E]/50 mt-6"
          >
            Entering the Wild
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

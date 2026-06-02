'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Image from 'next/image'

interface ParallaxDividerProps {
  image: string
  alt: string
  quote?: string
  quoteAuthor?: string
  height?: string
}

export default function ParallaxDivider({
  image,
  alt,
  quote,
  quoteAuthor,
  height = 'h-[55vh]',
}: ParallaxDividerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-18%', '18%'])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.04, 1.1])
  const inView = useInView(ref, { once: true, margin: '-15%' })

  return (
    <div ref={ref} className={`relative ${height} overflow-hidden`}>
      {/* Parallax bg image */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src={image} alt={alt} fill
          className="object-cover object-center"
          sizes="100vw"
          loading="lazy"
        />
      </motion.div>

      {/* Deep overlay */}
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, rgba(26,26,24,0.50) 0%, rgba(26,26,24,0.25) 45%, rgba(26,26,24,0.50) 100%)' }} />

      {/* Fog */}
      <div className="fog-3 absolute inset-0 pointer-events-none opacity-50" />

      {/* Orange warmth */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 70%, rgba(196,112,42,0.09) 0%, transparent 65%)' }} />

      {/* Quote content */}
      {quote && (
        <div className="absolute inset-0 flex flex-col items-center justify-center px-8 md:px-24 text-center">
          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-8 h-px bg-evening-orange/50 mb-10 origin-center"
          />
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-editorial font-light italic text-ivory/90 leading-relaxed max-w-3xl"
            style={{ fontSize: 'clamp(1.3rem, 2.8vw, 2.2rem)' }}
          >
            &ldquo;{quote}&rdquo;
          </motion.p>
          {quoteAuthor && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="font-sans text-[10px] tracking-[0.3em] uppercase text-sand/40 mt-8"
            >
              — {quoteAuthor}
            </motion.p>
          )}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-8 h-px bg-evening-orange/50 mt-10 origin-center"
          />
        </div>
      )}
    </div>
  )
}

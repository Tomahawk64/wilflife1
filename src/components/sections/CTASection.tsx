'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-5%' })

  return (
    <section ref={sectionRef} className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/media/african-savannah-landscape-at-sunrise-with-solitary-elephant-wildlife-animal-photo.webp"
          alt="Wildlife expedition background"
          fill
          className="object-cover object-center scale-105"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(160deg, rgba(26,26,24,0.78) 0%, rgba(26,26,24,0.50) 50%, rgba(26,26,24,0.78) 100%)' }} />
      </div>

      {/* Fog layers for depth */}
      <div className="fog-1 absolute inset-0 pointer-events-none opacity-40" />
      <div className="fog-2 absolute inset-0 pointer-events-none opacity-25" />

      {/* Warm radial glow left */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 55% 70% at 20% 55%, rgba(196,112,42,0.14) 0%, transparent 65%)' }} />

      {/* Warm radial glow right */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 40% 50% at 80% 40%, rgba(45,74,45,0.10) 0%, transparent 60%)' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-16 text-center py-32">
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.6em' }}
          animate={inView ? { opacity: 1, letterSpacing: '0.32em' } : {}}
          transition={{ duration: 1.3 }}
          className="font-sans text-[10px] tracking-[0.32em] uppercase text-evening-orange mb-10"
        >
          The Expedition Awaits
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 55 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-editorial font-light text-ivory leading-tight mb-8"
          style={{ fontSize: 'clamp(3rem, 8vw, 8rem)' }}
        >
          Ready to Enter<br />
          <em className="text-sand/75">the Wild?</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.55 }}
          className="font-sans font-light text-sand/65 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-16"
        >
          Whether you are beginning your wildlife photography journey or seeking to elevate your craft 
          on an international expedition — Tarun walks with you every step.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, delay: 0.85 }}
          className="flex flex-col sm:flex-row justify-center gap-5 flex-wrap"
        >
          <a href="#contact"
            className="font-sans text-xs tracking-[0.22em] uppercase text-warm-black bg-ivory px-10 py-4 hover:bg-sand hover:shadow-[0_0_40px_rgba(212,196,168,0.15)] transition-all duration-500">
            Join The Expedition
          </a>
          <a href="#mentorship"
            className="font-sans text-xs tracking-[0.22em] uppercase text-ivory/80 hover:text-ivory px-10 py-4 hover:bg-white/10 transition-all duration-500">
            Learn Wildlife Photography
          </a>
          <a href="#tours"
          className="font-sans text-xs tracking-[0.22em] uppercase text-ivory hover:text-ivory transition-all duration-500 self-center opacity-70 hover:opacity-100">
            Explore Tours →
          </a>
        </motion.div>
      </div>

      {/* Corner accent lines */}
      <div className="absolute top-12 left-12 w-10 h-px bg-evening-orange/20" />
      <div className="absolute top-12 left-12 w-px h-10 bg-evening-orange/20" />
      <div className="absolute bottom-12 right-12 w-10 h-px bg-evening-orange/20" />
      <div className="absolute bottom-12 right-12 w-px h-10 bg-evening-orange/20" />
    </section>
  )
}

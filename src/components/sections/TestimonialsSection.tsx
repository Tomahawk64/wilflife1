'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Marcus R.',
    location: 'Seattle, WA',
    tour: 'Bandhavgarh Tiger Expedition',
    quote: "Tarun doesn't just show you tigers. He shows you how to see. I came back with images I didn't think I was capable of — but more than that, I came back transformed.",
  },
  {
    name: 'Sarah L.',
    location: 'Austin, TX',
    tour: 'Maasai Mara Big Cat Expedition',
    quote: 'Every hour in the field with Tarun felt like a masterclass. The way he reads animal behavior, anticipates moments, and guides your eye is extraordinary. Life-changing does not cover it.',
  },
  {
    name: 'David K.',
    location: 'New York, NY',
    tour: 'Online Mentorship Program',
    quote: "I've done workshops with several photographers worldwide. Tarun's depth of knowledge and his ability to communicate it clearly is in a class of its own. My photography aged ten years in three months.",
  },
  {
    name: 'Priya M.',
    location: 'San Francisco, CA',
    tour: 'Ranthambore Tiger Reserve',
    quote: 'The experience was cinematic. Every morning drive felt like entering a living documentary. Tarun made us feel every heartbeat of the forest.',
  },
  {
    name: 'James T.',
    location: 'Denver, CO',
    tour: 'Serengeti & Ngorongoro Expedition',
    quote: 'What separates Tarun from other expedition leaders is his reverence for the wild. It is contagious. You begin to care about every creature, every shadow, every silence.',
  },
]

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-10%' })
  const [active, setActive] = useState(0)

  // Auto-advance
  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % testimonials.length), 6000)
    return () => clearInterval(t)
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-warm-black py-32 md:py-52 overflow-hidden">
      {/* Ambient bg */}
      <div className="absolute inset-0 pointer-events-none">
        <Image src="/media/giant-male-elephant-at-sunse.webp" alt="" fill
          className="object-cover object-center opacity-[0.04]" sizes="100vw" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-warm-black via-transparent to-warm-black" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-16 text-center">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 1 }}
          className="font-sans text-[10px] tracking-[0.35em] uppercase text-evening-orange mb-6"
        >
          Student Stories
        </motion.p>

        {/* Large decorative quote mark */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-editorial text-[120px] md:text-[160px] text-evening-orange/10 leading-none select-none -mb-4"
        >&ldquo;</motion.div>

        {/* Quote */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12"
          >
            <p className="font-editorial font-light text-ivory/90 leading-relaxed mb-10"
              style={{ fontSize: 'clamp(1.3rem, 2.8vw, 2.1rem)' }}>
              {testimonials[active].quote}
            </p>
            <div className="flex flex-col items-center gap-2">
              <div className="w-6 h-px bg-evening-orange/40 mb-3" />
              <p className="font-sans text-xs text-ivory/80 tracking-[0.18em] uppercase">
                {testimonials[active].name}
              </p>
              <p className="font-sans text-[10px] text-sand/40 tracking-[0.15em]">
                {testimonials[active].location} &nbsp;·&nbsp; {testimonials[active].tour}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dot nav */}
        <div className="flex justify-center gap-5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Testimonial ${i + 1}`}
              className={`block transition-all duration-500 ${
                i === active ? 'w-8 h-px bg-evening-orange' : 'w-3 h-px bg-sand/25 hover:bg-sand/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

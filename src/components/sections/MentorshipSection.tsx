'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const offerings = [
  {
    icon: '◎',
    title: 'One-on-One Field Mentorship',
    description:
      'Work directly with Tarun in the field. Learn to read animal behavior, master light, and develop your unique photographic voice.',
  },
  {
    icon: '◈',
    title: 'Wildlife Photography Workshops',
    description:
      'Intensive group workshops inside tiger reserves and wildlife sanctuaries. Technical mastery meets artistic vision.',
  },
  {
    icon: '◇',
    title: 'Online Mentorship Program',
    description:
      'A structured online course with live critiques, field assignments, and direct feedback from Tarun wherever you are.',
  },
  {
    icon: '◐',
    title: 'Expedition-Based Learning',
    description:
      'Join a guided expedition and learn while exploring. Real situations, real wildlife, real growth.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function MentorshipSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-10%' })

  return (
    <section id="mentorship" ref={sectionRef} className="relative py-32 md:py-52 overflow-hidden">
      {/* section-blend-top for seamless merge */}
      <div className="section-blend-top absolute top-0 left-0 right-0 pointer-events-none" />

      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="/media/clumsy-nature-photographer-dont-find-the-kingfisher-on-the-lens.webp"
          alt="Wildlife photography mentorship"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-warm-black/82" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(26,26,24,0.97) 0%, rgba(26,26,24,0.65) 55%, rgba(26,26,24,0.88) 100%)',
          }}
        />
      </div>

      {/* Fog layers for atmosphere */}
      <div className="fog-1 absolute inset-0 pointer-events-none opacity-35" />
      <div className="fog-3 absolute inset-0 pointer-events-none opacity-20" />

      {/* Evening warm glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 60% at 15% 40%, rgba(196,112,42,0.10) 0%, transparent 65%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
        {/* Header */}
        <div className="max-w-2xl mb-20 md:mb-28">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="font-sans text-[10px] tracking-[0.35em] uppercase text-evening-orange mb-5"
          >
            Wildlife Mentorship
          </motion.p>
          <motion.h2
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="font-editorial font-light text-ivory leading-tight mb-8"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
          >
            Learn to See What Others Miss
          </motion.h2>
          <motion.div custom={2} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            <div className="w-12 h-px bg-evening-orange/60 mb-8" />
            <p className="font-sans font-light text-sand/70 text-base md:text-lg leading-relaxed">
              Wildlife photography is not about the gear. It is about presence, patience, and the 
              ability to anticipate life unfolding. Tarun&apos;s mentorship programs are designed to 
              rewire how you see — and how you create.
            </p>
          </motion.div>
        </div>

        {/* Offerings grid */}
        <div className="grid md:grid-cols-2 gap-px bg-sand/10">
          {offerings.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i + 3}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="bg-warm-black/60 p-10 md:p-12 group hover:bg-warm-black/80 transition-colors duration-500"
            >
              <span className="text-2xl text-evening-orange/70 group-hover:text-evening-orange transition-colors duration-500 block mb-6">
                {item.icon}
              </span>
              <h3 className="font-editorial text-ivory text-2xl md:text-3xl mb-4 leading-snug">
                {item.title}
              </h3>
              <p className="font-sans font-light text-sand/60 text-sm leading-relaxed">
                {item.description}
              </p>
              <div className="mt-8 w-0 group-hover:w-8 h-px bg-evening-orange transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          custom={7}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-20 flex justify-center"
        >
          <a
            href="#contact"
            className="font-sans text-xs tracking-[0.2em] uppercase text-warm-black bg-ivory px-10 py-4 hover:bg-sand transition-colors duration-500"
          >
            Begin Your Mentorship Journey
          </a>
        </motion.div>
      </div>

      {/* section-blend-bottom */}
      <div className="section-blend-bottom absolute bottom-0 left-0 right-0 pointer-events-none" />
    </section>
  )
}

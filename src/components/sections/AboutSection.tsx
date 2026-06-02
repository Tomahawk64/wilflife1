'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

interface AboutSectionProps {
  data?: {
    heading?: string
    bio?: string
    stats?: { value: string; label: string }[]
  }
}

const defaultStats = [
  { value: '15', suffix: '+', label: 'Years in the Field' },
  { value: '40', suffix: '+', label: 'Tiger Reserves' },
  { value: '500', suffix: '+', label: 'Students Mentored' },
  { value: '12', suffix: '', label: 'Countries Explored' },
]

function AnimatedNumber({ target, suffix, trigger }: { target: number; suffix: string; trigger: boolean }) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!trigger) return
    let start = 0
    const step = Math.ceil(target / 50)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setVal(target); clearInterval(timer) }
      else setVal(start)
    }, 28)
    return () => clearInterval(timer)
  }, [trigger, target])
  return <>{val}{suffix}</>
}

const fadeUp = {
  hidden: { opacity: 0, y: 55 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 1.3, delay: i * 0.14, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function AboutSection({ data }: AboutSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-12%' })

  return (
    <section id="about" ref={sectionRef} className="relative bg-[#FAF7F2] overflow-hidden py-32 md:py-48">
      {/* Subtle warm ambient texture */}
      <div className="absolute inset-0 pointer-events-none">
        <Image src="/media/giant-male-elephant-at-sunse.webp" alt="" fill
          className="object-cover object-center opacity-[0.04]" sizes="100vw" aria-hidden="true" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 60% at 60% 50%, rgba(196,112,42,0.05) 0%, transparent 70%)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">

        {/* Section label */}
        <motion.p
          custom={0} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="font-sans text-[10px] tracking-[0.35em] uppercase text-evening-orange mb-20 md:mb-28"
        >
          About Tarun
        </motion.p>

        <div className="grid md:grid-cols-12 gap-16 md:gap-0 items-start">

          {/* Portrait — spans 5 cols */}
          <motion.div
            custom={1} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
            className="md:col-span-5 relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/media/wildlife-photographer-2489469.webp"
                alt="Tarun — Wildlife Photographer"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 42vw"
              />
              {/* Very soft warm overlay — no harsh border */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2]/40 via-transparent to-transparent" />
            </div>

            {/* Floating vertical caption */}
            <div className="absolute -right-4 md:-right-8 bottom-24 flex flex-col items-end gap-2">
              <div className="w-8 h-px bg-evening-orange/40" />
              <p className="font-editorial italic text-[#6B5E4A]/35 text-xs tracking-widest"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                Through the Lens
              </p>
            </div>
          </motion.div>

          {/* Text — spans 6 cols, offset right */}
          <div className="md:col-span-6 md:col-start-7 flex flex-col gap-12 md:pt-16">
            <motion.div custom={2} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
              <h2 className="font-editorial font-light text-charcoal leading-tight mb-8"
                style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5rem)' }}>
                {data?.heading ?? <>The Eye<br />Behind<br /><em>the Frame</em></>}
              </h2>
              <div className="w-10 h-px bg-evening-orange/50 mb-8" />
              <p className="font-sans font-light text-[#6B5E4A] leading-relaxed text-base md:text-lg">
                {data?.bio ??
                  `For over fifteen years, Tarun has walked the borderless world between wilderness and art. 
                  A self-taught wildlife photographer who found his calling at dusk in a tiger reserve — 
                  he has since transformed that singular obsession into a life's work spanning four continents, 
                  hundreds of expeditions, and thousands of frames that stop time itself.`}
              </p>
              <p className="font-sans font-light text-[#6B5E4A]/70 leading-relaxed text-base mt-5">
                His philosophy is simple: <em className="text-[#6B5E4A]/90 font-normal">patience is the lens</em>. Every frame 
                is the result of hours of stillness, deep ecological understanding, and an unshakeable belief 
                that the wild has stories worth telling.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              custom={3} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              className="grid grid-cols-2 gap-x-10 gap-y-10"
            >
              {defaultStats.map((stat) => (
                <div key={stat.label} className="stat-line">
                  <p className="font-editorial text-charcoal mb-2"
                    style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)' }}>
                    <AnimatedNumber target={parseInt(stat.value)} suffix={stat.suffix} trigger={inView} />
                  </p>
                  <p className="font-sans text-[10px] text-[#6B5E4A]/55 tracking-[0.18em] uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Quote pull — no hard border, soft left warm accent */}
            <motion.blockquote
              custom={4} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              className="pl-6 mt-4 relative"
            >
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-evening-orange/35 to-transparent" />
              <p className="font-editorial italic text-[#6B5E4A]/75 leading-relaxed"
                style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)' }}>
                &ldquo;The wild does not reward the impatient. It rewards those who learn to disappear into it.&rdquo;
              </p>
            </motion.blockquote>
          </div>
        </div>
      </div>

      {/* Soft warm ambient glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(196,112,42,0.025) 0%, transparent 70%)' }} />
    </section>
  )
}

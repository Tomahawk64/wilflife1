'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const roles = ['Wildlife Photographer', 'Mentor', 'Expedition Leader', 'Wildlife Storyteller']

function useParticleCanvas(canvasRef: React.RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    let animId: number
    let W = window.innerWidth
    let H = window.innerHeight
    const resize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight }
    resize()
    window.addEventListener('resize', resize, { passive: true })
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.4 + 0.2,
      dx: (Math.random() - 0.5) * 0.16,
      dy: -Math.random() * 0.22 - 0.04,
      o: Math.random() * 0.3 + 0.05,
      life: Math.random() * Math.PI * 2,
    }))
    const tick = () => {
      ctx.clearRect(0, 0, W, H)
      for (const p of particles) {
        p.x += p.dx; p.y += p.dy; p.life += 0.004
        const pulse = Math.sin(p.life) * 0.12 + 0.88
        if (p.y < -4) { p.y = H + 4; p.x = Math.random() * W }
        if (p.x < -4) p.x = W + 4
        if (p.x > W + 4) p.x = -4
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(212,196,168,${(p.o * pulse).toFixed(2)})`
        ctx.fill()
      }
      animId = requestAnimationFrame(tick)
    }
    tick()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [canvasRef])
}

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  const [audioOn, setAudioOn] = useState(false)
  const [roleIdx, setRoleIdx] = useState(0)

  useParticleCanvas(canvasRef)

  useEffect(() => {
    const t = setInterval(() => setRoleIdx((i) => (i + 1) % roles.length), 3200)
    return () => clearInterval(t)
  }, [])

  useEffect(() => { videoRef.current?.play().catch(() => {}) }, [])

  useEffect(() => {
    const video = videoRef.current
    const container = containerRef.current
    if (!video || !container) return
    gsap.to(video, {
      yPercent: 20, ease: 'none',
      scrollTrigger: { trigger: container, start: 'top top', end: 'bottom top', scrub: true },
    })
    gsap.to(video, { xPercent: 1.5, yPercent: -1, duration: 16, ease: 'sine.inOut', repeat: -1, yoyo: true })
  }, [])

  const toggleAudio = useCallback(() => {
    const a = audioRef.current
    if (!a) return
    if (audioOn) { a.pause() } else { a.volume = 0.15; a.play().catch(() => {}) }
    setAudioOn(v => !v)
  }, [audioOn])

  return (
    <section ref={containerRef} id="hero" className="relative w-full h-screen overflow-hidden">
      <audio ref={audioRef} loop preload="none" src="/media/forest-ambience.mp3" aria-hidden="true" />

      {/* Video */}
      <video ref={videoRef} className="absolute inset-0 w-full h-full object-cover scale-110"
        src="/media/vid1.mp4" muted loop playsInline preload="auto" aria-hidden="true" />

      {/* Base overlay */}
      <div className="hero-overlay absolute inset-0" />

      {/* Forest-green side vignette */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 75% 90% at 0% 55%, rgba(45,74,45,0.2) 0%, transparent 65%)' }} />

      {/* Center vignette */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(26,26,24,0.7) 100%)' }} />

      {/* Fog */}
      <div className="fog-1 absolute inset-0 pointer-events-none" />
      <div className="fog-2 absolute inset-0 pointer-events-none" />
      <div className="fog-3 absolute inset-0 pointer-events-none" />

      {/* Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ mixBlendMode: 'screen', opacity: 0.55 }} aria-hidden="true" />

      {/* Light rays */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute h-full w-px top-0" style={{ left: '23%', background: 'linear-gradient(to bottom, transparent 0%, rgba(212,196,168,0.6) 45%, transparent 100%)' }} />
        <div className="absolute h-full w-px top-0" style={{ left: '68%', background: 'linear-gradient(to bottom, transparent 5%, rgba(196,112,42,0.35) 55%, transparent 100%)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.6em' }}
          animate={{ opacity: 1, letterSpacing: '0.32em' }}
          transition={{ duration: 2, delay: 0.6, ease: 'easeOut' }}
          className="font-sans text-[10px] text-sand/65 tracking-[0.32em] uppercase mb-10"
        >
          Wildlife Photography · Mentorship · Expeditions
        </motion.p>

        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: 130, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-editorial font-light text-ivory leading-none text-glow"
            style={{ fontSize: 'clamp(4.5rem, 13vw, 11rem)', letterSpacing: '-0.03em' }}
          >
            Tarun
          </motion.h1>
        </div>

        {/* Cycling role */}
        <div className="relative mb-12 h-6 overflow-hidden" style={{ width: 'clamp(180px, 55vw, 480px)' }}>
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIdx}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex items-center justify-center font-sans text-[11px] text-sand/70 tracking-[0.28em] uppercase"
            >
              {roles[roleIdx]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 2.4, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <a href="#about"
            className="font-sans text-xs tracking-[0.22em] uppercase text-warm-black bg-ivory px-9 py-4 hover:bg-sand transition-all duration-500">
            Explore the Journey
          </a>
          <a href="#gallery"
            className="font-sans text-xs tracking-[0.22em] uppercase text-ivory/80 border border-ivory/20 px-9 py-4 hover:border-evening-orange/60 hover:text-ivory transition-all duration-500">
            View Gallery
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 3.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10 scroll-cue"
      >
        <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-sand/40">Scroll</span>
        <div className="w-px h-14 bg-gradient-to-b from-sand/50 to-transparent" />
      </motion.div>

      {/* Audio toggle */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.5 }}
        onClick={toggleAudio}
        aria-label={audioOn ? 'Mute ambient sound' : 'Play ambient forest sound'}
        className="absolute bottom-10 right-8 z-20 flex items-center gap-2.5 group"
      >
        <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-sand/40 group-hover:text-sand/70 transition-colors duration-300">
          {audioOn ? 'Sound On' : 'Ambient'}
        </span>
        <div className="relative w-5 h-5 flex items-center justify-center">
          {audioOn && <div className="audio-ripple absolute inset-0 rounded-full border border-evening-orange/40" />}
          <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${audioOn ? 'bg-evening-orange' : 'bg-sand/40'}`} />
        </div>
      </motion.button>

      {/* Bottom seamless fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(26,26,24,1) 100%)' }} />
    </section>
  )
}

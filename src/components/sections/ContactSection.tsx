'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-10%' })
  const [formData, setFormData] = useState({ name: '', email: '', interest: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, connect to API route or form service
    setSubmitted(true)
  }

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 40 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  })

  return (
    <section id="contact" ref={sectionRef} className="relative bg-warm-black py-32 md:py-52 overflow-hidden">
      {/* Vertical accent lines */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-sand/8 to-transparent pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-20 md:gap-32">
        {/* Left — info */}
        <div>
          <motion.p {...fadeUp(0)} className="font-sans text-xs tracking-[0.3em] uppercase text-evening-orange mb-5">
            Get in Touch
          </motion.p>
          <motion.h2
            {...fadeUp(0.1)}
            className="font-editorial font-light text-ivory leading-tight mb-10"
            style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}
          >
            Let&apos;s Walk Into<br />the Wild Together
          </motion.h2>

          <motion.div {...fadeUp(0.2)} className="space-y-6 text-sand/60 font-sans text-sm leading-relaxed">
            <p>
              Whether you are enquiring about an upcoming expedition, seeking one-on-one mentorship, 
              or simply wanting to connect — reach out and Tarun will respond personally.
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.35)} className="mt-12 space-y-5">
            <div>
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-sand/30 mb-1">Email</p>
              <a href="mailto:tarun@wildlens.com" className="font-sans text-sm text-sand/70 hover:text-ivory transition-colors">
                tarun@wildlens.com
              </a>
            </div>
            <div>
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-sand/30 mb-1">WhatsApp</p>
              <a href="https://wa.me/919999999999" className="font-sans text-sm text-sand/70 hover:text-ivory transition-colors">
                +91 99999 99999
              </a>
            </div>
            <div>
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-sand/30 mb-2">Follow the Journey</p>
              <div className="flex gap-6">
                {['Instagram', 'YouTube', 'Facebook'].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="font-sans text-xs tracking-[0.15em] uppercase text-sand/40 hover:text-ivory transition-colors duration-300"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right — form */}
        <motion.div {...fadeUp(0.25)}>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-start gap-6 py-20"
            >
              <div className="w-12 h-px bg-evening-orange" />
              <h3 className="font-editorial text-ivory text-3xl">
                Message Received
              </h3>
              <p className="font-sans text-sand/60 text-sm leading-relaxed">
                Tarun will reach out to you personally within 24-48 hours. The journey is about to begin.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name */}
              <div className="space-y-2">
                <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-sand/40">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-b border-sand/20 py-3 font-sans text-sm text-ivory placeholder-sand/30 focus:border-sand/50 focus:outline-none transition-colors duration-300"
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-sand/40">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border-b border-sand/20 py-3 font-sans text-sm text-ivory placeholder-sand/30 focus:border-sand/50 focus:outline-none transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>

              {/* Interest */}
              <div className="space-y-2">
                <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-sand/40">
                  I&apos;m interested in
                </label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full bg-warm-black border-b border-sand/20 py-3 font-sans text-sm text-sand/70 focus:border-sand/50 focus:outline-none transition-colors duration-300 cursor-pointer"
                >
                  <option value="">Select an interest</option>
                  <option value="domestic">Domestic Expeditions</option>
                  <option value="international">International Expeditions</option>
                  <option value="mentorship">Wildlife Photography Mentorship</option>
                  <option value="workshop">Photography Workshop</option>
                  <option value="other">Something Else</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-sand/40">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-b border-sand/20 py-3 font-sans text-sm text-ivory placeholder-sand/30 focus:border-sand/50 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your experience level and what you are looking for..."
                />
              </div>

              <button
                type="submit"
                className="font-sans text-xs tracking-[0.2em] uppercase text-warm-black bg-ivory px-10 py-4 hover:bg-sand transition-colors duration-500 w-full"
              >
                Send Message
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

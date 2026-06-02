'use client'

import { useRef, useState, useCallback, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const galleryImages = [
  { src: '/media/Power-and-Presence-by-Amish-Chhagan-The-Nature-Photography-Contest-2025-Wildlife-Finalist.webp', alt: 'Power and Presence — Wildlife', category: 'wildlife', span: 'large' },
  { src: '/media/majestic-cheetah-standing-proudly-in-the-african-savannah-at-dusk-captivating-wildlifegraphy-displaying-the-beauty-and-grace-of-nature-wild-animal-portrait-in-the-african-wilderness-photo.webp', alt: 'Cheetah at Dusk — Savannah', category: 'wildlife', span: 'small' },
  { src: '/media/elephant-and-kilimanjaro.webp', alt: 'Elephant & Kilimanjaro', category: 'landscape', span: 'small' },
  { src: '/media/african-savannah-landscape-at-sunrise-with-solitary-elephant-wildlife-animal-photo.webp', alt: 'Savannah Sunrise — Elephant', category: 'landscape', span: 'large' },
  { src: '/media/Unique-Wildlife-Synchrony-by-Thomas-Vijayan-The-Nature-Photography-Contest-2025-Night-World-Finalist.webp', alt: 'Wildlife Synchrony — Night World', category: 'wildlife', span: 'small' },
  { src: '/media/Shes-Mine-Back-Off-by-Jill-Hill-The-Nature-Photography-Contest-2025-Wildlife-Finalist.webp', alt: "She's Mine — Wildlife Finalist", category: 'wildlife', span: 'small' },
  { src: '/media/alert-giraffes-at-a-waterhole-in-southern-africa.webp', alt: 'Alert Giraffes — Waterhole', category: 'wildlife', span: 'large' },
  { src: '/media/herd-of-reticulated-giraffes-in-front-of-mount-kenya.webp', alt: 'Giraffes & Mount Kenya', category: 'landscape', span: 'small' },
  { src: '/media/kenya-reticulated-giraffes-in-buffalo-springs-national-reserve.webp', alt: 'Giraffes — Buffalo Springs', category: 'wildlife', span: 'small' },
  { src: '/media/elephant-and-lion.webp', alt: 'Elephant & Lion', category: 'wildlife', span: 'small' },
  { src: '/media/wildlife-in-etosha-national-park-namibia-africa.webp', alt: 'Etosha — Namibia', category: 'landscape', span: 'small' },
  { src: '/media/giant-male-elephant-at-sunse.webp', alt: 'Giant Male Elephant at Sunset', category: 'wildlife', span: 'large' },
  { src: '/media/a-spy-camera-capturing-zebra.webp', alt: 'Spy Camera — Zebra', category: 'expedition', span: 'small' },
  { src: '/media/farm-keeper-feeding-a-kangaroo.webp', alt: 'Kangaroo — Australia', category: 'wildlife', span: 'small' },
  { src: '/media/agouti-nature-wildlife-costa-rica-tropical-forest-animal-habitat-green-jungle-big-wild-mouse-vegetation-mammal-wildlif-399077660.webp', alt: 'Agouti — Costa Rica', category: 'wildlife', span: 'small' },
  { src: '/media/carousel_wildlife_conservation_nic_stoltzfus_500x275.webp', alt: 'Wildlife Conservation', category: 'expedition', span: 'small' },
]

const categories = ['all', 'wildlife', 'landscape', 'expedition']

export default function GallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-10%' })
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)

  const filtered = activeCategory === 'all' ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  const closeLightbox = useCallback(() => setLightboxIdx(null), [])
  const prevImage = useCallback(() => setLightboxIdx((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null)), [filtered.length])
  const nextImage = useCallback(() => setLightboxIdx((i) => (i !== null ? (i + 1) % filtered.length : null)), [filtered.length])

  useEffect(() => {
    if (lightboxIdx === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prevImage()
      if (e.key === 'ArrowRight') nextImage()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxIdx, closeLightbox, prevImage, nextImage])

  return (
    <section id="gallery" ref={sectionRef} className="relative bg-warm-black py-32 md:py-48">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 mb-16">
        <motion.p
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 1 }}
          className="font-sans text-[10px] tracking-[0.35em] uppercase text-evening-orange mb-5"
        >
          Featured Gallery
        </motion.p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-editorial font-light text-ivory leading-tight"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
          >
            A World in Frames
          </motion.h2>

          {/* Filter */}
          <motion.div
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 1, delay: 0.4 }}
            className="flex gap-6 flex-wrap"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-sans text-[10px] tracking-[0.25em] uppercase transition-all duration-400 pb-px ${
                  activeCategory === cat
                    ? 'text-ivory border-b border-evening-orange'
                    : 'text-sand/40 hover:text-sand/70 border-b border-transparent'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Masonry grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.55, delay: i * 0.04 }}
                className="gallery-item break-inside-avoid mb-3 cursor-pointer"
                onClick={() => setLightboxIdx(i)}
              >
                <div className={`relative overflow-hidden ${img.span === 'large' ? 'aspect-[3/4]' : 'aspect-square'}`}>
                  <Image
                    src={img.src} alt={img.alt} fill
                    className="object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div className="gallery-caption absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-1">
                    <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-evening-orange/80">{img.category}</p>
                    <p className="font-editorial italic text-ivory/80 text-sm">{img.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-warm-black/96"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.93, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.93, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-5xl w-full max-h-[88vh] px-4 md:px-16"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightboxIdx].src}
                alt={filtered[lightboxIdx].alt}
                width={1400} height={1000}
                className="object-contain w-full max-h-[82vh]"
              />
              {/* Caption */}
              <div className="flex items-center justify-between mt-4 px-1">
                <p className="font-editorial italic text-sand/60 text-sm">{filtered[lightboxIdx].alt}</p>
                <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-sand/35">
                  {lightboxIdx + 1} / {filtered.length}
                </p>
              </div>
            </motion.div>

            {/* Nav arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage() }}
              className="absolute left-4 md:left-8 text-ivory/50 hover:text-ivory text-3xl font-light transition-colors duration-300"
              aria-label="Previous image"
            >‹</button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage() }}
              className="absolute right-4 md:right-8 text-ivory/50 hover:text-ivory text-3xl font-light transition-colors duration-300"
              aria-label="Next image"
            >›</button>

            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 text-ivory/50 hover:text-ivory text-xl font-light tracking-wider transition-colors duration-300"
              aria-label="Close lightbox"
            >✕</button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

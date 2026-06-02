'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const domesticTours = [
  {
    title: 'Bandhavgarh Tiger Reserve',
    location: 'Madhya Pradesh, India',
    duration: '6 Days',
    description:
      'One of India\'s highest tiger density reserves. Golden hours among sal forests, massive male tigers, and ancient ruins draped in wildlife.',
    image: '/media/majestic-cheetah-standing-proudly-in-the-african-savannah-at-dusk-captivating-wildlifegraphy-displaying-the-beauty-and-grace-of-nature-wild-animal-portrait-in-the-african-wilderness-photo.webp',
  },
  {
    title: 'Corbett National Park',
    location: 'Uttarakhand, India',
    duration: '5 Days',
    description:
      'India\'s oldest national park. Dense riverine forests, the mighty Ramganga, and the chance to photograph tigers in dramatic landscape.',
    image: '/media/f13e95af6c89107351a816f2b3728806.webp',
  },
  {
    title: 'Ranthambore Tiger Reserve',
    location: 'Rajasthan, India',
    duration: '5 Days',
    description:
      'Rugged hills, ancient forts, and the iconic tigers of Ranthambore. A cinematic landscape made for dramatic wildlife photography.',
    image: '/media/image-9.webp',
  },
  {
    title: 'Kaziranga National Park',
    location: 'Assam, India',
    duration: '4 Days',
    description:
      'Home to the world\'s largest population of one-horned rhinoceros. Lush grasslands, elephants, and extraordinary biodiversity.',
    image: '/media/wildlife-in-etosha-national-park-namibia-africa.webp',
  },
]

const internationalExpeditions = [
  {
    title: 'Maasai Mara Big Cat Expedition',
    location: 'Kenya, Africa',
    duration: '10 Days',
    description:
      'The greatest wildlife spectacle on earth. Lions, cheetahs, leopards against the endless golden savannah under African skies.',
    image: '/media/african-savannah-landscape-at-sunrise-with-solitary-elephant-wildlife-animal-photo.webp',
  },
  {
    title: 'Serengeti & Ngorongoro',
    location: 'Tanzania, Africa',
    duration: '12 Days',
    description:
      'Follow the Great Migration. Wildebeest, zebra, and the predators that trail them through Tanzania\'s endless, cinematic plains.',
    image: '/media/elephant-and-kilimanjaro.webp',
  },
  {
    title: 'Borneo Rainforest Expedition',
    location: 'Malaysia',
    duration: '9 Days',
    description:
      'Ancient rainforests, proboscis monkeys, pygmy elephants, and orangutans deep in the heart of Borneo.',
    image: '/media/agouti-nature-wildlife-costa-rica-tropical-forest-animal-habitat-green-jungle-big-wild-mouse-vegetation-mammal-wildlif-399077660.webp',
  },
  {
    title: 'Etosha & Okavango',
    location: 'Namibia & Botswana',
    duration: '14 Days',
    description:
      'White salt pan with thousands of animals and the Okavango Delta — the world\'s largest inland delta, a true Eden.',
    image: '/media/herd-of-reticulated-giraffes-in-front-of-mount-kenya.webp',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
}

function TourCard({ tour, index }: { tour: (typeof domesticTours)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-5%' })

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="group relative overflow-hidden expedition-card"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Dark gradient base */}
        <div className="absolute inset-0 bg-gradient-to-t from-warm-black via-warm-black/25 to-transparent" />
        {/* Orange warmth on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(196,112,42,0.18)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="flex items-center gap-4 mb-3">
          <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-evening-orange">
            {tour.duration}
          </span>
          <span className="w-5 h-px bg-sand/25" />
          <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-sand/50">
            {tour.location}
          </span>
        </div>
        <h3 className="font-editorial text-ivory text-2xl md:text-3xl leading-snug mb-0 group-hover:mb-4 transition-all duration-500">
          {tour.title}
        </h3>
        <p className="font-sans text-sm text-sand/60 leading-relaxed max-h-0 group-hover:max-h-28 overflow-hidden transition-all duration-700 ease-out">
          {tour.description}
        </p>
        <div className="flex items-center gap-2 mt-0 opacity-0 group-hover:opacity-100 group-hover:mt-5 transition-all duration-500">
          <a href="#contact" className="font-sans text-[10px] tracking-[0.22em] uppercase text-ivory/80 border-b border-ivory/25 pb-px hover:text-ivory hover:border-ivory/70 transition-colors">
            Enquire Now
          </a>
          <span className="text-ivory/30 text-xs">→</span>
        </div>
      </div>
    </motion.div>
  )
}

export default function ToursSection() {
  const domesticRef = useRef<HTMLDivElement>(null)
  const intlRef = useRef<HTMLDivElement>(null)
  const domesticInView = useInView(domesticRef, { once: true, margin: '-10%' })
  const intlInView = useInView(intlRef, { once: true, margin: '-10%' })

  return (
    <section id="tours" className="relative bg-warm-black py-32 md:py-48 overflow-hidden">
      {/* Domestic */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 mb-32 md:mb-48">
        <div ref={domesticRef} className="mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={domesticInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="font-sans text-xs tracking-[0.3em] uppercase text-evening-orange mb-5"
          >
            Domestic Expeditions
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={domesticInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-editorial font-light text-ivory leading-tight max-w-xl"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
          >
            India&apos;s Wild Heart
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {domesticTours.map((tour, i) => (
            <TourCard key={tour.title} tour={tour} index={i} />
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 mb-32 md:mb-48">
        <div className="flex items-center gap-8">
          <div className="flex-1 h-px bg-sand/10" />
          <span className="font-editorial italic text-sand/30 text-sm">across the world</span>
          <div className="flex-1 h-px bg-sand/10" />
        </div>
      </div>

      {/* International */}
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div ref={intlRef} className="mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={intlInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="font-sans text-xs tracking-[0.3em] uppercase text-evening-orange mb-5"
          >
            International Expeditions
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={intlInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-editorial font-light text-ivory leading-tight max-w-xl"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
          >
            Beyond Borders
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={intlInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-sans text-sand/60 text-base leading-relaxed max-w-lg mt-6"
          >
            Premium small-group expeditions to the world&apos;s greatest wildlife destinations. 
            Crafted for serious photographers. Led personally by Tarun.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {internationalExpeditions.map((tour, i) => (
            <TourCard key={tour.title} tour={tour} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

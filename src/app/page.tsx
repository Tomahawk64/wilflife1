import Navigation from '@/components/Navigation'
import SmoothScroll from '@/components/SmoothScroll'
import ScrollProgress from '@/components/ScrollProgress'
import LoadingScreen from '@/components/LoadingScreen'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import MentorshipSection from '@/components/sections/MentorshipSection'
import ToursSection from '@/components/sections/ToursSection'
import GallerySection from '@/components/sections/GallerySection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTASection from '@/components/sections/CTASection'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/Footer'
import ParallaxDivider from '@/components/ParallaxDivider'

export default function Home() {
  return (
    <SmoothScroll>
      <LoadingScreen />
      <ScrollProgress />
      <Navigation />
      <main>
        <HeroSection />

        <ParallaxDivider
          image="/media/6797366fd53f4_tyevd6767pn91__700.webp"
          alt="Wildlife landscape"
          quote="The forest is not silent. It is waiting for you to be quiet enough to hear it."
          quoteAuthor="Tarun"
          height="h-[40vh]"
        />

        <AboutSection />

        <ParallaxDivider
          image="/media/Power-and-Presence-by-Amish-Chhagan-The-Nature-Photography-Contest-2025-Wildlife-Finalist.webp"
          alt="Wildlife power and presence"
          height="h-[45vh]"
        />

        <MentorshipSection />

        <ParallaxDivider
          image="/media/Unique-Wildlife-Synchrony-by-Thomas-Vijayan-The-Nature-Photography-Contest-2025-Night-World-Finalist.webp"
          alt="Wildlife synchrony at night"
          quote="Every great photograph begins with a moment of absolute stillness."
          quoteAuthor="Tarun"
          height="h-[40vh]"
        />

        <ToursSection />

        <ParallaxDivider
          image="/media/giant-male-elephant-at-sunse.webp"
          alt="Giant male elephant at sunset"
          height="h-[45vh]"
        />

        <GallerySection />

        <TestimonialsSection />

        <CTASection />

        <ContactSection />

        <Footer />
      </main>
    </SmoothScroll>
  )
}

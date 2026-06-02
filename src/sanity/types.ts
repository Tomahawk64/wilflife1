export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
  crop?: {
    top: number
    bottom: number
    left: number
    right: number
  }
}

export interface Hero {
  _type: 'hero'
  tagline?: string
  headline?: string
  subheadline?: string
  scrollCue?: string
}

export interface About {
  _type: 'about'
  heading?: string
  portrait?: SanityImage
  bio?: unknown[]
  stats?: { value: string; label: string }[]
}

export interface Mentorship {
  _type: 'mentorship'
  heading?: string
  subheading?: string
  description?: string
  backgroundImage?: SanityImage
  offerings?: { title: string; description: string; icon: string }[]
}

export interface Tour {
  _type: 'tour'
  title: string
  category: 'domestic' | 'international'
  location: string
  duration: string
  description: string
  coverImage?: SanityImage
  highlights?: string[]
  order?: number
}

export interface GalleryImage {
  _type: 'galleryImage'
  title: string
  image: SanityImage
  category: string
  location?: string
  featured?: boolean
  order?: number
}

export interface Testimonial {
  _type: 'testimonial'
  name: string
  location?: string
  avatar?: SanityImage
  quote: string
  tourAttended?: string
  order?: number
}

export interface CTA {
  _type: 'cta'
  heading?: string
  subheading?: string
  backgroundImage?: SanityImage
  primaryButtonText?: string
  secondaryButtonText?: string
}

export interface Contact {
  _type: 'contact'
  email?: string
  phone?: string
  instagram?: string
  youtube?: string
  facebook?: string
  whatsapp?: string
  tagline?: string
}

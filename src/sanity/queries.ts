import { client } from './client'

export async function getHero() {
  return client.fetch(`*[_type == "hero"][0]`)
}

export async function getAbout() {
  return client.fetch(`*[_type == "about"][0]`)
}

export async function getMentorship() {
  return client.fetch(`*[_type == "mentorship"][0]`)
}

export async function getTours(category?: 'domestic' | 'international') {
  const filter = category
    ? `*[_type == "tour" && category == "${category}"] | order(order asc)`
    : `*[_type == "tour"] | order(order asc)`
  return client.fetch(filter)
}

export async function getGallery() {
  return client.fetch(`*[_type == "galleryImage"] | order(order asc)`)
}

export async function getTestimonials() {
  return client.fetch(`*[_type == "testimonial"] | order(order asc)`)
}

export async function getCTA() {
  return client.fetch(`*[_type == "cta"][0]`)
}

export async function getContact() {
  return client.fetch(`*[_type == "contact"][0]`)
}

export async function getArticles() {
  return client.fetch(`*[_type == "article"] | order(publishedAt desc)`)
}

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tarun | Wildlife Photographer · Mentor · Expedition Leader',
  description:
    'Experience wildlife through the lens of Tarun — award-winning wildlife photographer, mentorship guide, and expedition leader. Explore domestic tiger reserves and international wildlife expeditions.',
  keywords: ['wildlife photography', 'wildlife photographer', 'wildlife mentorship', 'tiger reserve', 'wildlife expedition', 'nature photography'],
  openGraph: {
    title: 'Tarun | Wildlife Photographer',
    description: 'Cinematic wildlife photography, mentorship, and expeditions.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="lenis">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain-overlay">
        {children}
      </body>
    </html>
  )
}

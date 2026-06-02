import Link from 'next/link'

const footerLinks = [
  { label: 'Story', href: '#about' },
  { label: 'Mentorship', href: '#mentorship' },
  { label: 'Expeditions', href: '#tours' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'YouTube', href: '#' },
  { label: 'Facebook', href: '#' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-[#F0EAD8] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-16 md:gap-0 mb-20">
          {/* Brand */}
          <div className="max-w-xs">
            <p
              className="font-editorial font-light text-charcoal mb-3"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Tarun
            </p>
            <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#8B7A5E]/60 mb-6">
              Wildlife Photographer · Mentor · Expedition Leader
            </p>
            <p className="font-sans text-xs text-[#8B7A5E]/55 leading-relaxed">
              Documenting the world&apos;s wild places through patience, craft, and a deep reverence for nature.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#8B7A5E]/50 mb-6">
              Navigate
            </p>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-[#6B5E4A]/65 hover:text-charcoal transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#8B7A5E]/50 mb-6">
              Follow
            </p>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-[#6B5E4A]/65 hover:text-charcoal transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#8B7A5E]/50 mb-6">
              Ready?
            </p>
            <a
              href="#contact"
              className="inline-block font-sans text-xs tracking-[0.2em] uppercase text-ivory bg-charcoal px-6 py-3 hover:bg-[#3D3D3D] transition-colors duration-500"
            >
              Join Expedition
            </a>
            <p className="font-sans text-xs text-[#8B7A5E]/55 mt-4">
              tarun@wildlens.com
            </p>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-10 mt-10 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: 'none' }}>
          <p className="font-sans text-[10px] tracking-[0.15em] text-[#8B7A5E]/40">
            © {year} Tarun Wildlife Photography. All rights reserved.
          </p>
          <p className="font-editorial italic text-[#8B7A5E]/35 text-sm">
            The wild calls to those who listen.
          </p>
        </div>
      </div>
    </footer>
  )
}

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F7F3EB] border-t border-[#C5A059]/15 text-[#1E1712] py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        
        {/* Brand Column */}
        <div className="space-y-6">
          <Link href="/" className="inline-block">
            <span className="font-serif text-2xl tracking-[4px] font-semibold text-[#1E1712] uppercase">
              Shutter<span className="text-[#C5A059]">gem</span>
            </span>
          </Link>
          <p className="text-[#70665E] text-sm leading-relaxed max-w-sm">
            Capturing timeless love stories and luxury editorial weddings worldwide. We weave cinematic magic and sophisticated imagery into family heirlooms.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-[#C5A059]/30 flex items-center justify-center text-[#70665E] hover:text-[#C5A059] hover:border-[#C5A059] transition">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-[#C5A059]/30 flex items-center justify-center text-[#70665E] hover:text-[#C5A059] hover:border-[#C5A059] transition">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.993 3.993-.283 1.194.599 2.169 1.775 2.169 2.13 0 3.769-2.247 3.769-5.491 0-2.871-2.063-4.878-5.01-4.878-3.414 0-5.418 2.561-5.418 5.204 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.162 0 7.397 2.967 7.397 6.93 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-[#C5A059]/30 flex items-center justify-center text-[#70665E] hover:text-[#C5A059] hover:border-[#C5A059] transition">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif text-lg font-medium text-[#1E1712] mb-6 tracking-wider">Navigation</h4>
          <ul className="space-y-4">
            <li>
              <Link href="/" className="text-sm text-[#70665E] hover:text-[#C5A059] transition">Home</Link>
            </li>
            <li>
              <Link href="/about" className="text-sm text-[#70665E] hover:text-[#C5A059] transition">Our Story</Link>
            </li>
            <li>
              <Link href="/portfolio" className="text-sm text-[#70665E] hover:text-[#C5A059] transition">Portfolio</Link>
            </li>
            <li>
              <Link href="/pricing" className="text-sm text-[#70665E] hover:text-[#C5A059] transition">Pricing & Packages</Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm text-[#70665E] hover:text-[#C5A059] transition">Get in Touch</Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-serif text-lg font-medium text-[#1E1712] mb-6 tracking-wider">Services</h4>
          <ul className="space-y-4">
            <li className="text-sm text-[#70665E]">Luxury Weddings</li>
            <li className="text-sm text-[#70665E]">Pre-Wedding Shoots</li>
            <li className="text-sm text-[#70665E]">Cinematic Films</li>
            <li className="text-sm text-[#70665E]">Fine Art Portraits</li>
            <li className="text-sm text-[#70665E]">Fashion & Editorial</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h4 className="font-serif text-lg font-medium text-[#1E1712] mb-6 tracking-wider">The Studio</h4>
          <div className="space-y-4 text-sm text-[#70665E]">
            <p className="flex items-center gap-3">
              <svg className="w-4 h-4 text-[#C5A059]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Mumbai, India • Worldwide</span>
            </p>
            <p className="flex items-center gap-3">
              <svg className="w-4 h-4 text-[#C5A059]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+919876543210" className="hover:text-[#C5A059] transition">+91 98765 43210</a>
            </p>
            <p className="flex items-center gap-3">
              <svg className="w-4 h-4 text-[#C5A059]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:hello@shuttergem.com" className="hover:text-[#C5A059] transition">hello@shuttergem.com</a>
            </p>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#C5A059]/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-[#70665E]">
          © {new Date().getFullYear()} SHUTTERGEM. All rights reserved.
        </p>
        <p className="text-xs text-[#70665E]">
          Designed with elegance for timeless celebrations.
        </p>
      </div>
    </footer>
  );
}

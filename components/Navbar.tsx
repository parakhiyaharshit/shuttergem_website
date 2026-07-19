"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle transparent to frosted bg on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Story", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#FDFBF7]/90 backdrop-blur-md shadow-sm border-b border-[#C5A059]/10 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12">
        {/* Typographic Luxury Logo */}
        <Link href="/" className="group flex flex-col">
          <span className="font-serif text-xl md:text-2xl tracking-[5px] font-bold uppercase transition duration-300 text-[#1E1712] group-hover:text-[#C5A059]">
            SHUTTER<span className="text-[#C5A059] group-hover:text-[#1E1712]">GEM</span>
          </span>
          <span className="text-[9px] tracking-[6px] text-[#70665E] uppercase -mt-0.5 pl-0.5">
            Luxury Photography
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm uppercase tracking-widest font-medium transition duration-300 ${
                  isActive
                    ? "text-[#C5A059]"
                    : "text-[#1E1712] hover:text-[#C5A059]"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-[-6px] left-0 w-full h-[1.5px] bg-[#C5A059] rounded-full" />
                )}
              </Link>
            );
          })}
          
          <Link
            href="/contact"
            className="ml-4 px-6 py-2.5 border border-[#C5A059] text-xs uppercase tracking-widest font-semibold text-[#C5A059] hover:bg-[#C5A059] hover:text-[#FDFBF7] transition-all duration-300 rounded-full"
          >
            Inquire
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <span
            className={`w-6 h-[1.5px] bg-[#1E1712] transition-transform duration-300 ${
              isOpen ? "transform rotate-45 translate-y-[5px]" : "mb-[5px]"
            }`}
          />
          <span
            className={`w-6 h-[1.5px] bg-[#1E1712] transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100 mb-[5px]"
            }`}
          />
          <span
            className={`w-6 h-[1.5px] bg-[#1E1712] transition-transform duration-300 ${
              isOpen ? "transform -rotate-45 -translate-y-[8px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 top-[60px] w-full h-[calc(100vh-60px)] bg-[#FDFBF7] z-40 flex flex-col px-8 py-12 transition-all duration-500 ease-in-out md:hidden border-t border-[#C5A059]/10 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-6 text-center mt-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xl font-serif tracking-widest uppercase py-3 border-b border-[#C5A059]/5 transition-all ${
                  isActive
                    ? "text-[#C5A059] font-medium"
                    : "text-[#1E1712] hover:text-[#C5A059]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto text-center space-y-6">
          <Link
            href="/contact"
            className="inline-block w-full py-4 bg-[#C5A059] text-white uppercase tracking-widest text-sm font-semibold rounded-full hover:bg-[#9E7D3F] transition duration-300"
          >
            Book a Consultation
          </Link>
          <div className="text-xs text-[#70665E]">
            <p>Based in Mumbai • Capturing Worldwide</p>
            <p className="mt-1">hello@shuttergem.com</p>
          </div>
        </div>
      </div>
    </header>
  );
}

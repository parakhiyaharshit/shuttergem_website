"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#FDFBF7] text-[#1E1712] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative h-[90vh] md:h-screen w-full flex items-center justify-center px-6 bg-[#F4EFE6]/35">
        {/* Background Image Container with Ken Burns effect */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Fallback pattern or dynamic gradient until user uploads hero.jpg */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#FDFBF7] via-[#F4EFE6]/40 to-[#FDFBF7] z-0" />
          <img
            src="/images/hero.jpg"
            alt="Luxury Wedding Portrait"
            className="w-full h-full object-cover brightness-[0.93] scale-100 animate-kenburns opacity-90 z-10"
            onError={(e) => {
              // If image fails to load, gracefully hide it and keep the gradient
              (e.target as HTMLElement).style.display = "none";
            }}
          />
          {/* Frosted Gold Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7] via-[#FDFBF7]/60 to-transparent z-20" />
        </div>

        {/* Content */}
        <div className="relative z-30 max-w-4xl mx-auto text-center mt-8">
          <p className="uppercase tracking-[8px] text-xs font-semibold text-[#A47E3B] mb-6">
            Luxury Wedding Photography
          </p>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif font-light tracking-wide leading-tight text-[#1E1712] mb-8">
            YOUR WORLD
            <br />
            <span className="italic font-normal text-[#C5A059] font-serif">through our</span>
            <br />
            LENS
          </h1>

          <p className="text-sm md:text-base text-[#70665E] max-w-xl mx-auto leading-relaxed mb-12 tracking-wide font-light">
            Capturing timeless love stories, cinematic films, and premium editorial narratives. Preserving emotions into high-end visual heirlooms.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link
              href="/portfolio"
              className="w-full sm:w-auto px-8 py-4 bg-[#C5A059] text-white rounded-full font-semibold hover:bg-[#9E7D3F] hover:shadow-lg transition-all duration-300 tracking-widest text-xs uppercase"
            >
              Explore Portfolio
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 border border-[#C5A059] text-[#C5A059] rounded-full font-semibold hover:bg-[#C5A059] hover:text-white hover:shadow-lg transition-all duration-300 tracking-widest text-xs uppercase"
            >
              Book Consultation
            </Link>
          </div>
        </div>

        {/* Floating Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-xs tracking-[4px] uppercase text-[#70665E]/60 z-30">
          <span>Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#C5A059] to-transparent animate-bounce mt-1" />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 md:py-36 px-6 max-w-7xl mx-auto border-b border-[#C5A059]/10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p className="text-xs uppercase tracking-[6px] text-[#C5A059] font-semibold">
              The Philosophy
            </p>
            <h2 className="text-3xl md:text-5xl font-serif font-light leading-snug">
              We don't just take photos. <br />
              <span className="italic text-[#C5A059]">We frame feelings.</span>
            </h2>
            <div className="w-12 h-[1px] bg-[#C5A059]" />
            <p className="text-[#70665E] leading-8 font-light text-sm md:text-base">
              Every laugh, every tear, every micro-moment of love is an art waiting to be captured. At SHUTTERGEM, we blend fine-art editorial elegance with natural candid storytelling.
            </p>
            <p className="text-[#70665E] leading-8 font-light text-sm md:text-base">
              We approach each wedding as a blank canvas, crafting a tailor-made aesthetic that honors your unique style, family history, and romance.
            </p>
            <Link
              href="/about"
              className="inline-block text-xs uppercase tracking-widest text-[#C5A059] font-bold border-b border-[#C5A059]/30 pb-2 hover:border-[#C5A059] transition duration-300"
            >
              Learn More About Us
            </Link>
          </div>

          <div className="relative group">
            {/* Elegant framing border around the image */}
            <div className="absolute -inset-4 border border-[#C5A059]/20 rounded-3xl translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-500 z-0" />
            <div className="overflow-hidden rounded-3xl relative bg-[#F7F3EB] aspect-[4/5] md:aspect-auto z-10 shadow-md">
              <img
                src="/images/about.jpg"
                alt="Elegant Wedding Portrait"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
              {/* Overlay shadow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-[#F7F3EB]/40 py-24 md:py-36 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <p className="text-xs uppercase tracking-[6px] text-[#C5A059] font-semibold">
              Tailored Offerings
            </p>
            <h2 className="text-3xl md:text-5xl font-serif font-light">
              Our Curated Services
            </h2>
            <div className="w-12 h-[1px] bg-[#C5A059] mx-auto" />
            <p className="text-sm text-[#70665E] font-light">
              Crafting premium visual content with sophistication and editorial artistry.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Luxury Weddings",
                desc: "Complete visual documentation of your celebration with an editorial, high-fashion aesthetic.",
              },
              {
                title: "Pre-Wedding Stories",
                desc: "Cinematic couple portraits in dreamlike locations, tailored to tell your unique chemistry.",
              },
              {
                title: "Cinematic Films",
                desc: "High-definition story-driven films with premium soundscapes and cinematic grade coloring.",
              },
              {
                title: "Editorial & Portraits",
                desc: "High-fashion bridal portraits and family legacies captured in studio or venue lighting.",
              },
            ].map((service, index) => (
              <div
                key={service.title}
                className="bg-white border border-[#C5A059]/10 rounded-2xl p-8 hover:shadow-xl hover:border-[#C5A059]/35 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="font-serif text-3xl font-light text-[#C5A059]/40 mb-6 block">
                    0{index + 1}
                  </span>
                  <h3 className="text-xl font-serif font-medium mb-4 text-[#1E1712]">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#70665E] leading-relaxed font-light">
                    {service.desc}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-[#C5A059]/5">
                  <Link href="/pricing" className="text-xs text-[#C5A059] font-medium hover:text-[#9E7D3F] transition">
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section className="py-24 md:py-36 max-w-7xl mx-auto px-6 border-b border-[#C5A059]/10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
          <div>
            <p className="text-xs uppercase tracking-[6px] text-[#C5A059] font-semibold mb-3">
              Selected Works
            </p>
            <h2 className="text-3xl md:text-5xl font-serif font-light">
              Featured Gallery
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="px-8 py-3 bg-white border border-[#C5A059]/25 text-xs uppercase tracking-widest text-[#C5A059] hover:bg-[#C5A059] hover:text-white rounded-full transition-all duration-300 font-semibold"
          >
            View Full Portfolio
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-2xl bg-[#F7F3EB] aspect-[3/2] shadow-sm"
            >
              <img
                src={`/images/${i}.jpg`}
                alt={`Wedding feature ${i}`}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700 brightness-[0.98] group-hover:brightness-90"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                <div>
                  <p className="text-white text-xs uppercase tracking-widest mb-1 font-semibold">
                    Royal Celebration
                  </p>
                  <p className="text-[#E6D5B8] text-xs italic font-serif">
                    Mumbai, India
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 md:py-36 bg-[#FDFBF7] px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <p className="text-xs uppercase tracking-[6px] text-[#C5A059] font-semibold">
            Kind Words
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-light">
            Love Letters
          </h2>
          <div className="w-12 h-[1px] bg-[#C5A059] mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              quote: "The photos are absolutely breathtaking! You captured details we didn't even notice ourselves. Shuttergem didn't just document our day, they turned our memories into cinema.",
              names: "Aditi & Rohan",
              event: "Palace Wedding, Udaipur",
              bg: "/images/3.jpg"
            },
            {
              quote: "Every single frame is high-fashion and emotional at the same time. The team was so professional and made us feel so comfortable. Truly a luxury photography experience.",
              names: "Priya & Kabir",
              event: "Beachside Wedding, Goa",
              bg: "/images/2.jpg"
            },
            {
              quote: "Their films are on another level. The sound design, colors, and pacing—it felt like watching a premium cinematic production. We cry every time we watch it.",
              names: "Sanjana & Neil",
              event: "Heritage Wedding, Jaipur",
              bg: "/images/5.jpg"
            }
          ].map((t, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-3xl p-10 min-h-[380px] flex flex-col justify-between group shadow-sm hover:shadow-xl hover:scale-[1.02] border border-[#C5A059]/10 transition-all duration-500"
            >
              {/* Background Image with Zoom */}
              <div className="absolute inset-0 z-0">
                <img
                  src={t.bg}
                  alt={`${t.names}'s background`}
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 transition duration-700"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
                {/* Light semi-transparent overlay (No blur, clear photo) */}
                <div className="absolute inset-0 bg-[#FDFBF7]/70 group-hover:bg-[#FDFBF7]/60 transition-all duration-500" />
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
                <div>
                  <span className="font-serif text-5xl text-[#C5A059]/55 leading-none block h-6">“</span>
                  <p className="text-sm text-[#1E1712] font-medium italic leading-relaxed mt-2">
                    {t.quote}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#C5A059]/25">
                  <p className="font-serif font-semibold text-base text-[#1E1712]">
                    {t.names}
                  </p>
                  <p className="text-[9px] uppercase tracking-widest text-[#9E7D3F] mt-1.5 font-bold">
                    {t.event}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 md:py-36 bg-gradient-to-b from-[#F7F3EB]/40 to-[#FDFBF7] text-center px-6 border-t border-[#C5A059]/10">
        <div className="max-w-3xl mx-auto space-y-8">
          <span className="text-[#C5A059] font-serif text-3xl italic block">Let's create something beautiful</span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light tracking-wide text-[#1E1712] uppercase leading-tight">
            Reserve Your Date
          </h2>
          <p className="text-sm md:text-base text-[#70665E] max-w-xl mx-auto leading-relaxed font-light">
            We accept a limited number of weddings each year to ensure the highest standard of artistic quality and customized service.
          </p>
          <div className="pt-6">
            <Link
              href="/contact"
              className="inline-block px-10 py-5 bg-[#C5A059] text-white rounded-full font-semibold hover:bg-[#9E7D3F] hover:shadow-xl transition-all duration-300 tracking-widest text-xs uppercase"
            >
              Inquire Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
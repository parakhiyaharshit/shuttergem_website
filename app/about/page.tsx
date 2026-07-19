"use client";

export default function AboutPage() {
  return (
    <main className="bg-[#FDFBF7] text-[#1E1712] py-16 md:py-24">
      {/* HEADER SECTION */}
      <section className="max-w-4xl mx-auto text-center px-6 mb-20">
        <p className="text-xs uppercase tracking-[6px] text-[#C5A059] font-semibold mb-4">
          Behind the Lens
        </p>
        <h1 className="text-4xl md:text-6xl font-serif font-light mb-6 tracking-wide uppercase">
          Our Story
        </h1>
        <div className="w-16 h-[1.5px] bg-[#C5A059] mx-auto mb-8" />
        <p className="text-[#70665E] text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
          We are visual historians, capturing romance and high-end celebrations around the globe. Combining fashion editorial with honest storytelling.
        </p>
      </section>

      {/* CREATOR SECTION */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center mb-28">
        <div className="relative group">
          <div className="absolute -inset-4 border border-[#C5A059]/15 rounded-3xl translate-x-3 translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-500 z-0" />
          <div className="overflow-hidden rounded-3xl relative bg-[#F7F3EB] aspect-[4/5] z-10 shadow-sm">
            <img
              src="/images/about.jpg"
              alt="Our Lead Photographer"
              className="w-full h-full object-cover group-hover:scale-102 transition duration-700"
              onError={(e) => {
                (e.target as HTMLElement).style.display = "none";
              }}
            />
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl font-serif font-light">
            Crafting Legacy <br />
            <span className="italic text-[#C5A059] font-serif">in every frame</span>
          </h2>
          
          <p className="text-[#70665E] leading-relaxed font-light text-sm md:text-base">
            Founded with a passion for fine-art visual storytelling, SHUTTERGEM was created to elevate wedding photography into a premium artistic medium. We don't just capture layouts; we preserve the light, the texture, and the raw emotions of your most significant day.
          </p>

          <p className="text-[#70665E] leading-relaxed font-light text-sm md:text-base">
            Our signature style is characterized by warm golden tones, glowing natural lighting, and high-fashion editorial composition. Based in Mumbai, our team travels globally to document luxury weddings, intimate elopements, and cinematic films.
          </p>

          <div className="grid grid-cols-2 gap-8 pt-4">
            <div className="space-y-2 border-l border-[#C5A059]/20 pl-4">
              <p className="text-3xl font-serif text-[#C5A059] font-light">4+</p>
              <p className="text-xs uppercase tracking-widest text-[#70665E]">Weddings Captured</p>
            </div>
            <div className="space-y-2 border-l border-[#C5A059]/20 pl-4">
              <p className="text-3xl font-serif text-[#C5A059] font-light">0</p>
              <p className="text-xs uppercase tracking-widest text-[#70665E]">Countries Visited</p>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH / TIMELINE */}
      <section className="bg-[#F7F3EB]/40 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <p className="text-xs uppercase tracking-[6px] text-[#C5A059] font-semibold">
              The Journey
            </p>
            <h2 className="text-3xl md:text-5xl font-serif font-light">
              Our Creative Process
            </h2>
            <p className="text-xs text-[#70665E] tracking-wider font-light">
              How we work together to bring your dream album to life.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "The Consultation",
                desc: "We discuss your vision, schedule, and styling preferences over champagne or virtual coffee to align our creative directions.",
              },
              {
                step: "02",
                title: "Planning & Prep",
                desc: "We coordinate with planners, scout lighting schedules, and design custom shot lists tailored to your wedding blueprint.",
              },
              {
                step: "03",
                title: "The Wedding Day",
                desc: "Our team documents your day with a blend of invisible journalistic capture and guided high-fashion direction.",
              },
              {
                step: "04",
                title: "Curation & Delivery",
                desc: "Every image is hand-edited for tone and skin-retouching, and delivered in a custom luxury online archive and print box.",
              },
            ].map((process) => (
              <div
                key={process.step}
                className="bg-white border border-[#C5A059]/10 rounded-2xl p-8 hover:shadow-lg transition duration-300"
              >
                <span className="font-serif text-2xl font-light text-[#C5A059] mb-4 block">
                  {process.step}
                </span>
                <h3 className="text-lg font-serif font-medium mb-3">
                  {process.title}
                </h3>
                <p className="text-xs text-[#70665E] leading-relaxed font-light">
                  {process.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHT VALUES */}
      <section className="py-24 max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <span className="text-[#C5A059] font-serif text-2xl italic block">Our Core Pillars</span>
          <h2 className="text-3xl font-serif font-light">FINE ART • EDITORIAL • HEART</h2>
          <div className="w-12 h-[1px] bg-[#C5A059] mx-auto" />
          <p className="text-sm text-[#70665E] leading-relaxed font-light">
            We believe that wedding photography shouldn't just record presence, it should preserve energy. Our focus on editorial styling gives your album a high-end magazine feel, while our dedication to candid authenticity keeps the true emotion alive.
          </p>
        </div>
      </section>
    </main>
  );
}

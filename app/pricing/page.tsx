import Link from "next/link";

export default function PricingPage() {
  const packages = [
    {
      name: "The Classic Union",
      price: "₹95,000",
      description: "Perfect for weddings.",
      features: [
        "2 Days of Uninterrupted Celebration Coverage",
        "2 Lead Photographers & 2 Lead Videographers",
        "Cinematic Teaser Film",
        "Signature Highlight Film",
        "Full Traditional Wedding Film",
        "Social-Ready Reels",
        "150 Edited Photos + Complete Raw Archive",
      ],
      isPopular: false,
    },
    {
      name: "The Premium Heritage",
      price: "₹1,50,000",
      description: "Perfect for weddings.",
      features: [
        "2 Days of Uninterrupted Celebration Coverage",
        "3 Lead Photographers & 3 Lead Videographers",
        "Cinematic Teaser Film",
        "Signature Highlight Film",
        "Full Traditional Wedding Film",
        "Social-Ready Reels",
        "200 Edited Photos + Complete Raw Archive",
      ],
      isPopular: true,
    },
    {
      name: "The Royal Legacy",
      price: "₹2,20,000",
      description: "Perfect for weddings.",
      features: [
        "2 Days of Uninterrupted Celebration Coverage",
        "3 Lead Photographers & 3 Lead Videographers",
        "Drone & Aerial Cinematography included",
        "Cinematic Teaser Film",
        "Signature Highlight Film",
        "Full Traditional Wedding Film",
        "Social-Ready Reels",
        "250 Edited Photos + Complete Raw Archive",
      ],
      isPopular: false,
    },
  ];

  const faqs = [
    {
      q: "Do you travel for weddings?",
      a: "Absolutely. We are based in Mumbai, but capture love stories worldwide. Travel and accommodation fees are tailored based on location.",
    },
    {
      q: "When will we receive our gallery?",
      a: "Our standard delivery time is 6 to 8 weeks, as we meticulously edit each image to ensure our signature quality. The Royal Legacy package features priority 4-week delivery.",
    },
    {
      q: "Can we customize our packages?",
      a: "Yes, every wedding is unique. We are happy to build custom collections including multi-day additions, rehearsal dinner coverage, additional prints, or custom video edits.",
    },
    {
      q: "How do we secure our date?",
      a: "A 50% retainer fee and signed agreement are required to reserve your wedding date. The remaining balance is due two weeks before the event.",
    },
  ];

  return (
    <main className="bg-[#FDFBF7] text-[#1E1712] py-16 md:py-24">
      {/* Page Header */}
      <section className="max-w-4xl mx-auto text-center px-6 mb-20">
        <p className="text-xs uppercase tracking-[6px] text-[#C5A059] font-semibold mb-4">
          Investment
        </p>
        <h1 className="text-4xl md:text-6xl font-serif font-light mb-6 tracking-wide uppercase">
          Collections & Pricing
        </h1>
        <div className="w-16 h-[1.5px] bg-[#C5A059] mx-auto mb-8" />
        <p className="text-[#70665E] text-base font-light leading-relaxed max-w-xl mx-auto">
          Investing in your heritage. Custom-designed packages for stories that deserve to be remembered beautifully.
        </p>
      </section>

      {/* Pricing Cards Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative bg-white border rounded-3xl p-8 md:p-10 shadow-sm flex flex-col transition-all duration-300 hover:shadow-xl ${
                pkg.isPopular
                  ? "border-[#C5A059] lg:scale-[1.03] lg:-translate-y-2 z-10"
                  : "border-[#C5A059]/10"
              }`}
            >
              {pkg.isPopular && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#C5A059] text-white text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full font-bold">
                  Most Requested
                </span>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-serif font-light text-[#1E1712] mb-2">
                  {pkg.name}
                </h3>
                <p className="text-xs text-[#70665E] leading-relaxed font-light mb-6">
                  {pkg.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl md:text-4xl font-serif text-[#C5A059]">
                    {pkg.price}
                  </span>
                  <span className="text-xs text-[#70665E] font-light">/ starting</span>
                </div>
              </div>

              <div className="w-full h-[1px] bg-[#C5A059]/10 mb-8" />

              {/* Features List */}
              <ul className="space-y-4 flex-1 mb-10">
                {pkg.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs text-[#70665E] font-light leading-relaxed">
                    <svg
                      className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`w-full py-4 text-center text-xs uppercase tracking-widest font-semibold rounded-full transition-all duration-300 ${
                  pkg.isPopular
                    ? "bg-[#C5A059] text-white hover:bg-[#9E7D3F]"
                    : "border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-white"
                }`}
              >
                Inquire Package
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-[#F7F3EB]/40 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <p className="text-xs uppercase tracking-[6px] text-[#C5A059] font-semibold">
              FAQ
            </p>
            <h2 className="text-3xl font-serif font-light">
              Common Questions
            </h2>
            <div className="w-12 h-[1px] bg-[#C5A059] mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {faqs.map((faq, idx) => (
              <div key={idx} className="space-y-3 bg-white p-8 rounded-2xl border border-[#C5A059]/10">
                <h4 className="font-serif font-medium text-base text-[#1E1712]">
                  {faq.q}
                </h4>
                <p className="text-xs text-[#70665E] leading-relaxed font-light">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

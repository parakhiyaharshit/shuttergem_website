import Link from "next/link";

export default function PricingPage() {
  const packages = [
    {
      name: "The Classic Union",
      price: "₹1,50,000",
      description: "Perfect for intimate weddings, elopements, and single-day celebrations.",
      features: [
        "1 Day of Continuous Coverage",
        "1 Lead Photographer & 1 Associate",
        "400+ Hand-Edited High-Res Photos",
        "Private Online Digital Gallery",
        "Delivery within 6 weeks",
      ],
      isPopular: false,
    },
    {
      name: "The Premium Heritage",
      price: "₹3,00,000",
      description: "Our signature collection. Complete photo & film documentation of your wedding.",
      features: [
        "2 Days of Comprehensive Coverage",
        "2 Photographers & 2 Cinematographers",
        "800+ Hand-Edited High-Res Photos",
        "3-5 Minute Cinematic Teaser",
        "15-20 Minute Wedding Documentary Film",
        "1 Luxury Linen Hardcover Album",
        "Private Online Digital Gallery",
      ],
      isPopular: true,
    },
    {
      name: "The Royal Legacy",
      price: "₹5,50,000",
      description: "The ultimate luxury package. Multi-day celebration coverage, pre-wedding shoot, and bespoke print heirlooms.",
      features: [
        "Up to 4 Days of Full Coverage",
        "Complimentary Pre-Wedding Session",
        "3 Senior Photographers & 3 Cinematographers",
        "Drone & Aerial Cinematography included",
        "1,200+ Hand-Edited High-Res Photos",
        "5-7 Minute Cinematic Highlight Film",
        "30-40 Minute Full Feature Film",
        "2 Parent Albums & 1 Master Royal Photobook",
        "Priority 4-Week Delivery",
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

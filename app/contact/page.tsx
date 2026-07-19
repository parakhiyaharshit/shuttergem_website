"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name1: "",
    name2: "",
    email: "",
    phone: "",
    date: "",
    venue: "",
    package: "premium",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API request
    setTimeout(() => {
      setIsSubmitted(true);
    }, 800);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="bg-[#FDFBF7] text-[#1E1712] py-16 md:py-24">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center px-6 mb-20">
        <p className="text-xs uppercase tracking-[6px] text-[#C5A059] font-semibold mb-4">
          Connect
        </p>
        <h1 className="text-4xl md:text-6xl font-serif font-light mb-6 tracking-wide uppercase">
          Inquire & Book
        </h1>
        <div className="w-16 h-[1.5px] bg-[#C5A059] mx-auto mb-8" />
        <p className="text-[#70665E] text-base font-light leading-relaxed max-w-xl mx-auto">
          We would love to hear your story. Fill out the form below to check availability and obtain custom quotes.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-16 items-start">
        {/* Contact Info Sidebar */}
        <div className="space-y-12 lg:col-span-1 bg-[#F7F3EB] p-8 md:p-10 rounded-3xl border border-[#C5A059]/10">
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-light text-[#1E1712] tracking-wide">
              The Studio
            </h3>
            <div className="w-8 h-[1px] bg-[#C5A059]" />
            <p className="text-xs text-[#70665E] leading-relaxed font-light">
              We take a limited number of bookings per year to ensure each couple receives our full creative focus and premium curation.
            </p>
          </div>

          <div className="space-y-6 text-sm text-[#70665E] font-light">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold">Location</p>
              <p>Mumbai, India • Available Worldwide</p>
            </div>
            
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold">Emails</p>
              <p>
                <a href="mailto:hello@shuttergem.com" className="hover:text-[#C5A059] transition">hello@shuttergem.com</a>
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold">Phone</p>
              <p>
                <a href="tel:+919876543210" className="hover:text-[#C5A059] transition">+91 98765 43210</a>
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold">Office Hours</p>
              <p>Monday – Friday: 10:00 AM – 6:00 PM IST</p>
            </div>
          </div>
        </div>

        {/* Contact Form Area */}
        <div className="lg:col-span-2">
          {isSubmitted ? (
            <div className="bg-white border border-[#C5A059]/20 rounded-3xl p-10 md:p-16 text-center space-y-6 shadow-sm">
              <div className="w-16 h-16 bg-[#F4EFE6] rounded-full flex items-center justify-center text-[#C5A059] mx-auto">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-serif text-3xl font-light text-[#1E1712]">
                Thank You
              </h3>
              <p className="text-[#70665E] text-sm leading-relaxed max-w-md mx-auto font-light">
                Your inquiry has been received with love. We will review your celebration details and reply within 24–48 hours. Let's create magic!
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 px-8 py-3 bg-[#C5A059] text-white uppercase tracking-widest text-xs font-semibold rounded-full hover:bg-[#9E7D3F] transition-all"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 bg-white border border-[#C5A059]/10 rounded-3xl p-8 md:p-12 shadow-sm">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Bride / Partner 1 */}
                <div className="space-y-2">
                  <label htmlFor="name1" className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name1"
                    name="name1"
                    required
                    value={formData.name1}
                    onChange={handleChange}
                    className="w-full bg-[#FDFBF7] border border-[#C5A059]/15 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#C5A059] transition"
                    placeholder="e.g. Sophia Sen"
                  />
                </div>

                {/* Groom / Partner 2 */}
                <div className="space-y-2">
                  <label htmlFor="name2" className="text-xs uppercase tracking-widest text-[#70665E] font-medium">
                    Partner's Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="name2"
                    name="name2"
                    value={formData.name2}
                    onChange={handleChange}
                    className="w-full bg-[#FDFBF7] border border-[#C5A059]/15 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#C5A059] transition"
                    placeholder="e.g. Kabir Roy"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#FDFBF7] border border-[#C5A059]/15 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#C5A059] transition"
                    placeholder="name@example.com"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[#FDFBF7] border border-[#C5A059]/15 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#C5A059] transition"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Event Date */}
                <div className="space-y-2">
                  <label htmlFor="date" className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold">
                    Celebration Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-[#FDFBF7] border border-[#C5A059]/15 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#C5A059] transition text-[#70665E]"
                  />
                </div>

                {/* Venue */}
                <div className="space-y-2">
                  <label htmlFor="venue" className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold">
                    Venue & City
                  </label>
                  <input
                    type="text"
                    id="venue"
                    name="venue"
                    required
                    value={formData.venue}
                    onChange={handleChange}
                    className="w-full bg-[#FDFBF7] border border-[#C5A059]/15 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#C5A059] transition"
                    placeholder="e.g. Umaid Bhawan, Jodhpur"
                  />
                </div>
              </div>

              {/* Package Select */}
              <div className="space-y-2">
                <label htmlFor="package" className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold">
                  Intended Collection
                </label>
                <select
                  id="package"
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                  className="w-full bg-[#FDFBF7] border border-[#C5A059]/15 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#C5A059] transition text-[#70665E]"
                >
                  <option value="classic">The Classic Union</option>
                  <option value="premium">The Premium Heritage</option>
                  <option value="royal">The Royal Legacy</option>
                  <option value="custom">Bespoke Custom Plan</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold">
                  Tell Us About Your Celebration
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#FDFBF7] border border-[#C5A059]/15 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-[#C5A059] transition"
                  placeholder="Share details, vibe, sizing of functions, or custom questions..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4.5 bg-[#C5A059] text-white font-semibold uppercase tracking-widest text-xs rounded-full hover:bg-[#9E7D3F] hover:shadow-xl transition-all duration-300"
              >
                Send Request
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}

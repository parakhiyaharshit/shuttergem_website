"use client";

import { useState } from "react";

interface PortfolioItem {
  id: number;
  src: string;
  category: "wedding" | "pre-wedding" | "portrait";
  title: string;
  location: string;
}

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      src: "/images/1.jpg",
      category: "wedding",
      title: "Royal Palace Union",
      location: "City Palace, Udaipur",
    },
    {
      id: 2,
      src: "/images/2.jpg",
      category: "wedding",
      title: "Sunset Serenade",
      location: "Grand Hyatt, Goa",
    },
    {
      id: 3,
      src: "/images/3.jpg",
      category: "pre-wedding",
      title: "Desert Whisper",
      location: "Sam Sand Dunes, Jaisalmer",
    },
    {
      id: 4,
      src: "/images/4.jpg",
      category: "portrait",
      title: "The Golden Veil",
      location: "Studio Portrait, Mumbai",
    },
    {
      id: 5,
      src: "/images/5.jpg",
      category: "wedding",
      title: "Vows in the Hills",
      location: "Wildflower Hall, Shimla",
    },
    {
      id: 6,
      src: "/images/6.jpg",
      category: "pre-wedding",
      title: "Classic Romance",
      location: "Gateway of India, Mumbai",
    },
  ];

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const categories = [
    { value: "all", label: "All Works" },
    { value: "wedding", label: "Weddings" },
    { value: "pre-wedding", label: "Pre-Weddings" },
    { value: "portrait", label: "Portraits" },
  ];

  return (
    <main className="bg-[#FDFBF7] text-[#1E1712] py-16 md:py-24">
      {/* Page Header */}
      <section className="max-w-4xl mx-auto text-center px-6 mb-16">
        <p className="text-xs uppercase tracking-[6px] text-[#C5A059] font-semibold mb-4">
          Visual Anthology
        </p>
        <h1 className="text-4xl md:text-6xl font-serif font-light mb-6 tracking-wide uppercase">
          The Portfolio
        </h1>
        <div className="w-16 h-[1.5px] bg-[#C5A059] mx-auto mb-8" />
        <p className="text-[#70665E] text-base font-light leading-relaxed max-w-xl mx-auto">
          A curated collection of love, emotion, and architectural splendor from around the world.
        </p>
      </section>

      {/* Categories Filter Tabs */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 border-b border-[#C5A059]/10 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest transition-all duration-300 font-semibold border ${
                activeCategory === cat.value
                  ? "bg-[#C5A059] border-[#C5A059] text-white"
                  : "bg-white border-[#C5A059]/20 text-[#70665E] hover:border-[#C5A059]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer bg-white border border-[#C5A059]/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#C5A059]/30 transition duration-500 flex flex-col"
            >
              <div className="relative overflow-hidden aspect-[3/2] bg-[#F7F3EB]">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700 brightness-[0.98] group-hover:brightness-95"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
                {/* Frosted Lens Hover Indicator */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-[#C5A059] transform scale-90 group-hover:scale-100 transition duration-500">
                    <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="1.5">
                      <circle cx="11" cy="11" r="8" />
                      <path d="M21 21l-4.3-4.3" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold">
                  {item.category.replace("-", " ")}
                </span>
                <h3 className="text-lg font-serif font-medium mt-1 text-[#1E1712]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#70665E] italic mt-1 font-light">
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 transition-all duration-300"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#FDFBF7] rounded-3xl overflow-hidden shadow-2xl border border-[#C5A059]/20"
            onClick={(e) => e.stopPropagation()} // Prevent close on modal content click
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center text-[#1E1712] hover:text-[#C5A059] transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="grid md:grid-cols-3">
              {/* Image Area */}
              <div className="md:col-span-2 bg-[#F7F3EB] aspect-[3/2] md:aspect-auto md:h-[70vh] flex items-center justify-center overflow-hidden">
                <img
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
              </div>

              {/* Info Area */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold">
                  {selectedItem.category.replace("-", " ")}
                </span>
                <h2 className="text-2xl md:text-3xl font-serif font-light mt-2 text-[#1E1712]">
                  {selectedItem.title}
                </h2>
                <div className="w-8 h-[1px] bg-[#C5A059] my-6" />
                <p className="text-[#70665E] text-xs font-light leading-relaxed mb-8">
                  Captured with creative precision, highlighting natural light, emotional chemistry, and spatial details.
                </p>
                <div className="mt-auto space-y-2">
                  <p className="text-xs text-[#70665E] flex items-center gap-2">
                    <span className="text-[#C5A059]">Location:</span>
                    <span className="font-medium italic">{selectedItem.location}</span>
                  </p>
                  <p className="text-xs text-[#70665E] flex items-center gap-2">
                    <span className="text-[#C5A059]">Camera:</span>
                    <span className="font-medium">Sony A7R V • 50mm f/1.2 G-Master</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

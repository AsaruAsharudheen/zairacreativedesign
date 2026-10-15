"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Maximize2, MessageSquare, Info } from "lucide-react";
import { GalleryItem, galleryItems } from "@/data/gallery";
import SectionHeading from "./SectionHeading";
import LightboxModal from "./LightboxModal";
import { getServiceWhatsAppUrl } from "@/lib/contact";

interface ProjectGalleryProps {
  isHomePage?: boolean;
  limit?: number;
}

const CATEGORIES = [
  "All",
  "Curtains & Blinds",
  "Interiors",
  "Gypsum",
  "Fabrication",
  "Staircases",
] as const;

export default function ProjectGallery({
  isHomePage = false,
  limit,
}: ProjectGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  // Filter items
  const filteredItems = galleryItems.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  const currentItem: GalleryItem | null =
    activeItemIndex !== null ? displayedItems[activeItemIndex] || null : null;

  const handleNext = () => {
    if (activeItemIndex !== null) {
      setActiveItemIndex((activeItemIndex + 1) % displayedItems.length);
    }
  };

  const handlePrev = () => {
    if (activeItemIndex !== null) {
      setActiveItemIndex(
        (activeItemIndex - 1 + displayedItems.length) % displayedItems.length
      );
    }
  };

  return (
    <section className={`py-20 lg:py-28 ${isHomePage ? "bg-[#FAF8F6]" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Curated Portfolio"
          title="Spaces We've Helped Transform"
          subtitle="Discover a selection of bespoke window draperies, architectural ceilings, custom metal fabrication, and fine interior concepts."
          align="center"
          className="mb-10"
        />

        {/* Third-party inspiration disclosure as required by prompt guidelines */}
        <div className="max-w-2xl mx-auto mb-10 px-4 py-2.5 rounded-xl bg-white border border-[#EAE3DF] text-center text-xs text-[#77716D] flex items-center justify-center gap-2">
          <Info className="w-3.5 h-3.5 text-[#C99583] shrink-0" />
          <span>
            Portfolio showcases bespoke styling concepts and craftsmanship inspiration.
          </span>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setActiveItemIndex(null);
              }}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-[#C99583] text-white shadow-sm"
                  : "bg-white text-[#77716D] border border-[#EAE3DF] hover:border-[#C99583] hover:text-[#25211F]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedItems.map((item, index) => {
            const waUrl = getServiceWhatsAppUrl(`${item.title} (${item.category})`);

            return (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden bg-white border border-[#EAE3DF] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
                onClick={() => setActiveItemIndex(index)}
              >
                {/* Image Container with Consistent Aspect Ratio */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF8F6]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-white/95 text-[#78564C] shadow-2xs backdrop-blur-xs border border-[#EAE3DF]">
                      {item.category}
                    </span>
                  </div>

                  {/* Hover Overlay with Lightbox Trigger */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <span className="p-3 rounded-full bg-white/90 text-[#25211F] hover:bg-white hover:scale-110 transition-all shadow-md">
                      <Maximize2 className="w-5 h-5 text-[#C99583]" />
                    </span>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-3 rounded-full bg-[#25D366] text-white hover:scale-110 transition-all shadow-md"
                      title="Enquire on WhatsApp"
                    >
                      <MessageSquare className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Card Meta */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-base sm:text-lg font-medium text-[#25211F] group-hover:text-[#C99583] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#77716D] mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {item.location && (
                    <div className="pt-3 mt-3 border-t border-[#EAE3DF]/80 flex items-center justify-between text-xs text-[#9C948F]">
                      <span>{item.location}</span>
                      <span className="text-[#C99583] font-medium flex items-center gap-1 group-hover:underline">
                        View Details
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* View Our Gallery button on home page */}
        {isHomePage && (
          <div className="mt-14 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#25211F] border border-[#EAE3DF] hover:border-[#C99583] hover:text-[#C99583] font-medium text-base transition-all duration-200 shadow-xs hover:shadow-md hover:scale-[1.02]"
            >
              <span>View Full Project Gallery</span>
              <ArrowRight className="w-4 h-4 text-[#C99583]" />
            </Link>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={currentItem}
        onClose={() => setActiveItemIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
}

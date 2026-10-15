"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown, ShieldCheck, Scissors, Award } from "lucide-react";
import { useQuoteModal } from "./QuoteModalContext";

export default function Hero() {
  const { openQuoteModal } = useQuoteModal();

  const handleScrollToNext = () => {
    const nextSection = document.getElementById("brand-intro");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#FAF8F6]">
      {/* Background Ambience Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury living room featuring elegant flowing curtains and natural sunlight"
          fill
          priority
          className="object-cover object-center scale-[1.02] transform transition-transform duration-1000 ease-out"
          sizes="100vw"
        />
        {/* Editorial Gradients to ensure text readability while letting warm luxury shine */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/40" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 md:py-16">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Subtle Brand Accent Tag */}
          <div className="inline-flex items-center px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-medium tracking-wider uppercase mb-4 sm:mb-5 bg-[#F7EFEB]/90 text-[#78564C] border border-[#EAE3DF] shadow-2xs backdrop-blur-sm animate-fade-in max-w-full">
            <span className="truncate">Curtains, Blinds &amp; Luxury Interiors</span>
          </div>

          {/* Suggested Headline */}
          <h1
            className="text-[32px] xs:text-[38px] sm:text-5xl lg:text-6xl xl:text-7xl font-normal not-italic text-[#25211F] leading-[1.16] sm:leading-[1.12] tracking-tight mb-5 sm:mb-6"
            style={{ fontStyle: "normal" }}
          >
            Transform Your Space{" "}
            <span className="block sm:inline">
              with{" "}
              <span className="text-[#C99583] font-medium not-italic" style={{ fontStyle: "normal" }}>
                Timeless Elegance
              </span>
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-[15px] sm:text-lg lg:text-xl text-[#77716D] leading-relaxed max-w-xl mb-7 sm:mb-10 font-normal">
            Discover beautifully crafted curtains, blinds, and interior solutions designed to bring
            comfort, sophistication, and character to every space.
          </p>

          {/* Primary & Secondary Call to Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10 sm:mb-16">
            <Link
              href="/curtains"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-full bg-[#C99583] hover:bg-[#B37D6B] text-white font-medium text-base transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore Our Curtains</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => openQuoteModal("Home Hero Consultation")}
              className="inline-flex items-center justify-center px-7 py-3.5 sm:py-4 rounded-full bg-white/95 hover:bg-white text-[#25211F] border border-[#EAE3DF] hover:border-[#C99583] font-medium text-base transition-all duration-200 shadow-2xs hover:scale-[1.02] active:scale-[0.98] backdrop-blur-sm"
            >
              <span>Get a Free Quote</span>
            </button>
          </div>

          {/* Subtle Trust Indicators */}
          <div className="grid grid-cols-3 gap-2 sm:gap-6 pt-5 sm:pt-6 border-t border-[#EAE3DF]/80 max-w-lg">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Scissors className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C99583] shrink-0" />
              <span className="text-[11px] sm:text-sm font-medium text-[#25211F] leading-tight">
                Custom Tailoring
              </span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C99583] shrink-0" />
              <span className="text-[11px] sm:text-sm font-medium text-[#25211F] leading-tight">
                Precision Fit
              </span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C99583] shrink-0" />
              <span className="text-[11px] sm:text-sm font-medium text-[#25211F] leading-tight">
                Curated Fabrics
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <button
        onClick={handleScrollToNext}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-xs text-[#77716D] hover:text-[#C99583] transition-colors focus:outline-none z-10"
        aria-label="Scroll to learn more"
      >
        <span className="tracking-widest uppercase text-[10px] font-medium">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#C99583]" />
      </button>
    </section>
  );
}

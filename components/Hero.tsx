"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, ShieldCheck, Scissors, Award } from "lucide-react";
import { useQuoteModal } from "./QuoteModalContext";
import HeroCanvas from "./HeroCanvas";

export default function Hero() {
  const { openQuoteModal } = useQuoteModal();
  const [progress, setProgress] = useState(0);

  const handleScrollToNext = () => {
    const nextSection = document.getElementById("brand-intro");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToOpen = () => {
    const container = document.querySelector(".hero-scroll-container");
    if (container) {
      const rect = container.getBoundingClientRect();
      const targetScroll = window.scrollY + rect.height * 0.55;
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  return (
    <section className="hero-scroll-container relative min-h-[190vh] sm:min-h-[220vh] bg-[#FAF8F6]">
      {/* Sticky Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Apple-Style HTML5 Canvas Video Sequence Renderer */}
        <HeroCanvas onProgressChange={setProgress} />

        {/* Ambient Gradient Overlay for Readability */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500 bg-gradient-to-r from-white/90 via-white/70 to-transparent sm:to-white/20"
          style={{ opacity: Math.max(0.4, 0.95 - progress * 0.6) }}
        />
        <div className="absolute inset-0 pointer-events-none transition-opacity duration-500 bg-gradient-to-t from-white/60 via-transparent to-white/40" />

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-6 md:py-12">
          <div className="max-w-xl lg:max-w-2xl bg-white/80 sm:bg-white/60 backdrop-blur-md p-6 sm:p-10 rounded-3xl border border-[#EAE3DF]/80 shadow-md">
            {/* Subtle Brand Accent Tag */}
            <div className="inline-flex items-center px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-medium tracking-wider uppercase mb-4 sm:mb-5 bg-[#F7EFEB]/95 text-[#78564C] border border-[#EAE3DF] shadow-2xs backdrop-blur-sm max-w-full">
              <span className="truncate">Curtains, Blinds &amp; Luxury Interiors</span>
            </div>

            {/* Headline */}
            <h1
              className="text-[30px] xs:text-[36px] sm:text-5xl lg:text-6xl font-normal not-italic text-[#25211F] leading-[1.16] sm:leading-[1.12] tracking-tight mb-4 sm:mb-5"
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
            <p className="text-[14px] sm:text-base lg:text-lg text-[#77716D] leading-relaxed max-w-lg mb-6 sm:mb-8 font-normal">
              Discover beautifully crafted curtains, blinds, and interior solutions designed to bring
              comfort, sophistication, and character to every space.
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6 sm:mb-8">
              <Link
                href="/curtains"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#C99583] hover:bg-[#B37D6B] text-white font-medium text-sm sm:text-base transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Our Curtains</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={() => openQuoteModal("Home Hero Consultation")}
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white/95 hover:bg-white text-[#25211F] border border-[#EAE3DF] hover:border-[#C99583] font-medium text-sm sm:text-base transition-all duration-200 shadow-2xs hover:scale-[1.02] active:scale-[0.98] backdrop-blur-sm"
              >
                <span>Get a Free Quote</span>
              </button>
            </div>

            {/* Subtle Trust Indicators */}
            <div className="grid grid-cols-3 gap-2 sm:gap-6 pt-4 sm:pt-5 border-t border-[#EAE3DF]/80">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Scissors className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C99583] shrink-0" />
                <span className="text-[11px] sm:text-xs lg:text-sm font-medium text-[#25211F] leading-tight">
                  Custom Tailoring
                </span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C99583] shrink-0" />
                <span className="text-[11px] sm:text-xs lg:text-sm font-medium text-[#25211F] leading-tight">
                  Precision Fit
                </span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C99583] shrink-0" />
                <span className="text-[11px] sm:text-xs lg:text-sm font-medium text-[#25211F] leading-tight">
                  Curated Fabrics
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Elegant Scroll Indicator */}
        <button
          onClick={progress > 0.7 ? handleScrollToNext : handleScrollToOpen}
          className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#EAE3DF]/80 text-[#77716D] hover:text-[#C99583] transition-all focus:outline-none z-10 shadow-xs active:scale-95"
          aria-label="Scroll to open curtains"
        >
          <span className="tracking-widest uppercase text-[9px] sm:text-[10px] font-semibold text-[#78564C]">
            {progress > 0.7 ? "Continue Story" : "Scroll to Open Curtains"}
          </span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce text-[#C99583]" />
        </button>
      </div>
    </section>
  );
}

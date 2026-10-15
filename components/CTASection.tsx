"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, MessageSquare } from "lucide-react";
import { useQuoteModal } from "./QuoteModalContext";
import { getWhatsAppUrl } from "@/lib/contact";

export default function CTASection() {
  const { openQuoteModal } = useQuoteModal();
  const waUrl = getWhatsAppUrl(
    "Hello Zaira Creative Design! I would like to consult with your team on custom curtains and interiors."
  );

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-[#FAF8F6] border-y border-[#EAE3DF]">
      {/* Background Decorative Image with Warm Tint */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=80"
          alt="Ethereal curtains in morning light"
          fill
          className="object-cover object-center opacity-15"
          sizes="100vw"
        />
        {/* Soft Blush & Warm White Gradient Overlay for Perfect Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F6] via-[#FAF8F6]/95 to-[#FAF8F6]/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Rose Gold Accent Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-[#F7EFEB] text-[#78564C] border border-[#EAE3DF]">
          <span className="w-2 h-2 rounded-full bg-[#C99583]" />
          <span>Begin Your Interior Journey</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#25211F] tracking-tight leading-[1.2] mb-6 max-w-3xl mx-auto">
          Let&apos;s Make Your Space{" "}
          <span className="text-[#C99583] font-medium">Beautiful</span>
        </h2>

        <p className="text-base sm:text-lg text-[#77716D] leading-relaxed max-w-2xl mx-auto mb-10">
          Tell us about your space, your style, and your vision. We&apos;ll help you explore the
          right curtains and interior solutions.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => openQuoteModal("Call To Action Section")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#C99583] hover:bg-[#B37D6B] text-white font-medium text-base transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
          >
            <Sparkles className="w-4 h-4" />
            <span>Request a Free Quote</span>
          </button>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-medium text-base transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}

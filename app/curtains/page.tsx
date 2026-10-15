"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MessageSquare,
  Sparkles,
  ChevronDown,
  Sun,
  Moon,
  Eye,
  Check,
  Ruler,
  ShieldCheck,
  Layers,
  ArrowRight,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import { curtainCategories } from "@/data/curtains";
import { faqsData } from "@/data/faqs";
import { getServiceWhatsAppUrl } from "@/lib/contact";
import { useQuoteModal } from "@/components/QuoteModalContext";
import CTASection from "@/components/CTASection";

export default function CurtainsPage() {
  const { openQuoteModal } = useQuoteModal();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filterOptions = [
    "All",
    "Blinds",
    "Curtains",
    "Complete Blockout",
    "Soft Daylight Filtering",
  ];

  const filteredCategories = curtainCategories.filter((cat) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Blinds") return cat.name.includes("Blinds");
    if (activeFilter === "Curtains") return cat.name.includes("Curtains");
    if (activeFilter === "Complete Blockout") return cat.lightControl === "Complete Blockout";
    if (activeFilter === "Soft Daylight Filtering")
      return cat.lightControl === "Soft Daylight Filtering";
    return true;
  });

  const roomGuides = [
    {
      room: "Living Rooms & High Ceilings",
      idealTreatment: "Double-Track Wave Sheers + Blackout Drapes",
      why: "Creates dramatic architectural scale, allows daytime filtered sunlight, and frames exterior garden or city views.",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    },
    {
      room: "Master Bedrooms & Suites",
      idealTreatment: "Triple-Weave Blackout Curtains or Roman Shades",
      why: "Delivers 100% morning darkness for deep, restorative sleep while muffling ambient street noise.",
      image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80",
    },
    {
      room: "Home Offices & Executive Studies",
      idealTreatment: "Zebra Blinds or Natural Wooden Blinds",
      why: "Precise angle control prevents monitor screen glare while maintaining gentle ambient illumination and executive prestige.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    },
    {
      room: "Balconies, French & Patio Doors",
      idealTreatment: "Vertical Blinds or Ceiling-Recessed Ripplefold Sheers",
      why: "Glides seamlessly along wide spans without obstructing the sliding door passage or gathering clutter.",
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const lightGuides = [
    {
      type: "Sheer & Daylight Filtering",
      icon: <Sun className="w-5 h-5 text-[#C99583]" />,
      description: "Diffuses harsh glare into a warm, luminous glow. Ideal for social spaces, dining rooms, and lounges.",
      recommendation: "Sheer Curtains, Bamboo Blinds, Screen Roller Blinds",
    },
    {
      type: "Variable Light Direction",
      icon: <Layers className="w-5 h-5 text-[#C99583]" />,
      description: "Adjustable slats and alternating bands that let you direct light up to the ceiling or down to the floor.",
      recommendation: "Zebra Blinds, Venetian Blinds, Wooden Blinds, Vertical Blinds",
    },
    {
      type: "100% Complete Blackout",
      icon: <Moon className="w-5 h-5 text-[#C99583]" />,
      description: "Dense multi-pass fabric barriers that completely occlude daylight and streetlight glare.",
      recommendation: "Blackout Drapery, Blockout Roller Blinds, Lined Roman Blinds",
    },
    {
      type: "Daytime Privacy Shield",
      icon: <Eye className="w-5 h-5 text-[#C99583]" />,
      description: "Preserves outward views into the garden or skyline while preventing outside viewers from peering in.",
      recommendation: "3%-5% Solar Screen Blinds, Sheer Voiles",
    },
  ];

  return (
    <div className="pt-24 lg:pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Curtains & Blinds" }]} />

        {/* Hero Section */}
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#F7EFEB] text-[#78564C] border border-[#EAE3DF]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C99583]" />
                <span>Our Signature Focus</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-[#25211F] tracking-tight leading-[1.12]">
                Bespoke Curtains &{" "}
                <span className="text-[#C99583] font-medium">Modern Window Blinds</span>
              </h1>

              <p className="text-base sm:text-lg text-[#77716D] leading-relaxed max-w-2xl">
                Window treatments are the soul of interior atmosphere. We craft custom drapery,
                designer blinds, and smart motorized tracks tailored to your room’s orientation,
                aesthetic character, and privacy requirements.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => openQuoteModal("Curtains & Blinds General Consultation")}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#C99583] hover:bg-[#B37D6B] text-white font-medium text-sm transition-all shadow-md hover:scale-[1.02]"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Request Free Measurement</span>
                </button>
                <a
                  href={getServiceWhatsAppUrl("Curtains & Blinds Inquiry")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-medium text-sm transition-all shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Consultant</span>
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-80 sm:h-[440px] rounded-3xl overflow-hidden shadow-2xl border border-[#EAE3DF]">
                <Image
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"
                  alt="Elegant floor-to-ceiling drapery with soft natural lighting"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Light Control & Privacy Guide Cards */}
      <div className="py-16 bg-[#FAF8F6] border-y border-[#EAE3DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Lighting Mastery"
            title="Light Filtration & Privacy Levels"
            subtitle="Understand how each fabric construction modulates sunshine and seclusion."
            align="center"
            className="mb-12"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {lightGuides.map((guide) => (
              <div
                key={guide.type}
                className="p-6 rounded-2xl bg-white border border-[#EAE3DF] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#F7EFEB] flex items-center justify-center mb-4">
                    {guide.icon}
                  </div>
                  <h3 className="text-lg font-medium text-[#25211F] mb-2">
                    {guide.type}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#77716D] leading-relaxed mb-4">
                    {guide.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#EAE3DF]/80">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#C99583] block">
                    Recommended Options:
                  </span>
                  <span className="text-xs text-[#25211F] font-medium mt-0.5 block">
                    {guide.recommendation}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ten Curtains & Blinds Categories Section */}
      <div className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Complete Collection"
          title="All Ten Curtains & Blinds Categories"
          subtitle="Click on any style to discover materials, operation options, and submit a direct WhatsApp inquiry."
          align="center"
          className="mb-10"
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setActiveFilter(opt)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                activeFilter === opt
                  ? "bg-[#C99583] text-white shadow-xs"
                  : "bg-white text-[#77716D] border border-[#EAE3DF] hover:border-[#C99583]"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* 10 Deep Category Cards */}
        <div className="space-y-16">
          {filteredCategories.map((category, idx) => {
            const isReversed = idx % 2 === 1;
            const waUrl = getServiceWhatsAppUrl(category.name);

            return (
              <div
                key={category.id}
                id={category.slug}
                className="scroll-mt-28 rounded-3xl bg-white border border-[#EAE3DF] p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Category Image */}
                  <div
                    className={`lg:col-span-6 relative h-72 sm:h-96 lg:h-[420px] rounded-2xl overflow-hidden border border-[#EAE3DF] ${
                      isReversed ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={category.image}
                      alt={category.alt}
                      fill
                      className="object-cover object-center hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-[#78564C] shadow-2xs border border-[#EAE3DF]">
                        {category.lightControl}
                      </span>
                    </div>
                  </div>

                  {/* Category Details */}
                  <div
                    className={`lg:col-span-6 space-y-5 ${
                      isReversed ? "lg:order-1" : ""
                    }`}
                  >
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#C99583]">
                        Category {idx + 1}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-medium text-[#25211F] mt-1">
                        {category.name}
                      </h2>
                    </div>

                    <p className="text-sm sm:text-base text-[#77716D] leading-relaxed">
                      {category.fullDescription}
                    </p>

                    {/* Features Grid */}
                    <div className="space-y-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#25211F]">
                        Key Specifications:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        {category.features.map((feat) => (
                          <li
                            key={feat}
                            className="flex items-start gap-2 text-xs sm:text-sm text-[#77716D]"
                          >
                            <Check className="w-3.5 h-3.5 text-[#C99583] shrink-0 mt-1" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Materials & Colors */}
                    <div className="p-3.5 rounded-xl bg-[#FAF8F6] border border-[#EAE3DF] space-y-1.5 text-xs">
                      <div>
                        <strong className="text-[#25211F]">Materials:</strong>{" "}
                        <span className="text-[#77716D]">
                          {category.materials.join(", ")}
                        </span>
                      </div>
                      <div>
                        <strong className="text-[#25211F]">Operation Modes:</strong>{" "}
                        <span className="text-[#77716D]">
                          {category.operation.join(" | ")}
                        </span>
                      </div>
                      <div>
                        <strong className="text-[#25211F]">Popular Finishes:</strong>{" "}
                        <span className="text-[#77716D]">
                          {category.popularChoices}
                        </span>
                      </div>
                    </div>

                    {/* Action Triggers */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-medium transition-transform hover:scale-[1.02]"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Enquire on WhatsApp</span>
                      </a>
                      <button
                        onClick={() => openQuoteModal(category.name)}
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#C99583] hover:bg-[#B37D6B] text-white text-xs sm:text-sm font-medium transition-transform hover:scale-[1.02]"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Request Measurement</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Room-by-Room Recommendations */}
      <div className="py-20 bg-[#FAF8F6] border-y border-[#EAE3DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Expert Guide"
            title="Room-Based Curtain Recommendations"
            subtitle="How to select window dressings tailored to the specific functions of each living zone."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roomGuides.map((guide) => (
              <div
                key={guide.room}
                className="rounded-2xl overflow-hidden bg-white border border-[#EAE3DF] shadow-xs flex flex-col justify-between"
              >
                <div className="relative h-44 w-full">
                  <Image
                    src={guide.image}
                    alt={guide.room}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-base font-medium text-[#25211F]">
                      {guide.room}
                    </h3>
                    <div className="mt-1 inline-block text-xs font-semibold text-[#C99583]">
                      {guide.idealTreatment}
                    </div>
                    <p className="text-xs text-[#77716D] mt-2 leading-relaxed">
                      {guide.why}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Measurement & Fitting Process */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Precision Fit"
          title="Our Measurement & Installation Process"
          subtitle="Millimeter accuracy guarantees silent track gliding and flawless drapery drop."
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-white border border-[#EAE3DF] shadow-xs">
            <Ruler className="w-8 h-8 text-[#C99583] mb-4" />
            <span className="text-xs font-bold text-[#C99583] uppercase tracking-wider">
              Step 01
            </span>
            <h3 className="text-xl font-medium text-[#25211F] mt-1 mb-2">
              On-Site Laser Measurement
            </h3>
            <p className="text-sm text-[#77716D] leading-relaxed">
              We check ceiling levels, sill clearances, reveal depths, and wall studs with precision
              laser instruments so your track mounts securely and straight.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-[#EAE3DF] shadow-xs">
            <Layers className="w-8 h-8 text-[#C99583] mb-4" />
            <span className="text-xs font-bold text-[#C99583] uppercase tracking-wider">
              Step 02
            </span>
            <h3 className="text-xl font-medium text-[#25211F] mt-1 mb-2">
              Custom Stitching & Hem Weighting
            </h3>
            <p className="text-sm text-[#77716D] leading-relaxed">
              Fabrics are hand-measured and cut on flat sizing tables. Weighted lead tapes are sewn
              into bottom corners to create a smooth, vertical drop without curling.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-[#EAE3DF] shadow-xs">
            <ShieldCheck className="w-8 h-8 text-[#C99583] mb-4" />
            <span className="text-xs font-bold text-[#C99583] uppercase tracking-wider">
              Step 03
            </span>
            <h3 className="text-xl font-medium text-[#25211F] mt-1 mb-2">
              Professional Fitting & Steam Dressing
            </h3>
            <p className="text-sm text-[#77716D] leading-relaxed">
              Our technicians mount tracks, test motorization limits, hang and memory-fold the pleats,
              and steam the fabric on-site so it looks impeccable immediately.
            </p>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions Accordion */}
      <div className="py-20 bg-[#FAF8F6] border-t border-[#EAE3DF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Got Questions?"
            title="Curtains & Blinds FAQs"
            subtitle="Answers to common queries about fabrics, motorized systems, lead times, and maintenance."
            align="center"
            className="mb-12"
          />

          <div className="space-y-3">
            {faqsData.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={faq.question}
                  className="rounded-2xl bg-white border border-[#EAE3DF] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left font-medium text-[#25211F] hover:text-[#C99583] transition-colors"
                  >
                    <span className="text-sm sm:text-base pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#C99583] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#77716D] leading-relaxed border-t border-[#EAE3DF]/60 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}

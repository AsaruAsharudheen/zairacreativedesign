import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Layers, CheckCircle2, Scissors, ShieldCheck, HeartHandshake, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us | Thoughtful Design, Beautiful Living",
  description:
    "Learn about Zaira Creative Design—our passion for bespoke curtains, precision window blinds, and tailored architectural interior solutions.",
};

export default function AboutPage() {
  const pillars = [
    {
      title: "Our Philosophy",
      subtitle: "Comfort & Character",
      desc: "We believe true luxury is quiet, tactile, and deeply comfortable. Rather than following transient trends, we craft interiors and window draperies that age gracefully with enduring elegance.",
    },
    {
      title: "Our Mission",
      subtitle: "Tailored Living",
      desc: "To empower homeowners and designers with carefully curated fabrics, precision laser measurement, and seamless installation that turns everyday spaces into personal havens.",
    },
    {
      title: "Our Vision",
      subtitle: "Enduring Craftsmanship",
      desc: "To be the most trusted studio for window treatments and fine interior detailing, recognized for millimeter accuracy, material transparency, and exceptional client care.",
    },
  ];

  const craftDisciplines = [
    {
      title: "Bespoke Curtains & Blinds",
      category: "Signature Focus",
      desc: "Our primary business and daily passion. From sheer wave pleats to motorized blackout systems and natural wooden blinds, we craft window dressings for every sun orientation and aesthetic.",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
      href: "/curtains",
    },
    {
      title: "Residential Interior Design",
      category: "Spaces & Flow",
      desc: "Harmonizing materials, layout, and lighting into cohesive living rooms, serene master bedrooms, and functional living spaces.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
      href: "/services/interior-design",
    },
    {
      title: "Architectural Gypsum Ceilings",
      category: "Light & Atmosphere",
      desc: "Modern false ceilings featuring concealed cove LED troughs, flush shadow lines, and curtain pocket recesses.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      href: "/services/gypsum-work",
    },
    {
      title: "Custom Metal Fabrication",
      category: "Structure & Detail",
      desc: "High-tolerance laser-cut room partitions, glass-and-steel sliding doors, and architectural metalwork.",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
      href: "/services/fabrication",
    },
    {
      title: "Modern Staircase Design",
      category: "Sculptural Form",
      desc: "Cantilevered floating steps, timber treads, and custom railings combining steel, brass, and glass.",
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
      href: "/services/staircase-design",
    },
  ];

  return (
    <div className="pt-24 lg:pt-28 pb-16">
      {/* Breadcrumbs Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "About Us" }]} />

        {/* Hero Section */}
        <div className="py-12 sm:py-16 max-w-4xl">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-5 bg-[#F7EFEB] text-[#78564C] border border-[#EAE3DF]">
            <span>Our Story & Values</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-[#25211F] tracking-tight leading-[1.15] mb-6">
            Thoughtful Design.{" "}
            <span className="text-[#C99583] font-medium">Beautiful Living.</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#77716D] leading-relaxed max-w-3xl">
            Zaira Creative Design was founded with a singular conviction: that thoughtful,
            well-crafted interior elements bring tranquility, warmth, and grace to everyday life.
          </p>
        </div>
      </div>

      {/* Narrative Section with Editorial Visuals */}
      <div className="bg-[#FAF8F6] py-16 sm:py-24 border-y border-[#EAE3DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#78564C]">
                Our Commitment to Quality
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal text-[#25211F] tracking-tight">
                Crafting Spaces That Balance Aesthetics and Everyday Function
              </h2>
              <p className="text-base text-[#77716D] leading-relaxed">
                While our primary focus and signature mastery remains in{" "}
                <strong className="text-[#25211F] font-medium">curtains and window blinds</strong>,
                our design philosophy encompasses the broader architectural framework of the home.
              </p>
              <p className="text-base text-[#77716D] leading-relaxed">
                Whether selecting a triple-weave blackout drape for a bedroom, engineering a
                cantilevered staircase, or installing a recessed cove ceiling, we bring the same
                rigorous standard of craftsmanship, material honesty, and personal client care.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-2.5">
                  <Scissors className="w-4 h-4 text-[#C99583] shrink-0" />
                  <span className="text-sm font-medium text-[#25211F]">Artisanal Drapery Stitching</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#C99583] shrink-0" />
                  <span className="text-sm font-medium text-[#25211F]">Millimeter-Exact Fitting</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <HeartHandshake className="w-4 h-4 text-[#C99583] shrink-0" />
                  <span className="text-sm font-medium text-[#25211F]">Personal Design Guidance</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Layers className="w-4 h-4 text-[#C99583] shrink-0" />
                  <span className="text-sm font-medium text-[#25211F]">Curated Fabric Library</span>
                </div>
              </div>
            </div>

            {/* Split Images */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-md border border-[#EAE3DF]">
                <Image
                  src="https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=800&q=80"
                  alt="Tailored Roman blinds in luxury residential bedroom"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-md border border-[#EAE3DF] translate-y-6">
                <Image
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
                  alt="Double height sheer wave drapes with natural light"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Pillars Grid */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Guiding Principles"
          title="The Foundation of Every Project"
          subtitle="How our values translate into a seamless, elevated experience for our clients."
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-8 rounded-2xl bg-white border border-[#EAE3DF] shadow-xs hover:shadow-md transition-shadow"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C99583]">
                {pillar.subtitle}
              </span>
              <h3 className="text-2xl font-medium text-[#25211F] mt-1 mb-3">
                {pillar.title}
              </h3>
              <p className="text-sm text-[#77716D] leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Overview of All Disciplines */}
      <div className="py-20 bg-[#FAF8F6] border-t border-[#EAE3DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Full Suite of Services"
            title="Our Craft Disciplines"
            subtitle="Explore how our diverse craft disciplines integrate to create harmonious residences."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {craftDisciplines.map((item) => (
              <div
                key={item.title}
                className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-[#EAE3DF] shadow-xs hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/95 text-[#78564C] border border-[#EAE3DF]">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-[#25211F] group-hover:text-[#C99583] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#77716D] leading-relaxed mt-2">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#78564C] group-hover:text-[#C99583] transition-colors"
                    >
                      <span>Explore Details</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <CTASection />
    </div>
  );
}

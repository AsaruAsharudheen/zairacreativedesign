import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Sparkles, MessageSquare, Check, Layers, Lightbulb, ShieldCheck } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { servicesData } from "@/data/services";
import { getServiceWhatsAppUrl } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Gypsum False Ceilings & Cove Lighting | Zaira Creative Design",
  description:
    "Sculptural false ceilings, concealed LED cove light channels, flush magnetic track lighting, and acoustic drywall partitions.",
};

export default function GypsumWorkPage() {
  const service = servicesData.find((s) => s.slug === "gypsum-work")!;
  const waUrl = getServiceWhatsAppUrl("Gypsum Ceilings & Lighting Inquiry");

  return (
    <div className="pt-24 lg:pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Services", href: "/#services" },
            { label: "Gypsum Work" },
          ]}
        />

        {/* Hero */}
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#F7EFEB] text-[#78564C] border border-[#EAE3DF]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C99583]" />
                <span>{service.tagline}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-[#25211F] tracking-tight leading-[1.15]">
                Modern Gypsum Ceilings &{" "}
                <span className="text-[#C99583] font-medium italic">Concealed Illumination</span>
              </h1>

              <p className="text-base sm:text-lg text-[#77716D] leading-relaxed max-w-2xl">
                {service.fullDescription}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact?service=Gypsum+False+Ceilings"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#C99583] hover:bg-[#B37D6B] text-white font-medium text-sm transition-all shadow-md hover:scale-[1.02]"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Request Ceiling Estimate</span>
                </Link>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-medium text-sm transition-all shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Ceiling Expert</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-80 sm:h-[440px] rounded-3xl overflow-hidden shadow-2xl border border-[#EAE3DF]">
                <Image
                  src={service.image}
                  alt={service.alt}
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

      {/* Key Features */}
      <div className="py-20 bg-[#FAF8F6] border-y border-[#EAE3DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Ceiling Excellence"
            title="Architectural False Ceiling Highlights"
            subtitle="How we create smooth, crack-free planes with integrated indirect illumination."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.keyFeatures.map((feat) => (
              <div
                key={feat.title}
                className="p-6 rounded-2xl bg-white border border-[#EAE3DF] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#F7EFEB] text-[#C99583] flex items-center justify-center mb-4">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-medium text-[#25211F] mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#77716D] leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Precision Craft"
          title="Ceiling Installation Workflow"
          subtitle="Laser alignment and seamless taping deliver a flawless, paint-ready surface."
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.processSteps.map((step) => (
            <div
              key={step.step}
              className="p-6 rounded-2xl bg-white border border-[#EAE3DF] shadow-xs"
            >
              <span className="text-xs font-bold text-[#C99583] uppercase tracking-wider block mb-2">
                Phase {step.step}
              </span>
              <h3 className="text-xl font-medium text-[#25211F] mb-2">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#77716D] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <CTASection />
    </div>
  );
}

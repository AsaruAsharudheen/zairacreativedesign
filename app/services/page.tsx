import React from "react";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServicesOverview from "@/components/ServicesOverview";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Our Services | Curtains, Blinds & Interior Craftsmanship",
  description:
    "Explore Zaira Creative Design's full range of services: bespoke curtains, modern window blinds, residential interior design, architectural gypsum false ceilings, custom metal fabrication, and staircase design.",
};

export default function ServicesPage() {
  return (
    <div className="pt-24 lg:pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Services" }]} />
      </div>

      <ServicesOverview />

      <CTASection />
    </div>
  );
}

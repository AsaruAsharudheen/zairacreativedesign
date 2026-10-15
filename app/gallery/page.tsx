import React from "react";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProjectGallery from "@/components/ProjectGallery";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Project Gallery | Curtains, Blinds & Interior Showcase",
  description:
    "Explore our portfolio of bespoke curtains, luxury window blinds, contemporary residential interiors, architectural false ceilings, and metal fabrication.",
};

export default function GalleryPage() {
  return (
    <div className="pt-24 lg:pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Gallery" }]} />
      </div>

      {/* Main Interactive Project Gallery with Lightbox and Category Filters */}
      <ProjectGallery isHomePage={false} />

      {/* Conversion Section */}
      <CTASection />
    </div>
  );
}

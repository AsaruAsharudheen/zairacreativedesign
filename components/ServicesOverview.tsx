import React from "react";
import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";
import { servicesData } from "@/data/services";

export default function ServicesOverview() {
  const featuredService = servicesData.find((s) => s.isFeatured) || servicesData[0];
  const secondaryServices = servicesData.filter((s) => !s.isFeatured);

  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Tailored Solutions"
          title="Our Expertise, Your Inspiration"
          subtitle="From our signature custom window drapery to complete architectural interior transformations, explore our core craftsmanship."
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Featured Service: Curtains & Blinds (Full Width on desktop) */}
          <ServiceCard service={featuredService} featured={true} />

          {/* 4 Secondary Services */}
          {secondaryServices.map((service) => (
            <ServiceCard key={service.id} service={service} featured={false} />
          ))}
        </div>
      </div>
    </section>
  );
}

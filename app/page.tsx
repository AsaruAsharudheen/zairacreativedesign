import React from "react";
import Hero from "@/components/Hero";
import BrandIntro from "@/components/BrandIntro";
import ServicesOverview from "@/components/ServicesOverview";
import FeaturedCurtains from "@/components/FeaturedCurtains";
import WhyChooseSection from "@/components/WhyChooseSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import ProjectGallery from "@/components/ProjectGallery";
import TestimonialSection from "@/components/TestimonialSection";
import CTASection from "@/components/CTASection";
import ContactPreview from "@/components/ContactPreview";
import { siteConfig } from "@/data/siteConfig";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: siteConfig.name,
    image: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: siteConfig.contact.address.country,
    },
    url: siteConfig.url,
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:30",
        closes: "20:00",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Section 1: Premium Hero */}
      <Hero />

      {/* Section 2: Brand Introduction */}
      <BrandIntro />

      {/* Section 3: Explore Our Services */}
      <ServicesOverview />

      {/* Section 4: Featured Curtains & Blinds */}
      <FeaturedCurtains />

      {/* Section 5: Why Choose Zaira? */}
      <WhyChooseSection />

      {/* Section 6: Our Process */}
      <ProcessTimeline />

      {/* Section 7: Featured Projects */}
      <ProjectGallery isHomePage={true} limit={6} />

      {/* Section 8: Customer Testimonials */}
      <TestimonialSection />

      {/* Section 9: Call to Action */}
      <CTASection />

      {/* Section 10: Contact Preview */}
      <ContactPreview />
    </>
  );
}

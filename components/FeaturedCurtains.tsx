import React from "react";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import CurtainCard from "./CurtainCard";
import { curtainCategories } from "@/data/curtains";
import { ArrowRight } from "lucide-react";

export default function FeaturedCurtains() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Signature Collection"
          title="The Perfect Curtains for Every Space"
          subtitle="From soft, flowing fabrics to contemporary blinds, discover window treatments that balance beauty, privacy, and everyday functionality."
          align="center"
          className="mb-14"
        />

        {/* 10 Distinct Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {curtainCategories.map((curtain, index) => (
            <CurtainCard
              key={curtain.id}
              curtain={curtain}
              priority={index < 3}
            />
          ))}
        </div>

        {/* View All Curtains & Blinds Button */}
        <div className="mt-14 text-center">
          <Link
            href="/curtains"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#C99583] hover:bg-[#B37D6B] text-white font-medium text-base transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>View All Curtains & Blinds Guide</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

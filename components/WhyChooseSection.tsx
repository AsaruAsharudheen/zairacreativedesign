import React from "react";
import SectionHeading from "./SectionHeading";
import { whyChooseBenefits } from "@/data/whyChooseUs";
import { Sparkles, Layers, CheckCircle2, Compass, Wrench } from "lucide-react";

export default function WhyChooseSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-[#C99583]" />;
      case "Layers":
        return <Layers className="w-6 h-6 text-[#C99583]" />;
      case "CheckCircle2":
        return <CheckCircle2 className="w-6 h-6 text-[#C99583]" />;
      case "Compass":
        return <Compass className="w-6 h-6 text-[#C99583]" />;
      case "Wrench":
        return <Wrench className="w-6 h-6 text-[#C99583]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#C99583]" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Values & Standards"
          title="The Difference Is in the Details"
          subtitle="We focus on authentic craftsmanship, material honesty, and thoughtful client care at every phase of your project."
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {whyChooseBenefits.map((benefit, index) => (
            <div
              key={benefit.id}
              className={`p-8 rounded-2xl bg-white border border-[#EAE3DF] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between ${
                index === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F7EFEB] flex items-center justify-center mb-6">
                  {getIcon(benefit.iconName)}
                </div>

                <h3 className="text-xl font-medium text-[#25211F] mb-3">
                  {benefit.title}
                </h3>

                <p className="text-sm text-[#77716D] leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EAE3DF]/60 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C99583]" />
                <span className="text-xs font-medium text-[#78564C] tracking-wider uppercase">
                  Zaira Quality Standard
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

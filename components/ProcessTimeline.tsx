import React from "react";
import SectionHeading from "./SectionHeading";
import { processSteps } from "@/data/process";

export default function ProcessTimeline() {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="How We Work"
          title="From Inspiration to Installation"
          subtitle="A transparent, collaborative four-step journey designed to ensure effortless planning and a flawless final fit."
          align="center"
          className="mb-16"
        />

        {/* Desktop Horizontal Timeline (Visible on lg+) */}
        <div className="hidden lg:block relative">
          {/* Subtle Connecting Line */}
          <div className="absolute top-1/4 left-10 right-10 h-0.5 bg-[#EAE3DF] -translate-y-1/2 -z-0" />

          <div className="grid grid-cols-4 gap-8 relative z-10">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="group flex flex-col p-6 rounded-2xl bg-white border border-[#EAE3DF] shadow-xs hover:shadow-lg hover:border-[#C99583] transition-all duration-300"
              >
                {/* Step Indicator */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#FAF8F6] group-hover:bg-[#C99583] group-hover:text-white border-2 border-[#C99583] text-[#78564C] flex items-center justify-center font-semibold text-lg transition-colors">
                    {step.number}
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9C948F]">
                    Step {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-medium text-[#25211F] mb-1">
                  {step.title}
                </h3>
                <span className="text-xs font-medium text-[#C99583] mb-3 block">
                  {step.subtitle}
                </span>

                <p className="text-sm text-[#77716D] leading-relaxed mb-4 flex-1">
                  {step.description}
                </p>

                <div className="pt-3 border-t border-[#EAE3DF]/60">
                  <span className="text-[11px] text-[#78564C] font-medium block">
                    Deliverable:
                  </span>
                  <p className="text-xs text-[#9C948F] mt-0.5">
                    {step.deliverable}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Timeline (Visible on < lg) */}
        <div className="block lg:hidden relative pl-6 sm:pl-8 border-l-2 border-[#C99583]/40 space-y-8 ml-3 sm:ml-4">
          {processSteps.map((step) => (
            <div key={step.number} className="relative group">
              {/* Timeline Marker */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-0 w-8 h-8 rounded-full bg-[#FAF8F6] border-2 border-[#C99583] text-[#78564C] flex items-center justify-center text-xs font-bold shadow-xs">
                {step.number}
              </div>

              <div className="p-6 rounded-2xl bg-[#FAF8F6] border border-[#EAE3DF] shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#C99583]">
                    {step.subtitle}
                  </span>
                  <span className="text-xs text-[#9C948F]">Step {step.number}</span>
                </div>

                <h3 className="text-xl font-medium text-[#25211F] mb-2">
                  {step.title}
                </h3>

                <p className="text-sm text-[#77716D] leading-relaxed mb-4">
                  {step.description}
                </p>

                <div className="pt-3 border-t border-[#EAE3DF]">
                  <span className="text-xs font-medium text-[#78564C]">
                    Outcome:
                  </span>
                  <span className="text-xs text-[#77716D] ml-1.5">
                    {step.deliverable}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

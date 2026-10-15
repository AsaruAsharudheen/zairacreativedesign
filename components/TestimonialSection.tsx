import React from "react";
import SectionHeading from "./SectionHeading";
import { testimonialsData } from "@/data/testimonials";
import { Star, Quote, CheckCircle } from "lucide-react";

export default function TestimonialSection() {
  const hasReviews = testimonialsData && testimonialsData.length > 0;

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Client Reflections"
          title="What Our Customers Say"
          subtitle="Honest feedback from residential and commercial clients who trusted us with their window drapery and interior spaces."
          align="center"
          className="mb-14"
        />

        {hasReviews ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonialsData.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-between p-8 rounded-2xl bg-[#FAF8F6] border border-[#EAE3DF] shadow-xs hover:shadow-md transition-all duration-300 relative group"
              >
                <div>
                  {/* Subtle Quote Icon & Category */}
                  <div className="flex items-center justify-between mb-5">
                    <Quote className="w-8 h-8 text-[#DFC0B5] group-hover:text-[#C99583] transition-colors" />
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#78564C] bg-white px-2.5 py-1 rounded-full border border-[#EAE3DF]">
                      {item.serviceCategory}
                    </span>
                  </div>

                  {/* Rating Stars */}
                  {item.rating && (
                    <div className="flex items-center gap-1 mb-4 text-[#C99583]">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-[#C99583]" />
                      ))}
                    </div>
                  )}

                  <p className="text-sm sm:text-base text-[#25211F] leading-relaxed italic mb-6">
                    &ldquo;{item.feedback}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-[#EAE3DF] flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium text-[#25211F]">
                      {item.clientName}
                    </h4>
                    {item.roleOrLocation && (
                      <p className="text-xs text-[#77716D] mt-0.5">
                        {item.roleOrLocation}
                      </p>
                    )}
                  </div>

                  {item.verified && (
                    <div
                      className="flex items-center gap-1 text-[11px] text-[#78564C] font-medium"
                      title="Verified Project"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-[#C99583]" />
                      <span>Verified</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Clean testimonial placeholder state when reviews are being collected */
          <div className="max-w-xl mx-auto p-8 rounded-2xl bg-[#FAF8F6] border border-[#EAE3DF] text-center space-y-3">
            <Quote className="w-10 h-10 text-[#C99583] mx-auto" />
            <h3 className="text-lg font-medium text-[#25211F]">
              Client Testimonials Coming Soon
            </h3>
            <p className="text-sm text-[#77716D] leading-relaxed">
              We are currently curating authentic client reviews from our recent curtain, blind,
              and interior design installations.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

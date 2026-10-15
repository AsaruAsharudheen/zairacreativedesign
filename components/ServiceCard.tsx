import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { ServiceItem } from "@/data/services";

interface ServiceCardProps {
  service: ServiceItem;
  featured?: boolean;
}

export default function ServiceCard({ service, featured = false }: ServiceCardProps) {
  if (featured) {
    return (
      <div className="relative col-span-1 md:col-span-2 lg:col-span-4 rounded-3xl overflow-hidden bg-white border border-[#EAE3DF] shadow-md hover:shadow-xl transition-all duration-300 group">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          {/* Featured Image */}
          <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[460px] overflow-hidden">
            <Image
              src={service.image}
              alt={service.alt}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:hidden" />
            <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C99583] text-white text-xs font-semibold tracking-wider uppercase shadow-sm">
              <span>Primary Specialty</span>
            </div>
          </div>

          {/* Featured Content */}
          <div className="lg:col-span-5 p-6 sm:p-10 lg:p-12 space-y-5 bg-white">
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#78564C]">
                {service.tagline}
              </span>
              <h3 className="text-2xl sm:text-3xl font-medium text-[#25211F]">
                {service.title}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-[#77716D] leading-relaxed">
              {service.shortDescription}
            </p>

            {/* Bullets */}
            <ul className="space-y-2.5 pt-1">
              {service.bulletPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#25211F]">
                  <span className="w-4 h-4 rounded-full bg-[#F7EFEB] text-[#C99583] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5" />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <Link
                href={service.href}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C99583] hover:bg-[#B37D6B] text-white text-sm font-medium transition-all shadow-sm hover:scale-[1.02]"
              >
                <span>Explore Curtains & Blinds</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group flex flex-col h-full rounded-2xl overflow-hidden bg-white border border-[#EAE3DF] shadow-xs hover:shadow-xl hover:border-[#C99583]/50 transition-all duration-300">
      {/* Image */}
      <div className="relative h-60 sm:h-64 overflow-hidden bg-[#F7EFEB]">
        <Image
          src={service.image}
          alt={service.alt}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div className="flex flex-col">
          <div className="h-6 flex items-center mb-1">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#78564C] truncate">
              {service.tagline}
            </span>
          </div>
          <h3 className="text-xl font-medium text-[#25211F] group-hover:text-[#C99583] transition-colors h-7 flex items-center mb-2.5">
            {service.title}
          </h3>
          <p className="text-sm text-[#77716D] leading-relaxed line-clamp-3 min-h-[4.25rem]">
            {service.shortDescription}
          </p>
        </div>

        <div className="pt-4 mt-5 border-t border-[#EAE3DF]/80 flex items-center justify-between">
          <Link
            href={service.href}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#78564C] group-hover:text-[#C99583] uppercase tracking-wider transition-colors"
          >
            <span>Learn More</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}

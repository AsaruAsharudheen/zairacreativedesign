"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageSquare, ArrowRight } from "lucide-react";
import { CurtainCategory } from "@/data/curtains";
import { getServiceWhatsAppUrl } from "@/lib/contact";
import { useQuoteModal } from "./QuoteModalContext";

interface CurtainCardProps {
  curtain: CurtainCategory;
  priority?: boolean;
}

export default function CurtainCard({ curtain, priority = false }: CurtainCardProps) {
  const { openQuoteModal } = useQuoteModal();
  const waUrl = getServiceWhatsAppUrl(curtain.name);

  return (
    <div
      id={curtain.slug}
      className="group flex flex-col h-full rounded-2xl overflow-hidden bg-white border border-[#EAE3DF] shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      {/* Image with subtle hover zoom & consistent 4:3 / 16:10 aspect ratio */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF8F6]">
        <Image
          src={curtain.image}
          alt={curtain.alt}
          fill
          priority={priority}
          className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Floating Light Control Badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium tracking-wide bg-white/95 text-[#78564C] shadow-2xs backdrop-blur-xs border border-[#EAE3DF]">
            <span>{curtain.lightControl}</span>
          </span>
        </div>

        {/* Hover Quick WhatsApp Button Overlay */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 p-4">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#25D366] text-white text-xs font-medium shadow-md hover:bg-[#20ba59] transition-transform hover:scale-105"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Enquire on WhatsApp</span>
          </a>
          <button
            onClick={() => openQuoteModal(curtain.name)}
            className="inline-flex items-center px-3.5 py-2 rounded-full bg-white text-[#25211F] text-xs font-medium shadow-md hover:bg-[#FAF8F6] transition-transform hover:scale-105"
          >
            <span>Get Quote</span>
          </button>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-xl font-medium text-[#25211F] group-hover:text-[#C99583] transition-colors">
              {curtain.name}
            </h3>
            <span className="text-[11px] uppercase tracking-wider text-[#9C948F] font-medium shrink-0">
              {curtain.privacyLevel}
            </span>
          </div>

          <p className="text-sm text-[#77716D] leading-relaxed line-clamp-2">
            {curtain.shortDescription}
          </p>

          {/* Ideal Rooms Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {curtain.idealRooms.slice(0, 3).map((room) => (
              <span
                key={room}
                className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-[#FAF8F6] text-[#78564C] border border-[#EAE3DF]/60"
              >
                {room}
              </span>
            ))}
          </div>
        </div>

        {/* Action Footers */}
        <div className="pt-3 border-t border-[#EAE3DF] flex items-center justify-between">
          <Link
            href={`/curtains#${curtain.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#78564C] group-hover:text-[#C99583] transition-colors"
          >
            <span>Explore Style</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>

          <button
            onClick={() => openQuoteModal(curtain.name)}
            className="text-xs font-medium text-[#77716D] hover:text-[#C99583] transition-colors underline underline-offset-4 decoration-[#EAE3DF]"
          >
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  );
}

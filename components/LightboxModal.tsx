"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";
import { GalleryItem } from "@/data/gallery";
import { getServiceWhatsAppUrl } from "@/lib/contact";
import { useQuoteModal } from "./QuoteModalContext";

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export default function LightboxModal({
  item,
  onClose,
  onNext,
  onPrev,
}: LightboxModalProps) {
  const { openQuoteModal } = useQuoteModal();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && onNext) onNext();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
    };

    if (item) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose, onNext, onPrev]);

  if (!item) return null;

  const waUrl = getServiceWhatsAppUrl(`${item.title} (${item.category})`);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image Preview Lightbox"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
        aria-label="Close image lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Navigation Button */}
      {onPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="hidden sm:flex absolute left-4 z-20 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next Navigation Button */}
      {onNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="hidden sm:flex absolute right-4 z-20 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Card Wrapper */}
      <div
        className="relative max-w-4xl w-full max-h-[92vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-[#EAE3DF]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-[45vh] sm:h-[60vh] bg-black">
          <Image
            src={item.image}
            alt={item.alt}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 1000px"
          />
        </div>

        {/* Caption & Consultation Action Footer */}
        <div className="p-5 sm:p-6 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#EAE3DF]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] uppercase font-semibold tracking-wider text-[#C99583] bg-[#F7EFEB] px-2 py-0.5 rounded-full">
                {item.category}
              </span>
              {item.location && (
                <span className="text-xs text-[#77716D]">• {item.location}</span>
              )}
            </div>
            <h3 className="text-lg sm:text-xl font-medium text-[#25211F]">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#77716D] mt-1 max-w-xl">
              {item.description}
            </p>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto shrink-0">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-medium transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquire This Style</span>
            </a>
            <button
              onClick={() => {
                onClose();
                openQuoteModal(item.title);
              }}
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl border border-[#EAE3DF] bg-[#FAF8F6] hover:bg-white text-[#25211F] text-xs sm:text-sm font-medium transition-colors"
            >
              <span>Quote</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

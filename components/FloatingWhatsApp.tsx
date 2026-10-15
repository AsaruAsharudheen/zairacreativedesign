"use client";

import React, { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { getWhatsAppUrl } from "@/lib/contact";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const waUrl = getWhatsAppUrl();

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Popover Badge */}
      {isOpen && (
        <div className="mb-3 w-72 rounded-2xl bg-white p-4 shadow-2xl border border-[#EAE3DF] animate-fade-in">
          <div className="flex items-center justify-between pb-2 border-b border-[#EAE3DF]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
              <span className="text-xs font-semibold text-[#25211F]">
                Zaira Design Studio
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#77716D] hover:text-[#25211F] p-1"
              aria-label="Dismiss chat badge"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-[#77716D] mt-2 leading-relaxed">
            Hello! Have a question about our curtains, blinds, or interior packages? Chat directly with our specialist on WhatsApp.
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block text-center w-full py-2 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-medium transition-colors"
          >
            Start WhatsApp Chat
          </a>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="relative group">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
          aria-label="Open WhatsApp conversation"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-7 h-7" />}
        </button>

        {/* Desktop Tooltip */}
        {!isOpen && (
          <div className="hidden lg:block absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 rounded-xl bg-[#25211F] text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
            Chat on WhatsApp
          </div>
        )}
      </div>
    </div>
  );
}

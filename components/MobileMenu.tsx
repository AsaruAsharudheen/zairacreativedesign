"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, ChevronDown, ChevronRight, MessageSquare, Phone } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { getWhatsAppUrl, getTelUrl } from "@/lib/contact";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: (service?: string) => void;
}

export default function MobileMenu({ isOpen, onClose, onOpenQuote }: MobileMenuProps) {
  const pathname = usePathname();
  const [servicesExpanded, setServicesExpanded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Close on route change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-in Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col z-10 overflow-hidden transform transition-transform duration-300 ease-out">
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#EAE3DF] bg-[#FAF8F6]">
          <Link href="/" onClick={onClose} className="flex items-center">
            <Image
              src={siteConfig.logo}
              alt={siteConfig.logoAlt}
              width={140}
              height={50}
              className="h-9 w-auto object-contain"
            />
          </Link>
          <button
            onClick={onClose}
            className="p-2 text-[#77716D] hover:text-[#25211F] rounded-full hover:bg-black/5 transition-colors"
            aria-label="Close navigation menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links Scrollable Area */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-2">
          {siteConfig.navigation.map((item) => {
            const isActive = pathname === item.href;

            if (item.children) {
              return (
                <div key={item.title} className="border-b border-[#EAE3DF]/60 pb-2">
                  <button
                    onClick={() => setServicesExpanded(!servicesExpanded)}
                    className="w-full flex items-center justify-between py-3 text-lg font-medium text-[#25211F] hover:text-[#C99583] transition-colors"
                  >
                    <span>{item.title}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#77716D] transition-transform duration-200 ${
                        servicesExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {servicesExpanded && (
                    <div className="pl-4 pb-2 space-y-2.5">
                      {item.children.map((subItem) => {
                        const isSubActive = pathname === subItem.href;
                        return (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            onClick={onClose}
                            className={`flex flex-col py-2 px-3 rounded-xl transition-colors ${
                              isSubActive
                                ? "bg-[#F7EFEB] text-[#78564C] font-medium"
                                : "text-[#77716D] hover:text-[#25211F] hover:bg-[#FAF8F6]"
                            }`}
                          >
                            <span className="text-sm font-medium">{subItem.title}</span>
                            {subItem.description && (
                              <span className="text-xs text-[#9C948F] line-clamp-1">
                                {subItem.description}
                              </span>
                            )}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.title}
                href={item.href}
                onClick={onClose}
                className={`flex items-center justify-between py-3 px-3 rounded-xl text-lg font-medium transition-colors ${
                  isActive
                    ? "bg-[#F7EFEB] text-[#78564C]"
                    : "text-[#25211F] hover:text-[#C99583] hover:bg-[#FAF8F6]"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span>{item.title}</span>
                  {item.badge && (
                    <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-[#C99583] text-white">
                      {item.badge}
                    </span>
                  )}
                </div>
                <ChevronRight className="w-4 h-4 text-[#C99583]" />
              </Link>
            );
          })}
        </div>

        {/* Footer Actions in Drawer */}
        <div className="p-6 border-t border-[#EAE3DF] bg-[#FAF8F6] space-y-3">
          <button
            onClick={() => {
              onClose();
              onOpenQuote();
            }}
            className="w-full flex items-center justify-center py-3.5 px-4 rounded-xl bg-[#C99583] hover:bg-[#B37D6B] text-white font-medium text-sm transition-colors shadow-sm"
          >
            <span>Get a Free Quote</span>
          </button>

          <div className="grid grid-cols-2 gap-2">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#25D366] text-white font-medium text-xs hover:bg-[#20ba59] transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <a
              href={getTelUrl()}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-[#EAE3DF] bg-white text-[#25211F] font-medium text-xs hover:bg-neutral-50 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#78564C]" />
              <span>Call Us</span>
            </a>
          </div>

          <p className="text-center text-xs text-[#77716D] pt-1">
            {siteConfig.contact.hours[0].days}: {siteConfig.contact.hours[0].time}
          </p>
        </div>
      </div>
    </div>
  );
}

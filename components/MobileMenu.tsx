"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, ChevronDown, ChevronRight, MessageSquare, Phone, ArrowRight } from "lucide-react";
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

  const prevPathname = React.useRef(pathname);

  // Close only when route actually changes
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      onClose();
    }
  }, [pathname, onClose]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop with elegant blur */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-in Drawer with luxury rounded left edge */}
      <div className="fixed inset-y-0 right-0 w-[88vw] max-w-[380px] bg-white shadow-2xl flex flex-col z-10 overflow-hidden rounded-l-[28px] border-l border-[#EAE3DF] transform transition-transform duration-300 ease-out">
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-4.5 border-b border-[#EAE3DF] bg-[#FAF8F6]">
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
            className="w-9 h-9 rounded-full border border-[#EAE3DF] bg-white text-[#25211F] hover:bg-[#F7EFEB] hover:text-[#78564C] flex items-center justify-center transition-all shadow-2xs active:scale-95"
            aria-label="Close navigation menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Navigation Links Scrollable Area */}
        <div className="flex-1 overflow-y-auto px-5 py-5 space-y-1.5">
          <div className="text-[10px] font-semibold tracking-widest uppercase text-[#78564C] px-3 mb-2">
            Explore Studio
          </div>

          {siteConfig.navigation.map((item) => {
            const isActive = pathname === item.href;

            if (item.children) {
              const isChildActive = item.children.some((sub) => pathname === sub.href);
              return (
                <div key={item.title} className="rounded-2xl overflow-hidden transition-colors">
                  <button
                    onClick={() => setServicesExpanded(!servicesExpanded)}
                    className={`w-full flex items-center justify-between py-3 px-3.5 rounded-2xl text-[16px] font-medium transition-all ${
                      isChildActive
                        ? "bg-[#F7EFEB] text-[#78564C]"
                        : "text-[#25211F] hover:bg-[#FAF8F6] hover:text-[#C99583]"
                    }`}
                  >
                    <span>{item.title}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#77716D] transition-transform duration-200 ${
                        servicesExpanded ? "rotate-180 text-[#C99583]" : ""
                      }`}
                    />
                  </button>

                  {servicesExpanded && (
                    <div className="mt-1 mb-2 ml-2 pl-3 border-l-2 border-[#C99583]/40 space-y-1">
                      {item.children.map((subItem) => {
                        const isSubActive = pathname === subItem.href;
                        return (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            onClick={onClose}
                            className={`flex flex-col py-2.5 px-3 rounded-xl transition-all ${
                              isSubActive
                                ? "bg-[#F7EFEB] text-[#78564C] font-medium"
                                : "text-[#77716D] hover:text-[#25211F] hover:bg-[#FAF8F6]"
                            }`}
                          >
                            <span className="text-sm font-medium">{subItem.title}</span>
                            {subItem.description && (
                              <span className="text-[11px] text-[#9C948F] line-clamp-1 mt-0.5">
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
                className={`flex items-center justify-between py-3 px-3.5 rounded-2xl text-[16px] font-medium transition-all ${
                  isActive
                    ? "bg-[#F7EFEB] text-[#78564C] font-semibold"
                    : "text-[#25211F] hover:text-[#C99583] hover:bg-[#FAF8F6]"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span>{item.title}</span>
                  {item.badge && (
                    <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-[#C99583] text-white shadow-2xs">
                      {item.badge}
                    </span>
                  )}
                </div>
                <ChevronRight className="w-4 h-4 text-[#C99583]" />
              </Link>
            );
          })}

          {/* Quick Direct Assistance Card */}
          <div className="mx-1 mt-5 p-4 rounded-2xl bg-[#FAF8F6] border border-[#EAE3DF] space-y-2">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#78564C]">
              Direct Studio Support
            </span>
            <div className="flex items-center gap-2.5 text-xs text-[#25211F]">
              <Phone className="w-3.5 h-3.5 text-[#C99583] shrink-0" />
              <span>{siteConfig.contact.phoneDisplay}</span>
            </div>
            <div className="text-[11px] text-[#77716D] truncate">
              {siteConfig.contact.address.display}
            </div>
          </div>
        </div>

        {/* Footer Actions in Drawer */}
        <div className="p-5 border-t border-[#EAE3DF] bg-white space-y-2.5">
          <button
            onClick={() => {
              onClose();
              onOpenQuote();
            }}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-[#C99583] hover:bg-[#B37D6B] text-white font-medium text-sm transition-all shadow-md active:scale-[0.98]"
          >
            <span>Get a Free Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="grid grid-cols-2 gap-2">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-full bg-[#25D366] text-white font-medium text-xs hover:bg-[#20ba59] transition-colors shadow-2xs"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
            <a
              href={getTelUrl()}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-full border border-[#EAE3DF] bg-[#FAF8F6] text-[#25211F] font-medium text-xs hover:bg-[#F7EFEB] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#78564C]" />
              <span>Call Us</span>
            </a>
          </div>

          <p className="text-center text-[10px] text-[#77716D] pt-1">
            {siteConfig.contact.hours[0].days} • {siteConfig.contact.hours[0].time}
          </p>
        </div>
      </div>
    </div>
  );
}

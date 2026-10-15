"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown, Sparkles, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { useQuoteModal } from "./QuoteModalContext";
import MobileMenu from "./MobileMenu";
import { getWhatsAppUrl } from "@/lib/contact";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();
  const { openQuoteModal } = useQuoteModal();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.06)] py-3.5 border-b border-[#EAE3DF]/80"
            : "bg-white/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-10 flex items-center group">
              <div className="relative h-10 sm:h-12 w-32 sm:w-40 transition-transform duration-200 group-hover:opacity-90">
                <Image
                  src={siteConfig.logo}
                  alt={siteConfig.logoAlt}
                  fill
                  priority
                  className="object-contain object-left"
                  sizes="(max-width: 640px) 130px, 160px"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {siteConfig.navigation.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.children && item.children.some((sub) => pathname === sub.href));

                if (item.children) {
                  return (
                    <div
                      key={item.title}
                      className="relative"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <button
                        className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? "text-[#C99583] bg-[#F7EFEB]/80"
                            : "text-[#25211F] hover:text-[#C99583] hover:bg-black/5"
                        }`}
                      >
                        <span>{item.title}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            servicesDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Dropdown Menu */}
                      {servicesDropdownOpen && (
                        <div className="absolute top-full left-0 w-72 pt-2 z-50 animate-fade-in">
                          <div className="bg-white rounded-2xl shadow-xl border border-[#EAE3DF] p-2 overflow-hidden">
                            {item.children.map((subItem) => {
                              const isSubActive = pathname === subItem.href;
                              return (
                                <Link
                                  key={subItem.title}
                                  href={subItem.href}
                                  className={`block px-3.5 py-2.5 rounded-xl transition-all duration-150 ${
                                    isSubActive
                                      ? "bg-[#F7EFEB] text-[#78564C]"
                                      : "text-[#25211F] hover:bg-[#FAF8F6] hover:text-[#C99583]"
                                  }`}
                                >
                                  <div className="text-sm font-medium">{subItem.title}</div>
                                  {subItem.description && (
                                    <div className="text-xs text-[#77716D] mt-0.5 line-clamp-1">
                                      {subItem.description}
                                    </div>
                                  )}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={`relative px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-[#C99583] bg-[#F7EFEB]/80"
                        : "text-[#25211F] hover:text-[#C99583] hover:bg-black/5"
                    }`}
                  >
                    <span>{item.title}</span>
                    {item.badge && (
                      <span className="ml-1.5 text-[10px] tracking-wider uppercase font-semibold px-2 py-0.5 rounded-full bg-[#C99583] text-white">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-[#EAE3DF] text-[#25211F] hover:text-[#25D366] hover:border-[#25D366] bg-white transition-colors"
                title="Chat on WhatsApp"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <button
                onClick={() => openQuoteModal()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C99583] hover:bg-[#B37D6B] text-white font-medium text-sm transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Get a Free Quote</span>
              </button>
            </div>

            {/* Mobile Actions: WhatsApp Icon + Hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#25D366] text-white hover:bg-[#20ba59] transition-colors"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-xl text-[#25211F] hover:bg-black/5 transition-colors"
                aria-label="Open main menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Slide-in Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenQuote={openQuoteModal}
      />
    </>
  );
}

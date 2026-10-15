"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Bookmark,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { getWhatsAppUrl, getTelUrl, getMailtoUrl } from "@/lib/contact";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#FAF8F6] border-t border-[#EAE3DF] text-[#25211F] pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#EAE3DF]">
          {/* Brand Column (Span 2 on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative h-12 w-44">
                <Image
                  src={siteConfig.logo}
                  alt={siteConfig.logoAlt}
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-[#77716D] max-w-sm">
              {siteConfig.description}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com/zairacreativedesign"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#EAE3DF] flex items-center justify-center text-[#78564C] hover:text-[#C99583] hover:border-[#C99583] transition-colors shadow-2xs"
                aria-label="Follow Zaira on Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/zairacreativedesign"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#EAE3DF] flex items-center justify-center text-[#78564C] hover:text-[#C99583] hover:border-[#C99583] transition-colors shadow-2xs"
                aria-label="Follow Zaira on Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://pinterest.com/zairacreativedesign"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#EAE3DF] flex items-center justify-center text-[#78564C] hover:text-[#C99583] hover:border-[#C99583] transition-colors shadow-2xs"
                aria-label="Explore Zaira on Pinterest"
              >
                <Bookmark className="w-4 h-4" />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:bg-[#20ba59] transition-colors shadow-2xs"
                aria-label="Chat with Zaira on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#78564C] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-[#77716D] hover:text-[#C99583] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/curtains" className="text-[#77716D] hover:text-[#C99583] transition-colors inline-flex items-center gap-1">
                  <span>Curtains & Blinds</span>
                  <span className="text-[10px] uppercase font-medium bg-[#F7EFEB] text-[#78564C] px-1.5 py-0.5 rounded">
                    Featured
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#77716D] hover:text-[#C99583] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-[#77716D] hover:text-[#C99583] transition-colors">
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#77716D] hover:text-[#C99583] transition-colors">
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Curtain Categories */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#78564C] mb-4">
              Curtains & Blinds
            </h4>
            <ul className="space-y-2 text-xs">
              {siteConfig.curtainCategoriesList.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/curtains#${cat.slug}`}
                    className="text-[#77716D] hover:text-[#C99583] transition-colors flex items-center justify-between group"
                  >
                    <span>{cat.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#C99583]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#78564C] mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-xs text-[#77716D]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C99583] shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address.display}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C99583] shrink-0" />
                <a
                  href={getTelUrl()}
                  className="hover:text-[#C99583] transition-colors"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors"
                >
                  {siteConfig.contact.whatsappDisplay} (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C99583] shrink-0" />
                <a
                  href={getMailtoUrl("Website Inquiry")}
                  className="hover:text-[#C99583] transition-colors truncate"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#C99583] shrink-0 mt-0.5" />
                <div>
                  <p>{siteConfig.contact.hours[0].days}</p>
                  <p className="text-[#9C948F]">{siteConfig.contact.hours[0].time}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#77716D] gap-4">
          <p>© {currentYear} Zaira Creative Design. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/curtains" className="hover:text-[#C99583] transition-colors">
              Custom Drapery
            </Link>
            <Link href="/gallery" className="hover:text-[#C99583] transition-colors">
              Portfolio
            </Link>
            <Link href="/contact" className="hover:text-[#C99583] transition-colors">
              Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

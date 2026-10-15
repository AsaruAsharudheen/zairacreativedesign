import React from "react";
import { Metadata } from "next";
import { Phone, MessageCircle, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/data/siteConfig";
import { getWhatsAppUrl, getTelUrl, getMailtoUrl } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact Us | Request a Free Curtain & Interior Consultation",
  description:
    "Contact Zaira Creative Design for custom curtains, window blinds, interior design, and gypsum ceiling estimates. Reach us by phone, WhatsApp, or visit our showroom.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 lg:pt-28 pb-16 bg-[#FAF8F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Contact Us" }]} />

        {/* Page Title */}
        <div className="py-8 sm:py-12 max-w-3xl">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 bg-[#F7EFEB] text-[#78564C] border border-[#EAE3DF]">
            <span>Consultation & Inquiries</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-normal text-[#25211F] tracking-tight leading-[1.15] mb-4">
            Let&apos;s Talk About{" "}
            <span className="text-[#C99583] font-medium">Your Space</span>
          </h1>

          <p className="text-base sm:text-lg text-[#77716D] leading-relaxed">
            Whether you need bespoke sheer curtains for your living room, motorized blackout blinds,
            or a complete interior transformation, our design specialists are here to guide you.
          </p>
        </div>

        {/* Main Grid: Form on Left/Center, Contact Cards on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pb-16">
          {/* Contact Form Container (7 cols on lg) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Contact Details & Showroom (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Showroom & Map Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EAE3DF] shadow-xs space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-[#EAE3DF]">
                <div className="w-10 h-10 rounded-xl bg-[#F7EFEB] text-[#C99583] flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-medium text-[#25211F]">
                    Showroom & Design Studio
                  </h3>
                  <p className="text-xs text-[#77716D]">
                    Experience our fabric library in person
                  </p>
                </div>
              </div>

              <div className="text-sm text-[#77716D] space-y-2">
                <p className="text-[#25211F] font-medium">
                  {siteConfig.contact.address.display}
                </p>
                <div className="pt-2">
                  <a
                    href={siteConfig.contact.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C99583] hover:text-[#B37D6B] transition-colors"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Embedded Map */}
              <div className="h-52 w-full rounded-2xl overflow-hidden border border-[#EAE3DF]">
                <iframe
                  src={siteConfig.contact.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  title="Showroom Location Map"
                />
              </div>
            </div>

            {/* Direct Connect Options */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EAE3DF] shadow-xs space-y-4">
              <h3 className="text-base font-medium text-[#25211F] mb-4">
                Immediate Assistance
              </h3>

              {/* WhatsApp */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  <div>
                    <h4 className="text-xs font-semibold text-[#25211F] uppercase tracking-wider">
                      WhatsApp Chat
                    </h4>
                    <p className="text-xs text-[#77716D]">{siteConfig.contact.whatsappDisplay}</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#25D366] group-hover:translate-x-1 transition-transform">
                  Chat Now →
                </span>
              </a>

              {/* Phone */}
              <a
                href={getTelUrl()}
                className="flex items-center justify-between p-4 rounded-2xl bg-[#FAF8F6] border border-[#EAE3DF] hover:bg-neutral-100 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#C99583]" />
                  <div>
                    <h4 className="text-xs font-semibold text-[#25211F] uppercase tracking-wider">
                      Call Studio
                    </h4>
                    <p className="text-xs text-[#77716D]">{siteConfig.contact.phoneDisplay}</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#78564C] group-hover:translate-x-1 transition-transform">
                  Dial →
                </span>
              </a>

              {/* Email */}
              <a
                href={getMailtoUrl("Studio Consultation Request")}
                className="flex items-center justify-between p-4 rounded-2xl bg-[#FAF8F6] border border-[#EAE3DF] hover:bg-neutral-100 transition-colors group"
              >
                <div className="flex items-center gap-3 truncate">
                  <Mail className="w-5 h-5 text-[#C99583] shrink-0" />
                  <div className="truncate">
                    <h4 className="text-xs font-semibold text-[#25211F] uppercase tracking-wider">
                      Email Inquiries
                    </h4>
                    <p className="text-xs text-[#77716D] truncate">{siteConfig.contact.email}</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#78564C] group-hover:translate-x-1 transition-transform shrink-0 ml-2">
                  Mail →
                </span>
              </a>

              {/* Hours */}
              <div className="pt-2 flex items-start gap-3 text-xs text-[#77716D]">
                <Clock className="w-4 h-4 text-[#C99583] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-[#25211F]">
                    {siteConfig.contact.hours[0].days}
                  </p>
                  <p>{siteConfig.contact.hours[0].time}</p>
                  <p className="text-[#9C948F] mt-1">{siteConfig.contact.hours[1].days}: {siteConfig.contact.hours[1].time}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

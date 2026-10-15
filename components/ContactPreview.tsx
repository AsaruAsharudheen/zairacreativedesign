import React from "react";
import SectionHeading from "./SectionHeading";
import { siteConfig } from "@/data/siteConfig";
import { Phone, MessageCircle, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import { getWhatsAppUrl, getTelUrl, getMailtoUrl } from "@/lib/contact";

export default function ContactPreview() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Visit & Connect"
          title="Connect with Our Design Studio"
          subtitle="Whether you prefer an in-person showroom visit, an on-site consultation, or a quick WhatsApp chat, we are ready to assist you."
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Details Cards (7 cols on lg) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-[#FAF8F6] border border-[#EAE3DF] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-[#EAE3DF] flex items-center justify-center text-[#C99583] mb-4">
                  <Phone className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#78564C] mb-1">
                  Direct Phone Call
                </h4>
                <p className="text-xs text-[#77716D] mb-3">Speak directly with our team</p>
              </div>
              <a
                href={getTelUrl()}
                className="text-base font-medium text-[#25211F] hover:text-[#C99583] transition-colors"
              >
                {siteConfig.contact.phoneDisplay}
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-[#FAF8F6] border border-[#EAE3DF] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] mb-4">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#78564C] mb-1">
                  WhatsApp Support
                </h4>
                <p className="text-xs text-[#77716D] mb-3">Quick photos, inquiries & chat</p>
              </div>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-medium text-[#25211F] hover:text-[#25D366] transition-colors"
              >
                {siteConfig.contact.whatsappDisplay}
              </a>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-[#FAF8F6] border border-[#EAE3DF] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-[#EAE3DF] flex items-center justify-center text-[#C99583] mb-4">
                  <Mail className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#78564C] mb-1">
                  Email Studio
                </h4>
                <p className="text-xs text-[#77716D] mb-3">Send project floorplans & files</p>
              </div>
              <a
                href={getMailtoUrl()}
                className="text-sm font-medium text-[#25211F] hover:text-[#C99583] transition-colors truncate"
              >
                {siteConfig.contact.email}
              </a>
            </div>

            {/* Hours Card */}
            <div className="p-6 rounded-2xl bg-[#FAF8F6] border border-[#EAE3DF] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-[#EAE3DF] flex items-center justify-center text-[#C99583] mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#78564C] mb-1">
                  Consultation Hours
                </h4>
                <p className="text-xs text-[#77716D] mb-2">{siteConfig.contact.hours[0].days}</p>
              </div>
              <span className="text-sm font-medium text-[#25211F]">
                {siteConfig.contact.hours[0].time}
              </span>
            </div>

            {/* Address Card (Full width in this column) */}
            <div className="sm:col-span-2 p-6 rounded-2xl bg-[#FAF8F6] border border-[#EAE3DF] flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#EAE3DF] flex items-center justify-center text-[#C99583] shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#78564C] mb-1">
                  Showroom & Design Studio
                </h4>
                <p className="text-sm text-[#25211F] leading-relaxed">
                  {siteConfig.contact.address.display}
                </p>
                <a
                  href={siteConfig.contact.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C99583] hover:text-[#B37D6B] mt-2 transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Map / Visual Direction Card (6 cols on lg) */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-[#EAE3DF] shadow-xs min-h-[360px] bg-[#FAF8F6] flex flex-col">
            <iframe
              src={siteConfig.contact.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "360px", flex: 1 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Zaira Creative Design Showroom Location"
              className="w-full h-full grayscale-[20%] contrast-[1.05]"
            />
            {/* Map Bottom Bar */}
            <div className="p-4 bg-white border-t border-[#EAE3DF] flex items-center justify-between">
              <span className="text-xs text-[#77716D]">
                Showroom visits by appointment or walk-in
              </span>
              <a
                href={siteConfig.contact.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#78564C] hover:text-[#C99583] transition-colors"
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

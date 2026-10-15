"use client";

import React, { useState, useEffect } from "react";
import { useQuoteModal } from "./QuoteModalContext";
import { X, CheckCircle, MessageSquare, Send, PhoneCall } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { getWhatsAppUrl } from "@/lib/contact";

export default function QuoteModal() {
  const { isOpen, preselectedService, closeQuoteModal } = useQuoteModal();
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    serviceCategory: "",
    roomType: "",
    dimensions: "",
    preferredContact: "whatsapp" as "whatsapp" | "phone" | "email",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, serviceCategory: preselectedService }));
    }
  }, [preselectedService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeQuoteModal();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeQuoteModal]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          phoneNumber: formData.phoneNumber,
          email: formData.email,
          serviceCategory: formData.serviceCategory || "General Curtains & Blinds",
          roomType: formData.roomType,
          dimensions: formData.dimensions,
          preferredContact: formData.preferredContact,
          message:
            formData.message.trim() ||
            `Interested in custom quotation for ${formData.serviceCategory || "Curtains & Blinds"}.`,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitSuccess(data.message);
      } else {
        setErrorMessage(data.message || "Failed to submit request. Please try again.");
      }
    } catch {
      setErrorMessage("Network error. Please try again or message us on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitSuccess(null);
    setErrorMessage(null);
    closeQuoteModal();
  };

  const waUrl = getWhatsAppUrl(
    formData.serviceCategory
      ? `Hello Zaira Creative Design! I'd like a quick quote for ${formData.serviceCategory}.`
      : undefined
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={closeQuoteModal}
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-[#EAE3DF] overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#EAE3DF] bg-[#FAF8F6]">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C99583]" />
              <span className="text-xs font-semibold tracking-wider text-[#78564C] uppercase">
                Bespoke Consultation
              </span>
            </div>
            <h3 id="quote-modal-title" className="text-xl font-medium text-[#25211F] mt-0.5">
              Request a Free Quote
            </h3>
          </div>
          <button
            onClick={closeQuoteModal}
            className="p-2 text-[#77716D] hover:text-[#25211F] rounded-full hover:bg-black/5 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {submitSuccess ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#F7EFEB] text-[#C99583] flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-[#C99583]" />
              </div>
              <h4 className="text-2xl font-medium text-[#25211F]">Request Received</h4>
              <p className="text-[#77716D] max-w-md mx-auto leading-relaxed">{submitSuccess}</p>
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-white font-medium hover:bg-[#20ba59] transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  Continue on WhatsApp
                </a>
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 rounded-xl border border-[#EAE3DF] text-[#25211F] font-medium hover:bg-[#FAF8F6] transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3 text-sm rounded-lg bg-red-50 text-red-700 border border-red-200">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#25211F] uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#EAE3DF] bg-[#FAF8F6] focus:bg-white focus:outline-none focus:border-[#C99583] text-sm text-[#25211F]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#25211F] uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    placeholder="e.g. +91 98450 12345"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#EAE3DF] bg-[#FAF8F6] focus:bg-white focus:outline-none focus:border-[#C99583] text-sm text-[#25211F]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#25211F] uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. sarah@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#EAE3DF] bg-[#FAF8F6] focus:bg-white focus:outline-none focus:border-[#C99583] text-sm text-[#25211F]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#25211F] uppercase tracking-wider mb-1.5">
                    Service / Product
                  </label>
                  <select
                    value={formData.serviceCategory}
                    onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#EAE3DF] bg-[#FAF8F6] focus:bg-white focus:outline-none focus:border-[#C99583] text-sm text-[#25211F]"
                  >
                    <option value="">Select Service / Curtain Type</option>
                    <optgroup label="Curtains & Blinds">
                      <option value="Curtains & Blinds (General)">Curtains & Blinds (General)</option>
                      <option value="Zebra Blinds">Zebra Blinds</option>
                      <option value="Roller Blinds">Roller Blinds</option>
                      <option value="Roman Blinds">Roman Blinds</option>
                      <option value="Venetian Blinds">Venetian Blinds</option>
                      <option value="Vertical Blinds">Vertical Blinds</option>
                      <option value="Wooden Blinds">Wooden Blinds</option>
                      <option value="Bamboo Blinds">Bamboo Blinds</option>
                      <option value="Honeycomb Blinds">Honeycomb Blinds</option>
                      <option value="Sheer Curtains">Sheer Curtains</option>
                      <option value="Blackout Curtains">Blackout Curtains</option>
                    </optgroup>
                    <optgroup label="Other Interior Solutions">
                      <option value="Interior Design">Interior Design</option>
                      <option value="Gypsum False Ceiling">Gypsum False Ceiling</option>
                      <option value="Custom Metal Fabrication">Custom Metal Fabrication</option>
                      <option value="Modern Staircase Design">Modern Staircase Design</option>
                    </optgroup>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#25211F] uppercase tracking-wider mb-1.5">
                    Room Type (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.roomType}
                    onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                    placeholder="e.g. Master Bedroom, Living Room"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#EAE3DF] bg-[#FAF8F6] focus:bg-white focus:outline-none focus:border-[#C99583] text-sm text-[#25211F]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#25211F] uppercase tracking-wider mb-1.5">
                    Preferred Contact Mode
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(["whatsapp", "phone", "email"] as const).map((method) => (
                      <button
                        type="button"
                        key={method}
                        onClick={() => setFormData({ ...formData, preferredContact: method })}
                        className={`py-2 px-2 text-xs font-medium rounded-lg border transition-colors capitalize text-center ${
                          formData.preferredContact === method
                            ? "bg-[#C99583] text-white border-[#C99583]"
                            : "bg-[#FAF8F6] text-[#77716D] border-[#EAE3DF] hover:bg-white"
                        }`}
                      >
                        {method}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#25211F] uppercase tracking-wider mb-1.5">
                  Project Details / Approximate Dimensions
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your space, window count, rough measurements, or preferred fabrics..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#EAE3DF] bg-[#FAF8F6] focus:bg-white focus:outline-none focus:border-[#C99583] text-sm text-[#25211F] resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#C99583] hover:bg-[#B37D6B] text-white font-medium text-sm transition-colors shadow-sm disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending Request...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Quote Request</span>
                    </>
                  )}
                </button>

                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-[#EAE3DF] bg-[#FAF8F6] hover:bg-white text-[#25211F] font-medium text-sm transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>Fast WhatsApp Chat</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

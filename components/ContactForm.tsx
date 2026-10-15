"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, MessageSquare, AlertCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/contact";
import { validateContactForm, ContactFormData, ValidationErrors } from "@/lib/validation";

interface ContactFormProps {
  defaultService?: string;
}

export default function ContactForm({ defaultService = "" }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    phoneNumber: "",
    email: "",
    serviceCategory: defaultService || "",
    preferredContact: "whatsapp",
    message: "",
    roomType: "",
    dimensions: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [generalError, setGeneralError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralError(null);

    // Client-side validation
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitSuccess(result.message);
        setFormData({
          fullName: "",
          phoneNumber: "",
          email: "",
          serviceCategory: "",
          preferredContact: "whatsapp",
          message: "",
          roomType: "",
          dimensions: "",
          honeypot: "",
        });
      } else {
        if (result.errors) {
          setErrors(result.errors);
        }
        setGeneralError(result.message || "Failed to submit. Please check the fields and try again.");
      }
    } catch {
      setGeneralError("Network connection error. Please try again or reach out directly on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const waUrl = getWhatsAppUrl(
    formData.serviceCategory
      ? `Hello Zaira Creative Design! I'd like to consult on "${formData.serviceCategory}".`
      : undefined
  );

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#EAE3DF] shadow-md">
      {submitSuccess ? (
        <div className="py-12 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#F7EFEB] text-[#C99583] flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10 text-[#C99583]" />
          </div>
          <h3 className="text-2xl font-medium text-[#25211F]">
            Consultation Request Sent
          </h3>
          <p className="text-sm sm:text-base text-[#77716D] max-w-md mx-auto leading-relaxed">
            {submitSuccess}
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-medium text-sm hover:bg-[#20ba59] transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Connect on WhatsApp</span>
            </a>
            <button
              onClick={() => setSubmitSuccess(null)}
              className="px-6 py-3 rounded-full border border-[#EAE3DF] text-[#25211F] font-medium text-sm hover:bg-[#FAF8F6] transition-colors"
            >
              Send Another Request
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {generalError && (
            <div className="p-4 rounded-xl bg-red-50 text-red-700 text-sm flex items-start gap-3 border border-red-200">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-600" />
              <span>{generalError}</span>
            </div>
          )}

          {/* Hidden Honeypot Field for Bot Spam Protection */}
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              name="honeypot"
              tabIndex={-1}
              autoComplete="off"
              value={formData.honeypot}
              onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-semibold text-[#25211F] uppercase tracking-wider mb-2">
                Your Full Name *
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Eleanor Vance"
                className={`w-full px-4 py-3 rounded-xl border bg-[#FAF8F6] focus:bg-white text-sm text-[#25211F] transition-colors focus:outline-none ${
                  errors.fullName
                    ? "border-red-400 focus:border-red-500"
                    : "border-[#EAE3DF] focus:border-[#C99583]"
                }`}
              />
              {errors.fullName && (
                <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-semibold text-[#25211F] uppercase tracking-wider mb-2">
                Phone / WhatsApp Number *
              </label>
              <input
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                placeholder="e.g. +91 98450 12345"
                className={`w-full px-4 py-3 rounded-xl border bg-[#FAF8F6] focus:bg-white text-sm text-[#25211F] transition-colors focus:outline-none ${
                  errors.phoneNumber
                    ? "border-red-400 focus:border-red-500"
                    : "border-[#EAE3DF] focus:border-[#C99583]"
                }`}
              />
              {errors.phoneNumber && (
                <p className="text-xs text-red-600 mt-1">{errors.phoneNumber}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-[#25211F] uppercase tracking-wider mb-2">
                Email Address *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. eleanor@example.com"
                className={`w-full px-4 py-3 rounded-xl border bg-[#FAF8F6] focus:bg-white text-sm text-[#25211F] transition-colors focus:outline-none ${
                  errors.email
                    ? "border-red-400 focus:border-red-500"
                    : "border-[#EAE3DF] focus:border-[#C99583]"
                }`}
              />
              {errors.email && (
                <p className="text-xs text-red-600 mt-1">{errors.email}</p>
              )}
            </div>

            {/* Service Selection */}
            <div>
              <label className="block text-xs font-semibold text-[#25211F] uppercase tracking-wider mb-2">
                Service of Interest *
              </label>
              <select
                value={formData.serviceCategory}
                onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl border bg-[#FAF8F6] focus:bg-white text-sm text-[#25211F] transition-colors focus:outline-none ${
                  errors.serviceCategory
                    ? "border-red-400 focus:border-red-500"
                    : "border-[#EAE3DF] focus:border-[#C99583]"
                }`}
              >
                <option value="">Select a category</option>
                <optgroup label="Curtains & Blinds (Primary Specialty)">
                  <option value="Curtains & Blinds (General Consultation)">
                    Curtains & Blinds (General Consultation)
                  </option>
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
                <optgroup label="Interior Architecture & Fabrication">
                  <option value="Residential Interior Design">Residential Interior Design</option>
                  <option value="Gypsum False Ceiling Work">Gypsum False Ceiling Work</option>
                  <option value="Custom Metal Fabrication & Screens">
                    Custom Metal Fabrication & Screens
                  </option>
                  <option value="Modern Staircase Design">Modern Staircase Design</option>
                  <option value="Full Home Interior Package">Full Home Interior Package</option>
                </optgroup>
              </select>
              {errors.serviceCategory && (
                <p className="text-xs text-red-600 mt-1">{errors.serviceCategory}</p>
              )}
            </div>
          </div>

          {/* Preferred Contact Method */}
          <div>
            <label className="block text-xs font-semibold text-[#25211F] uppercase tracking-wider mb-2">
              Preferred Response Method
            </label>
            <div className="grid grid-cols-3 gap-3">
              {(["whatsapp", "phone", "email"] as const).map((method) => (
                <button
                  type="button"
                  key={method}
                  onClick={() => setFormData({ ...formData, preferredContact: method })}
                  className={`py-3 px-4 rounded-xl border text-xs sm:text-sm font-medium capitalize text-center transition-all ${
                    formData.preferredContact === method
                      ? "bg-[#C99583] text-white border-[#C99583] shadow-xs"
                      : "bg-[#FAF8F6] text-[#77716D] border-[#EAE3DF] hover:bg-white"
                  }`}
                >
                  {method === "whatsapp" ? "WhatsApp (Fastest)" : method}
                </button>
              ))}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-semibold text-[#25211F] uppercase tracking-wider mb-2">
              Project Description & Space Details *
            </label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your room type, window sizes, preferred aesthetic, and approximate timeline..."
              className={`w-full px-4 py-3 rounded-xl border bg-[#FAF8F6] focus:bg-white text-sm text-[#25211F] transition-colors focus:outline-none resize-none ${
                errors.message
                  ? "border-red-400 focus:border-red-500"
                  : "border-[#EAE3DF] focus:border-[#C99583]"
              }`}
            />
            {errors.message && (
              <p className="text-xs text-red-600 mt-1">{errors.message}</p>
            )}
          </div>

          {/* Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#C99583] hover:bg-[#B37D6B] text-white font-medium text-base transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Submitting Your Request...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Consultation Request</span>
                </>
              )}
            </button>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-[#EAE3DF] bg-[#FAF8F6] hover:bg-white text-[#25211F] font-medium text-sm transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#25D366]" />
              <span>Or WhatsApp Us Now</span>
            </a>
          </div>
        </form>
      )}
    </div>
  );
}

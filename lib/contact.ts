import { siteConfig } from "@/data/siteConfig";

/**
 * Generates an automated WhatsApp link pre-filled with tailored enquiry details
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const number = siteConfig.contact.whatsapp.replace(/[^0-9]/g, "");
  const text = customMessage || siteConfig.contact.whatsappMessage;
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

/**
 * Generates WhatsApp enquiry link tailored for a specific curtain or service
 */
export function getServiceWhatsAppUrl(serviceOrCurtainTitle: string): string {
  const msg = `Hello Zaira Creative Design! I am interested in inquiring about "${serviceOrCurtainTitle}". Could you please share more details, fabric samples, and pricing guidance?`;
  return getWhatsAppUrl(msg);
}

/**
 * Generates direct tel: protocol link
 */
export function getTelUrl(phoneNumber?: string): string {
  const num = (phoneNumber || siteConfig.contact.phone).replace(/[^0-9+]/g, "");
  return `tel:${num}`;
}

/**
 * Generates mailto: protocol link with subject
 */
export function getMailtoUrl(subject?: string): string {
  const email = siteConfig.contact.email;
  const sub = subject ? `?subject=${encodeURIComponent(subject)}` : "";
  return `mailto:${email}${sub}`;
}

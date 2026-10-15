export interface ContactFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  serviceCategory: string;
  preferredContact: "whatsapp" | "phone" | "email";
  message: string;
  roomType?: string;
  dimensions?: string;
  honeypot?: string; // Bot protection
}

export interface ValidationErrors {
  fullName?: string;
  phoneNumber?: string;
  email?: string;
  serviceCategory?: string;
  message?: string;
  general?: string;
}

export function validateContactForm(data: Partial<ContactFormData>): {
  isValid: boolean;
  errors: ValidationErrors;
} {
  const errors: ValidationErrors = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name (at least 2 characters).";
  }

  // Basic international phone regex: must contain digits, min 7 digits, max 15
  const cleanPhone = (data.phoneNumber || "").replace(/[^0-9+]/g, "");
  if (!cleanPhone || cleanPhone.length < 8) {
    errors.phoneNumber = "Please enter a valid phone or WhatsApp number.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = "Please provide a valid email address.";
  }

  if (!data.serviceCategory || data.serviceCategory.trim().length === 0) {
    errors.serviceCategory = "Please select a service or curtain type.";
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = "Please describe your space or requirements (at least 10 characters).";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

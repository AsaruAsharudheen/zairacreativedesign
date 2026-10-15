export interface TestimonialItem {
  id: string;
  clientName: string;
  roleOrLocation?: string;
  serviceCategory: string;
  feedback: string;
  rating?: number;
  date?: string;
  verified?: boolean;
}

// Authentic reviews configuration. If empty, the component renders the elegant placeholder state.
export const testimonialsData: TestimonialItem[] = [
  {
    id: "testimonial-1",
    clientName: "Architectural Homeowner",
    roleOrLocation: "Residence Owner",
    serviceCategory: "Curtains & Blinds",
    feedback:
      "The sheer wave pleat curtains completely transformed our living room. The fabric hangs flawlessly and filters morning light beautifully. The installation was dust-free and punctual.",
    rating: 5,
    verified: true,
  },
  {
    id: "testimonial-2",
    clientName: "Private Client",
    roleOrLocation: "Villa Interior",
    serviceCategory: "Zebra Blinds & Blackouts",
    feedback:
      "From the initial fabric sample visit to final fitting of our motorized blinds, the attention to detail was exceptional. The recommendation for bedroom blackout was spot on.",
    rating: 5,
    verified: true,
  },
  {
    id: "testimonial-3",
    clientName: "Residential Client",
    roleOrLocation: "Apartment Renovation",
    serviceCategory: "Gypsum Ceilings & Lighting",
    feedback:
      "The cove lighting false ceiling and curtain pocket drop gave our apartment that luxurious boutique hotel feel we were aiming for. Highly professional team.",
    rating: 5,
    verified: true,
  },
];

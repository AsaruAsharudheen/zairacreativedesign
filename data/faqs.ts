export interface FAQItem {
  question: string;
  answer: string;
  category: "Curtains & Blinds" | "General Services" | "Installation & Care";
}

export const faqsData: FAQItem[] = [
  {
    question: "How do I choose between Sheer Curtains, Blackout Curtains, and Blinds?",
    answer:
      "It depends on your room's natural sun orientation and privacy needs. Sheer curtains are ideal for day-use areas like living rooms where you want soft daylight while preventing glare. Blackout curtains are best for bedrooms and media rooms to block 100% of morning sun and ambient street lights. Blinds (such as Zebra or Venetian) offer flexible variable angle control for offices and kitchens. We often recommend a double track system pairing sheer curtains with blackout drapes for complete versatility.",
    category: "Curtains & Blinds",
  },
  {
    question: "Do you provide on-site measurement and fabric consultation?",
    answer:
      "Yes. We bring physical fabric catalogs, color books, and blind samples directly to your residence or project site. Our specialist measures window reveals with precision laser equipment to ensure millimeter-accurate fit.",
    category: "Curtains & Blinds",
  },
  {
    question: "Can your curtains and blinds be motorized or integrated with smart home systems?",
    answer:
      "Absolutely. We offer whisper-quiet motorized tracks and tubular blind motors that can be operated via handheld RF remotes, wireless wall switches, smartphone apps, or voice assistants (Amazon Alexa, Google Home, and Apple HomeKit).",
    category: "Curtains & Blinds",
  },
  {
    question: "How long does custom curtain stitching and blind fabrication take?",
    answer:
      "Most custom curtains and standard blinds are tailored and ready for installation within 7 to 14 business days following measurement confirmation and fabric approval. Specialty imported textiles or complex motorized setups may require slight additional lead time, which will be communicated upfront.",
    category: "Installation & Care",
  },
  {
    question: "What other interior services does Zaira Creative Design provide?",
    answer:
      "In addition to our core specialty in curtains and blinds, we provide comprehensive interior design concepts, gypsum false ceilings with concealed LED cove lighting, custom architectural metal fabrication (screens, partitions, gates), and modern staircase design (cantilevered floating stairs and designer balustrades).",
    category: "General Services",
  },
  {
    question: "How do I care for and maintain my curtains and blinds?",
    answer:
      "Regular gentle vacuuming with an upholstery brush attachment keeps dust from settling into fabric fibers. Most sheer and synthetic fabrics can be gently hand-washed or professionally dry-cleaned. Wooden and Venetian blinds simply require periodic dusting or wiping with a microfiber cloth. We provide specific care instruction tags for every fabric installed.",
    category: "Installation & Care",
  },
];

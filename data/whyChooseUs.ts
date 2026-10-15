export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: "ShieldCheck" | "Layers" | "CheckCircle2" | "Compass" | "Wrench";
}

export const whyChooseBenefits: BenefitItem[] = [
  {
    id: "selected-materials",
    title: "Carefully Selected Materials",
    description:
      "We source fabrics, blind mechanisms, and hardware chosen for tactile quality, longevity, and timeless aesthetic appeal.",
    iconName: "ShieldCheck",
  },
  {
    id: "stylish-practical",
    title: "Stylish & Practical Designs",
    description:
      "Every curtain and interior treatment strikes the sweet spot between visual elegance, effortless everyday operation, and privacy.",
    iconName: "Layers",
  },
  {
    id: "attention-to-detail",
    title: "Attention to Detail",
    description:
      "From millimeter-level hem clearances to flush shadow lines and aligned bracket fittings, nothing is left to chance.",
    iconName: "CheckCircle2",
  },
  {
    id: "personalized-recommendations",
    title: "Personalized Recommendations",
    description:
      "We recommend tailored window treatments based on your room's natural sun orientation, architectural layout, and lifestyle.",
    iconName: "Compass",
  },
  {
    id: "professional-installation",
    title: "Professional Installation",
    description:
      "Experienced in-house technicians carry out clean, careful installations, steam dressing, and motorized track programming.",
    iconName: "Wrench",
  },
];

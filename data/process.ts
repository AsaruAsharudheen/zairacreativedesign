export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverable: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Consultation",
    subtitle: "Understanding Your Vision",
    description:
      "We begin by listening closely to your lifestyle preferences, architectural style, light requirements, and budget expectations.",
    deliverable: "Initial design brief, room assessment, and style direction.",
  },
  {
    number: "02",
    title: "Style Selection",
    subtitle: "Curating Fabrics & Finishes",
    description:
      "Explore physical fabric swatches, blind mechanisms, textures, timber stains, and hardware finishes tailored to your interior color palette.",
    deliverable: "Curated material samples, heading recommendations, and transparent estimate.",
  },
  {
    number: "03",
    title: "Measurement & Planning",
    subtitle: "Millimeter Precision On-Site",
    description:
      "Our technical team visits your site to take precise laser measurements, inspect lintels and wall structures, and finalize fitting specifications.",
    deliverable: "Laser-accurate dimension schedules and manufacturing order.",
  },
  {
    number: "04",
    title: "Installation & Finishing",
    subtitle: "Craftsmanship in Execution",
    description:
      "Our trained technicians complete the installation with meticulous attention to fit, level, steam dressing, and motorized programming.",
    deliverable: "Dust-free installation, operation walkthrough, and care guidelines.",
  },
];

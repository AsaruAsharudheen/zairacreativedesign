export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  isFeatured?: boolean;
  image: string;
  alt: string;
  bulletPoints: string[];
  keyFeatures: { title: string; description: string }[];
  processSteps: { step: string; title: string; description: string }[];
  href: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "curtains-and-blinds",
    slug: "curtains",
    title: "Curtains & Blinds",
    tagline: "Our Signature Specialty",
    shortDescription:
      "Bespoke curtain drapery and contemporary window blinds custom tailored to your dimensions, style preference, and light filtration needs.",
    fullDescription:
      "At Zaira Creative Design, window treatments are our cornerstone passion. We believe curtains and blinds are not merely functional coverings—they are the architectural frame through which light, comfort, and interior character flow. From flowing sheer draperies and blackout velvet curtains to precision zebra, roller, and motorized blinds, we guide you through fabric selection, millimeter-accurate measurements, and flawless professional fitting.",
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
    alt: "Luxurious floor-to-ceiling sheer and drape curtains in a designer living room",
    bulletPoints: [
      "Custom curtain selection and master installation",
      "Modern window blinds (Zebra, Roller, Roman, Venetian, Wooden, etc.)",
      "Premium fabrics, textures, color matching, and privacy solutions",
      "Motorized tracks and smart home automation integration",
    ],
    keyFeatures: [
      {
        title: "Curated Global Fabrics",
        description: "Linen weaves, silks, blackout satins, textured velvets, and sheer voiles sourced for tactile longevity.",
      },
      {
        title: "Precision Custom Tailoring",
        description: "Wave fold, French pinch pleats, eyelets, and tailored headers stitched to exact floor-clearing tolerances.",
      },
      {
        title: "Smart Motorization",
        description: "Discreet whisper-quiet motorized tracks compatible with mobile apps, wall switches, and voice assistants.",
      },
      {
        title: "Turnkey Measurement & Fitting",
        description: "Our technicians inspect lintels, measure millimeter-exact drops, and handle full bracket installation.",
      },
    ],
    processSteps: [
      { step: "01", title: "Fabric Consultation", description: "Review physical swatches, textures, and light-filtering options in your room." },
      { step: "02", title: "Laser Measurement", description: "On-site millimeter measurement of window reveals, heights, and clearances." },
      { step: "03", title: "Bespoke Stitching & Assembly", description: "Artisanal tailoring, hem weighting, and track customization in our workshop." },
      { step: "04", title: "Professional Installation", description: "Dust-free mounting, steam dressing, and motorized programming." },
    ],
    href: "/curtains",
  },
  {
    id: "interior-design",
    slug: "interior-design",
    title: "Interior Design",
    tagline: "Atmospheres of Serenity & Sophistication",
    shortDescription:
      "Thoughtfully conceptualized residential interiors, luxury living rooms, and bedroom sanctuaries tailored to your personal aesthetic.",
    fullDescription:
      "We design spaces that elevate everyday living into an inspiring sanctuary. Our residential interior design approach balances organic warmth with contemporary minimalism. From mood boards and space planning to custom cabinetry, lighting concepts, and furniture styling, we transform empty rooms into cohesive environments that feel authentic and deeply welcoming.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    alt: "Warm minimalist living room interior with neutral tones and bespoke furnishings",
    bulletPoints: [
      "Residential interiors & whole-home concept planning",
      "Living room and bedroom styling with harmonic palettes",
      "Customized modular cabinetry, wall paneling, and storage",
      "Artisanal lighting design, spatial zoning, and styling",
    ],
    keyFeatures: [
      {
        title: "Spatial Planning & Layouts",
        description: "Optimizing flow, natural light, and functional zones to make every square foot feel generous.",
      },
      {
        title: "Material & Color Cohesion",
        description: "Harmonizing warm neutrals, tactile textiles, natural woods, and brushed metals across the home.",
      },
      {
        title: "Custom Built-ins & Millwork",
        description: "Bespoke media units, vanity consoles, and wardrobes designed to integrate seamlessly with walls.",
      },
      {
        title: "Curated Lighting Concepts",
        description: "Layering ambient cove lights, architectural downlights, and statement pendants for mood flexibility.",
      },
    ],
    processSteps: [
      { step: "01", title: "Vision & Lifestyle Brief", description: "Discuss your lifestyle routines, storage needs, and aesthetic aspirations." },
      { step: "02", title: "Concept & Moodboards", description: "Develop color palettes, spatial layouts, and physical material trays." },
      { step: "03", title: "Detailed 3D & Execution Drawings", description: "Technical elevations, electrical diagrams, and joinery specifications." },
      { step: "04", title: "Site Execution & Styling", description: "Coordination of trades, joinery assembly, and final decorative placement." },
    ],
    href: "/services/interior-design",
  },
  {
    id: "fabrication",
    slug: "fabrication",
    title: "Fabrication",
    tagline: "Architectural Precision Metalwork",
    shortDescription:
      "Custom metal fabrication, bespoke partitions, ornamental screens, and durable structural design elements.",
    fullDescription:
      "Our architectural fabrication service bridges heavy-duty engineering strength with artistic finesse. We craft custom mild steel, stainless steel, brass, and aluminium structures including CNC laser-cut room dividers, glass-and-steel industrial partitions, entrance gates, exterior pergolas, and decorative furniture frames.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80",
    alt: "Architectural geometric metal partition and bespoke craft fabrication",
    bulletPoints: [
      "Custom architectural metal fabrication & joinery",
      "Laser-cut decorative screens and space partitions",
      "Functional and decorative structural frameworks",
      "Premium powder-coated, PVD, and brushed metal finishes",
    ],
    keyFeatures: [
      {
        title: "High-Tolerance Metalworking",
        description: "MIG/TIG precision welding and seamless joint grinding for clean architectural silhouettes.",
      },
      {
        title: "CNC Laser Cutting",
        description: "Intricate geometric, floral, and contemporary patterns cut with micrometer accuracy.",
      },
      {
        title: "Long-lasting Finishes",
        description: "Multi-stage anti-corrosion priming, electrostatic powder coating, and luxury PVD titanium plating.",
      },
      {
        title: "Glass & Metal Hybrid Systems",
        description: "Acoustically insulated slim-frame glass partitions for modern offices and living spaces.",
      },
    ],
    processSteps: [
      { step: "01", title: "Site Inspection & Structural Review", description: "Assess structural load points, anchors, and dimension checks." },
      { step: "02", title: "CAD / CAM Drafting", description: "Generate digital cutting paths and assembly blueprints for approval." },
      { step: "03", title: "Workshop Fabrication", description: "Laser cutting, precision bending, certified welding, and powder finishing." },
      { step: "04", title: "Rigid On-Site Anchor Installation", description: "Heavy-duty anchoring, leveling, and perimeter sealing." },
    ],
    href: "/services/fabrication",
  },
  {
    id: "gypsum-work",
    slug: "gypsum-work",
    title: "Gypsum Work",
    tagline: "Sculptural Ceilings & Concealed Illumination",
    shortDescription:
      "Modern false ceilings, perimeter cove lighting recesses, drywall partitions, and clean contemporary gypsum detailing.",
    fullDescription:
      "A thoughtfully executed ceiling defines the acoustic comfort and ambient aura of a home. We specialize in contemporary gypsum false ceilings, minimalist stepped drops, indirect LED cove light recesses, floating island ceilings, and acoustic wall linings. Using galvanized steel framing and premium plasterboard, we deliver crack-free, silky-smooth planes.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    alt: "Contemporary gypsum false ceiling with warm indirect cove lighting and clean shadow lines",
    bulletPoints: [
      "Modern architectural false ceilings & suspended islands",
      "Indirect LED cove light profiles and magnetic track slots",
      "Seamless drywall partitions and acoustic wall linings",
      "Contemporary gypsum wall panels and minimalist cornices",
    ],
    keyFeatures: [
      {
        title: "Reinforced Galvanized Framework",
        description: "Heavy-gauge rust-resistant GI channels ensure zero ceiling deflection over decades.",
      },
      {
        title: "Seamless Joint Technology",
        description: "Multi-layer fiber-mesh taping and feather-edged compounds prevent micro-cracks.",
      },
      {
        title: "Flush Architectural Lighting Details",
        description: "Recessed shadow lines, magnetic track light channels, and curtain-pocket drop recesses.",
      },
      {
        title: "Thermal & Acoustic Buffering",
        description: "Incorporation of mineral wool insulation to dampen overhead footsteps and insulate against heat.",
      },
    ],
    processSteps: [
      { step: "01", title: "Ceiling Grid Planning", description: "Coordinate with HVAC, electrical ducting, and light fixture locations." },
      { step: "02", title: "Laser Leveling & Framing", description: "Suspension of GI channels using high-precision rotary laser levels." },
      { step: "03", title: "Boarding & Joint Compound", description: "Application of moisture-resistant gypsum boards and taped joint finishing." },
      { step: "04", title: "Sanding & Primer Finish", description: "Dustless machine sanding to Level 4/5 smooth paint-ready standard." },
    ],
    href: "/services/gypsum-work",
  },
  {
    id: "staircase-design",
    slug: "staircase-design",
    title: "Staircase Design",
    tagline: "Sculptural Ascents in Wood, Metal & Glass",
    shortDescription:
      "Modern floating staircases, bespoke architectural railings, and tailored steps that make an impressive spatial statement.",
    fullDescription:
      "The staircase is often the architectural focal spine of a home. Zaira Creative Design creates dramatic floating staircases, mono-stringer metal stairs, spiral structures, and contemporary railings combining wood, glass, and rose-gold or matte black metalwork. We engineer each tread for ergonomic comfort, safety, and breathtaking visual weightlessness.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern architectural wooden and metal staircase with minimalist railing",
    bulletPoints: [
      "Modern cantilevered & floating staircase concepts",
      "Custom laser-cut, wrought iron, and tempered glass railings",
      "Solid hardwood treads, integrated step LED channels, and risers",
      "Space-efficient spiral and architectural mono-stringer designs",
    ],
    keyFeatures: [
      {
        title: "Structural Engineering Rigor",
        description: "Engineered load-bearing stringers and wall anchor plates tested for maximum rigidity.",
      },
      {
        title: "Custom Railing & Balustrades",
        description: "Minimalist stainless steel spindles, laser-cut privacy screens, or frameless tempered glass.",
      },
      {
        title: "Integrated Under-Tread Lighting",
        description: "Concealed LED strip channels with motion sensors for a luminous floating evening effect.",
      },
      {
        title: "Hardwood & Exotic Tread Finishes",
        description: "Teak, American Walnut, and White Oak treads sealed with durable non-slip matte polyurethane.",
      },
    ],
    processSteps: [
      { step: "01", title: "Rise, Run & Angle Calculation", description: "Calculate optimal rise/run ratios for effortless climbing ergonomics." },
      { step: "02", title: "Stringer & Railing 3D Mockup", description: "Detailed 3D visualization and structural load calculations." },
      { step: "03", title: "Precision Fabrication", description: "Steel structural welding, CNC tread machining, and glass fabrication." },
      { step: "04", title: "Rigid Installation & Balustrade Fitting", description: "Anchor installation, handrail alignment, and safety load testing." },
    ],
    href: "/services/staircase-design",
  },
];

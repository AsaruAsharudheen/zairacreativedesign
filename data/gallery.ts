export interface GalleryItem {
  id: string;
  title: string;
  category: "Curtains & Blinds" | "Interiors" | "Fabrication" | "Gypsum" | "Staircases";
  categorySlug: "curtains" | "interiors" | "fabrication" | "gypsum" | "staircases";
  image: string;
  alt: string;
  location?: string;
  description: string;
  featured?: boolean;
}

export const galleryItems: GalleryItem[] = [
  // Curtains & Blinds (Prioritized)
  {
    id: "project-1",
    title: "Double-Height Wave Pleat Sheers",
    category: "Curtains & Blinds",
    categorySlug: "curtains",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    alt: "Ethereal wave pleat sheer drapery in a double-height living room",
    location: "Riverside Residence",
    description: "Floor-to-ceiling sheer drapery custom fitted on motorized ceiling-recessed curved tracks.",
    featured: true,
  },
  {
    id: "project-2",
    title: "Master Suite Velvet Blackout Drapery",
    category: "Curtains & Blinds",
    categorySlug: "curtains",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80",
    alt: "Luxurious blackout velvet curtains in a tranquil master bedroom",
    location: "The Palms Penthouse",
    description: "Thermal blackout velvet curtains with deep pinch pleats paired with daylight sheer liners.",
    featured: true,
  },
  {
    id: "project-3",
    title: "Minimalist Zebra Blinds for Corner Windows",
    category: "Curtains & Blinds",
    categorySlug: "curtains",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern zebra blinds on expansive corner windows",
    location: "Urban Loft",
    description: "Alternating sheer and opaque zebra blinds in warm oyster white with wireless remote control.",
    featured: true,
  },
  {
    id: "project-4",
    title: "Natural Wooden Venetian Blinds",
    category: "Curtains & Blinds",
    categorySlug: "curtains",
    image: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=80",
    alt: "Natural wooden venetian blinds casting geometric shadows",
    location: "Executive Home Studio",
    description: "50mm Basswood blinds with tailored cotton ladder tapes in warm honey timber stain.",
    featured: true,
  },
  {
    id: "project-5",
    title: "Tailored Roman Shades in Belgian Linen",
    category: "Curtains & Blinds",
    categorySlug: "curtains",
    image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=1200&q=80",
    alt: "Belgian linen roman shades with cascading folds",
    location: "Heritage Bungalow",
    description: "Custom flat-fold Roman blinds with rose gold piping in unbleached Belgian linen.",
    featured: false,
  },
  {
    id: "project-6",
    title: "Organic Bamboo Shades & Sunroom Drapes",
    category: "Curtains & Blinds",
    categorySlug: "curtains",
    image: "https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?auto=format&fit=crop&w=1200&q=80",
    alt: "Natural woven bamboo shades in a serene veranda nook",
    location: "Garden Villa",
    description: "Hand-woven bamboo reed blinds offering dappled warm afternoon light filtration.",
    featured: false,
  },

  // Interiors
  {
    id: "project-7",
    title: "Minimalist Living Room & Media Lounge",
    category: "Interiors",
    categorySlug: "interiors",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    alt: "Serene minimalist interior design with curated warm furniture and soft lighting",
    location: "Highland Residences",
    description: "A cohesive interior palette featuring soft blush tones, fluted wall panels, and bespoke seating.",
    featured: true,
  },
  {
    id: "project-8",
    title: "Modern Dining Sanctuary with Cove Accents",
    category: "Interiors",
    categorySlug: "interiors",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
    alt: "Refined dining room interior with warm lighting and architectural simplicity",
    location: "Kensington Court",
    description: "Integrated dining space design with built-in credenza, soft linen drapery, and accent lighting.",
    featured: false,
  },

  // Gypsum Work
  {
    id: "project-9",
    title: "Sculptural Gypsum False Ceiling with Cove Lighting",
    category: "Gypsum",
    categorySlug: "gypsum",
    image: "/images/services/gypsum-work.jpg",
    alt: "Gypsum false ceiling with concealed warm LED cove illumination and flush shadow gaps",
    location: "Skyline Manor",
    description: "Multi-level gypsum ceiling featuring concealed 3000K warm LED illumination and curtain pockets.",
    featured: true,
  },
  {
    id: "project-10",
    title: "Architectural Ceiling Grid & Magnetic Tracks",
    category: "Gypsum",
    categorySlug: "gypsum",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern clean false ceiling with flush track lighting and linear diffusers",
    location: "Boulevard Villa",
    description: "Flush gypsum ceiling integration with zero-trim magnetic spot tracks and concealed AC ducts.",
    featured: false,
  },

  // Fabrication
  {
    id: "project-11",
    title: "Geometric Laser-Cut Metal Screen Partition",
    category: "Fabrication",
    categorySlug: "fabrication",
    image: "/images/services/fabrication.jpg",
    alt: "Custom architectural metal room divider with intricate geometric motif",
    location: "Amber Penthouse",
    description: "Bespoke laser-cut steel room partition finished in matte champagne powder coat with brass inlays.",
    featured: true,
  },
  {
    id: "project-12",
    title: "Slim-Profile Steel & Glass French Doors",
    category: "Fabrication",
    categorySlug: "fabrication",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    alt: "Steel-framed glass sliding partition for interior living space",
    location: "Maple Residence",
    description: "High-tolerance steel joinery partitions separating living and study zones without losing light.",
    featured: false,
  },

  // Staircases
  {
    id: "project-13",
    title: "Modern Floating Hardwood Staircase",
    category: "Staircases",
    categorySlug: "staircases",
    image: "/images/services/staircase-design.jpg",
    alt: "Contemporary cantilevered floating staircase with solid wood treads and sleek railing",
    location: "Horizon House",
    description: "Cantilevered solid teak treads floating from a concealed steel stringer with frameless balustrade.",
    featured: true,
  },
  {
    id: "project-14",
    title: "Architectural Mono-Stringer Steel Staircase",
    category: "Staircases",
    categorySlug: "staircases",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1200&q=80",
    alt: "Minimalist mono-stringer staircase with slim steel rods and warm wood steps",
    location: "Meadowlands Villa",
    description: "Heavy-duty central spine with integrated under-tread LED wash lighting and tactile handrail.",
    featured: false,
  },
];

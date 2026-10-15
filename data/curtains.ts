export interface CurtainCategory {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  alt: string;
  features: string[];
  idealRooms: string[];
  lightControl: "Flexible Dual Layer" | "Complete Blockout" | "Soft Daylight Filtering" | "Adjustable Slats" | "Thermal Insulation";
  privacyLevel: "High" | "Medium-High" | "Daytime Privacy" | "Maximum Privacy";
  materials: string[];
  operation: string[];
  popularChoices: string;
}

export const curtainCategories: CurtainCategory[] = [
  {
    id: "zebra-blinds",
    slug: "zebra-blinds",
    name: "Zebra Blinds",
    shortDescription: "Alternating sheer and opaque fabric bands for effortless day-to-night light control.",
    fullDescription:
      "Also known as Vision or Day & Night blinds, Zebra Blinds feature two parallel layers of striped fabric. Effortlessly align the sheer stripes for gentle filtered sunshine or overlap the opaque bands for complete privacy and dimmed ambiance.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern Zebra blinds installed on living room windows with alternating light bands",
    features: [
      "Smooth glide double-roller mechanism",
      "Seamless transition from open view to total privacy",
      "Anti-static, dust-repellent woven synthetic fabrics",
      "Available in motorized remote-control or manual corded",
    ],
    idealRooms: ["Living Rooms", "Home Offices", "Dining Spaces", "Study"],
    lightControl: "Flexible Dual Layer",
    privacyLevel: "Medium-High",
    materials: ["Premium Polyester", "Textured Jacquard", "Linen-look Blend"],
    operation: ["Motorized Remote / App Control", "Precision Smooth Beaded Chain"],
    popularChoices: "Muted Warm Taupe, Soft Alabaster, Charcoal Grey",
  },
  {
    id: "roller-blinds",
    slug: "roller-blinds",
    name: "Roller Blinds",
    shortDescription: "Clean, minimal fabric blinds that roll up neatly to celebrate your architectural view.",
    fullDescription:
      "A benchmark of contemporary interior styling, Roller Blinds present a crisp, sleek canvas when drawn and roll up into a discreet cassette when raised. They offer unmatched minimalism and clean geometric elegance.",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80",
    alt: "Minimalist roller blinds on large architectural window with soft sunlight",
    features: [
      "Ultra-compact top cassette or open roll finish",
      "UV-protective coating to safeguard flooring and furniture",
      "Fire-retardant and moisture-resistant fabric options",
      "Silent spring or rechargeable motorized drive",
    ],
    idealRooms: ["Bedrooms", "Kitchens", "Modern Apartments", "Commercial Offices"],
    lightControl: "Complete Blockout",
    privacyLevel: "High",
    materials: ["Screen Mesh 3%-5%", "Blockout Polyester", "Water-repellent Vinyl"],
    operation: ["Smart Home Automation (Alexa/Google)", "Heavy Duty Stainless Chain", "Spring Assist"],
    popularChoices: "Warm Ivory, Oatmeal Texture, Matte Slate",
  },
  {
    id: "roman-blinds",
    slug: "roman-blinds",
    name: "Roman Blinds",
    shortDescription: "Elegant cascading fabric folds that bring soft, bespoke tailoring and warmth to any window.",
    fullDescription:
      "Roman Blinds merge the structured functionality of a window blind with the luxurious warmth of premium drapery fabric. As they are raised, horizontal battens create neat, sculptured pleats that frame your window with understated couture charm.",
    image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=1200&q=80",
    alt: "Tailored roman blinds with delicate pleats in an elegant bedroom setting",
    features: [
      "Hand-stitched look with hidden rear cord rings",
      "Available with thermal, blackout, or sheer lining",
      "Soft stack that preserves headroom while adding decorative texture",
      "Custom trims, contrast borders, and piping details available",
    ],
    idealRooms: ["Master Bedrooms", "Formal Dining Rooms", "Guest Suites", "Boutique Living Areas"],
    lightControl: "Soft Daylight Filtering",
    privacyLevel: "High",
    materials: ["Belgian Linen", "Matte Velvet", "Cotton Duck Weave", "Textured Damask"],
    operation: ["Deluxe Sidewinder Chain", "Concealed Motorized Rod"],
    popularChoices: "Blush Sand, Natural Raw Linen, Rose Gold Bordered Cream",
  },
  {
    id: "venetian-blinds",
    slug: "venetian-blinds",
    name: "Venetian Blinds",
    shortDescription: "Timeless horizontal slats in aluminium, faux-wood, or PVC for micro-tuned light direction.",
    fullDescription:
      "Venetian Blinds offer unmatched directional light mastery. Tilt the horizontal louvers to deflect harsh midday glare toward the ceiling while maintaining outward visibility and room airflow, or shut them tight for private evenings.",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
    alt: "Adjustable Venetian blinds casting rhythmic sunlight stripes across a luxury desk",
    features: [
      "Precision tilt wand or motorized tilt mechanism",
      "Available in 25mm, 35mm, and 50mm slat widths",
      "Resistant to high humidity, warp-free, and wipe-clean",
      "Optional decorative fabric ladder tapes for elevated luxury",
    ],
    idealRooms: ["Home Studios", "Bathrooms", "Executive Workspaces", "Kitchens"],
    lightControl: "Adjustable Slats",
    privacyLevel: "Medium-High",
    materials: ["Aircraft Grade Aluminium", "Composite Moisture-resistant PVC", "Faux-Wood Polymer"],
    operation: ["Dual Cord (Tilt & Lift)", "Monocommand Chain", "Motorized Tilt"],
    popularChoices: "Brushed Champagne, Matte White, Anthracite Grey",
  },
  {
    id: "vertical-blinds",
    slug: "vertical-blinds",
    name: "Vertical Blinds",
    shortDescription: "Practical, floor-to-ceiling vertical vanes engineered specifically for grand sliding glass doors.",
    fullDescription:
      "The definitive window treatment for tall picture windows, balcony glass partitions, and patio French doors. Vertical Blinds rotate a full 180 degrees to welcome panoramic daylight or stack neatly to the sides without obstructing doorway transit.",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
    alt: "Floor-to-ceiling vertical blinds over large expansive balcony windows",
    features: [
      "Ideal for expansive glass spans exceeding 4 meters",
      "Free-hanging vanes with sewn-in weights or link chain",
      "Smooth curved or straight headrail profiles",
      "Split-draw or one-way stack configurations",
    ],
    idealRooms: ["Balcony Openings", "Living Room French Doors", "Meeting Rooms", "Verandas"],
    lightControl: "Adjustable Slats",
    privacyLevel: "Medium-High",
    materials: ["Screen Solar Fabric", "Blackout Coated Poly", "Textured Jacquard"],
    operation: ["Smooth Wand Control (Child-Safe)", "Motorized Traversing Track"],
    popularChoices: "Pearl White, Warm Beige, Heather Grey",
  },
  {
    id: "wooden-blinds",
    slug: "wooden-blinds",
    name: "Wooden Blinds",
    shortDescription: "Natural hardwood slats delivering organic warmth, rich grain textures, and architectural gravitas.",
    fullDescription:
      "Crafted from kiln-dried natural timber such as Basswood and Paulownia, our Wooden Blinds bring authentic craftsmanship and organic sophistication into living rooms and executive lounges. Each slat celebrates natural timber grain finished with eco-friendly stains.",
    image: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=80",
    alt: "Warm natural wooden blinds with rich timber grain in a sun-drenched sanctuary",
    features: [
      "100% natural kiln-dried sustainable hardwood",
      "Matching wooden valance and bottom bar for a cohesive finish",
      "UV-protective clear lacquer prevents fading and cracking",
      "Custom cotton ribbon decorative ladder tapes",
    ],
    idealRooms: ["Executive Studies", "Formal Living Rooms", "Library Nooks", "Modern Farmhouse Interiors"],
    lightControl: "Adjustable Slats",
    privacyLevel: "High",
    materials: ["Premium Basswood", "Natural Paulownia", "Stained Oak Finish"],
    operation: ["Cord Lift & Tilt", "Motorized Smart Tilt"],
    popularChoices: "Honey Oak, Warm Walnut, Bleached Ash, Rich Espresso",
  },
  {
    id: "bamboo-blinds",
    slug: "bamboo-blinds",
    name: "Bamboo Blinds",
    shortDescription: "Artisanal woven natural reeds and bamboo matchsticks for relaxed, bohemian interior harmony.",
    fullDescription:
      "Hand-woven using renewable bamboo slats, natural reeds, and jute yarns, our Bamboo Blinds cast soft, dappled patterns of sunlight across your room. They infuse spaces with earthy texture, organic tranquility, and breezy indoor-outdoor aesthetics.",
    image: "https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?auto=format&fit=crop&w=1200&q=80",
    alt: "Organic woven bamboo shades filtering dappled sunshine in a tranquil interior",
    features: [
      "Authentic woven natural grasses, bamboo, and jute",
      "Gentle diffused sunlight that creates a meditative atmosphere",
      "Eco-friendly, sustainable and biodegradable materials",
      "Optional fabric privacy backing available for nighttime seclusion",
    ],
    idealRooms: ["Sunrooms", "Spa Bathrooms", "Boho-chic Living Rooms", "Veranda Lounges"],
    lightControl: "Soft Daylight Filtering",
    privacyLevel: "Daytime Privacy",
    materials: ["Natural Bamboo Cane", "River Reed", "Jute Fiber Weave"],
    operation: ["Traditional Roll-up Pulley", "Roman Fold Cord Lock"],
    popularChoices: "Golden Honey Cane, Weathered Driftwood, Dark Tortoise Weave",
  },
  {
    id: "honeycomb-blinds",
    slug: "honeycomb-blinds",
    name: "Honeycomb Blinds",
    shortDescription: "Engineered cellular air pockets offering superior thermal insulation, sound dampening, and comfort.",
    fullDescription:
      "Also known as Cellular Shades, Honeycomb Blinds are an engineering triumph. Their unique hexagonal air chambers trap air at the window pane, significantly reducing heat gain in summer and heat loss in cooler seasons while attenuating outdoor street acoustics.",
    image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1200&q=80",
    alt: "Honeycomb cellular blinds filtering diffuse light while providing thermal insulation",
    features: [
      "Patented single and double cellular insulation cells",
      "Significantly reduces air conditioning and energy bills",
      "Sound-absorbing structure cushions ambient room acoustics",
      "Top-Down / Bottom-Up configuration allows privacy with daylight overhead",
    ],
    idealRooms: ["Home Theaters", "Master Bedrooms", "West-facing Sun-exposed Windows", "Nurseries"],
    lightControl: "Thermal Insulation",
    privacyLevel: "High",
    materials: ["Spunbond Polyester Fabric", "Reflective Foil Cell Core", "Non-woven Fiber"],
    operation: ["Cordless Push-Pull", "Top-Down / Bottom-Up", "Motorized Smart System"],
    popularChoices: "Crisp Linen White, Dove Grey, Champagne Silk",
  },
  {
    id: "sheer-curtains",
    slug: "sheer-curtains",
    name: "Sheer Curtains",
    shortDescription: "Ethereal, gossamer fabrics that diffuse natural light into a dreamy, welcoming interior glow.",
    fullDescription:
      "Nothing softens an interior like the graceful cascade of custom sheer curtains. Crafted from featherlight voile, linen weaves, and delicate batiste, our sheers billow softly with the breeze, muting direct sunlight into a gentle, romantic illumination while keeping daytime prying eyes out.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    alt: "Floor-to-ceiling flowing sheer white curtains in an airy high-ceiling living space",
    features: [
      "Fullness options: 2.5x to 3x gathered wave pleat, French pinch pleat, or ripplefold",
      "Weighted hem tape ensures a continuous, graceful drape to the floor",
      "Filters up to 70% of UV rays without darkening your living sanctuary",
      "Can be layered behind heavier blackout drapes on double track systems",
    ],
    idealRooms: ["Grand Living Rooms", "High-ceiling Lounges", "Bedrooms", "Dining Suites"],
    lightControl: "Soft Daylight Filtering",
    privacyLevel: "Daytime Privacy",
    materials: ["Fine Voile", "Open Weave Linen Blend", "Slub Cotton", "Soft Organza"],
    operation: ["Architectural S-Fold Wave Track", "Silent Ceiling-recessed Motorized Track", "French Rod"],
    popularChoices: "Pure Chalk White, Warm Cream, Champagne Mist, Soft Rose Blush",
  },
  {
    id: "blackout-curtains",
    slug: "blackout-curtains",
    name: "Blackout Curtains",
    shortDescription: "Heavyweight, luxurious drapery offering 100% light occlusion, acoustic calm, and restful sleep.",
    fullDescription:
      "Engineered for deep, restorative sleep and cinematic theater environments, our Blackout Curtains employ dense multi-pass triple-weave technology or insulated thermal backing. They completely shut out street lamps, early dawn sunlight, and outside commotion.",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80",
    alt: "Rich tailored blackout curtains in a luxurious sanctuary bedroom setting",
    features: [
      "Up to 100% complete room-darkening light occlusion",
      "Thermal barrier keeps rooms cool in summer and cosy in winter",
      "Dampens outside traffic and street noise for quiet comfort",
      "Custom headings: Pinch Pleat, Goblet Pleat, Eyelet, or Ripplefold",
    ],
    idealRooms: ["Master Bedrooms", "Home Cinemas", "Guest Bedrooms", "Audio Studios"],
    lightControl: "Complete Blockout",
    privacyLevel: "Maximum Privacy",
    materials: ["Rich Cotton Velvet", "Triple-weave Blackout Satin", "Textured Chenille", "Heavyweight Linen"],
    operation: ["Heavy-duty Corded Track", "Smart Motorized Drapery Track with Timer"],
    popularChoices: "Deep Espresso, Midnight Slate, Muted Rose Gold, Royal Taupe",
  },
];

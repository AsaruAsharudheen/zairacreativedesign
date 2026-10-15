export interface NavLink {
  title: string;
  href: string;
  description?: string;
  badge?: string;
  children?: NavLink[];
}

export const siteConfig = {
  name: "ZAIRA CREATIVE DESIGN",
  shortName: "Zaira Design",
  tagline: "Curtains, Blinds & Premium Interiors",
  description:
    "Transform your space with timeless elegance. Premium custom curtains, luxury window blinds, interior design, metal fabrication, gypsum ceilings, and bespoke staircase solutions.",
  url: "https://zairacreativedesign.com",
  logo: "/logo.png",
  logoAlt: "Zaira Creative Design Logo",
  
  // Editable contact information - easily customized by the business owner
  contact: {
    phone: "+91 98450 12345",
    phoneDisplay: "+91 98450 12345",
    phoneSecondary: "+91 98450 67890",
    phoneSecondaryDisplay: "+91 98450 67890",
    whatsapp: "919845012345",
    whatsappDisplay: "+91 98450 12345",
    whatsappMessage: "Hello Zaira Creative Design! I am interested in scheduling a consultation for curtains and interiors.",
    email: "enquiry@zairacreativedesign.com",
    supportEmail: "info@zairacreativedesign.com",
    address: {
      street: "Showroom #12, Design Avenue, Interior Craft Boulevard",
      city: "Metro City",
      state: "State",
      postalCode: "560001",
      country: "India",
      display: "Showroom #12, Design Avenue, Interior Craft Boulevard, Metro City",
    },
    hours: [
      { days: "Monday – Saturday", time: "9:30 AM – 8:00 PM" },
      { days: "Sunday", time: "10:30 AM – 5:00 PM (By Appointment)" },
    ],
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.89!2d77.6!3d12.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzEyLjAiTiA3N8KwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin",
    googleMapsDirectionsUrl: "https://maps.google.com/?q=Zaira+Creative+Design",
  },

  socials: [
    { name: "Instagram", url: "https://instagram.com/zairacreativedesign", icon: "Instagram" },
    { name: "Facebook", url: "https://facebook.com/zairacreativedesign", icon: "Facebook" },
    { name: "Pinterest", url: "https://pinterest.com/zairacreativedesign", icon: "Bookmark" },
    { name: "WhatsApp", url: "https://wa.me/919845012345", icon: "MessageCircle" },
  ],

  navigation: [
    { title: "Home", href: "/" },
    { title: "Curtains & Blinds", href: "/curtains", badge: "Primary" },
    {
      title: "Services",
      href: "/services",
      children: [
        { title: "Curtains & Blinds", href: "/curtains", description: "Bespoke drapery, automated tracks, and custom window blinds" },
        { title: "Interior Design", href: "/services/interior-design", description: "Residential living, luxury bedroom styling and modular spaces" },
        { title: "Gypsum Work", href: "/services/gypsum-work", description: "Architectural false ceilings, cove lighting and partition walls" },
        { title: "Fabrication", href: "/services/fabrication", description: "Custom structural metalwork, decorative screens and pergolas" },
        { title: "Staircase Design", href: "/services/staircase-design", description: "Contemporary staircases, laser cut railings and wooden treads" },
      ],
    },
    { title: "Gallery", href: "/gallery" },
    { title: "About Us", href: "/about" },
    { title: "Contact", href: "/contact" },
  ] as NavLink[],

  curtainCategoriesList: [
    { title: "Zebra Blinds", slug: "zebra-blinds" },
    { title: "Roller Blinds", slug: "roller-blinds" },
    { title: "Roman Blinds", slug: "roman-blinds" },
    { title: "Venetian Blinds", slug: "venetian-blinds" },
    { title: "Vertical Blinds", slug: "vertical-blinds" },
    { title: "Wooden Blinds", slug: "wooden-blinds" },
    { title: "Bamboo Blinds", slug: "bamboo-blinds" },
    { title: "Honeycomb Blinds", slug: "honeycomb-blinds" },
    { title: "Sheer Curtains", slug: "sheer-curtains" },
    { title: "Blackout Curtains", slug: "blackout-curtains" },
  ],
};

// Central site configuration — single source of truth for SEO metadata, sitemap,
// robots, JSON-LD structured data and the contact page. All facts here are sourced
// from the AEC "Website Content" document.

export const siteConfig = {
  name: "Australian Education Centre",
  shortName: "AEC",
  legalName: "Australian Education Centre (Pvt) Ltd",
  // Set NEXT_PUBLIC_SITE_URL to the real production domain before launch.
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://aus-edu-ready.netlify.app").replace(/\/$/, ""),
  description:
    "Sri Lanka's first MARA-registered education & migration consultancy. 20+ years placing students in Australia, New Zealand & 20+ countries — university placement, student visas, PR pathways, partner & family visas.",
  tagline: "Your Complete Journey to Global Education",
  logo: "/auseducenter_logo.png",
  ogImage: "/australia_hero.png",
  foundingYear: "2005",
  email: "edu@multinational.com.au",
  phone: "+94115500100",
  whatsapp: "+94773950448",
  socials: {
    instagram: "https://www.instagram.com/aec_srilanka/",
    // TODO(client): supply the real Facebook, LinkedIn & YouTube URLs.
  },
} as const;

export interface Office {
  id: string;
  city: string;
  name: string;
  address: string; // display string
  street: string;
  locality: string;
  region: string;
  postalCode?: string;
  country: string; // ISO or full
  countryCode: string; // ISO 3166-1 alpha-2
  phone: string;
  mobiles?: string[];
  email: string;
  hours: string[]; // display
  openingHours: { days: string[]; opens: string; closes: string }[]; // schema.org
  isHead?: boolean;
}

export const offices: Office[] = [
  {
    id: "colombo",
    city: "Sri Lanka Office - Head Office",
    name: "Australian Education Centre (Pvt) Ltd",
    address: "No. 421-1/1, Thimbirigasyaya Road, Colombo 05, Sri Lanka",
    street: "No. 421-1/1, Thimbirigasyaya Road",
    locality: "Colombo 05",
    region: "Western Province",
    country: "Sri Lanka",
    countryCode: "LK",
    phone: "+94 11 5500100",
    mobiles: ["+94 77 395 0448", "+94 77 107 6990", "+94 77 107 6991"],
    email: "edu@multinational.com.au",
    hours: [
      "Monday - Friday: 8:30 AM to 6:30 PM",
      "Saturday: 9:30 AM to 5:30 PM",
      "2nd & 4th Sunday: 9:30 AM to 5:30 PM",
    ],
    openingHours: [
      { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:30", closes: "18:30" },
      { days: ["Saturday"], opens: "09:30", closes: "17:30" },
    ],
    isHead: true,
  },
  {
    id: "melbourne",
    city: "Melbourne Office",
    name: "Australian Education Centre",
    address: "Unit 1/11-15 Rocklea Drive, Port Melbourne, Victoria 3207, Australia",
    street: "Unit 1/11-15 Rocklea Drive",
    locality: "Port Melbourne",
    region: "VIC",
    postalCode: "3207",
    country: "Australia",
    countryCode: "AU",
    phone: "+61 489 980 366",
    email: "melbourne@multinational.com.au",
    hours: ["Monday - Friday: 9:00 AM to 5:30 PM"],
    openingHours: [
      { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "17:30" },
    ],
  },
  {
    id: "adelaide",
    city: "Adelaide Office",
    name: "Australian Education Centre",
    address: "35 Golflinks Road, Adelaide, SA 5152, Australia",
    street: "35 Golflinks Road",
    locality: "Adelaide",
    region: "SA",
    postalCode: "5152",
    country: "Australia",
    countryCode: "AU",
    phone: "+61 432 110 997",
    email: "adelaide@multinational.com.au",
    hours: ["Monday - Friday: 9:00 AM to 5:30 PM"],
    openingHours: [
      { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "17:30" },
    ],
  },
  {
    id: "dubai",
    city: "Dubai Office",
    name: "Australian Education Centre",
    address: "Shams Business Center, Sharjah Media City Free Zone, Al Messaned, Sharjah, United Arab Emirates",
    street: "Shams Business Center, Sharjah Media City Free Zone, Al Messaned",
    locality: "Sharjah",
    region: "Sharjah",
    country: "United Arab Emirates",
    countryCode: "AE",
    phone: "+971 50 779 4262",
    email: "dubai@multinational.com.au",
    hours: ["Monday - Friday: 9:00 AM to 5:30 PM"],
    openingHours: [
      { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "17:30" },
    ],
  },
];

// Department contact emails (from the content doc's "Quick Contact Options").
export const departmentEmails = [
  { label: "General Inquiries", email: "info@multinational.com.au" },
  { label: "University Applications", email: "edu@multinational.com.au" },
  { label: "Visa Services", email: "visa@multinational.com.au" },
  { label: "University Tours", email: "tours@multinational.com.au" },
  { label: "Scholarships", email: "scholarships@multinational.com.au" },
  { label: "English Preparation", email: "english@multinational.com.au" },
];

// Build the JSON-LD @graph: Organization + WebSite + one LocalBusiness per office.
export function organizationJsonLd() {
  const base = siteConfig.url;
  const head = offices.find((o) => o.isHead)!;
  const sameAs = Object.values(siteConfig.socials).filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${base}/#organization`,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        alternateName: siteConfig.shortName,
        url: base,
        logo: { "@type": "ImageObject", url: `${base}${siteConfig.logo}` },
        description: siteConfig.description,
        foundingDate: siteConfig.foundingYear,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        ...(sameAs.length ? { sameAs } : {}),
        address: {
          "@type": "PostalAddress",
          streetAddress: head.street,
          addressLocality: head.locality,
          addressRegion: head.region,
          addressCountry: head.countryCode,
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: siteConfig.phone,
          contactType: "customer service",
          email: siteConfig.email,
          areaServed: ["LK", "AU", "AE", "IN", "PK", "BD"],
          availableLanguage: ["en", "si", "ta"],
        },
        areaServed: "Worldwide",
        knowsAbout: [
          "Study in Australia",
          "Student visas",
          "Permanent residency pathways",
          "Partner and family visas",
          "IELTS and PTE preparation",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        url: base,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: { "@id": `${base}/#organization` },
        inLanguage: "en",
      },
      ...offices.map((o) => ({
        "@type": "LocalBusiness",
        "@id": `${base}/#office-${o.id}`,
        name: `${siteConfig.name} — ${o.city.replace(" - Head Office", "")}`,
        parentOrganization: { "@id": `${base}/#organization` },
        url: `${base}/contact`,
        telephone: o.phone,
        email: o.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: o.street,
          addressLocality: o.locality,
          addressRegion: o.region,
          ...(o.postalCode ? { postalCode: o.postalCode } : {}),
          addressCountry: o.countryCode,
        },
        openingHoursSpecification: o.openingHours.map((h) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: h.days,
          opens: h.opens,
          closes: h.closes,
        })),
      })),
    ],
  };
}

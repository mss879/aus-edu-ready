import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { countries } from "@/data/countries";

type Freq = "weekly" | "monthly" | "yearly";

// Static routes with SEO priority + change frequency.
const staticRoutes: { path: string; priority: number; changeFrequency: Freq }[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/study-in-australia", priority: 0.9, changeFrequency: "weekly" },
  { path: "/study-worldwide", priority: 0.9, changeFrequency: "weekly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/pr-pathways", priority: 0.9, changeFrequency: "monthly" },
  { path: "/university-tours", priority: 0.9, changeFrequency: "monthly" },
  { path: "/partner-family-visas", priority: 0.8, changeFrequency: "monthly" },
  { path: "/australian-school-sector", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/insights", priority: 0.8, changeFrequency: "weekly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },

  { path: "/study-in-australia/why-study", priority: 0.7, changeFrequency: "monthly" },
  { path: "/study-in-australia/course-finder", priority: 0.7, changeFrequency: "monthly" },
  { path: "/study-in-australia/short-courses", priority: 0.7, changeFrequency: "monthly" },
  { path: "/study-in-australia/scholarships", priority: 0.7, changeFrequency: "monthly" },
  { path: "/study-in-australia/universities-colleges", priority: 0.7, changeFrequency: "monthly" },
  { path: "/study-in-australia/faqs", priority: 0.6, changeFrequency: "monthly" },

  { path: "/pr-pathways/visa-options", priority: 0.7, changeFrequency: "monthly" },
  { path: "/pr-pathways/journey", priority: 0.7, changeFrequency: "monthly" },
  { path: "/pr-pathways/categories", priority: 0.7, changeFrequency: "monthly" },

  { path: "/partner-family-visas/bring-family", priority: 0.7, changeFrequency: "monthly" },
  { path: "/partner-family-visas/work-rights", priority: 0.7, changeFrequency: "monthly" },
  { path: "/partner-family-visas/children-benefits", priority: 0.7, changeFrequency: "monthly" },

  { path: "/australian-school-sector/school-types", priority: 0.6, changeFrequency: "monthly" },
  { path: "/australian-school-sector/entry-points", priority: 0.6, changeFrequency: "monthly" },
  { path: "/australian-school-sector/costs", priority: 0.6, changeFrequency: "monthly" },
  { path: "/australian-school-sector/accommodation", priority: 0.6, changeFrequency: "monthly" },

  { path: "/services/pre-departure", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/arrival-settlement", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/career-services", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/ielts-pte", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/partner-family", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/parents-resources", priority: 0.7, changeFrequency: "monthly" },

  { path: "/about/our-story", priority: 0.6, changeFrequency: "yearly" },
  { path: "/about/mission-values", priority: 0.6, changeFrequency: "yearly" },
  { path: "/about/credentials", priority: 0.6, changeFrequency: "yearly" },

  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const lastModified = new Date();

  const staticEntries = staticRoutes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const countryEntries = countries.map((c) => ({
    url: `${base}/study-worldwide/${c.id}`,
    lastModified,
    changeFrequency: "monthly" as Freq,
    priority: 0.6,
  }));

  return [...staticEntries, ...countryEntries];
}

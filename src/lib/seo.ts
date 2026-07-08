import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

interface PageSeo {
  title: string;
  description: string;
  keywords: string[];
}

// Page-specific SEO copy. Titles are complete (already suffixed where it fits in ~60 chars),
// so pageMeta() sets them as absolute titles rather than applying a template.
export const pageSeo: Record<string, PageSeo> = {
  "/": {
    title: "Study in Australia & Abroad from Sri Lanka | AEC",
    description: "Sri Lanka's first MARA-registered study abroad & migration consultancy. Placements in Australia, NZ & worldwide with 95% visa success and full PR support.",
    keywords: ["study in Australia from Sri Lanka", "study abroad consultants Sri Lanka", "MARA registered migration agent", "student visa consultants", "Australia PR pathways", "overseas education consultancy"],
  },
  "/about": {
    title: "About AEC | MARA-Registered Study & Migration Experts",
    description: "Learn about Australian Education Centre — Sri Lanka's first MARA-registered study and migration consultancy, with 20+ years and offices across four cities.",
    keywords: ["Australian Education Centre", "MARA registered agent Sri Lanka", "study and migration consultancy", "education consultants Sri Lanka", "AEC Australia study"],
  },
  "/about/our-story": {
    title: "Our Story: 20+ Years of Education & Migration | AEC",
    description: "AEC's story spans 20+ years, matching education counselling to long-term migration and career goals across offices in Melbourne, Adelaide, Colombo and Dubai.",
    keywords: ["Australian Education Centre", "AEC Sri Lanka", "education and migration consultancy", "AEC our story", "study abroad consultants Sri Lanka"],
  },
  "/about/mission-values": {
    title: "Mission & Values: Ethical Study Abroad Guidance | AEC",
    description: "Explore AEC's mission and five core values—integrity, excellence, compliance and student-first support—driving honest study abroad guidance in Australia & NZ.",
    keywords: ["AEC mission and values", "Australian Education Centre core values", "ethical study abroad consultants", "honest education counselling Sri Lanka", "student-centric education agency"],
  },
  "/about/credentials": {
    title: "PIER & MARA Credentials for Study in Australia | AEC",
    description: "Study and migrate with confidence. AEC's PIER-qualified counsellors, MARA-registered migration support and ESOS/AQF compliance protect your Australia pathway.",
    keywords: ["MARA registered migration agent", "PIER qualified education counsellor", "Australian education consultancy Sri Lanka", "ESOS compliant student visa agent", "study in Australia credentials"],
  },
  "/study-in-australia": {
    title: "Study in Australia from Sri Lanka | AEC",
    description: "Study in Australia with AEC — expert university placement, course matching, scholarships, student visas and PR pathway planning for Sri Lankan students.",
    keywords: ["study in Australia", "study in Australia from Sri Lanka", "Australian student visa", "university placement Australia", "Australia scholarships", "Australia PR pathways"],
  },
  "/study-in-australia/why-study": {
    title: "Why Study in Australia: Benefits, Work & PR | AEC",
    description: "Why study in Australia? Explore TEQSA-regulated degrees, part-time work rights, post-study work and PR pathways, plus safe, multicultural student life.",
    keywords: ["why study in Australia", "study in Australia benefits", "work while studying in Australia", "post-study work Australia", "Australia PR pathways", "study in Australia for Sri Lankan students"],
  },
  "/study-in-australia/course-finder": {
    title: "Australia Course Finder – Match by Field & Budget | AEC",
    description: "Use AEC's Australia Course Finder to match courses by field, budget and intake. Explore in-demand degrees with strong PR pathways and expert counselling.",
    keywords: ["Australia course finder", "study in Australia courses", "find courses in Australia", "courses for PR in Australia", "IT and nursing courses Australia"],
  },
  "/study-in-australia/short-courses": {
    title: "Short & Specialized Courses in Australia | AEC",
    description: "Explore short and specialized courses in Australia — from intensive bootcamps under 3 months to CRICOS-accredited pathways at leading universities and TAFEs.",
    keywords: ["short courses in Australia", "CRICOS short courses", "intensive courses Australia", "specialized courses Australia", "study Australia short courses", "TAFE short courses Australia"],
  },
  "/study-in-australia/scholarships": {
    title: "Australia Scholarships for International Students | AEC",
    description: "Explore scholarships and tuition fee waivers for international students in Australia—up to 30% off. AEC matches your profile and manages the full application.",
    keywords: ["Australia scholarships", "scholarships for international students Australia", "tuition fee waivers Australia", "study in Australia scholarships", "Australian university scholarships"],
  },
  "/study-in-australia/universities-colleges": {
    title: "Australian Universities & Colleges Directory | AEC",
    description: "Browse 50+ Australian universities, TAFEs and pathway colleges in one searchable directory. AEC guides you from shortlist to offer letter and CoE with confidence.",
    keywords: ["Australian universities list", "study in Australia universities", "Australian pathway colleges", "TAFE for international students", "CRICOS registered institutions", "Australia university admissions"],
  },
  "/study-in-australia/faqs": {
    title: "Study in Australia FAQs: Visas, Work & PR | AEC",
    description: "Answers to common questions on studying in Australia — visa rules, working while studying, and PR pathways — from AEC's MARA-registered agents.",
    keywords: ["study in Australia FAQs", "work while studying in Australia", "Australia student visa rules", "Australia PR pathways", "studying in Australia for Sri Lankan students"],
  },
  "/study-worldwide": {
    title: "Study Abroad in 20+ Countries Worldwide | AEC",
    description: "Explore 20+ study abroad destinations with AEC — compare tuition, work rights and PR pathways, weigh MBBS options in Belarus & Georgia, and get expert visa help.",
    keywords: ["study abroad", "study abroad destinations", "compare study abroad countries", "MBBS in Belarus and Georgia", "study overseas from Sri Lanka"],
  },
  "/pr-pathways": {
    title: "Australia PR Pathways: Student Visa to PR | AEC",
    description: "Plan your Australia PR pathway from student visa to permanent residency: 485 post-study work, employer sponsorship and skilled 189/190/491 with MARA experts.",
    keywords: ["Australia PR pathways", "student visa to PR Australia", "Australian skilled migration", "subclass 485 post-study work visa", "189 190 491 PR points", "employer sponsorship PR Australia"],
  },
  "/pr-pathways/visa-options": {
    title: "Australia Post-Study Work Visas: 485, 407 & 482 | AEC",
    description: "Explore Australia's post-study work visas — Subclass 485, 407 and 482 — to gain local work experience, boost migration points and open PR pathways with AEC.",
    keywords: ["Australia post-study work visa", "subclass 485 temporary graduate visa", "482 temporary skill shortage visa", "407 training visa Australia", "work visa after study Australia", "Australia PR pathway visa"],
  },
  "/pr-pathways/journey": {
    title: "Student Visa to Australia PR: Step-by-Step Guide | AEC",
    description: "Map your step-by-step path from an Australian student visa to permanent residency in 4-6 years — study, the 485 graduate visa, work experience and skilled PR.",
    keywords: ["Australia PR pathway", "student visa to PR", "485 graduate visa", "Australia skilled migration", "study to PR Australia"],
  },
  "/pr-pathways/categories": {
    title: "Australia PR Visa Categories: 491, 190, 189, 186 | AEC",
    description: "Compare Australian PR visa categories — Subclasses 491, 190, 189 & 186 — by sponsorship, location rules and PR timing to find your skilled migration path.",
    keywords: ["Australia PR visa categories", "skilled migration visa Australia", "subclass 190 vs 189", "subclass 491 regional visa", "employer nomination subclass 186", "Australia permanent residency pathways"],
  },
  "/partner-family-visas": {
    title: "Partner & Family Visas for Study in Australia | AEC",
    description: "Bring your spouse and children to Australia while you study. AEC's MARA-registered counsellors guide partner & family visas, work rights and schooling.",
    keywords: ["partner visa Australia", "family visa for students Australia", "bring spouse on student visa", "dependent visa Australia", "partner work rights Australia"],
  },
  "/partner-family-visas/bring-family": {
    title: "Bring Your Partner & Family to Australia | AEC",
    description: "Bring your partner and children to Australia on a dependent student visa. AEC guides you on relationship evidence, financial proof and family visa pathways.",
    keywords: ["dependent visa Australia", "bring family to Australia", "partner visa student Australia", "student visa dependents", "family visa Australia", "subsequent entrant visa"],
  },
  "/partner-family-visas/work-rights": {
    title: "Partner Work Rights on Australian Student Visas | AEC",
    description: "See how much dependent partners can work on an Australian student visa—48 hours a fortnight for Bachelors and unlimited hours for Masters, PhD & 485 holders.",
    keywords: ["partner work rights Australia", "spouse work rights student visa", "dependent partner work hours Australia", "subclass 500 partner work rights", "485 visa partner work rights"],
  },
  "/partner-family-visas/children-benefits": {
    title: "Children's Schooling & Benefits in Australia | AEC",
    description: "Bring your children to Australia while you study. Explore primary, secondary and early childhood schooling benefits for dependents, plus fees to plan for.",
    keywords: ["dependent children schooling Australia", "student visa children education", "schooling for dependents in Australia", "early childhood education Australia", "school fees for dependent children"],
  },
  "/australian-school-sector": {
    title: "Australian School Placements, Ages 8-18 | AEC",
    description: "Place your child in a vetted Australian school (Years 3-11). AEC handles school selection, tuition budgets, homestay welfare and the Subclass 500 student visa.",
    keywords: ["Australian school placements", "study in Australian schools", "student visa subclass 500", "Australian boarding schools", "Australian school fees for international students"],
  },
  "/australian-school-sector/school-types": {
    title: "Australian School Types: Private, Catholic & Public | AEC",
    description: "Compare Australia's private, Catholic and public school types—tuition costs, facilities and academics—so you choose the right school for your child.",
    keywords: ["Australian school types", "private schools Australia fees", "Catholic schools Australia", "public schools Australia", "Australian school tuition costs", "study in Australia schools"],
  },
  "/australian-school-sector/entry-points": {
    title: "Australian School Entry Points by Age | AEC",
    description: "Find the best age to enrol your child in an Australian school: primary, junior and senior entry points by year level, plus placement rules to time it right.",
    keywords: ["Australian school entry age", "enrol child in Australian school", "best age to study in Australia", "Australian school year levels", "study in Australia for children"],
  },
  "/australian-school-sector/costs": {
    title: "Australian School Fees, Costs & Budget Calculator | AEC",
    description: "Break down Australian school fees, accommodation and extra costs by school type, then use our budget calculator to estimate your child's annual investment.",
    keywords: ["Australian school fees", "cost of Australian schools for international students", "Australian school tuition fees", "homestay accommodation cost Australia", "Australian school budget calculator"],
  },
  "/australian-school-sector/accommodation": {
    title: "Australian School Accommodation: Homestay & Boarding | AEC",
    description: "Compare homestay, school boarding and guardian (Subclass 590) accommodation for students in Australia. AEC arranges vetted, CAAW-compliant care for under-18s.",
    keywords: ["Australia school accommodation", "homestay families Australia", "school boarding Australia", "student guardian visa subclass 590", "CAAW accommodation under 18"],
  },
  "/services": {
    title: "Study Abroad Services: Visa, IELTS & Settlement | AEC",
    description: "AEC's complete study abroad services support you end to end — university admissions, MARA visa prep, IELTS & PTE coaching, career, family visas and settlement.",
    keywords: ["study abroad services", "Australia student visa services", "IELTS and PTE preparation", "485 graduate visa", "partner and family visa", "MARA registered agent"],
  },
  "/services/pre-departure": {
    title: "Pre-Departure Services for Studying Abroad | AEC",
    description: "Pre-departure services from AEC: free counseling, MARA visa advice, document prep, ticketing and IELTS/PTE guidance before you leave to study abroad.",
    keywords: ["pre-departure services", "study abroad preparation", "student visa advice", "IELTS PTE registration", "pre-departure checklist"],
  },
  "/services/arrival-settlement": {
    title: "Student Arrival & Settlement Support in Australia | AEC",
    description: "AEC's on-shore team in Australia handles your arrival and settlement: airport pickup, homestay, bank account, SIM, TFN, job coaching and welfare support.",
    keywords: ["arrival and settlement services australia", "student settlement support australia", "homestay accommodation for students australia", "airport pickup international students", "student bank account and TFN setup", "part-time job help students australia"],
  },
  "/services/career-services": {
    title: "Post-Study Career Services in Australia | AEC",
    description: "Post-study career services for graduates in Australia: 485 graduate visa, Professional Year, internships, job placement and PR pathway support from AEC.",
    keywords: ["post-study work visa Australia", "graduate visa 485", "Professional Year program", "career services for international students", "PR pathway Australia", "job placement for graduates Australia"],
  },
  "/services/ielts-pte": {
    title: "IELTS & PTE Preparation Coaching | AEC Sri Lanka",
    description: "Hit your target IELTS Academic or PTE band with AEC's expert coaching partners — flexible course batches, weekly mock exams and 1-on-1 speaking audits.",
    keywords: ["IELTS preparation", "PTE Academic coaching", "IELTS PTE classes Sri Lanka", "IELTS mock exams", "English test band score coaching"],
  },
  "/services/partner-family": {
    title: "Partner & Family Visas for Australia | AEC",
    description: "Bring your spouse, children or guardian to Australia. AEC's partner & family visa services offer eligibility audits, document review and evidence support.",
    keywords: ["partner visa Australia", "family visa Australia", "dependent child visa", "guardian visa Australia", "spouse visa for students"],
  },
  "/services/parents-resources": {
    title: "Parent Resources for Studying in Australia | AEC",
    description: "Parent resources for studying in Australia: understand AQF, OSHC welfare, living costs, visa rules and PR pathways, backed by AEC's 24/7 family support.",
    keywords: ["parent resources study in Australia", "OSHC and student welfare Australia", "cost of living for students in Australia", "student visa conditions Australia", "post-study work visa 485"],
  },
  "/university-tours": {
    title: "Australian University Tours: Campus Visits & STEM | AEC",
    description: "Join AEC's 7-10 day Australian university tours — visit 8-15 campuses, join hands-on STEM workshops and live student life before choosing your degree.",
    keywords: ["Australian university tours", "university campus tours Australia", "study Australia university tour", "STEM student tours Australia", "university exploration tour Sri Lanka"],
  },
  "/contact": {
    title: "Contact AEC | Book a Free Study Abroad Consultation",
    description: "Contact Australian Education Centre to book a free consultation. A PIER-certified advisor replies within 24 hours. Colombo, Melbourne, Adelaide & Dubai.",
    keywords: ["contact Australian Education Centre", "AEC Colombo office", "free study abroad consultation", "AEC Dubai office", "study consultation Sri Lanka"],
  },
  "/insights": {
    title: "Free Study & Visa Guides, Expert Sessions | AEC",
    description: "Request AEC's free study and visa guides for Australia and 20+ destinations, plus expert parent sessions, IELTS/PTE prep workshops and university tours.",
    keywords: ["free study abroad guides", "Australia student visa checklist", "study in Australia guide 2026", "IELTS PTE prep workshops", "university exploration tours", "PR pathways Australia"],
  },
  "/privacy": {
    title: "Privacy Policy: How We Protect Your Data | AEC",
    description: "Read the Australian Education Centre privacy policy to learn how we collect, use, and protect the personal information you share, plus how to access or delete it.",
    keywords: ["AEC privacy policy", "Australian Education Centre privacy", "data protection", "personal information", "student data privacy"],
  },
  "/terms": {
    title: "Terms & Conditions | AEC Study & Visa Services",
    description: "Review the Terms & Conditions that apply to the Australian Education Centre website and our study, visa and migration services before you get started.",
    keywords: ["AEC terms and conditions", "Australian Education Centre terms of use", "study abroad service terms", "student visa consultancy terms", "AEC website terms"],
  },
};

// Build a full Metadata object for a route from its SEO entry + shared site config.
export function pageMeta(path: string): Metadata {
  const seo = pageSeo[path];
  const title = seo?.title ?? siteConfig.name;
  const description = seo?.description ?? siteConfig.description;
  const canonical = path === "/" ? "/" : path;

  return {
    title,
    description,
    keywords: seo?.keywords,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_US",
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
    },
  };
}

"use client";

import { useState } from "react";
import { PageHero } from "@/components/ui/page-hero";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { 
  Globe2, Stethoscope, Landmark, ShieldCheck, CheckCircle2, 
  MapPin, Clock, ArrowUpRight, Compass, HelpCircle, ChevronDown, ChevronRight 
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { countries } from "@/data/countries";

const compareData = [
  { dest: "Australia", tuition: "Medium-High", living: "Medium-High", work: "Yes", postStudy: "Strong PR & career options", bestFor: "Broad disciplines & PR planning" },
  { dest: "New Zealand", tuition: "Medium", living: "Medium", work: "Yes", postStudy: "Good", bestFor: "Work options & lifestyle" },
  { dest: "United Kingdom", tuition: "Medium-High", living: "High", work: "Yes", postStudy: "Medium", bestFor: "Short degrees & prestige" },
  { dest: "Ireland", tuition: "Medium", living: "Medium-High", work: "Yes", postStudy: "Medium", bestFor: "EU exposure & tech" },
  { dest: "Germany", tuition: "Low", living: "Low-Medium", work: "Yes", postStudy: "Strong", bestFor: "Low tuition & jobs" },
  { dest: "France", tuition: "Low-Medium", living: "Medium-High", work: "Yes", postStudy: "Medium", bestFor: "EU exposure & varied fields" },
  { dest: "Italy", tuition: "Low-Medium", living: "Medium", work: "Yes", postStudy: "Medium", bestFor: "Culture & affordable EU study" },
  { dest: "Spain", tuition: "Low-Medium", living: "Medium", work: "Yes", postStudy: "Medium", bestFor: "Culture & language learners" },
  { dest: "Malta", tuition: "Low-Medium", living: "Medium", work: "Yes", postStudy: "Limited", bestFor: "English-in-EU & affordability" },
  { dest: "Latvia", tuition: "Low", living: "Low", work: "Yes", postStudy: "Limited", bestFor: "Budget EU study" },
  { dest: "Hungary", tuition: "Low-Medium", living: "Low-Medium", work: "Yes", postStudy: "Medium", bestFor: "Affordable EU options" },
  { dest: "Switzerland", tuition: "High", living: "High", work: "Limited", postStudy: "Medium", bestFor: "Premium education & salary potential" },
  { dest: "Belarus", tuition: "Low", living: "Low", work: "Limited", postStudy: "Limited", bestFor: "Budget medical & technical study" },
  { dest: "United States", tuition: "High", living: "High", work: "Limited", postStudy: "Medium", bestFor: "Top universities & research" },
  { dest: "Canada", tuition: "Medium", living: "Medium", work: "Yes", postStudy: "Strong", bestFor: "Balanced cost & PR pathways" },
  { dest: "United Arab Emirates", tuition: "Low-Medium", living: "Medium", work: "Yes", postStudy: "Limited", bestFor: "Affordable education & transfers" },
  { dest: "Finland", tuition: "Medium", living: "Medium", work: "Yes", postStudy: "Strong", bestFor: "Nordic life & IT/Game Design" },
  { dest: "Japan", tuition: "Low-Medium", living: "Medium", work: "Yes", postStudy: "Medium", bestFor: "Technology & innovation" },
  { dest: "South Korea", tuition: "Low-Medium", living: "Medium", work: "Yes", postStudy: "Medium", bestFor: "Scholarships & culture" }
];

const mbbsSteps = [
  { title: "Step 1: Choose a University", description: "Select a WHO and AMC-accredited medical university in Belarus or Georgia that fits your scorecard." },
  { title: "Step 2: Submit Application", description: "Provide transcripts, birth certificate, and copy of passport to begin university enrollment." },
  { title: "Step 3: Receive Admission Letter", description: "Secure your official university admissions letter and CAAW approvals if a minor." },
  { title: "Step 4: Pay First-Year Tuition", description: "Arrange international fee payments directly to secure student visa support documents." },
  { title: "Step 5: Apply for Student Visa", description: "Compile healthcare clearances, bank letters, and submit visa applications." },
  { title: "Step 6: Arrive & Settle", description: "Begin medical training with ongoing settlement coaching and support from our study network." }
];

const worldwideFAQs = [
  { title: "Which country is best for my studies?", content: "The best destination depends entirely on your academic scorecards, financial budget caps, preferred professional disciplines, post-study work goals, and long-term residency or PR pathway strategies." },
  { title: "Can I work while studying overseas?", content: "Most international study hubs (UK, Ireland, Germany, Australia, Canada) allow part-time work of around 20 hours per week during semesters, and full-time during breaks. USA and Japan maintain specific on-campus work restrictions." },
  { title: "Are scholarships available for international students?", content: "Yes. Many public and private universities offer merit-based tuition discounts, regional grants, or need-based aid. AEC coordinates eligibility checks to secure maximum reductions." },
  { title: "Is IELTS mandatory for all destinations?", content: "Not always. Some European destinations (like Germany or Spain) accept English-medium instruction certificates from your previous school, or offer language pathway courses, though IELTS/PTE is highly recommended for visa clearance." },
  { title: "Does studying abroad guarantee PR?", content: "No. Permanent Residency depends strictly on each sovereign government's points calculators, skilled shortage changes, and individual professional experience." },
  { title: "Do you assist with visas and admissions?", content: "Yes. AEC provides comprehensive end-to-end guidance: qualified counseling, multi-university applications, document review, MARA visa advising, ticketing, and arrival settlement." }
];

export default function StudyWorldwidePortal() {
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedCountryA, setSelectedCountryA] = useState("Australia");
  const [selectedCountryB, setSelectedCountryB] = useState("Canada");
  const [selectedCountryC, setSelectedCountryC] = useState("United Kingdom");

  const regions = ["all", "Europe", "North America", "Asia", "Middle East", "Oceania"];

  const filteredCountries = countries.filter(c => 
    selectedRegion === "all" || c.region.toLowerCase() === selectedRegion.toLowerCase()
  );

  // Dynamic Comparer selector
  const compareA = compareData.find(item => item.dest === selectedCountryA) || compareData[0];
  const compareB = compareData.find(item => item.dest === selectedCountryB) || compareData[1];
  const compareC = compareData.find(item => item.dest === selectedCountryC) || compareData[2];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: worldwideFAQs.map((f) => ({
      "@type": "Question",
      name: f.title,
      acceptedAnswer: { "@type": "Answer", text: f.content },
    })),
  };

  return (
    <div className="flex flex-col w-full bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHero
        title="Study Worldwide"
        subtitle="Explore quality educational opportunities across 20+ global destinations with AEC."
        breadcrumb="Study Worldwide"
        bgImage="https://images.unsplash.com/photo-1526778548025-fa2fbf8b1bb3?q=80&w=2940&auto=format&fit=crop"
      />

      {/* Region Selector and Directory Grid */}
      <section className="py-24 bg-white" id="countries">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-bold uppercase tracking-wider mb-3">
              Global Placements
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight text-[#11181C] leading-[1.1] mb-4">
              Explore Countries We Serve
            </h2>
            <p className="text-slate-500 text-lg">
              We connect students to top-ranked universities, colleges, and specialized academies across major international regions.
            </p>
          </div>

          {/* Region Tabs */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-16 max-w-3xl mx-auto">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-5 py-2 rounded-full text-xs font-extrabold transition-all uppercase tracking-wider cursor-pointer border ${
                  selectedRegion === region 
                    ? "bg-[#124b8d] text-white border-[#124b8d] shadow-[0_4px_12px_rgba(18,75,141,0.2)]" 
                    : "bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-[#124b8d] border-slate-200/70"
                }`}
              >
                {region === "all" ? "All Regions" : region}
              </button>
            ))}
          </div>

          {/* Dynamic country Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCountries.map((country) => (
              <Link
                href={`/study-worldwide/${country.id}`}
                key={country.id}
                className="group rounded-2xl overflow-hidden border border-slate-200/80 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.015)] hover:shadow-[0_14px_34px_rgba(12,52,99,0.10)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 overflow-hidden bg-[#0c3463]">
                    {country.image ? (
                      <Image
                        src={country.image}
                        alt={country.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-[radial-gradient(ellipse_at_top,#1d6fd4_0%,#124b8d_45%,#0c3463_100%)] text-white">
                        <Globe2 className="w-9 h-9 opacity-80" />
                        <span className="text-lg font-black tracking-tight px-4 text-center leading-tight">{country.name}</span>
                      </div>
                    )}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-xs font-bold uppercase tracking-wider text-[#124b8d] border border-white/60 flex items-center gap-1.5">
                      <span aria-hidden>{country.flag}</span> {country.region}
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="font-bold text-xl text-[#11181C] leading-tight group-hover:text-[#124b8d] transition-colors tracking-tight">
                      {country.name}
                    </h3>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed line-clamp-3">
                      {country.description || country.tagline}
                    </p>

                    <div className="bg-[#E4EDFB] border border-[#dbe5f1] p-3.5 rounded-xl space-y-2 text-sm text-slate-600 font-semibold">
                      <div className="flex justify-between gap-2"><span>Tuition:</span> <span className="text-[#11181C] text-right">{country.tuition}</span></div>
                      <div className="flex justify-between gap-2"><span>English:</span> <span className="text-[#11181C] text-right">{country.ielts}</span></div>
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <span className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-[#124b8d] group-hover:text-[#e31b23] transition-colors gap-1">
                    Explore Destination <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How to Choose the Right Country */}
      <section id="choose" className="py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-bold uppercase tracking-wider mb-3">
              Decision Guide
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight text-[#11181C] leading-[1.1] mb-4">
              How to Choose the Right Country
            </h2>
            <p className="text-slate-500 text-lg">
              Weigh up the six factors that matter most. Each scale runs from the most accessible option to the most demanding &mdash; use it to narrow down where you fit best.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { factor: "Budget", icon: <Landmark className="w-6 h-6" />, color: "blue", scale: "Asia & Eastern Europe (cheapest) → Dubai & Malta → Ireland & Germany → UK & Canada → Australia & USA (most expensive)" },
              { factor: "Work Rights", icon: <Clock className="w-6 h-6" />, color: "red", scale: "Dubai (unlimited) → Australia & Ireland (generous) → UK & Canada (standard) → USA (limited)" },
              { factor: "English Requirement", icon: <CheckCircle2 className="w-6 h-6" />, color: "blue", scale: "Dubai & Malaysia (easiest) → Most countries (IELTS 6.0) → UK & Australia (IELTS 6.5-7.0)" },
              { factor: "Post-Study Work", icon: <Compass className="w-6 h-6" />, color: "red", scale: "Australia (2-4 years) → Canada & Ireland (2 years) → UK (2 years) → Europe (1 year)" },
              { factor: "PR Pathways", icon: <MapPin className="w-6 h-6" />, color: "blue", scale: "Canada & Australia (easiest) → New Zealand → Ireland & UK (challenging) → USA (very difficult)" },
              { factor: "Schengen Benefit", icon: <Globe2 className="w-6 h-6" />, color: "red", scale: "Any EU country lets you travel across all 27 European nations on one student visa." },
            ].map((item, idx) => {
              const isBlue = item.color === "blue";
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 p-8 rounded-[2rem] flex flex-col gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.015)] hover:shadow-[0_14px_34px_rgba(12,52,99,0.10)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
                >
                  <div className={`absolute bottom-0 left-0 right-0 h-[4px] ${isBlue ? "bg-[#124b8d]" : "bg-[#e31b23]"} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${isBlue ? "bg-blue-50 text-[#124b8d] border-blue-100" : "bg-red-50 text-[#e31b23] border-red-100"}`}>
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-xl text-[#11181C] tracking-tight">{item.factor}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.scale}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compare Destinations Tool */}
      <section id="compare" className="py-24 bg-[#E4EDFB] border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-7xl space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-bold uppercase tracking-wider mb-3">
              Interactive Tools
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-[#11181C]">
              Interactive Compare Destinations Tool
            </h2>
            <p className="text-slate-500 mt-2">Contrast core parameters side-by-side to find your best strategic fit.</p>
          </div>

          {/* Dynamic selector block */}
          <div className="bg-white border border-slate-200 rounded-[2.5rem] shadow-xl p-8 lg:p-12 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Compare Country 1</label>
                <select 
                  value={selectedCountryA}
                  onChange={(e) => setSelectedCountryA(e.target.value)}
                  className="w-full p-3.5 rounded-xl border border-slate-200 bg-slate-50 text-base text-slate-700 font-bold focus:outline-none focus:border-[#124b8d] hover:bg-slate-100 transition-all cursor-pointer"
                >
                  {compareData.map(item => <option key={item.dest} value={item.dest}>{item.dest}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Compare Country 2</label>
                <select 
                  value={selectedCountryB}
                  onChange={(e) => setSelectedCountryB(e.target.value)}
                  className="w-full p-3.5 rounded-xl border border-slate-200 bg-slate-50 text-base text-slate-700 font-bold focus:outline-none focus:border-[#124b8d] hover:bg-slate-100 transition-all cursor-pointer"
                >
                  {compareData.map(item => <option key={item.dest} value={item.dest}>{item.dest}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Compare Country 3</label>
                <select 
                  value={selectedCountryC}
                  onChange={(e) => setSelectedCountryC(e.target.value)}
                  className="w-full p-3.5 rounded-xl border border-slate-200 bg-slate-50 text-base text-slate-700 font-bold focus:outline-none focus:border-[#124b8d] hover:bg-slate-100 transition-all cursor-pointer"
                >
                  {compareData.map(item => <option key={item.dest} value={item.dest}>{item.dest}</option>)}
                </select>
              </div>
            </div>

            {/* Comparison Matrix Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left text-base text-slate-700 border-collapse">
                <thead className="bg-slate-50 text-slate-900 font-bold uppercase text-sm tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-5">Parameter</th>
                    <th className="px-6 py-5 text-[#124b8d] font-bold">{selectedCountryA}</th>
                    <th className="px-6 py-5 text-[#e31b23] font-bold">{selectedCountryB}</th>
                    <th className="px-6 py-5 text-[#124b8d] font-bold">{selectedCountryC}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-5 font-bold text-[#11181C]">Tuition Fees Index</td>
                    <td className="px-6 py-5 font-semibold">{compareA.tuition}</td>
                    <td className="px-6 py-5 font-semibold">{compareB.tuition}</td>
                    <td className="px-6 py-5 font-semibold">{compareC.tuition}</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-5 font-bold text-[#11181C]">Living Cost Index</td>
                    <td className="px-6 py-5 font-semibold">{compareA.living}</td>
                    <td className="px-6 py-5 font-semibold">{compareB.living}</td>
                    <td className="px-6 py-5 font-semibold">{compareC.living}</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-5 font-bold text-[#11181C]">Part-time Work rights</td>
                    <td className="px-6 py-5 font-semibold">{compareA.work}</td>
                    <td className="px-6 py-5 font-semibold">{compareB.work}</td>
                    <td className="px-6 py-5 font-semibold">{compareC.work}</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-5 font-bold text-[#11181C]">Post-Study Visa potential</td>
                    <td className="px-6 py-5 font-semibold">{compareA.postStudy}</td>
                    <td className="px-6 py-5 font-semibold">{compareB.postStudy}</td>
                    <td className="px-6 py-5 font-semibold">{compareC.postStudy}</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-5 font-bold text-[#11181C]">Best For</td>
                    <td className="px-6 py-5 font-bold text-[#124b8d]">{compareA.bestFor}</td>
                    <td className="px-6 py-5 font-bold text-[#e31b23]">{compareB.bestFor}</td>
                    <td className="px-6 py-5 font-bold text-[#124b8d]">{compareC.bestFor}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* MBBS Medicine Feature (Belarus vs Georgia) */}
      <section id="mbbs" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#e31b23] text-sm font-bold uppercase tracking-wider mb-3">
              Medicine Specialists
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight text-[#11181C] leading-[1.1] mb-4">
              MBBS in Belarus & Georgia
            </h2>
            <p className="text-lg text-slate-500">
              Many international students choose Belarus and Georgia for their medical training because of recognized degrees, English-medium lectures, and highly affordable tuition fees.
            </p>
          </div>

          {/* MBBS comparison table */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-base text-slate-700 border-collapse">
                <thead className="bg-slate-50 text-slate-900 font-bold uppercase text-sm tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="px-8 py-5">Medical Feature</th>
                    <th className="px-8 py-5 text-[#124b8d] font-bold">Belarus MBBS</th>
                    <th className="px-8 py-5 text-[#e31b23] font-bold">Georgia MBBS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-8 py-6 font-bold text-[#11181C]">Annual Tuition Fees</td>
                    <td className="px-8 py-6 font-bold text-[#124b8d]">USD 4,000 to 5,000</td>
                    <td className="px-8 py-6 font-bold text-[#e31b23]">USD 5,000 to 7,000</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-8 py-6 font-bold text-[#11181C]">Living Costs / Year</td>
                    <td className="px-8 py-6">USD 2,000 to 3,000</td>
                    <td className="px-8 py-6">USD 2,500 to 3,500</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-8 py-6 font-bold text-[#11181C]">Course Duration</td>
                    <td className="px-8 py-6">6 Years</td>
                    <td className="px-8 py-6">6 Years</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-8 py-6 font-bold text-[#11181C]">Instruction Language</td>
                    <td className="px-8 py-6">English or Russian</td>
                    <td className="px-8 py-6">English or Georgian</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-8 py-6 font-bold text-[#11181C]">Basic Eligibility</td>
                    <td className="px-8 py-6">17+ years, 12 years schooling, PCB 50%+</td>
                    <td className="px-8 py-6">17+ years, 12 years schooling, PCB 50%+</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-8 py-6 font-bold text-[#11181C]">Primary Strengths</td>
                    <td className="px-8 py-6 font-semibold text-[#124b8d]">Affordability & Russian exposure</td>
                    <td className="px-8 py-6 font-semibold text-[#e31b23]">EU exposure & career flexibility</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* MBBS Process steps */}
          <div className="max-w-6xl mx-auto space-y-12">
            <h3 className="font-heading text-2xl font-bold tracking-tight text-center text-[#11181C]">
              Admissions Pathway for Medical Students
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {mbbsSteps.map((step, idx) => (
                <div key={idx} className="bg-white border border-slate-100 p-6 rounded-2xl flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300">
                  <div>
                    <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100/50 text-[#124b8d] flex items-center justify-center font-bold text-base mb-4">
                      0{idx + 1}
                    </div>
                    <h4 className="font-bold text-base text-[#11181C] mb-2 tracking-tight">{step.title}</h4>
                    <p className="text-slate-600 text-base font-medium leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/contact">
              <Button size="lg" className="bg-[#124b8d] hover:bg-[#0e3d72] text-white rounded-full font-bold shadow-[0_10px_25px_rgba(18,75,141,0.25)] hover:shadow-[0_15px_30px_rgba(18,75,141,0.4)] hover:-translate-y-0.5 transition-all duration-300 px-8 py-6 h-auto inline-flex items-center gap-2 group">
                <span>Schedule MBBS Consultation</span>
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Worldwide FAQs Accordion Section */}
      <section id="faqs" className="py-24 bg-[#E4EDFB] border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-medium tracking-tight text-[#11181C]">
              Study Worldwide FAQs
            </h2>
          </div>
          
          <Accordion items={worldwideFAQs} />
        </div>
      </section>
    </div>
  );
}


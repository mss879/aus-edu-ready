import { PageHero } from "@/components/ui/page-hero";
import { Button } from "@/components/ui/button";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import Image from "next/image";
import {
  GraduationCap, ClipboardCheck, Wallet, FileText, Plane, Home, Briefcase,
  Compass, Users, MapPin, BookOpen, ArrowUpRight, ChevronRight, Sparkles
} from "lucide-react";

export const metadata = pageMeta("/insights");

// Free downloadable resources — sourced from the AEC content document ("FREE Resources Available")
const guides = [
  { title: "Australia Study Guide 2026", desc: "Your complete roadmap to studying in Australia in 2026 — universities, costs, visas and timelines.", icon: GraduationCap, interest: "australia" },
  { title: "Student Visa Checklist", desc: "Every document and step you need for a smooth subclass 500 student visa application.", icon: ClipboardCheck, interest: "australia" },
  { title: "Cost of Living Comparison", desc: "Compare tuition and living costs across our 20+ global study destinations.", icon: Wallet, interest: "worldwide" },
  { title: "University Comparison Sheet", desc: "Side-by-side comparison of universities, entry requirements and intakes.", icon: FileText, interest: "australia" },
  { title: "Pre-Departure Checklist", desc: "Tickets, health cover, packing and settlement — everything to sort before you fly.", icon: Plane, interest: "settlement" },
  { title: "First Week in Australia Guide", desc: "Bank accounts, SIM cards, transport and orientation for your first days abroad.", icon: Home, interest: "settlement" },
  { title: "Part-Time Job Guide", desc: "Work rights, where to look, and how to balance study with part-time work.", icon: Briefcase, interest: "career" },
  { title: "PR Pathways Explained", desc: "How the 485, skilled and regional visas lead to permanent residency in Australia.", icon: Compass, interest: "pr" },
];

// Expert sessions — each links to a real page on the site
const sessions = [
  { title: "Parent Information Sessions", desc: "Sessions designed for parents to understand costs, safety and the full study journey — with complete peace of mind.", href: "/services/parents-resources", icon: Users },
  { title: "University Exploration Tours", desc: "7–10 day educational tours that let students experience Australian campus life first-hand before they commit.", href: "/university-tours", icon: MapPin },
  { title: "IELTS & PTE Prep Workshops", desc: "Structured coaching, mock tests and booking support to help you hit the scores your visa and university need.", href: "/services/ielts-pte", icon: BookOpen },
];

export default function InsightsPage() {
  return (
    <div className="flex flex-col w-full bg-white text-slate-900">
      <PageHero
        title="Guides & Insights"
        subtitle="Free study and visa guides, plus expert sessions to help you plan every step of your journey."
        breadcrumb="Guides & Insights"
        bgImage="/insights_hero.png"
      />

      {/* Free Guides & Resources */}
      <section className="py-24 bg-white" id="guides">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Featured Resource Block */}
          <div className="bg-[#0c3463] rounded-[2rem] overflow-hidden shadow-xl mb-16 border border-white/10 text-white relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#e31b23] z-10" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 md:p-12 relative z-10">
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-[#ff6b6b] text-xs font-bold uppercase tracking-wider border border-[#ff6b6b]/20">
                  Featured Resource
                </span>
                <h3 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                  All-in-One Australia Study & Visa Guide Pack
                </h3>
                <p className="text-blue-100/80 text-base md:text-lg leading-relaxed">
                  Our comprehensive, expert-curated guide pack compiles everything you need to know about starting your journey. Get the complete roadmap, visa requirements checklists, cost comparisons, and pre-departure guides in one consolidated bundle.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Link href="/contact?interest=resources">
                    <Button className="bg-[#e31b23] hover:bg-[#b81218] text-white rounded-full font-bold px-6 py-3 h-auto">
                      Download Full Pack
                    </Button>
                  </Link>
                  <Link href="/contact?booking=true">
                    <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full font-bold px-6 py-3 h-auto">
                      Speak with a Counselor
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5 relative w-full h-[280px] md:h-[350px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/insights_hero.png"
                  alt="Australia Education Insights Pack"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-bold uppercase tracking-wider mb-3">
              Free Resources
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight text-[#11181C] leading-[1.1] mb-4">
              Free Study & Visa Guides
            </h2>
            <p className="text-slate-500 text-lg">
              Request any guide below and our team will email it to you — no cost, no obligation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guides.map((guide, idx) => {
              const Icon = guide.icon;
              return (
                <Link
                  key={idx}
                  href={`/contact?interest=${guide.interest}`}
                  className="group bg-white border border-slate-200 p-6 rounded-3xl flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.015)] hover:shadow-[0_14px_34px_rgba(12,52,99,0.10)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-[#124b8d] flex items-center justify-center mb-5 group-hover:bg-[#124b8d] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg text-[#11181C] mb-2 leading-snug tracking-tight">{guide.title}</h3>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed">{guide.desc}</p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-[#124b8d] group-hover:text-[#e31b23] transition-colors">
                    Request Guide <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Honest note: full articles are on the roadmap */}
          <div className="mt-12 flex items-start gap-3 max-w-3xl mx-auto bg-[#E4EDFB] border border-[#dbe5f1] rounded-2xl p-5 text-sm text-slate-600">
            <Sparkles className="w-5 h-5 text-[#124b8d] shrink-0 mt-0.5" />
            <p>
              In-depth articles and news updates are on the way. In the meantime, request any guide above or{" "}
              <Link href="/contact" className="font-bold text-[#124b8d] hover:text-[#e31b23] transition-colors">talk to a counsellor</Link>{" "}
              for advice tailored to you.
            </p>
          </div>
        </div>
      </section>

      {/* Expert Sessions & Talks */}
      <section className="py-24 bg-[#E4EDFB] border-t border-slate-200" id="sessions">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#e31b23] text-sm font-bold uppercase tracking-wider mb-3">
              Expert Sessions
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight text-[#11181C] leading-[1.1] mb-4">
              Talks, Tours & Workshops
            </h2>
            <p className="text-slate-500 text-lg">
              Learn directly from our PIER-qualified counsellors — for students and parents alike.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sessions.map((session, idx) => {
              const Icon = session.icon;
              return (
                <Link
                  key={idx}
                  href={session.href}
                  className="group bg-white border border-slate-200 p-8 rounded-[2rem] flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-[#E4EDFB] border border-slate-200 text-[#124b8d] flex items-center justify-center mb-6 group-hover:bg-[#124b8d] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-xl text-[#11181C] mb-3 leading-snug tracking-tight group-hover:text-[#124b8d] transition-colors">{session.title}</h3>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed">{session.desc}</p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-[#124b8d] group-hover:text-[#e31b23] transition-colors">
                    Learn More <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-[#0c3463] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-[#e31b23]" />
        <div className="container mx-auto px-4 max-w-5xl py-16 md:py-20 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-white tracking-tight mb-4">
            Want a guide tailored to your goals?
          </h2>
          <p className="text-blue-100/80 text-lg max-w-2xl mx-auto mb-8">
            Tell us what you&apos;re planning and our counsellors will send the right resources — free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?interest=resources">
              <Button size="lg" className="bg-[#e31b23] hover:bg-[#b81218] text-white rounded-full font-bold px-8 py-4 h-auto inline-flex items-center gap-2 group">
                Request Free Guides
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/contact?booking=true">
              <Button size="lg" className="bg-white hover:bg-blue-50 text-[#0c3463] rounded-full font-bold px-8 py-4 h-auto">
                Book a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import { countries } from "@/data/countries";
import { PageHero } from "@/components/ui/page-hero";
import { Button } from "@/components/ui/button";
import { CheckCircle2, GraduationCap, Wallet, Clock, Sparkles, ChevronRight, ArrowLeft, BookOpen } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return countries.map((country) => ({ country: country.id }));
}

export default async function CountryPage({ params }: { params: Promise<{ country: string }> }) {
  const { country: countryId } = await params;
  const country = countries.find((c) => c.id === countryId);
  if (!country) notFound();

  const eligibilityHref = `/contact?country=${encodeURIComponent(country.name)}#consultation`;

  return (
    <div className="flex flex-col w-full bg-white text-slate-900">
      <PageHero
        title={`Study in ${country.name}`}
        subtitle={country.tagline}
        breadcrumb={`Study Worldwide / ${country.name}`}
      />

      {/* Intro + Fast Facts */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <Link href="/study-worldwide#countries" className="inline-flex items-center gap-1.5 text-sm font-bold text-[#124b8d] hover:text-[#e31b23] transition-colors mb-10">
            <ArrowLeft className="w-4 h-4" /> All Destinations
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 items-start">
            {/* Main */}
            <div className="lg:col-span-2 space-y-10">
              <div className="flex items-center gap-4">
                <span className="text-5xl leading-none" aria-hidden>{country.flag}</span>
                <div>
                  <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#e31b23] bg-[#e31b23]/5 border border-[#e31b23]/20 px-3 py-1 rounded-full mb-1.5">
                    {country.region}
                  </span>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-[#0c3463] leading-tight">
                    Why study in {country.name}?
                  </h2>
                </div>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed">{country.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {country.why.map((reason, i) => (
                  <div key={i} className="flex items-start gap-3 bg-[#E4EDFB] border border-[#dbe5f1] p-4 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 text-[#124b8d] shrink-0" />
                    <span className="text-[15px] font-semibold text-[#11181C] leading-snug">{reason}</span>
                  </div>
                ))}
              </div>

              {country.advantage && (
                <div className="relative bg-[#0c3463] text-white rounded-2xl p-7 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#e31b23]" />
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-[#e31b23] flex items-center justify-center shrink-0">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-widest text-blue-200 mb-1.5">Key Advantage</div>
                      <p className="text-white text-[15px] md:text-base font-medium leading-relaxed">{country.advantage}</p>
                    </div>
                  </div>
                </div>
              )}

              {country.courses && country.courses.length > 0 && (
                <div>
                  <h3 className="flex items-center gap-2 font-heading text-xl font-bold text-[#0c3463] mb-4">
                    <BookOpen className="w-5 h-5 text-[#124b8d]" /> Popular Courses
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {country.courses.map((course, i) => (
                      <span key={i} className="text-sm font-semibold text-[#124b8d] bg-white border border-[#124b8d]/20 px-4 py-2 rounded-full">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sticky Fast Facts */}
            <div className="lg:sticky lg:top-28 space-y-5">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_8px_30px_rgba(12,52,99,0.06)] overflow-hidden">
                <div className="bg-[#0c3463] px-6 py-4">
                  <h3 className="text-white font-bold text-lg">Fast Facts</h3>
                </div>
                <div className="p-6 space-y-5">
                  <Fact icon={<GraduationCap className="w-4 h-4" />} label="English Requirement" value={country.ielts} />
                  <Fact icon={<Wallet className="w-4 h-4" />} label="Tuition (approx.)" value={country.tuition} />
                  {country.workRights && (
                    <Fact icon={<Clock className="w-4 h-4" />} label="Work Rights" value={country.workRights} />
                  )}
                  <Link href={eligibilityHref} className="block pt-1">
                    <Button size="lg" className="w-full bg-[#e31b23] hover:bg-[#b81218] text-white rounded-full font-bold px-6 py-4 h-auto inline-flex items-center justify-center gap-2 group">
                      <span>Check Your Eligibility — FREE</span>
                      <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <p className="text-xs text-slate-400 text-center leading-relaxed">
                    A PIER-certified counsellor will review your profile within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-[#0c3463] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-[#e31b23]" />
        <div className="container mx-auto px-4 max-w-5xl py-16 md:py-20 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-white tracking-tight mb-4">
            Ready to study in {country.name}?
          </h2>
          <p className="text-blue-100/80 text-lg max-w-2xl mx-auto mb-8">
            Get a free profile evaluation and a personalised pathway from our expert counsellors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={eligibilityHref}>
              <Button size="lg" className="bg-[#e31b23] hover:bg-[#b81218] text-white rounded-full font-bold px-8 py-4 h-auto">
                Check Your Eligibility — FREE
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

function Fact({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 border-b border-slate-100 last:border-0 pb-4 last:pb-0">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
        <span className="text-[#124b8d]">{icon}</span> {label}
      </div>
      <div className="text-[15px] font-bold text-[#0c3463] leading-snug">{value}</div>
    </div>
  );
}

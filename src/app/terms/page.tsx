import { PageHero } from "@/components/ui/page-hero";
import { Button } from "@/components/ui/button";
import { ScrollText, Mail } from "lucide-react";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("/terms");

export default function TermsConditions() {
  return (
    <div className="flex flex-col w-full bg-white text-slate-900">
      <PageHero
        title="Terms & Conditions"
        subtitle="The terms that apply to your use of this website and our services."
        breadcrumb="Terms & Conditions"
        bgImage="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2940&auto=format&fit=crop"
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl space-y-8">
          <div className="flex items-center gap-3 p-5 bg-[#E4EDFB] border border-slate-200 rounded-2xl">
            <ScrollText className="w-6 h-6 text-[#124b8d] shrink-0" />
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              Our full Terms &amp; Conditions are being finalised by Australian Education Centre. The
              summary below sets out how the information on this site should be used until then.
            </p>
          </div>

          <div className="space-y-6 text-slate-600 leading-relaxed">
            <div>
              <h2 className="font-heading text-xl font-bold text-[#11181C] mb-2">Information only</h2>
              <p className="text-sm">
                The content on this website is provided for general information about studying and
                migration pathways. Course details, fees, visa rules, and timelines change
                regularly, so they should be confirmed with our counsellors before you make any
                decision.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-xl font-bold text-[#11181C] mb-2">No guarantee of outcomes</h2>
              <p className="text-sm">
                Admission, scholarship, visa, and permanent residency outcomes are decided by
                universities, colleges, and government authorities &mdash; not by AEC. We provide
                expert guidance and support, but we cannot guarantee any specific result.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-xl font-bold text-[#11181C] mb-2">Engaging our services</h2>
              <p className="text-sm">
                Formal counselling, application, and visa services are provided under a separate
                agreement. Contact our team for the current scope, fees, and terms of any service
                you would like to engage.
              </p>
            </div>
          </div>

          <div className="p-6 bg-white border border-slate-200 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#124b8d]" />
              <a href="mailto:edu@multinational.com.au" className="font-bold text-[#124b8d] hover:underline">
                edu@multinational.com.au
              </a>
            </div>
            <Link href="/contact">
              <Button className="bg-[#124b8d] hover:bg-[#0e3d72] text-white rounded-full font-bold">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

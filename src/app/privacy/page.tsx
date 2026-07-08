import { PageHero } from "@/components/ui/page-hero";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Mail } from "lucide-react";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("/privacy");

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col w-full bg-white text-slate-900">
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect the information you share with us."
        breadcrumb="Privacy Policy"
        bgImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2940&auto=format&fit=crop"
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl space-y-8">
          <div className="flex items-center gap-3 p-5 bg-[#E4EDFB] border border-slate-200 rounded-2xl">
            <ShieldCheck className="w-6 h-6 text-[#124b8d] shrink-0" />
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              Our full Privacy Policy is being finalised by Australian Education Centre. The summary
              below explains how we currently handle your information. For any data or privacy
              request in the meantime, please contact our team.
            </p>
          </div>

          <div className="space-y-6 text-slate-600 leading-relaxed">
            <div>
              <h2 className="font-heading text-xl font-bold text-[#11181C] mb-2">Information we collect</h2>
              <p className="text-sm">
                When you submit a consultation or contact form, we collect the details you provide
                &mdash; such as your name, email address, phone number, area of interest, and any
                background information you choose to share. We use this only to respond to your
                enquiry and to provide our education and visa counselling services.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-xl font-bold text-[#11181C] mb-2">How we use it</h2>
              <p className="text-sm">
                Your information helps our counsellors assess your profile, recommend suitable
                courses, institutions, and pathways, and keep you updated about your application. We
                do not sell your personal information.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-xl font-bold text-[#11181C] mb-2">Your choices</h2>
              <p className="text-sm">
                You may request access to, correction of, or deletion of the personal information we
                hold about you at any time by contacting our office.
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

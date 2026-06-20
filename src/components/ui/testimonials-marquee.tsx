import { Quote } from "lucide-react";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  location: string;
};

// Real student testimonials — sourced from the AEC website content document
// ("What Our Students Say"). Do not fabricate additional ones.
export const testimonials: Testimonial[] = [
  {
    quote: "AEC changed my life. From student visa to PR in 5 years - they guided me every step.",
    name: "Ravindu P.",
    role: "Mechanical Engineer",
    location: "Melbourne",
  },
  {
    quote: "The only agent who told me the truth about my options. No false promises, just honest advice.",
    name: "Amaya R.",
    role: "Nursing Graduate",
    location: "Adelaide",
  },
  {
    quote: "My parents were worried about sending me alone. AEC's support gave them complete peace of mind.",
    name: "Nethmi W.",
    role: "Business Student",
    location: "Monash University",
  },
  {
    quote: "Got AUD 20,000 scholarship with AEC's help - they knew exactly which universities to apply to.",
    name: "Tharindu S.",
    role: "Engineering Student",
    location: "UNSW",
  },
];

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="w-[330px] sm:w-[400px] shrink-0 mx-3 bg-white rounded-2xl border border-slate-200/80 shadow-[0_4px_20px_rgba(12,52,99,0.04)] p-7 flex flex-col justify-between">
      <Quote className="w-8 h-8 text-[#e31b23]/80 shrink-0 mb-4" fill="currentColor" />
      <blockquote className="text-[#11181C] text-[15px] leading-relaxed font-medium mb-6">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <figcaption className="flex items-center gap-3 border-t border-slate-100 pt-4 mt-auto">
        <div className="w-11 h-11 rounded-full bg-[#124b8d] text-white flex items-center justify-center font-black text-sm shrink-0">
          {t.name.charAt(0)}
        </div>
        <div>
          <div className="text-sm font-bold text-[#0c3463]">{t.name}</div>
          <div className="text-xs text-slate-500">{t.role} · {t.location}</div>
        </div>
      </figcaption>
    </figure>
  );
}

function MarqueeRow({ items, direction }: { items: Testimonial[]; direction: "rtl" | "ltr" }) {
  return (
    <div className="marquee-row overflow-hidden marquee-mask py-2">
      <div className={`marquee-track ${direction === "rtl" ? "animate-marquee-rtl" : "animate-marquee-ltr"}`}>
        {/* Duplicated set for a seamless infinite loop */}
        {[...items, ...items].map((t, i) => (
          <TestimonialCard key={`${direction}-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
}

export function TestimonialsMarquee() {
  const rowTwo = [...testimonials].reverse();
  return (
    <div className="flex flex-col gap-5">
      <MarqueeRow items={testimonials} direction="rtl" />
      <MarqueeRow items={rowTwo} direction="ltr" />
    </div>
  );
}

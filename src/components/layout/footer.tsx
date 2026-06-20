import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-[#0c3463] text-blue-100/80 relative">
      {/* Red brand accent line along the top edge */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#e31b23]" />
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="font-heading text-2xl font-black tracking-tight text-white">
              AEC<span className="text-[#e31b23]">.</span>
            </Link>
            <p className="text-sm text-blue-100/70">
              Your Complete Journey to Australian &amp; New Zealand Education.
              From Visa to Career Success - We&apos;re With You Every Step.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#e31b23] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#e31b23] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#e31b23] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-white">Quick Links</h4>
            <ul className="flex flex-col gap-2 text-sm text-blue-100/70">
              <li><Link href="/study-in-australia" className="hover:text-white transition-colors">Study in Australia</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-white">Our Offices</h4>
            <ul className="flex flex-col gap-2 text-sm text-blue-100/70">
              <li>Melbourne · Adelaide · Colombo · Dubai</li>
              <li><a href="https://wa.me/94773950448" className="hover:text-white transition-colors">+94 77 395 0448</a></li>
              <li><a href="mailto:edu@multinational.com.au" className="hover:text-white transition-colors">edu@multinational.com.au</a></li>
              <li>Mon-Fri: 9am - 5pm</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-white">Newsletter</h4>
            <p className="text-sm text-blue-100/70">
              Subscribe to get the latest updates on study abroad opportunities.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex h-10 w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-blue-100/40 focus:outline-none focus:ring-2 focus:ring-[#e31b23]"
              />
              <Button className="bg-[#e31b23] hover:bg-[#f5333b]">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-blue-100/60">
          <p>© {new Date().getFullYear()} Australian Education Centre. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

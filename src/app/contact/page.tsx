"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/components/ui/page-hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MapPin, Phone, Mail, Clock, Globe2, 
  CheckCircle2, Star, ArrowUpRight, MessageSquare, Compass
} from "lucide-react";
import { useState } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const offices = [
  {
    city: "Sri Lanka Office - Head Office",
    name: "Australian Education Centre (Pvt) Ltd",
    address: "No. 421-1/1, Thimbirigasyaya Road, Colombo 05, Sri Lanka",
    phone: "+94 11 5500100",
    mobiles: ["+94 77 395 0448", "+94 77 107 6990", "+94 77 107 6991"],
    email: "edu@multinational.com.au",
    hours: [
      "Monday - Friday: 8:30 AM to 6:30 PM",
      "Saturday: 9:30 AM to 5:30 PM",
      "2nd & 4th Sunday: 9:30 AM to 5:30 PM"
    ]
  },
  {
    city: "Melbourne Office",
    name: "Australian Education Centre",
    address: "Unit 1/11-15 Rocklea Drive, Port Melbourne, Victoria 3207, Australia",
    phone: "+61 489 980 366",
    email: "melbourne@multinational.com.au",
    hours: ["Monday - Friday: 9:00 AM to 5:30 PM"]
  },
  {
    city: "Adelaide Office",
    name: "Australian Education Centre",
    address: "Level 1, 90 King William Street, Adelaide, South Australia 5000, Australia",
    phone: "+61 489 980 366",
    email: "adelaide@multinational.com.au",
    hours: ["Monday - Friday: 9:00 AM to 5:30 PM"]
  },
  {
    city: "Dubai Office",
    name: "Australian Education Centre",
    address: "Office 9, Level 17, Boulevard Plaza Tower 1, Sheikh Mohammed Bin Rashid Boulevard, Downtown Dubai, United Arab Emirates",
    phone: "+971 58 596 0366",
    email: "dubai@multinational.com.au",
    hours: ["Monday - Friday: 9:00 AM to 5:30 PM"]
  }
];

const testimonials = [
  {
    name: "Dinuka Perera",
    course: "Master of Data Science",
    uni: "Monash University",
    text: "AEC's counseling was absolutely game-changing. They matched me with Monash University, guided me through the subsequent dependent visa for my wife, and helped us settle in Melbourne seamlessly."
  },
  {
    name: "Amna Al-Mansoori",
    course: "Bachelor of Business (Fintech)",
    uni: "University of Technology Sydney",
    text: "Transferring from Dubai to Sydney was incredibly simple because of AEC's global office network. They coordinated the visa and credit pathways without a single hitch."
  },
  {
    name: "Thilan Wijesinghe",
    course: "Bachelor of Civil Engineering",
    uni: "University of Adelaide",
    text: "From my initial IELTS coaching to finding a vetted boarding house in Adelaide, AEC was there. Today I'm on my 485 Graduate visa and already planning my regional PR pathway."
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "",
    message: ""
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.firstName && formData.email && formData.interest) {
      setSubmitted(true);
    }
  };

  return (
    <div className="flex flex-col w-full bg-white text-slate-900">
      <PageHero 
        title="Get in Touch Today" 
        subtitle="Start your international education journey with Australia&apos;s trusted education consultancy."
        breadcrumb="Contact Us"
        bgImage="https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2940&auto=format&fit=crop"
      />

      {/* Quick Contact Portal bar */}
      <section className="py-8 bg-[#E4EDFB] text-slate-900 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <div className="py-4 md:py-0">
              <span className="text-slate-500 text-xs font-bold uppercase tracking-wider block mb-1">Call Us Now</span>
              <a href="tel:+94115500100" className="text-lg font-black text-[#124b8d] hover:underline">+94 11 5500100</a>
            </div>
            <div className="py-4 md:py-0">
              <span className="text-slate-500 text-xs font-bold uppercase tracking-wider block mb-1">WhatsApp Us</span>
              <a href="https://wa.me/94773950448" target="_blank" rel="noopener noreferrer" className="text-lg font-black text-[#e31b23] hover:underline">+94 77 395 0448</a>
            </div>
            <div className="py-4 md:py-0">
              <span className="text-slate-500 text-xs font-bold uppercase tracking-wider block mb-1">MARA Registered Sister</span>
              <span className="text-base font-bold text-slate-700">Australian Migration Services</span>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form & Contact block */}
      <section className="py-24 bg-white" id="consultation">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Form Column */}
            <div className="lg:col-span-7 bg-[#E4EDFB] border border-slate-200 p-8 lg:p-12 rounded-[2.5rem] shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100/50 rounded-bl-full pointer-events-none" />
              
              {!submitted ? (
                <div className="space-y-8 relative z-10">
                  <div>
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-3">
                      Consultation Booking
                    </span>
                    <h2 className="font-heading text-3xl font-bold text-[#11181C] leading-tight">
                      Book Your FREE Consultation
                    </h2>
                    <p className="text-slate-500 mt-2 text-sm">
                      Provide your profile and transcript highlights. A PIER-certified advisor will reach out to you within 24 hours.
                    </p>
                  </div>

                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-slate-700">First Name *</label>
                        <input 
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                          className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 text-sm text-slate-900" 
                          placeholder="John" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-slate-700">Last Name</label>
                        <input 
                          value={formData.lastName}
                          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                          className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 text-sm text-slate-900" 
                          placeholder="Doe" 
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-slate-700">Email Address *</label>
                        <input 
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 text-sm text-slate-900" 
                          placeholder="john@example.com" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-slate-700">Phone Number</label>
                        <input 
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 text-sm text-slate-900" 
                          placeholder="+94 77 123 4567" 
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-slate-700">I am interested in *</label>
                      <select 
                        required
                        value={formData.interest}
                        onChange={(e) => setFormData({...formData, interest: e.target.value})}
                        className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 text-sm text-slate-900"
                      >
                        <option value="">Select a service focus</option>
                        <option value="australia">Study in Australia</option>
                        <option value="worldwide">Study Worldwide</option>
                        <option value="pr">PR Pathway Planning</option>
                        <option value="family">Partner & Family Visas</option>
                        <option value="schools">Australian Schools Sector</option>
                        <option value="tours">University Exploration Tours</option>
                        <option value="ielts">IELTS & PTE Test Prep</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-slate-700">Message / Background Profile</label>
                      <textarea 
                        rows={4} 
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full p-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 text-sm text-slate-900" 
                        placeholder="Tell us about your educational background, scores, or visa queries..."
                      />
                    </div>

                    <Button size="lg" className="bg-[#124b8d] hover:bg-[#0e3d72] text-white rounded-full font-bold shadow-[4px_4px_0px_rgba(15,23,42,1)] hover:shadow-none hover:translate-y-1 hover:translate-x-1 border-2 border-slate-900 transition-all duration-300 h-12 w-full" type="submit">Submit Consultation Request</Button>
                  </form>
                </div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-6 relative z-10"
                >
                  <div className="w-16 h-16 bg-blue-50 text-[#124b8d] rounded-full flex items-center justify-center mx-auto shadow-sm border border-blue-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#11181C]">Consultation Request Received!</h3>
                  <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.firstName}. Your interest in {formData.interest} has been logged. One of our qualified counselors will contact you shortly via email or phone to confirm details.
                  </p>
                  <Button variant="outline" className="font-bold rounded-full border-slate-300 text-slate-700 bg-white hover:bg-slate-50" onClick={() => setSubmitted(false)}>Submit Another Request</Button>
                </motion.div>
              )}
            </div>

            {/* Office Summary Column */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-3">
                  Global Reach
                </span>
                <h2 className="font-heading text-3xl font-bold text-[#11181C] leading-tight">
                  Seamless Overseas Support
                </h2>
                <p className="text-slate-500 text-sm mt-2">
                  With 4 active office branches worldwide, AEC provides continuous assistance from application to local settlement.
                </p>
              </div>

              {/* Head office quick card */}
              <div className="bg-[#E4EDFB] border border-slate-200 p-6 rounded-2xl space-y-4 shadow-sm">
                <h3 className="font-bold text-base text-[#11181C] flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-[#124b8d]" /> Colombo Head Office Hours
                </h3>
                <div className="text-xs text-slate-500 space-y-2">
                  <div className="flex justify-between border-b border-slate-200 pb-1.5">
                    <span>Monday - Friday</span>
                    <span className="font-bold">8:30 AM to 6:30 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-1.5">
                    <span>Saturday</span>
                    <span className="font-bold">9:30 AM to 5:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>2nd & 4th Sunday</span>
                    <span className="font-bold">9:30 AM to 5:30 PM</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Global Offices grid */}
      <section className="py-24 bg-[#E4EDFB] border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-3">
              Locations
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-[#11181C] mb-4">
              Our Physical Branches
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offices.map((office, idx) => (
              <Card key={idx} className="bg-white border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-300 hover:-translate-y-1 transition-all duration-500 rounded-3xl overflow-hidden">
                <CardContent className="p-8 space-y-6">
                  <div>
                    <span className="text-[10px] font-bold text-[#124b8d] uppercase tracking-widest block mb-1">Branch Location</span>
                    <h3 className="font-bold text-xl text-[#11181C] leading-tight">{office.city}</h3>
                    <p className="text-slate-500 text-xs mt-1 font-semibold">{office.name}</p>
                  </div>

                  <div className="space-y-3.5 text-xs text-slate-500">
                    <div className="flex items-start">
                      <MapPin className="w-4 h-4 mr-3 text-[#124b8d] shrink-0 mt-0.5" />
                      <span>{office.address}</span>
                    </div>

                    <div className="flex items-start">
                      <Phone className="w-4 h-4 mr-3 text-[#124b8d] shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <div>Direct: {office.phone}</div>
                        {office.mobiles && (
                          <div className="text-slate-500 flex flex-wrap gap-x-3 gap-y-1">
                            {office.mobiles.map((mob, mIdx) => (
                              <span key={mIdx}>Mobile: {mob}</span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-3 text-[#124b8d] shrink-0" />
                      <a href={`mailto:${office.email}`} className="hover:underline">{office.email}</a>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2">Office Hours</span>
                    <ul className="text-[11px] text-slate-500 space-y-1 leading-relaxed">
                      {office.hours.map((hr, hIdx) => (
                        <li key={hIdx}>• {hr}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials section matching Megamenu anchor */}
      <section className="py-24 bg-white border-t border-slate-200" id="testimonials">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-3">
              Success Stories
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-[#11181C] mb-4">
              What Students Say About AEC
            </h2>
            <p className="text-lg text-slate-500">
              Thousands of success stories across two decades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, idx) => (
              <Card key={idx} className="bg-[#E4EDFB] border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden p-8 flex flex-col justify-between rounded-[2rem]">
                <div className="absolute top-4 right-8 text-slate-300/30 pointer-events-none">
                  <MessageSquare className="w-20 h-20" />
                </div>
                <div className="space-y-4 relative z-10">
                  <div className="flex gap-1 text-[#e31b23]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed italic">
                    &ldquo;{test.text}&rdquo;
                  </p>
                </div>
                <div className="mt-8 border-t border-slate-200 pt-4 relative z-10">
                  <h4 className="font-bold text-sm text-[#11181C]">{test.name}</h4>
                  <div className="text-[11px] text-slate-500 mt-0.5">{test.course}</div>
                  <div className="text-[10px] font-bold text-[#124b8d] mt-1">{test.uni}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Globe, GraduationCap, Building2, Users, Target, Plane, FileCheck, ArrowRight, MapPin, Phone, Calendar, ArrowUpRight, Search, Plus, ShieldCheck, Briefcase, ClipboardCheck, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { TestimonialsMarquee } from "@/components/ui/testimonials-marquee";

export default function Home() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeService, setActiveService] = useState<number | null>(null);

  const processRef = useRef(null);

  // Our Process — five guided stages (facts sourced from the AEC content document)
  const processSteps = [
    { icon: ClipboardCheck, title: "FREE Assessment & Counseling", tag: "100% Free", desc: "We evaluate your academic background, budget and career goals, then map the destinations and courses that fit you best." },
    { icon: GraduationCap, title: "University Selection & Application", tag: "100+ Partners", desc: "We shortlist the right universities and colleges and manage your entire application — paperwork, offers and liaison with institutions." },
    { icon: ShieldCheck, title: "Visa Processing & Documentation", tag: "95% Success", desc: "Our MARA-registered agents prepare and lodge your visa in full compliance with Department of Home Affairs requirements." },
    { icon: Plane, title: "Pre-Departure & Travel Assistance", tag: "Included", desc: "Before you fly we arrange airline ticketing, airport pickup and accommodation, and brief you for life in your new country." },
    { icon: Briefcase, title: "Settlement & Career Support", tag: "Through to PR", desc: "After arrival we help with accommodation, part-time jobs and settling in — then guide your path to career placement and PR." },
  ];

  // The active (white) step is driven by how far the visitor has scrolled through the section
  const { scrollYProgress } = useScroll({ target: processRef, offset: ["start 70%", "end 35%"] });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(processSteps.length - 1, Math.max(0, Math.floor(v * processSteps.length)));
    setActiveStep((prev) => (prev === idx ? prev : idx));
  });

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[600px] lg:min-h-[80vh] pt-32 pb-20 flex flex-col justify-center bg-white overflow-hidden">
        {/* Soft brand-blue + red wash so the hero never reads as a flat white void */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_75%_60%_at_12%_12%,#e7f0fc_0%,transparent_55%),radial-gradient(ellipse_55%_45%_at_95%_92%,#fdebec_0%,transparent_55%)]" />
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#e3edf9_1px,transparent_1px),linear-gradient(to_bottom,#e3edf9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

        <div className="w-full px-4 lg:px-6 xl:px-8 relative z-10 flex-1 flex items-center">
          <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Content (Text) */}
            <div className="flex-1 w-full max-w-2xl lg:max-w-3xl pt-12 lg:pt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2.5 mb-6 rounded-full bg-white border border-[#dbe5f1] shadow-sm pl-2 pr-4 py-1.5"
              >
                <span className="inline-flex items-center rounded-full bg-[#e31b23] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-white">1st in Sri Lanka</span>
                <span className="text-[13px] font-bold text-[#124b8d]">MARA-Registered · 20+ Years</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[2rem] sm:text-5xl md:text-[3.5rem] lg:text-[3.8rem] xl:text-[4.2rem] font-black tracking-tighter text-slate-900 leading-[1.02] w-full"
              >
                <span className="block whitespace-nowrap">Your Complete Journey</span>
                <span className="text-blue-600 block mt-1 xl:mt-2">to Global Education</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-slate-700 mt-6 max-w-xl leading-relaxed font-medium"
              >
                From university placements and visa approvals to global career success - we support you every step of the way.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <Link href="/contact" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-3 text-base font-bold transition-colors shadow-[4px_4px_0px_rgba(15,23,42,1)] hover:shadow-none hover:translate-y-1 hover:translate-x-1 border-2 border-slate-900 sm:border-transparent">
                  Check Your Eligibility - FREE
                </Link>
                <Link href="/services" className="inline-flex items-center justify-center bg-white hover:bg-slate-50 text-slate-900 rounded-full px-6 py-3 text-base font-bold transition-colors shadow-[4px_4px_0px_rgba(15,23,42,1)] hover:shadow-none hover:translate-y-1 hover:translate-x-1 border-2 border-slate-900">
                  Explore Our Services
                </Link>
              </motion.div>
            </div>

            {/* Right Content (Framer Motion UI Mockup) */}
            <div className="flex-1 w-full relative hidden lg:flex justify-end items-center h-[500px]">
              <div className="relative w-[450px] h-[500px] flex items-center justify-center scale-[0.85] xl:scale-90 origin-center">

                {/* SVG Network Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                  {/* Base dashed lines connecting center (225,250) to the 4 nodes */}
                  <line x1="225" y1="250" x2="100" y2="100" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="6 6" />
                  <line x1="225" y1="250" x2="350" y2="100" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="6 6" />
                  <line x1="225" y1="250" x2="100" y2="400" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="6 6" />
                  <line x1="225" y1="250" x2="350" y2="400" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="6 6" />

                  {/* Animated Energy Pulses flowing outwards */}
                  <motion.line x1="225" y1="250" x2="100" y2="100" stroke="#124b8d" strokeWidth="3" strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.3 }} />
                  <motion.line x1="225" y1="250" x2="350" y2="100" stroke="#e31b23" strokeWidth="3" strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 0.5 }} />
                  <motion.line x1="225" y1="250" x2="100" y2="400" stroke="#e31b23" strokeWidth="3" strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 0.7 }} />
                  <motion.line x1="225" y1="250" x2="350" y2="400" stroke="#124b8d" strokeWidth="3" strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut", delay: 0.4 }} />
                </svg>

                {/* Central Core: The AEC Logo */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.0, type: "spring", bounce: 0.5, delay: 0.1 }}
                  className="absolute z-20 w-36 h-36 rounded-full bg-white shadow-[0_0_60px_rgba(18,75,141,0.15)] flex flex-col items-center justify-center border-[6px] border-slate-50"
                >
                  <Image src="/auseducenter_logo.png" alt="AEC Logo" width={90} height={90} className="object-contain" />
                  {/* Pulsing ring */}
                  <motion.div
                    animate={{ scale: [1, 1.4], opacity: [0.3, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                    className="absolute inset-0 rounded-full border-2 border-[#124b8d] -z-10"
                  />
                </motion.div>

                {/* Node 1: University Admissions (Top Left) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: -20, y: -20 }}
                  animate={{ opacity: 1, scale: 1, x: 0, y: [-4, 4, -4] }}
                  transition={{ opacity: { delay: 0.4 }, scale: { delay: 0.4 }, y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 } }}
                  className="absolute top-[50px] left-[10px] z-10 w-[180px] bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border-[2px] border-slate-900 p-4"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-[#124b8d] shrink-0">
                      <Building2 size={18} />
                    </div>
                    <div className="text-xs font-black text-slate-900 uppercase leading-tight">University<br />Admissions</div>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg py-1.5 px-2 text-[9px] font-bold text-slate-500 uppercase tracking-widest text-center">
                    500+ Institutions
                  </div>
                </motion.div>

                {/* Node 2: Student Visas (Top Right) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: 20, y: -20 }}
                  animate={{ opacity: 1, scale: 1, x: 0, y: [-4, 4, -4] }}
                  transition={{ opacity: { delay: 0.5 }, scale: { delay: 0.5 }, y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 } }}
                  className="absolute top-[50px] right-[10px] z-10 w-[180px] bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border-[2px] border-slate-900 p-4"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-red-50 border border-red-200 flex items-center justify-center text-[#e31b23] shrink-0">
                      <Plane size={18} />
                    </div>
                    <div className="text-xs font-black text-slate-900 uppercase leading-tight">Student<br />Visas</div>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg py-1.5 px-2 text-[9px] font-bold text-slate-500 uppercase tracking-widest text-center">
                    98% Success Rate
                  </div>
                </motion.div>

                {/* Node 3: Dependent Visas (Bottom Left) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: -20, y: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0, y: [-4, 4, -4] }}
                  transition={{ opacity: { delay: 0.6 }, scale: { delay: 0.6 }, y: { duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 } }}
                  className="absolute bottom-[50px] left-[10px] z-10 w-[180px] bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border-[2px] border-slate-900 p-4"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-red-50 border border-red-200 flex items-center justify-center text-[#e31b23] shrink-0">
                      <Users size={18} />
                    </div>
                    <div className="text-xs font-black text-slate-900 uppercase leading-tight">Dependent<br />Visas</div>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg py-1.5 px-2 text-[9px] font-bold text-slate-500 uppercase tracking-widest text-center">
                    Family Included
                  </div>
                </motion.div>

                {/* Node 4: Test Preparation (Bottom Right) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: 20, y: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0, y: [-4, 4, -4] }}
                  transition={{ opacity: { delay: 0.7 }, scale: { delay: 0.7 }, y: { duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.7 } }}
                  className="absolute bottom-[50px] right-[10px] z-10 w-[180px] bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border-[2px] border-slate-900 p-4"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-[#124b8d] shrink-0">
                      <FileCheck size={18} />
                    </div>
                    <div className="text-xs font-black text-slate-900 uppercase leading-tight">Test<br />Preparation</div>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg py-1.5 px-2 text-[9px] font-bold text-slate-500 uppercase tracking-widest text-center">
                    IELTS & PTE Experts
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* 2. Why We're Different (Restored Bento Grid Layout) */}
      <section className="py-24 bg-[#E4EDFB] overflow-hidden">
        <div className="container mx-auto px-4 lg:px-6 xl:px-8 max-w-7xl">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#e31b23]"></div>
              <span className="text-xs font-bold text-[#e31b23] tracking-widest uppercase">Why Us</span>
              <div className="w-8 h-[2px] bg-[#e31b23]"></div>
            </div>
            <h2 className="text-4xl md:text-[2.75rem] font-medium tracking-tight text-[#11181C] leading-[1.1] mb-6">
              Why We're Different From <br className="hidden md:block" /> Other Education Agents
            </h2>
            <p className="text-slate-500 max-w-2xl text-lg">
              We don't just get you a visa - we build your entire future in Australia or New Zealand
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {/* 1. First MARA Agent */}
            <div className="md:col-span-1 bg-[#F4F8FD] rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col group overflow-hidden">
              <div className="p-8 pb-0">
                <h3 className="text-2xl font-medium text-[#11181C] mb-3 leading-tight">First MARA Agent</h3>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                  20+ years expertise with Australia's official Migration Agents Registration Authority. FREE qualified immigration advice.
                </p>
              </div>
              <div className="mt-auto relative overflow-hidden h-48 w-full border-t border-slate-100/50">
                <video
                  src="/hero-opt-1-compressed.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-cover absolute inset-0 w-full h-full"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent pt-12 pb-4 px-4 overflow-hidden z-15">
                  <div className="flex gap-4 whitespace-nowrap w-max animate-marquee">
                    <span className="text-white/90 text-[10px] font-bold tracking-wider uppercase bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">MARA Registered</span>
                    <span className="text-white/90 text-[10px] font-bold tracking-wider uppercase bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">PIER Qualified</span>
                    <span className="text-white/90 text-[10px] font-bold tracking-wider uppercase bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">20+ Years Exp</span>
                    <span className="text-white/90 text-[10px] font-bold tracking-wider uppercase bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">MARA Registered</span>
                    <span className="text-white/90 text-[10px] font-bold tracking-wider uppercase bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">PIER Qualified</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. 4 Global Offices */}
            <div className="md:col-span-1 bg-[#F4F8FD] rounded-[32px] p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col group overflow-hidden">
              <h3 className="text-2xl font-medium text-[#11181C] mb-3 leading-tight">4 Global Offices</h3>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                Melbourne, Adelaide, Colombo &amp; Dubai - providing 24/7 support across multiple time zones.
              </p>
              <div className="mt-auto relative rounded-2xl overflow-hidden h-48 w-full bg-gradient-to-br from-slate-50/80 via-white to-slate-50/80 flex items-center justify-center border border-slate-200/60 shadow-inner">
                <style dangerouslySetInnerHTML={{
                  __html: `
                  @keyframes connectionDash {
                    to {
                      stroke-dashoffset: -20;
                    }
                  }
                  .animate-connection {
                    stroke-dasharray: 6 4;
                    animation: connectionDash 1.2s linear infinite;
                  }
                `}} />
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="relative z-20 transition-transform duration-300 group-hover:scale-105">
                    {/* Pulsing ring background */}
                    <div className="absolute inset-0 bg-[#124b8d]/20 rounded-full animate-ping opacity-75 scale-110"></div>
                    <div className="w-14 h-14 bg-[#11181C] rounded-full flex items-center justify-center shadow-xl shadow-black/20 relative z-10 border border-slate-800">
                      <Globe className="w-6 h-6 text-[#124b8d] animate-pulse" />
                    </div>
                  </div>
                  <svg className="absolute inset-0 w-full h-full z-10" fill="none" strokeWidth="2">
                    <line x1="50%" y1="50%" x2="25%" y2="20%" className="stroke-[#124b8d]/40 animate-connection" />
                    <line x1="50%" y1="50%" x2="75%" y2="25%" className="stroke-[#124b8d]/40 animate-connection" />
                    <line x1="50%" y1="50%" x2="25%" y2="80%" className="stroke-[#124b8d]/40 animate-connection" />
                    <line x1="50%" y1="50%" x2="75%" y2="75%" className="stroke-[#124b8d]/40 animate-connection" />
                  </svg>

                  {/* Melbourne Capsule */}
                  <div className="absolute top-[20%] left-[25%] -translate-x-1/2 -translate-y-1/2 z-30">
                    <div className="h-9 px-2.5 rounded-full bg-white border border-slate-200/80 shadow-[0_4px_12px_rgba(0,0,0,0.05)] flex items-center gap-2 group/node cursor-default transition-transform duration-300 hover:-translate-y-1 hover:border-[#124b8d] hover:shadow-[0_6px_16px_rgba(18,75,141,0.1)]">
                      <div className="w-6 h-6 rounded-full overflow-hidden relative shrink-0 border border-slate-100 shadow-sm">
                        <Image src="/office_melbourne.png" alt="Melbourne" fill className="object-cover group-hover/node:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="flex items-center gap-1.5 pr-0.5">
                        <span className="text-slate-800 text-[10px] font-bold tracking-wider">MELBOURNE</span>
                        <span className="relative flex h-1.5 w-1.5 shrink-0">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-100"></span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Adelaide Capsule */}
                  <div className="absolute top-[25%] left-[75%] -translate-x-1/2 -translate-y-1/2 z-30">
                    <div className="h-9 px-2.5 rounded-full bg-white border border-slate-200/80 shadow-[0_4px_12px_rgba(0,0,0,0.05)] flex items-center gap-2 group/node cursor-default transition-transform duration-300 hover:translate-y-1 hover:border-[#124b8d] hover:shadow-[0_6px_16px_rgba(18,75,141,0.1)]">
                      <div className="w-6 h-6 rounded-full overflow-hidden relative shrink-0 border border-slate-100 shadow-sm">
                        <Image src="/office_adelaide.png" alt="Adelaide" fill className="object-cover group-hover/node:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="flex items-center gap-1.5 pr-0.5">
                        <span className="text-slate-800 text-[10px] font-bold tracking-wider">ADELAIDE</span>
                        <span className="relative flex h-1.5 w-1.5 shrink-0">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-100"></span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Colombo Capsule */}
                  <div className="absolute top-[80%] left-[25%] -translate-x-1/2 -translate-y-1/2 z-30">
                    <div className="h-9 px-2.5 rounded-full bg-white border border-slate-200/80 shadow-[0_4px_12px_rgba(0,0,0,0.05)] flex items-center gap-2 group/node cursor-default transition-transform duration-300 hover:-translate-y-0.5 hover:border-[#124b8d] hover:shadow-[0_6px_16px_rgba(18,75,141,0.1)]">
                      <div className="w-6 h-6 rounded-full overflow-hidden relative shrink-0 border border-slate-100 shadow-sm">
                        <Image src="/office_colombo.png" alt="Colombo" fill className="object-cover group-hover/node:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="flex items-center gap-1.5 pr-0.5">
                        <span className="text-slate-800 text-[10px] font-bold tracking-wider">COLOMBO</span>
                        <span className="relative flex h-1.5 w-1.5 shrink-0">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-100"></span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Dubai Capsule */}
                  <div className="absolute top-[75%] left-[75%] -translate-x-1/2 -translate-y-1/2 z-30">
                    <div className="h-9 px-2.5 rounded-full bg-white border border-slate-200/80 shadow-[0_4px_12px_rgba(0,0,0,0.05)] flex items-center gap-2 group/node cursor-default transition-transform duration-300 hover:translate-y-1 hover:border-[#124b8d] hover:shadow-[0_6px_16px_rgba(18,75,141,0.1)]">
                      <div className="w-6 h-6 rounded-full overflow-hidden relative shrink-0 border border-slate-100 shadow-sm">
                        <Image src="/office_dubai.png" alt="Dubai" fill className="object-cover group-hover/node:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="flex items-center gap-1.5 pr-0.5">
                        <span className="text-slate-800 text-[10px] font-bold tracking-wider">DUBAI</span>
                        <span className="relative flex h-1.5 w-1.5 shrink-0">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-100"></span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Pre-Departure Support */}
            <div className="md:col-span-1 bg-[#F4F8FD] rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col group overflow-hidden min-h-[380px]">
              <div className="p-8 pb-0">
                <h3 className="text-2xl font-medium text-[#11181C] mb-3 leading-tight">Pre-Departure Support</h3>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                  Airline ticketing and airport assistance included to ensure a smooth journey.
                </p>
              </div>
              <div className="mt-auto relative overflow-hidden h-48 w-full border-t border-slate-100/50">
                <video
                  src="/Travel_video_animation_airplane_compressed.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-cover absolute inset-0 w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10" />

                {/* Floating pill input */}
                <div className="absolute inset-x-3 bottom-3 z-20 flex justify-center">
                  <div className="w-full bg-white/90 backdrop-blur-sm pl-3 pr-1 py-1 rounded-full flex items-center justify-between shadow-md border border-slate-100/50">
                    <span className="text-slate-500 text-[10px] font-medium tracking-wide flex-1 text-left">Your journey begins...</span>
                    <div className="w-6 h-6 bg-[#11181C] rounded-full flex items-center justify-center text-white shadow-sm shrink-0">
                      <Plane className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Career Placement & Family Visas */}
            <div className="md:col-span-2 bg-[#E7EFFB] rounded-[32px] p-8 lg:p-10 border border-[#CFE0F5] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col md:flex-row items-center gap-8 group overflow-hidden">
              <div className="flex-1 z-10">
                <h3 className="text-3xl lg:text-4xl font-medium text-[#11181C] mb-4 leading-tight">
                  Career Placement &amp; Family Visas
                </h3>
                <p className="text-slate-600 text-sm mb-8 max-w-lg leading-relaxed">
                  Job opportunities, employer sponsorship, Professional Year programs, and expert guidance on dependent visas for your whole family.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact?booking=true" className="inline-flex items-center justify-center bg-[#11181C] text-white rounded-xl px-8 py-4 text-sm font-semibold transition-colors hover:bg-black shadow-md">
                    Start Learning
                  </Link>
                  <Link href="/services/career-services" className="inline-flex items-center justify-center border border-slate-400 text-[#11181C] rounded-xl px-8 py-4 text-sm font-semibold transition-colors hover:border-[#11181C] hover:bg-white bg-transparent">
                    Course Plans
                  </Link>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-5/12 h-64 relative flex items-center justify-center mt-8 md:mt-0 z-0 perspective-[1000px]">
                <div className="absolute right-[5%] top-[10%] w-40 h-56 rounded-2xl overflow-hidden shadow-2xl rotate-[12deg] group-hover:rotate-[6deg] transition-all duration-500 border border-white/20">
                  <Image src="/why_card1.png" alt="Student" fill className="object-cover" />
                </div>
                <div className="absolute right-[45%] top-0 w-44 h-60 rounded-2xl overflow-hidden shadow-2xl -rotate-[6deg] group-hover:-rotate-[12deg] transition-all duration-500 z-10 border border-white/20">
                  <Image src="/why_card2.png" alt="Professional" fill className="object-cover" />
                </div>
                <div className="absolute right-[25%] bottom-[15%] w-16 h-16 bg-[#11181C] rounded-full flex items-center justify-center shadow-xl z-20 border-[4px] border-[#E7EFFB] transition-transform duration-300 group-hover:scale-105">
                  <Target className="w-7 h-7 text-[#124b8d]" />
                </div>
              </div>
            </div>

            {/* 5. Complete Settlement */}
            <div className="md:col-span-1 bg-[#F4F8FD] rounded-[32px] overflow-hidden relative shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group flex flex-col border border-slate-100 min-h-[380px]">
              <div className="absolute inset-0 z-0">
                <Image
                  src="/why_settlement.png"
                  alt="Settlement"
                  fill
                  className="object-cover object-bottom opacity-90 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#F4F8FD] from-40% via-[#F4F8FD]/90 via-60% to-transparent"></div>
              </div>
              <div className="relative z-10 p-8 flex flex-col h-full">
                <h3 className="text-2xl font-medium text-[#11181C] mb-3 leading-tight">Complete Settlement</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed relative z-10 max-w-[90%]">
                  Finding accommodation, part-time jobs, and settling into Australian life smoothly.
                </p>
                <div className="mt-auto flex justify-center w-full mb-2">
                  <div className="bg-white/80 backdrop-blur-md border border-white/60 rounded-full py-3 px-5 flex items-center gap-4 shadow-[0_8px_30px_rgb(0,0,0,0.08)] group-hover:bg-white/95 transition-colors duration-500 transform group-hover:-translate-y-1 cursor-text w-full max-w-[240px]">
                    <span className="text-slate-500 text-xs font-medium tracking-wide flex-1 text-left">Discover your path...</span>
                    <div className="w-7 h-7 bg-[#11181C] rounded-full flex items-center justify-center shrink-0">
                      <Search className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A0F1C] relative border-t border-white/5">
        <div className="container mx-auto px-4 lg:px-6 xl:px-8 max-w-[1400px]">
          <div className="mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-semibold tracking-tight text-white mb-6 leading-[1.1]">
              Comprehensive <span className="text-[#00A3FF]">Services</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-xl leading-relaxed">
              Expert guidance and complete support designed to ensure your success, from your first application to your final settlement.
            </p>
          </div>

          <div className="flex flex-col border-t border-white/10">
            {[
              { title: "Education Counseling & Course Selection", text: "Get expert guidance to choose the best study destination, course, and institution for your future." },
              { title: "University, College & School Applications", text: "We help you apply to trusted universities, colleges, pathway providers, and schools." },
              { title: "Student Visa Guidance", text: "Receive complete student visa guidance with document preparation and application support." },
              { title: "Pre-Departure & Settlement Support", text: "From travel planning to settling overseas, we support you before and after arrival." },
              { title: "Career, Job Placement & PR Pathways", text: "Plan your future with support for internships, job placement, post-study visas, and PR pathways." },
              { title: "Partner & Family Support", text: "Bring your loved ones with expert support for partner, child, and family visa pathways." }
            ].map((service, idx) => {
              const isOpen = activeService === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveService(isOpen ? null : idx)}
                  className={`group cursor-pointer transition-all duration-500 overflow-hidden ${isOpen ? 'bg-white rounded-3xl my-6 border-transparent shadow-[0_20px_40px_rgba(0,0,0,0.3)]' : 'border-b border-white/10 hover:bg-white/[0.02]'}`}
                >
                  <div className={`py-6 md:py-8 flex items-center justify-between transition-all duration-500 ${isOpen ? 'px-6 md:px-10' : 'px-2'}`}>
                    <div className="flex items-center gap-6 md:gap-12 w-full">
                      <span className="font-mono text-sm tracking-wider text-[#00A3FF]">
                        /00{idx + 1}
                      </span>
                      <h3 className={`text-xl md:text-[1.75rem] font-semibold tracking-wide transition-colors duration-300 ${isOpen ? 'text-[#0A0F1C]' : 'text-slate-100'}`}>
                        {service.title}
                      </h3>
                    </div>
                    <div className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-[#0A0F1C] border-[#0A0F1C] text-white rotate-45' : 'border-white/20 bg-transparent text-slate-400 group-hover:border-[#00A3FF] group-hover:text-[#00A3FF]'}`}>
                      <Plus className="w-5 h-5 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Expanding Text */}
                  <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <div className={`pb-8 pt-0 transition-all duration-500 ${isOpen ? 'px-6 md:px-10 pl-[4.5rem] md:pl-[8.5rem]' : 'pl-[4.5rem] md:pl-[6.5rem] pr-4'}`}>
                        <p className={`text-base md:text-lg leading-relaxed transition-colors duration-300 max-w-3xl ${isOpen ? 'text-slate-600' : 'text-slate-400'}`}>
                          {service.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-16 flex justify-start pl-2">
            <Link href="/services" className="inline-flex items-center justify-center bg-white text-[#0A0F1C] rounded-full px-8 py-4 text-sm font-bold transition-all duration-300 hover:bg-[#00A3FF] hover:text-white shadow-lg">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Study Destinations -> "Global Network" Bento Layout */}
      <section className="py-24 bg-[#E4EDFB]">
        <div className="container mx-auto px-4 lg:px-6 xl:px-8 max-w-7xl">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-xs font-bold text-[#e31b23] tracking-widest uppercase mb-4 block border border-[#e31b23]/20 px-3 py-1 rounded-full w-fit bg-[#e31b23]/5">GLOBAL</span>
              <h2 className="text-4xl md:text-[2.75rem] font-medium tracking-tight text-[#11181C] leading-[1.1]">
                Study Destinations <br /> Overview
              </h2>
            </div>
            <Link href="/study-worldwide" className="hidden md:inline-flex items-center justify-center bg-[#11181C] text-white rounded-full px-8 py-3 text-sm font-medium transition-colors hover:bg-blue-600">
              Explore All 18 Countries
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Featured Destination: Australia */}
            <div className="lg:col-span-2 bg-slate-100 rounded-3xl border border-slate-100 overflow-hidden relative group h-[400px] lg:h-full">
              <Image src="/dest_australia.png" alt="Australia" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11181C]/90 via-[#11181C]/20 to-transparent"></div>
              <div className="absolute top-6 right-6">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="bg-blue-600/90 backdrop-blur-sm px-3 py-1.5 text-xs font-bold rounded-lg w-fit mb-4 uppercase tracking-wider">Primary Destination</div>
                <h3 className="text-4xl font-bold mb-3">Australia</h3>
                <p className="text-white/80 max-w-lg text-lg mb-6">Top-tier universities, vibrant cities, and a world-class lifestyle. The perfect choice for international students seeking clear PR pathways.</p>

                <div className="flex items-center gap-6">
                  <div>
                    <div className="text-white/60 text-sm mb-1">Universities</div>
                    <div className="font-semibold">Top 100+</div>
                  </div>
                  <div className="w-px h-8 bg-white/20"></div>
                  <div>
                    <div className="text-white/60 text-sm mb-1">Post-Study Work</div>
                    <div className="font-semibold">Available</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Destinations List */}
            <div className="flex flex-col gap-4">
              {[
                { country: "New Zealand", slug: "new-zealand", desc: "World-class education in a safe environment.", image: "/dest_nz.png" },
                { country: "United Kingdom", slug: "uk", desc: "Historic campuses with global recognition.", image: "/dest_uk.png" },
                { country: "Canada", slug: "canada", desc: "High quality of life & clear PR pathways.", image: "/dest_canada.png" },
                { country: "USA", slug: "usa", desc: "Cutting-edge research opportunities.", image: "/dest_usa.png" },
                { country: "UAE", slug: "uae", desc: "Modern innovation blending with culture.", image: "/dest_uae.png" }
              ].map((dest, i) => (
                <Link key={i} href={`/study-worldwide/${dest.slug}`} className="bg-white rounded-2xl p-3 border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-600/5 transition-all duration-300 flex items-center group flex-1">
                  <div className="w-20 h-20 shrink-0 rounded-xl overflow-hidden relative">
                    <Image src={dest.image} alt={dest.country} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-lg font-semibold text-[#11181C] mb-0.5 group-hover:text-blue-600 transition-colors">{dest.country}</h3>
                    <p className="text-slate-500 text-sm line-clamp-1">{dest.desc}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 text-slate-400 shrink-0 ml-2">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <Link href="/study-worldwide" className="md:hidden mt-8 flex w-full items-center justify-center bg-[#11181C] text-white rounded-full px-8 py-3 text-sm font-medium transition-colors hover:bg-blue-600">
            Explore All 18 Countries
          </Link>
        </div>
      </section>

      {/* 4. Our Process -> Animated journey stepper (navy band) */}
      <section ref={processRef} className="py-24 lg:py-28 bg-[#0c3463] relative overflow-hidden">
        {/* Ambient glow + grid */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_60%_50%_at_85%_0%,rgba(29,111,212,0.35)_0%,transparent_60%),radial-gradient(ellipse_50%_40%_at_5%_100%,rgba(227,27,35,0.18)_0%,transparent_60%)]" />
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_50%,transparent_100%)]" />

        <div className="container mx-auto px-4 lg:px-6 xl:px-8 max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center mb-16 lg:mb-20"
          >
            <span className="text-xs font-bold text-white tracking-widest uppercase mb-4 border border-[#e31b23]/50 px-3 py-1 rounded-full bg-[#e31b23]/20">Our Process</span>
            <h2 className="text-4xl md:text-[2.75rem] font-semibold tracking-tight text-white leading-[1.1] mb-4">
              Five Steps From First<br className="hidden md:block" /> Call to PR
            </h2>
            <p className="text-blue-100/70 max-w-xl text-lg">
              One team handles every stage — so nothing falls through the cracks between assessment and arrival.
            </p>
          </motion.div>

          {/* ── Desktop: horizontal stepper ── */}
          <div className="hidden lg:block relative">
            {/* progress track between first & last node centres */}
            <div className="absolute top-7 left-[10%] right-[10%] h-[3px] bg-white/15 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#1d6fd4] to-[#e31b23] rounded-full"
                animate={{ width: `${(activeStep / (processSteps.length - 1)) * 100}%` }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </div>

            {/* nodes */}
            <div className="grid grid-cols-5 relative z-10">
              {processSteps.map((step, i) => {
                const isActive = activeStep === i;
                const isDone = i < activeStep;
                return (
                  <div key={i} className="flex justify-center">
                    <button
                      onClick={() => setActiveStep(i)}
                      aria-label={step.title}
                      className={`relative w-14 h-14 rounded-full flex items-center justify-center font-black text-sm transition-all duration-300 ${
                        isActive
                          ? "bg-white text-[#0c3463] scale-110 shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                          : isDone
                          ? "bg-[#1d6fd4] text-white"
                          : "bg-white/10 text-white/50 border border-white/20 hover:bg-white/20"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          className="absolute inset-0 rounded-full border-2 border-[#e31b23]"
                          animate={{ scale: [1, 1.45], opacity: [0.7, 0] }}
                          transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                        />
                      )}
                      {isDone ? <Check className="w-6 h-6" strokeWidth={3} /> : `0${i + 1}`}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* cards */}
            <motion.div
              className="grid grid-cols-5 gap-4 mt-10 items-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            >
              {processSteps.map((step, i) => {
                const isActive = activeStep === i;
                const Icon = step.icon;
                return (
                  <motion.button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    variants={{ hidden: { opacity: 0, y: 26 }, visible: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className={`text-left rounded-2xl p-5 border-t-4 transition-all duration-300 ${
                      isActive
                        ? "bg-white border-[#e31b23] -translate-y-2 shadow-[0_24px_45px_rgba(0,0,0,0.35)]"
                        : "bg-white/[0.06] border-transparent hover:bg-white/[0.1]"
                    }`}
                  >
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-colors ${isActive ? "bg-[#e31b23] text-white" : "bg-white/10 text-blue-200"}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`inline-block text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded mb-2 ${isActive ? "bg-[#124b8d]/10 text-[#124b8d]" : "bg-white/10 text-blue-200"}`}>
                      {step.tag}
                    </span>
                    <h3 className={`font-bold text-[15px] leading-snug mb-2 ${isActive ? "text-[#0c3463]" : "text-white"}`}>
                      {step.title}
                    </h3>
                    <p className={`text-[13px] leading-relaxed ${isActive ? "text-slate-600" : "text-blue-100/55"}`}>
                      {step.desc}
                    </p>
                  </motion.button>
                );
              })}
            </motion.div>
          </div>

          {/* ── Mobile / tablet: vertical stepper ── */}
          <div className="lg:hidden relative">
            <div className="absolute left-[27px] top-6 bottom-6 w-[2px] bg-white/15" />
            <div className="flex flex-col gap-4">
              {processSteps.map((step, i) => {
                const isActive = activeStep === i;
                const Icon = step.icon;
                return (
                  <motion.button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.45, delay: i * 0.08 }}
                    className="relative flex gap-4 text-left items-start"
                  >
                    <div className={`relative z-10 w-14 h-14 shrink-0 rounded-full flex items-center justify-center font-black text-sm transition-all duration-300 ${isActive ? "bg-white text-[#0c3463] shadow-[0_0_24px_rgba(255,255,255,0.35)]" : "bg-white/10 text-white/60 border border-white/20"}`}>
                      {i < activeStep ? <Check className="w-6 h-6" strokeWidth={3} /> : `0${i + 1}`}
                    </div>
                    <div className={`flex-1 rounded-2xl p-5 border-t-4 transition-all duration-300 ${isActive ? "bg-white border-[#e31b23] shadow-xl" : "bg-white/[0.06] border-transparent"}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isActive ? "bg-[#e31b23] text-white" : "bg-white/10 text-blue-200"}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded ${isActive ? "bg-[#124b8d]/10 text-[#124b8d]" : "bg-white/10 text-blue-200"}`}>{step.tag}</span>
                      </div>
                      <h3 className={`font-bold text-base mb-1.5 ${isActive ? "text-[#0c3463]" : "text-white"}`}>{step.title}</h3>
                      <p className={`text-sm leading-relaxed ${isActive ? "text-slate-600" : "text-blue-100/60"}`}>{step.desc}</p>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center mt-16">
            <Link href="/services" className="inline-flex items-center justify-center bg-white text-[#0c3463] hover:bg-blue-50 rounded-full px-8 py-3.5 text-sm font-bold transition-colors shadow-lg">
              See Our Complete Services
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Success Stories -> Infinite 2-row testimonial marquee */}
      <section className="py-24 bg-[#E4EDFB] overflow-hidden">
        <div className="container mx-auto px-4 lg:px-6 xl:px-8 max-w-7xl">
          <div className="flex flex-col items-center text-center mb-14">
            <span className="text-xs font-bold text-[#e31b23] tracking-widest uppercase mb-4 border border-[#e31b23]/20 px-3 py-1 rounded-full bg-[#e31b23]/5">Success Stories</span>
            <h2 className="text-4xl md:text-[2.75rem] font-medium tracking-tight text-[#11181C] leading-[1.1]">
              Real Results from<br />Real Students
            </h2>
          </div>
        </div>

        <TestimonialsMarquee />

        <div className="flex justify-center mt-14">
          <Link href="/contact#testimonials" className="inline-flex items-center justify-center bg-[#124b8d] text-white rounded-full px-8 py-3 text-sm font-semibold transition-colors hover:bg-[#0c3463]">
            Read More Success Stories
          </Link>
        </div>
      </section>

      {/* 6. Why Choose AEC -> "FAQ" Layout with Checkmarks */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6 xl:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            <div className="lg:w-[35%]">
              <span className="text-[11px] font-bold text-[#e31b23] tracking-[0.2em] uppercase mb-6 block border border-[#e31b23]/20 px-4 py-1.5 rounded-full w-fit bg-[#e31b23]/5">THE PROOF</span>
              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-normal tracking-tight text-[#11181C] leading-[1.1] mb-6">
                Why Choose<br />AEC
              </h2>
              <p className="text-slate-500 text-base leading-relaxed mb-8">
                The credentials and track record behind every student we place — not just promises.
              </p>

              {/* Navy trust card adds a strong block of brand colour */}
              <div className="bg-[#0c3463] rounded-3xl p-8 mb-6 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#e31b23]" />
                <div className="text-xs font-bold text-blue-200 uppercase tracking-widest mb-2">24/7 Support</div>
                <a href="tel:+94773950448" className="text-2xl font-bold text-white mb-6 block hover:text-[#ff6b6b] transition-colors">+94 77 395 0448</a>

                <div className="w-full h-px bg-white/15 mb-6"></div>

                <div className="text-xs text-blue-200/70 mb-1">Send us an email</div>
                <a href="mailto:edu@multinational.com.au" className="text-sm font-medium text-white hover:text-[#ff6b6b] transition-colors break-all">edu@multinational.com.au</a>
              </div>

              <Link href="/about" className="inline-flex items-center justify-center bg-[#124b8d] hover:bg-[#0c3463] text-white rounded-full px-8 py-4 text-sm font-semibold transition-colors w-full">
                Learn More About Us
              </Link>
            </div>

            <div className="lg:w-[65%] mt-8 lg:mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 border-t border-slate-100">
                {[
                  "First MARA-registered agent office in Sri Lanka",
                  "PIER-qualified, certified counselors",
                  "95% visa success rate",
                  "2,500+ students successfully placed",
                  "18 countries served worldwide",
                  "100+ university & college partners",
                  "4.9 / 5 average rating from 450+ reviews",
                  "20+ years of continuous operation",
                  "ESOS Act & National Code compliant",
                  "Part of Multinational Holdings — financially stable"
                ].map((point, i) => (
                  <div key={i} className={`flex items-center gap-4 py-7 ${i >= 8 ? '' : 'border-b border-slate-100'}`}>
                    <div className="w-5 h-5 rounded-full bg-[#124b8d] flex items-center justify-center shrink-0">
                      <CheckCircle size={12} className="text-white" strokeWidth={3} />
                    </div>
                    <span className="text-[#11181C] text-[15px] font-medium leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Latest News -> "Expert Insights" layout */}
      <section className="py-24 bg-[#E4EDFB]">
        <div className="container mx-auto px-4 lg:px-6 xl:px-8 max-w-7xl">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-xs font-bold text-[#e31b23] tracking-widest uppercase mb-4 border border-[#e31b23]/20 px-3 py-1 rounded-full bg-[#e31b23]/5">INSIGHTS</span>
            <h2 className="text-4xl md:text-[2.75rem] font-medium tracking-tight text-[#11181C] leading-[1.1]">
              Expert-Led Talks & <br className="hidden md:block" /> Latest News
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: "New Visa Rules for Australia 2026", excerpt: "Everything you need to know about the latest changes.", date: "May 10, 2026", icon: FileCheck },
              { title: "Top 5 Emerging Careers in New Zealand", excerpt: "Discover which industries are currently booming.", date: "May 05, 2026", icon: Building2 },
              { title: "How to Ace Your University Interview", excerpt: "Expert tips from our counselors on preparing for admissions.", date: "April 28, 2026", icon: Target }
            ].map((article, i) => (
              <div key={i} className="bg-white rounded-3xl p-4 flex flex-col gap-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-slate-100">
                <div className="w-full h-48 bg-slate-100 rounded-2xl shrink-0 overflow-hidden relative flex items-center justify-center group">
                  <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-blue-600/10 transition-colors"></div>
                  <article.icon className="text-slate-300 w-12 h-12 relative z-10" />
                </div>
                <div className="flex-1 px-2 pb-2 flex flex-col">
                  <h3 className="text-lg font-semibold text-[#11181C] mb-3 leading-snug">{article.title}</h3>
                  <div className="flex items-center gap-2 mb-6 text-xs text-slate-500">
                    <Calendar size={12} /> {article.date}
                  </div>
                  <p className="text-sm text-slate-500 mb-6 flex-1">{article.excerpt}</p>
                  <button className="w-full py-2.5 border border-slate-200 rounded-full text-sm font-semibold text-[#11181C] hover:bg-slate-50 transition-colors mt-auto">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Contact CTA -> "Ready to Start Your Australian Dream?" */}
      <section className="py-0 relative overflow-hidden bg-white">
        <div className="bg-[#0A192F] py-24 lg:py-32 rounded-none">
          <div className="container mx-auto px-4 lg:px-6 xl:px-8 max-w-6xl relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tight text-white leading-[1.1] mb-6">
                  Ready to Start <br /> Your Australian Dream?
                </h2>
                <p className="text-slate-400 text-lg mb-0 font-medium max-w-md">
                  Take our FREE eligibility assessment now - Get your personalized pathway in 24 hours.
                </p>
              </div>

              <div className="lg:w-1/2 flex justify-center lg:justify-end items-center relative w-full">
                <div className="absolute right-10 top-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl hidden md:block"></div>

                <div className="flex flex-col items-center lg:items-end gap-4 relative z-10 w-full sm:w-auto">
                  <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-blue-600 text-white rounded-full px-8 py-4 text-sm font-semibold transition-transform shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:scale-105">
                    Check Eligibility Now - It's FREE!
                  </Link>
                  <Link href="/contact?booking=true" className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-[#0A192F] rounded-full px-8 py-4 text-sm font-semibold transition-transform hover:scale-105">
                    <Calendar className="mr-2" size={18} /> Book a Consultation
                  </Link>
                  <a href="tel:+94773950448" className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent border border-slate-700 text-white hover:bg-slate-800 rounded-full px-8 py-4 text-sm font-semibold transition-colors">
                    <Phone className="mr-2" size={18} /> Call Us Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb: string;
  bgImage?: string;
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export function PageHero({ title, subtitle, breadcrumb, bgImage = "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2940&auto=format&fit=crop" }: PageHeroProps) {
  return (
    <section className="relative w-full min-h-[42vh] md:min-h-[48vh] flex items-center justify-center overflow-hidden bg-[#0c3463] pt-28 pb-14">
      {/* Navy brand gradient + royal-blue glow */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,#1d6fd4_0%,#124b8d_38%,#0c3463_75%)]" />
      {/* Background Image blended */}
      {bgImage && (
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay">
          <Image
            src={bgImage}
            alt={title}
            fill
            priority
            className="object-cover object-center"
          />
        </div>
      )}

      {/* Faint grid texture */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
      {/* Red brand accent bar at the bottom edge */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#e31b23] z-10" />

      <div className="container relative z-10 px-4 mx-auto text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto space-y-4"
        >
          <motion.div variants={fadeIn} className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest">
            <Link href="/" className="text-white/70 hover:text-white transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-[#ff6b6b]">{breadcrumb}</span>
          </motion.div>
          <motion.h1
            variants={fadeIn}
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              variants={fadeIn}
              className="text-base md:text-lg font-medium text-blue-100/90 max-w-2xl mx-auto"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

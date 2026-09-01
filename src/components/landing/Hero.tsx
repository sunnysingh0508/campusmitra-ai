"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { ProductPreview } from "./ProductPreview";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#0B0D12]">
      {/* Subtle Grid Background Pattern - Very minimal */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#262B3615_1px,transparent_1px),linear-gradient(to_bottom,#262B3615_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Product Positioning & Messaging */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#7C83FF]/10 border border-[#7C83FF]/20 text-[#7C83FF] text-xs font-semibold tracking-wider uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C83FF]"></span>
              BUILT FOR COLLEGE LIFE
            </div>

            {/* Main Editorial Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F7FA] leading-[1.1] max-w-[650px] mb-6 font-heading">
              Your college life,
              <br className="hidden sm:inline" /> organized in{" "}
              <span className="text-[#7C83FF]">one place.</span>
            </h1>

            {/* Concise Description */}
            <p className="text-base sm:text-lg text-[#9AA3B2] leading-relaxed max-w-[540px] mb-8">
              Track attendance, calculate CGPA, manage assignments, organize notes,
              and plan your timetable from one simple dashboard.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-6">
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-[#7C83FF] hover:bg-[#6b72f0] transition-all shadow-sm active:scale-[0.99]"
              >
                Open Campus Mitra
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-[#F5F7FA] bg-[#151922] hover:bg-[#11141B] border border-[#262B36] transition-colors"
              >
                Explore Features
              </a>
            </div>

            {/* Small Product Trust Line */}
            <div className="flex items-center gap-2 text-xs text-[#6B7280]">
              <span className="w-1 h-1 rounded-full bg-[#6B7280]"></span>
              <span>One dashboard. Your entire academic routine.</span>
            </div>
          </motion.div>

          {/* Right Column: Dashboard Interactive Component Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-6 w-full"
          >
            <ProductPreview />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

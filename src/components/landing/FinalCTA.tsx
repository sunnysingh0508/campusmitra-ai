"use client";

import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-[#0B0D12] border-t border-[#262B36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[#262B36] bg-[#151922] p-8 sm:p-12 lg:p-16 text-center max-w-4xl mx-auto">
          <div className="w-12 h-12 rounded-xl bg-[#7C83FF]/10 border border-[#7C83FF]/30 text-[#7C83FF] flex items-center justify-center mx-auto mb-6">
            <GraduationCap className="w-6 h-6" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F7FA] tracking-tight mb-4 font-heading">
            Make college a little easier.
          </h2>

          <p className="text-base sm:text-lg text-[#9AA3B2] max-w-xl mx-auto mb-8 leading-relaxed">
            Keep your academic routine organized without switching between multiple tools.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/dashboard"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-sm font-semibold text-white bg-[#7C83FF] hover:bg-[#6b72f0] transition-colors"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

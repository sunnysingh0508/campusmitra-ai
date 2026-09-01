"use client";

import { motion } from "framer-motion";
import { TrendingUp, BarChart2, CheckCircle2, Clock } from "lucide-react";

export function AnalyticsPreview() {
  return (
    <section id="analytics" className="py-20 md:py-28 bg-[#0B0D12] border-t border-[#262B36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F5F7FA] tracking-tight mb-3 font-heading">
            Clear academic analytics.
          </h2>
          <p className="text-base sm:text-lg text-[#9AA3B2]">
            Monitor your semester trajectory with clean metrics and functional reports.
          </p>
        </div>

        {/* Analytics Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1: CGPA Trend */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-5 rounded-xl bg-[#151922] border border-[#262B36] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-[#9AA3B2]">
                  CGPA Trend
                </span>
                <TrendingUp className="w-4 h-4 text-[#22C55E]" />
              </div>
              <div className="text-2xl font-bold text-[#F5F7FA] font-heading">
                8.70 <span className="text-xs text-[#22C55E] font-normal">+0.30</span>
              </div>
              <p className="text-xs text-[#6B7280] mt-1">Across 3 semesters</p>
            </div>

            {/* Functional Line/Bar Representation */}
            <div className="mt-6 space-y-1.5">
              <div className="flex items-end justify-between gap-2 h-16 pt-2 border-b border-[#262B36]">
                <div className="flex-1 bg-[#262B36] rounded-t h-[65%] flex items-center justify-center text-[10px] text-[#9AA3B2]">
                  8.4
                </div>
                <div className="flex-1 bg-[#262B36] rounded-t h-[75%] flex items-center justify-center text-[10px] text-[#9AA3B2]">
                  8.6
                </div>
                <div className="flex-1 bg-[#7C83FF] rounded-t h-[90%] flex items-center justify-center text-[10px] text-white font-bold">
                  9.1
                </div>
              </div>
              <div className="flex justify-between text-[10px] text-[#6B7280] pt-1">
                <span>Sem 1</span>
                <span>Sem 2</span>
                <span>Sem 3</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Attendance Trend */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="p-5 rounded-xl bg-[#151922] border border-[#262B36] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-[#9AA3B2]">
                  Attendance Stability
                </span>
                <BarChart2 className="w-4 h-4 text-[#7C83FF]" />
              </div>
              <div className="text-2xl font-bold text-[#F5F7FA] font-heading">
                82% <span className="text-xs text-[#22C55E] font-normal">&gt; 75% Target</span>
              </div>
              <p className="text-xs text-[#6B7280] mt-1">Safe zone across 5 courses</p>
            </div>

            {/* Weekly Stability Indicator */}
            <div className="mt-6 space-y-2">
              <div className="space-y-1 text-xs">
                <div className="flex justify-between text-[11px]">
                  <span className="text-[#9AA3B2]">Math</span>
                  <span className="text-[#F5F7FA]">88%</span>
                </div>
                <div className="w-full bg-[#11141B] h-1.5 rounded-full border border-[#262B36]">
                  <div className="bg-[#22C55E] h-full rounded-full" style={{ width: "88%" }}></div>
                </div>
              </div>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between text-[11px]">
                  <span className="text-[#9AA3B2]">Data Struct</span>
                  <span className="text-[#F5F7FA]">72%</span>
                </div>
                <div className="w-full bg-[#11141B] h-1.5 rounded-full border border-[#262B36]">
                  <div className="bg-[#F59E0B] h-full rounded-full" style={{ width: "72%" }}></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Assignment Completion */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.16 }}
            className="p-5 rounded-xl bg-[#151922] border border-[#262B36] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-[#9AA3B2]">
                  Assignment Completion
                </span>
                <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
              </div>
              <div className="text-2xl font-bold text-[#F5F7FA] font-heading">
                94% <span className="text-xs text-[#9AA3B2] font-normal">On-time</span>
              </div>
              <p className="text-xs text-[#6B7280] mt-1">16 of 17 submitted</p>
            </div>

            {/* Radial / Progress Visual */}
            <div className="mt-6 flex items-center justify-between p-3 rounded-lg bg-[#11141B] border border-[#262B36]">
              <div className="text-xs space-y-0.5">
                <div className="text-[#F5F7FA] font-medium">Pending: 1</div>
                <div className="text-[#6B7280] text-[11px]">Due in 3 days</div>
              </div>
              <span className="text-xs font-bold text-[#22C55E] px-2 py-0.5 rounded bg-[#22C55E]/10 border border-[#22C55E]/20">
                Optimal
              </span>
            </div>
          </motion.div>

          {/* Card 4: Weekly Productivity */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.24 }}
            className="p-5 rounded-xl bg-[#151922] border border-[#262B36] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-[#9AA3B2]">
                  Weekly Focus Time
                </span>
                <Clock className="w-4 h-4 text-[#F59E0B]" />
              </div>
              <div className="text-2xl font-bold text-[#F5F7FA] font-heading">
                18.5 hrs <span className="text-xs text-[#9AA3B2] font-normal">Logged</span>
              </div>
              <p className="text-xs text-[#6B7280] mt-1">Classes + Self Study</p>
            </div>

            <div className="mt-6 space-y-2 text-xs">
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-[#9AA3B2]">Lecture hours:</span>
                <span className="text-[#F5F7FA] font-medium">12.0 hrs</span>
              </div>
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-[#9AA3B2]">Study & Revision:</span>
                <span className="text-[#7C83FF] font-medium">6.5 hrs</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

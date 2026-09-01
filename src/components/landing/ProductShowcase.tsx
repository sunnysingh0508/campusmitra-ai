"use client";

import { motion } from "framer-motion";
import {
  CalendarCheck,
  CheckSquare,
  Calculator,
  Percent,
  Plus,
  AlertTriangle,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export function ProductShowcase() {
  return (
    <section className="py-20 md:py-28 bg-[#11141B] border-t border-[#262B36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F5F7FA] tracking-tight mb-3 font-heading">
            Built around your actual routine.
          </h2>
          <p className="text-base sm:text-lg text-[#9AA3B2]">
            Detailed interfaces tailored for real academic workflows, not hypothetical concepts.
          </p>
        </div>

        {/* 3 Showcase Rows */}
        <div className="space-y-16">
          {/* Showcase 1: Attendance Tracker */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#22C55E]/10 border border-[#22C55E]/20 text-[#22C55E] text-xs font-semibold uppercase tracking-wider mb-4">
                <CalendarCheck className="w-3.5 h-3.5" />
                Attendance Tracker & Bunk Calculator
              </div>
              <h3 className="text-2xl font-bold text-[#F5F7FA] mb-3 font-heading">
                Never get short on attendance again.
              </h3>
              <p className="text-base text-[#9AA3B2] leading-relaxed mb-4">
                Input your attendance targets and instantly calculate how many lectures you can safely skip or must attend to clear criteria.
              </p>
              <ul className="space-y-2 text-sm text-[#9AA3B2]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]"></span>
                  Automatic safe-bunk calculation per subject
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]"></span>
                  Color-coded threshold alerts (75% / 80%)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]"></span>
                  One-tap present/absent logs
                </li>
              </ul>
            </div>

            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-xl border border-[#262B36] bg-[#151922] p-5 shadow-xl space-y-4"
              >
                <div className="flex items-center justify-between border-b border-[#262B36] pb-3">
                  <div className="text-sm font-semibold text-[#F5F7FA]">
                    Attendance Overview — Fall Semester
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-md bg-[#22C55E]/10 text-[#22C55E] border border-[#22C55E]/20 font-medium">
                    Overall: 82%
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded-lg bg-[#11141B] border border-[#262B36]">
                    <div className="text-xs text-[#9AA3B2]">Data Structures</div>
                    <div className="text-lg font-bold text-[#F59E0B] mt-1">72%</div>
                    <div className="text-[11px] text-[#F59E0B] mt-0.5">2 safe bunks left</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#11141B] border border-[#262B36]">
                    <div className="text-xs text-[#9AA3B2]">Mathematics</div>
                    <div className="text-lg font-bold text-[#22C55E] mt-1">88%</div>
                    <div className="text-[11px] text-[#22C55E] mt-0.5">5 safe bunks left</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#11141B] border border-[#262B36]">
                    <div className="text-xs text-[#9AA3B2]">Physics Lab</div>
                    <div className="text-lg font-bold text-[#22C55E] mt-1">92%</div>
                    <div className="text-[11px] text-[#22C55E] mt-0.5">6 safe bunks left</div>
                  </div>
                </div>

                {/* Bunk Action Notice */}
                <div className="p-3.5 rounded-lg bg-[#11141B] border border-[#262B36] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-[#9AA3B2]">
                    <AlertTriangle className="w-4 h-4 text-[#F59E0B] shrink-0" />
                    <span>
                      Data Structures is near the 75% threshold. Attendance at next 2 classes required.
                    </span>
                  </div>
                  <span className="text-[#7C83FF] font-medium underline shrink-0 cursor-pointer hidden sm:inline">
                    Log Today
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Showcase 2: Assignment Manager */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-xl border border-[#262B36] bg-[#151922] p-5 shadow-xl space-y-3"
              >
                <div className="flex items-center justify-between border-b border-[#262B36] pb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-[#F5F7FA]">
                      Assignments & Lab Tasks
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded bg-[#11141B] text-[#9AA3B2] border border-[#262B36]">
                      3 Active
                    </span>
                  </div>
                  <button className="text-xs bg-[#7C83FF] text-white px-2.5 py-1 rounded-md flex items-center gap-1">
                    <Plus className="w-3 h-3" /> New Task
                  </button>
                </div>

                <div className="space-y-2">
                  <div className="p-3 rounded-lg bg-[#11141B] border border-[#262B36] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded border border-[#262B36] flex items-center justify-center"></div>
                      <div>
                        <div className="text-xs font-semibold text-[#F5F7FA]">
                          Data Structures Mini Project
                        </div>
                        <div className="text-[11px] text-[#6B7280]">
                          Computer Science • Binary Trees Implementation
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold text-[#EF4444] block">
                        Tomorrow, 11:59 PM
                      </span>
                      <span className="text-[10px] text-[#9AA3B2]">High Priority</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-[#11141B] border border-[#262B36] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded border border-[#262B36] flex items-center justify-center"></div>
                      <div>
                        <div className="text-xs font-semibold text-[#F5F7FA]">
                          Physics Lab Record 4
                        </div>
                        <div className="text-[11px] text-[#6B7280]">
                          Physics • Optics Simulation Report
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold text-[#F59E0B] block">
                        Aug 20 (3 days left)
                      </span>
                      <span className="text-[10px] text-[#9AA3B2]">Medium Priority</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-[#11141B] border border-[#262B36] flex items-center justify-between opacity-70">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded bg-[#7C83FF] flex items-center justify-center text-white text-[10px]">
                        ✓
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-[#F5F7FA] line-through">
                          Math Assignment 2 (Calculus)
                        </div>
                        <div className="text-[11px] text-[#6B7280]">
                          Mathematics • Submitted
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-[#22C55E] block font-medium">
                        Completed
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-5 text-left order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-[#F59E0B] text-xs font-semibold uppercase tracking-wider mb-4">
                <CheckSquare className="w-3.5 h-3.5" />
                Assignment Manager
              </div>
              <h3 className="text-2xl font-bold text-[#F5F7FA] mb-3 font-heading">
                Prioritize deadlines effortlessly.
              </h3>
              <p className="text-base text-[#9AA3B2] leading-relaxed mb-4">
                Track pending submissions, sort by urgency, and never miss an assignment deadline or lab report date.
              </p>
              <ul className="space-y-2 text-sm text-[#9AA3B2]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]"></span>
                  Sorted by due date urgency & module priority
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]"></span>
                  Subject tagging and task categorization
                </li>
              </ul>
            </div>
          </div>

          {/* Showcase 3: CGPA Predictor */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#7C83FF]/10 border border-[#7C83FF]/20 text-[#7C83FF] text-xs font-semibold uppercase tracking-wider mb-4">
                <Calculator className="w-3.5 h-3.5" />
                CGPA Predictor & Target Calculator
              </div>
              <h3 className="text-2xl font-bold text-[#F5F7FA] mb-3 font-heading">
                Calculate what grades you need.
              </h3>
              <p className="text-base text-[#9AA3B2] leading-relaxed mb-4">
                Model target CGPAs based on credit weighting and determine exact grade goals for upcoming exams.
              </p>
              <ul className="space-y-2 text-sm text-[#9AA3B2]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C83FF]"></span>
                  Credit-weighted grade point calculations
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C83FF]"></span>
                  Target SGPA requirement generator
                </li>
              </ul>
            </div>

            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-xl border border-[#262B36] bg-[#151922] p-5 shadow-xl space-y-4"
              >
                <div className="flex items-center justify-between border-b border-[#262B36] pb-3">
                  <span className="text-sm font-semibold text-[#F5F7FA]">
                    CGPA Goal Modeling
                  </span>
                  <div className="text-xs text-[#9AA3B2]">
                    Current CGPA: <span className="font-bold text-[#F5F7FA]">8.70</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="p-2.5 rounded-lg bg-[#11141B] border border-[#262B36]">
                    <div className="text-[11px] text-[#9AA3B2]">Sem 1</div>
                    <div className="text-base font-bold text-[#F5F7FA] mt-0.5">8.40</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#11141B] border border-[#262B36]">
                    <div className="text-[11px] text-[#9AA3B2]">Sem 2</div>
                    <div className="text-base font-bold text-[#F5F7FA] mt-0.5">8.60</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#11141B] border border-[#262B36]">
                    <div className="text-[11px] text-[#9AA3B2]">Sem 3</div>
                    <div className="text-base font-bold text-[#F5F7FA] mt-0.5">9.10</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#7C83FF]/10 border border-[#7C83FF]/30">
                    <div className="text-[11px] text-[#7C83FF] font-medium">Target Sem 4</div>
                    <div className="text-base font-bold text-[#7C83FF] mt-0.5">9.00+</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-[#11141B] border border-[#262B36] text-xs space-y-2">
                  <div className="flex justify-between items-center text-[#F5F7FA]">
                    <span>Required SGPA for 9.0 Cumulative Goal:</span>
                    <span className="font-bold text-[#7C83FF] text-sm">9.30</span>
                  </div>
                  <div className="text-[11px] text-[#9AA3B2]">
                    Achievable with minimum 3 'A+' grades (4 credits each) and 2 'A' grades.
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  Calculator,
  CalendarCheck,
  CheckSquare,
  FileText,
  Clock,
  BarChart3,
} from "lucide-react";

const featuresList = [
  {
    icon: Calculator,
    title: "CGPA Predictor",
    description: "Calculate your semester CGPA using credits and target grades.",
    accent: "text-[#7C83FF]",
    bg: "bg-[#7C83FF]/10",
    border: "border-[#7C83FF]/20",
  },
  {
    icon: CalendarCheck,
    title: "Attendance Tracker",
    description: "Track attendance and understand how many classes you can safely miss.",
    accent: "text-[#22C55E]",
    bg: "bg-[#22C55E]/10",
    border: "border-[#22C55E]/20",
  },
  {
    icon: CheckSquare,
    title: "Assignment Manager",
    description: "Keep deadlines, priorities, and progress in one place.",
    accent: "text-[#F59E0B]",
    bg: "bg-[#F59E0B]/10",
    border: "border-[#F59E0B]/20",
  },
  {
    icon: FileText,
    title: "Notes Library",
    description: "Organize scanned and uploaded notes by subject.",
    accent: "text-[#7C83FF]",
    bg: "bg-[#7C83FF]/10",
    border: "border-[#7C83FF]/20",
  },
  {
    icon: Clock,
    title: "Timetable Generator",
    description: "Create a practical weekly schedule around your classes.",
    accent: "text-[#22C55E]",
    bg: "bg-[#22C55E]/10",
    border: "border-[#22C55E]/20",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Understand your academic performance over time.",
    accent: "text-[#F59E0B]",
    bg: "bg-[#F59E0B]/10",
    border: "border-[#F59E0B]/20",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-[#0B0D12] border-t border-[#262B36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F5F7FA] tracking-tight mb-3 font-heading">
            Everything you need for college.
          </h2>
          <p className="text-base sm:text-lg text-[#9AA3B2]">
            Simple tools for the things students actually manage every week.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuresList.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -2 }}
                className="p-6 rounded-xl bg-[#151922] border border-[#262B36] transition-all hover:border-[#3B4252] flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-10 h-10 rounded-lg ${item.bg} border ${item.border} flex items-center justify-center ${item.accent} mb-4`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#F5F7FA] mb-2 font-heading">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#9AA3B2] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

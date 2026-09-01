"use client";

import { motion } from "framer-motion";
import { Sparkles, Calendar, Clock, AlertCircle } from "lucide-react";

const aiSuggestions = [
  {
    icon: AlertCircle,
    badge: "Attendance Alert",
    badgeColor: "bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/20",
    text: "Your Data Structures attendance is 72%. You have approximately 2 safe classes to miss before falling below the 75% requirement.",
  },
  {
    icon: Clock,
    badge: "Prioritization",
    badgeColor: "bg-[#7C83FF]/10 text-[#7C83FF] border-[#7C83FF]/20",
    text: "You have 3 assignments due this week. Start with the Physics report due tomorrow, as it has the highest grade weight.",
  },
  {
    icon: Calendar,
    badge: "Schedule Gap",
    badgeColor: "bg-[#22C55E]/10 text-[#22C55E] border-[#22C55E]/20",
    text: "You have a 90-minute free slot today between Math and CS lab. Consider using it for revision or assignment work.",
  },
];

export function AISection() {
  return (
    <section className="py-20 md:py-28 bg-[#11141B] border-t border-[#262B36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#7C83FF]/10 border border-[#7C83FF]/20 text-[#7C83FF] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Practical Intelligence
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F5F7FA] tracking-tight mb-3 font-heading">
            Useful suggestions, when you need them.
          </h2>
          <p className="text-base sm:text-lg text-[#9AA3B2]">
            Campus Mitra turns your routine academic data into clear, actionable recommendations.
          </p>
        </div>

        {/* Suggestion Cards Stack */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {aiSuggestions.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-5 rounded-xl bg-[#151922] border border-[#262B36] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs px-2.5 py-0.5 rounded-md border font-medium ${item.badgeColor}`}
                    >
                      {item.badge}
                    </span>
                    <Icon className="w-4 h-4 text-[#9AA3B2]" />
                  </div>
                  <p className="text-sm text-[#F5F7FA] leading-relaxed font-normal">
                    "{item.text}"
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#262B36]/60 text-[11px] text-[#6B7280]">
                  Generated from logged schedule & attendance data
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

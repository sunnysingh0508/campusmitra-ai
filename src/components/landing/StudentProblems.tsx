"use client";

import { motion } from "framer-motion";
import { HelpCircle, CheckCircle2 } from "lucide-react";

const problemPairs = [
  {
    question: "Where did my attendance go?",
    solution:
      "Log class attendance daily. Get real-time percentage indicators and clear alerts before reaching safe limits.",
  },
  {
    question: "Which assignment is due first?",
    solution:
      "A consolidated deadline tracker sorted by date, weight, and remaining completion time.",
  },
  {
    question: "What grades do I need to improve my CGPA?",
    solution:
      "Target SGPA calculator that factors in credit values so you know exact exam requirements.",
  },
  {
    question: "Can I skip today's class?",
    solution:
      "Bunk calculator displays exact safe class counts based on your course criteria.",
  },
];

export function StudentProblems() {
  return (
    <section className="py-20 md:py-28 bg-[#11141B] border-t border-[#262B36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F5F7FA] tracking-tight mb-3 font-heading">
            Designed around student problems.
          </h2>
          <p className="text-base sm:text-lg text-[#9AA3B2]">
            Addressing the exact daily friction points college students face every semester.
          </p>
        </div>

        {/* Problems & Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {problemPairs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-6 rounded-xl bg-[#151922] border border-[#262B36] flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Question */}
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-md bg-[#EF4444]/10 border border-[#EF4444]/20 flex items-center justify-center text-[#EF4444] shrink-0 mt-0.5">
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-[#F5F7FA] font-heading">
                    "{item.question}"
                  </h3>
                </div>

                {/* Solution */}
                <div className="flex items-start gap-3 pl-1">
                  <div className="w-7 h-7 rounded-md bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center text-[#22C55E] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <p className="text-sm text-[#9AA3B2] leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

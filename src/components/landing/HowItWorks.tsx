"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Set up your academic profile",
    description: "Input your college, current semester, target CGPA, and total degree credit structure.",
  },
  {
    number: "02",
    title: "Add your subjects & classes",
    description: "Enter your registered courses, weekly schedule, lab sessions, and attendance criteria.",
  },
  {
    number: "03",
    title: "Let Campus Mitra organize the rest",
    description: "Track bunks, get assignment reminders, scan notes, and monitor your academic progress seamlessly.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#0B0D12] border-t border-[#262B36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F5F7FA] tracking-tight mb-3 font-heading">
            How Campus Mitra works.
          </h2>
          <p className="text-base sm:text-lg text-[#9AA3B2]">
            Three simple steps to streamline your entire college workflow.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-6 rounded-xl bg-[#151922] border border-[#262B36] relative flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-bold text-[#7C83FF] tracking-wider mb-4 font-mono">
                  STEP {step.number}
                </div>
                <h3 className="text-lg font-bold text-[#F5F7FA] mb-2 font-heading">
                  {step.title}
                </h3>
                <p className="text-sm text-[#9AA3B2] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

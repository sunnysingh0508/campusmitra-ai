"use client";

import Link from "next/link";
import { GraduationCap } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0B0D12] border-t border-[#262B36] text-sm text-[#9AA3B2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2.5 text-[#F5F7FA] font-bold text-lg"
            >
              <div className="w-7 h-7 rounded-lg bg-[#7C83FF]/10 border border-[#7C83FF]/30 flex items-center justify-center text-[#7C83FF]">
                <GraduationCap className="w-4 h-4" />
              </div>
              <span>Campus Mitra</span>
            </Link>
            <p className="text-xs text-[#9AA3B2] max-w-sm leading-relaxed">
              Smart tools for everyday college life. Organising attendance, CGPA modeling, deadlines, and schedule management.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-xs font-semibold text-[#F5F7FA] uppercase tracking-wider mb-4 font-heading">
              Product
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/dashboard" className="hover:text-[#F5F7FA] transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/cgpa-predictor" className="hover:text-[#F5F7FA] transition-colors">
                  CGPA Predictor
                </Link>
              </li>
              <li>
                <Link href="/attendance" className="hover:text-[#F5F7FA] transition-colors">
                  Attendance
                </Link>
              </li>
              <li>
                <Link href="/assignments" className="hover:text-[#F5F7FA] transition-colors">
                  Assignments
                </Link>
              </li>
              <li>
                <Link href="/notes" className="hover:text-[#F5F7FA] transition-colors">
                  Notes
                </Link>
              </li>
              <li>
                <Link href="/timetable" className="hover:text-[#F5F7FA] transition-colors">
                  Timetable
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-xs font-semibold text-[#F5F7FA] uppercase tracking-wider mb-4 font-heading">
              Resources
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/help" className="hover:text-[#F5F7FA] transition-colors">
                  Help & Support
                </Link>
              </li>
              <li>
                <Link href="/reports" className="hover:text-[#F5F7FA] transition-colors">
                  Reports
                </Link>
              </li>
              <li>
                <Link href="/analytics" className="hover:text-[#F5F7FA] transition-colors">
                  Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs font-semibold text-[#F5F7FA] uppercase tracking-wider mb-4 font-heading">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#about" className="hover:text-[#F5F7FA] transition-colors">
                  About
                </a>
              </li>
              <li>
                <span className="hover:text-[#F5F7FA] cursor-pointer transition-colors">
                  Privacy
                </span>
              </li>
              <li>
                <span className="hover:text-[#F5F7FA] cursor-pointer transition-colors">
                  Terms
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-10 mt-10 border-t border-[#262B36] flex flex-col sm:flex-row items-center justify-between text-xs text-[#6B7280]">
          <div>© 2026 Campus Mitra. All rights reserved.</div>
          <div className="mt-2 sm:mt-0 text-[11px]">
            Academic productivity platform for college students.
          </div>
        </div>
      </div>
    </footer>
  );
}

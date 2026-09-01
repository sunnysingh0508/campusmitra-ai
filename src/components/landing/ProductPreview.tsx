"use client";

import {
  Search,
  User,
  GraduationCap,
  Calendar,
  Clock,
  BookOpen,
  AlertCircle,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

export function ProductPreview() {
  return (
    <div className="w-full rounded-xl border border-[#262B36] bg-[#151922] shadow-2xl overflow-hidden text-left font-sans select-none">
      {/* App Window Titlebar Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#11141B] border-b border-[#262B36]">
        {/* Left window controls + brand */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E]/80 inline-block"></span>
          </div>
          <div className="h-3.5 w-px bg-[#262B36] mx-1"></div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#F5F7FA]">
            <GraduationCap className="w-3.5 h-3.5 text-[#7C83FF]" />
            <span>Campus Mitra</span>
            <span className="text-[#6B7280] font-normal">/</span>
            <span className="text-[#9AA3B2] font-normal">Dashboard</span>
          </div>
        </div>

        {/* Search Bar & Profile */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 bg-[#151922] border border-[#262B36] rounded-md text-xs text-[#6B7280] w-40">
            <Search className="w-3.5 h-3.5 text-[#6B7280]" />
            <span>Search...</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-[#9AA3B2] bg-[#151922] border border-[#262B36] px-2 py-1 rounded-md">
            <User className="w-3.5 h-3.5 text-[#7C83FF]" />
            <span className="hidden sm:inline">Profile</span>
          </div>
        </div>
      </div>

      {/* Main Dashboard Body */}
      <div className="p-4 sm:p-5 space-y-4 bg-[#151922]">
        {/* Metric Cards Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="p-3.5 rounded-lg bg-[#11141B] border border-[#262B36]">
            <div className="flex items-center justify-between text-xs text-[#9AA3B2] mb-1">
              <span>CGPA</span>
              <TrendingUp className="w-3.5 h-3.5 text-[#22C55E]" />
            </div>
            <div className="text-xl font-bold text-[#F5F7FA]">8.7</div>
            <div className="text-[11px] text-[#22C55E] mt-0.5">+0.3 from last sem</div>
          </div>

          <div className="p-3.5 rounded-lg bg-[#11141B] border border-[#262B36]">
            <div className="flex items-center justify-between text-xs text-[#9AA3B2] mb-1">
              <span>Attendance</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-[#7C83FF]" />
            </div>
            <div className="text-xl font-bold text-[#F5F7FA]">82%</div>
            <div className="text-[11px] text-[#9AA3B2] mt-0.5">Overall status</div>
          </div>

          <div className="p-3.5 rounded-lg bg-[#11141B] border border-[#262B36]">
            <div className="flex items-center justify-between text-xs text-[#9AA3B2] mb-1">
              <span>Pending</span>
              <AlertCircle className="w-3.5 h-3.5 text-[#F59E0B]" />
            </div>
            <div className="text-xl font-bold text-[#F5F7FA]">3</div>
            <div className="text-[11px] text-[#F59E0B] mt-0.5">Due this week</div>
          </div>

          <div className="p-3.5 rounded-lg bg-[#11141B] border border-[#262B36]">
            <div className="flex items-center justify-between text-xs text-[#9AA3B2] mb-1">
              <span>Classes Today</span>
              <Calendar className="w-3.5 h-3.5 text-[#7C83FF]" />
            </div>
            <div className="text-xl font-bold text-[#F5F7FA]">4</div>
            <div className="text-[11px] text-[#9AA3B2] mt-0.5">Next: Data Struct</div>
          </div>
        </div>

        {/* Main Content Grid: Schedule & Assignments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Today's Schedule */}
          <div className="p-3.5 rounded-lg bg-[#11141B] border border-[#262B36]">
            <div className="flex items-center justify-between mb-3 border-b border-[#262B36]/80 pb-2">
              <span className="text-xs font-semibold text-[#F5F7FA] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#7C83FF]" />
                Today's Schedule
              </span>
              <span className="text-[11px] text-[#6B7280]">Mon, Aug 17</span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 rounded-md bg-[#151922] border border-[#262B36]/60">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-semibold text-[#7C83FF] w-16">
                    10:00 AM
                  </span>
                  <div>
                    <div className="text-xs font-medium text-[#F5F7FA]">
                      Data Structures
                    </div>
                    <div className="text-[10px] text-[#6B7280]">Room 301</div>
                  </div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#7C83FF]/10 text-[#7C83FF] font-medium border border-[#7C83FF]/20">
                  Upcoming
                </span>
              </div>

              <div className="flex items-center justify-between p-2 rounded-md bg-[#151922] border border-[#262B36]/60">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-semibold text-[#9AA3B2] w-16">
                    12:00 PM
                  </span>
                  <div>
                    <div className="text-xs font-medium text-[#F5F7FA]">
                      Mathematics
                    </div>
                    <div className="text-[10px] text-[#6B7280]">Room 204</div>
                  </div>
                </div>
                <span className="text-[10px] text-[#6B7280] font-medium">
                  Later
                </span>
              </div>
            </div>
          </div>

          {/* Pending Assignments */}
          <div className="p-3.5 rounded-lg bg-[#11141B] border border-[#262B36]">
            <div className="flex items-center justify-between mb-3 border-b border-[#262B36]/80 pb-2">
              <span className="text-xs font-semibold text-[#F5F7FA] flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#F59E0B]" />
                Assignments
              </span>
              <span className="text-[11px] text-[#6B7280]">2 active</span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 rounded-md bg-[#151922] border border-[#262B36]/60">
                <div>
                  <div className="text-xs font-medium text-[#F5F7FA]">
                    Data Structures Assignment
                  </div>
                  <div className="text-[10px] text-[#EF4444] font-medium mt-0.5">
                    Due Tomorrow
                  </div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#EF4444]/10 text-[#EF4444] border border-[#EF4444]/20 font-medium">
                  High
                </span>
              </div>

              <div className="flex items-center justify-between p-2 rounded-md bg-[#151922] border border-[#262B36]/60">
                <div>
                  <div className="text-xs font-medium text-[#F5F7FA]">
                    Physics Lab Report
                  </div>
                  <div className="text-[10px] text-[#9AA3B2] mt-0.5">
                    Due in 3 days
                  </div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/20 font-medium">
                  Medium
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Attendance Breakdown Bar Section */}
        <div className="p-3.5 rounded-lg bg-[#11141B] border border-[#262B36]">
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-xs font-semibold text-[#F5F7FA]">
              Subject Attendance Status
            </span>
            <span className="text-[11px] text-[#9AA3B2]">Target: 75%</span>
          </div>

          <div className="space-y-2.5 text-xs">
            {/* Mathematics */}
            <div>
              <div className="flex justify-between text-[11px] mb-1">
                <span className="text-[#F5F7FA] font-medium">Mathematics</span>
                <span className="text-[#22C55E] font-semibold">88%</span>
              </div>
              <div className="w-full bg-[#151922] h-1.5 rounded-full overflow-hidden border border-[#262B36]">
                <div
                  className="bg-[#22C55E] h-full rounded-full"
                  style={{ width: "88%" }}
                ></div>
              </div>
            </div>

            {/* Data Structures */}
            <div>
              <div className="flex justify-between text-[11px] mb-1">
                <span className="text-[#F5F7FA] font-medium">Data Structures</span>
                <span className="text-[#F59E0B] font-semibold">72%</span>
              </div>
              <div className="w-full bg-[#151922] h-1.5 rounded-full overflow-hidden border border-[#262B36]">
                <div
                  className="bg-[#F59E0B] h-full rounded-full"
                  style={{ width: "72%" }}
                ></div>
              </div>
            </div>

            {/* Physics */}
            <div>
              <div className="flex justify-between text-[11px] mb-1">
                <span className="text-[#F5F7FA] font-medium">Physics</span>
                <span className="text-[#22C55E] font-semibold">92%</span>
              </div>
              <div className="w-full bg-[#151922] h-1.5 rounded-full overflow-hidden border border-[#262B36]">
                <div
                  className="bg-[#22C55E] h-full rounded-full"
                  style={{ width: "92%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

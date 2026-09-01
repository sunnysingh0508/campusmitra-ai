import Link from "next/link";
import { GraduationCap } from "lucide-react";

export function BrandLogo() {
  return (
    <div className="absolute top-5 left-5 md:top-8 md:left-8 z-20">
      <Link
        href="/"
        className="flex items-center gap-2.5 hover:opacity-90 transition-opacity"
      >
        <div className="w-8 h-8 rounded-lg bg-[#7C83FF]/10 border border-[#7C83FF]/30 flex items-center justify-center text-[#7C83FF]">
          <GraduationCap className="w-4 h-4" />
        </div>
        <span className="text-xl font-bold tracking-tight text-[#F5F7FA] font-heading">
          Campus Mitra
        </span>
      </Link>
    </div>
  );
}

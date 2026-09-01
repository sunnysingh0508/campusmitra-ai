"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, GraduationCap, ArrowRight } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 border-b ${
        isScrolled
          ? "bg-[#0B0D12]/90 backdrop-blur-md border-[#262B36]"
          : "bg-[#0B0D12] border-[#262B36]/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Brand */}
          <Link
            href="/"
            className="flex items-center gap-2.5 text-[#F5F7FA] font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            <div className="w-8 h-8 rounded-lg bg-[#7C83FF]/10 border border-[#7C83FF]/30 flex items-center justify-center text-[#7C83FF]">
              <GraduationCap className="w-4 h-4" />
            </div>
            <span className="font-bold tracking-tight text-white">Campus Mitra</span>
          </Link>

          {/* Center: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#9AA3B2]">
            <a
              href="#features"
              className="hover:text-[#F5F7FA] transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="hover:text-[#F5F7FA] transition-colors"
            >
              How it Works
            </a>
            <a
              href="#analytics"
              className="hover:text-[#F5F7FA] transition-colors"
            >
              Analytics
            </a>
            <a
              href="#about"
              className="hover:text-[#F5F7FA] transition-colors"
            >
              About
            </a>
          </nav>

          {/* Right: Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-medium text-[#9AA3B2] hover:text-[#F5F7FA] px-3 py-1.5 transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/dashboard"
              className="text-sm font-medium text-white bg-[#7C83FF] hover:bg-[#6b72f0] px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5 shadow-xs"
            >
              Get Started
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#9AA3B2] hover:text-[#F5F7FA] p-2 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#11141B] border-b border-[#262B36] px-4 pt-3 pb-6 space-y-3">
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-[#F5F7FA] hover:text-[#7C83FF]"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-[#F5F7FA] hover:text-[#7C83FF]"
          >
            How it Works
          </a>
          <a
            href="#analytics"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-[#F5F7FA] hover:text-[#7C83FF]"
          >
            Analytics
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-[#F5F7FA] hover:text-[#7C83FF]"
          >
            About
          </a>
          <div className="pt-3 border-t border-[#262B36] flex flex-col gap-2.5">
            <Link
              href="/login"
              className="w-full text-center py-2 text-sm font-medium text-[#9AA3B2] hover:text-[#F5F7FA]"
            >
              Log in
            </Link>
            <Link
              href="/dashboard"
              className="w-full text-center py-2.5 text-sm font-medium text-white bg-[#7C83FF] hover:bg-[#6b72f0] rounded-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

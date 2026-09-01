"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { GoogleLoginButton } from "./GoogleLoginButton";
import { AuthError } from "./AuthError";

interface AuthCardProps {
  initialError?: string | null;
  callbackUrl?: string;
}

export function AuthCard({ initialError, callbackUrl }: AuthCardProps) {
  const [errorState, setErrorState] = useState<string | null>(
    initialError || null
  );

  const handleRetry = () => {
    setErrorState(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="max-w-[420px] w-full bg-[#151922] border border-[#262B36] rounded-[20px] p-6 md:p-8 shadow-xl shadow-black/40 text-center select-none"
    >
      {/* Header */}
      <div className="mb-6 space-y-2">
        <h1 className="text-[28px] md:text-[32px] font-bold text-[#F5F7FA] tracking-tight leading-tight font-heading">
          Welcome to Campus Mitra
        </h1>
        <p className="text-[15px] md:text-[16px] text-[#9AA3B2] leading-relaxed">
          Continue with your Google account to access your dashboard.
        </p>
      </div>

      {/* Error state if authentication failed or cancelled */}
      {errorState && (
        <AuthError errorType={errorState} onRetry={handleRetry} />
      )}

      {/* Primary Authentication Action: Google Only */}
      <div className="mb-6">
        <GoogleLoginButton
          callbackUrl={callbackUrl}
          onError={() => setErrorState("network")}
        />
      </div>

      {/* Terms & Privacy */}
      <div className="text-[12px] md:text-[13px] text-[#6B7280] leading-relaxed">
        By continuing, you agree to our{" "}
        <Link
          href="/terms"
          className="text-[#9AA3B2] hover:text-[#F5F7FA] underline transition-colors"
        >
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link
          href="/privacy"
          className="text-[#9AA3B2] hover:text-[#F5F7FA] underline transition-colors"
        >
          Privacy Policy
        </Link>
        .
      </div>
    </motion.div>
  );
}

"use client";

import { AlertCircle, Info, RefreshCw } from "lucide-react";

interface AuthErrorProps {
  errorType?: string | null;
  onRetry?: () => void;
}

export function AuthError({ errorType, onRetry }: AuthErrorProps) {
  if (!errorType) return null;

  // Case 1: Cancellation by user
  if (errorType === "AccessDenied" || errorType === "cancelled") {
    return (
      <div className="w-full p-3.5 rounded-xl bg-[#11141B] border border-[#262B36] flex items-center gap-3 text-xs text-[#9AA3B2] mb-5">
        <Info className="w-4 h-4 text-[#7C83FF] shrink-0" />
        <span>Google sign-in was cancelled.</span>
      </div>
    );
  }

  // Case 2: Server or Configuration error
  if (errorType === "Configuration" || errorType === "ServerError" || errorType === "network") {
    return (
      <div className="w-full p-4 rounded-xl bg-[#EF4444]/10 border border-[#EF4444]/20 text-left mb-5">
        <div className="flex items-center gap-2 text-sm font-semibold text-[#EF4444] mb-1">
          <AlertCircle className="w-4 h-4" />
          <span>Something went wrong.</span>
        </div>
        <p className="text-xs text-[#9AA3B2] mb-3">
          Please check your connection and try again.
        </p>
        {onRetry && (
          <button
            type="button"
            onClick={onRetry}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#F5F7FA] bg-[#151922] hover:bg-[#11141B] border border-[#262B36] px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3 h-3" />
            Try Again
          </button>
        )}
      </div>
    );
  }

  // Case 3: Generic OAuth Failure
  return (
    <div className="w-full p-4 rounded-xl bg-[#EF4444]/10 border border-[#EF4444]/20 text-left mb-5">
      <div className="flex items-center gap-2 text-sm font-semibold text-[#EF4444] mb-1">
        <AlertCircle className="w-4 h-4" />
        <span>Unable to sign in with Google.</span>
      </div>
      <p className="text-xs text-[#9AA3B2] mb-3">
        Please try again.
      </p>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-[#F5F7FA] bg-[#151922] hover:bg-[#11141B] border border-[#262B36] px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
        >
          <RefreshCw className="w-3 h-3" />
          Try Again
        </button>
      )}
    </div>
  );
}

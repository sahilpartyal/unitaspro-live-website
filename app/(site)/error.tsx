"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 text-center">

      {/* Icon */}
      <div className="w-16 h-16 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center mb-6">
        <RefreshCw size={24} className="text-red-500"/>
      </div>

      {/* Text */}
      <div className="mb-8">
        <h1 className="font-black text-[#0A0A0A] mb-3"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", letterSpacing: "-0.025em" }}>
          Something went wrong
        </h1>
        <p className="text-[#6B7280] text-base max-w-sm mx-auto leading-relaxed">
          An unexpected error occurred. Try refreshing the page — if it keeps happening, contact us.
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <button onClick={reset} className="btn-primary group">
          Try again
          <span className="btn-arrow"><ArrowRight size={15}/></span>
        </button>
        <Link href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#6B7280] hover:text-[#0A0A0A] transition-colors">
          Back to home
        </Link>
      </div>

    </div>
  );
}

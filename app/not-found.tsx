import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white flex flex-col items-center justify-center px-4 text-center">
        <p className="font-black text-[#F3F4F6] select-none leading-none mb-6"
          style={{ fontSize: "clamp(8rem, 20vw, 16rem)", letterSpacing: "-0.05em" }}>
          404
        </p>

        <div className="-mt-8 mb-8">
          <h1 className="font-black text-[#0A0A0A] mb-3"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", letterSpacing: "-0.025em" }}>
            Page not found
          </h1>
          <p className="text-[#6B7280] text-base max-w-sm mx-auto leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/" className="btn-primary group">
            Back to home
            <span className="btn-arrow"><ArrowRight size={15}/></span>
          </Link>
          <Link href="/contact"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#6B7280] hover:text-[#0A0A0A] transition-colors">
            Contact us
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

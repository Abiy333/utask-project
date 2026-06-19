import React from "react";
import Link from "next/link";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="w-full max-w-7xl mx-auto px-6 lg:px-24 pt-6 md:pt-10 flex items-center justify-between absolute top-0 left-1/2 -translate-x-1/2 z-50">
        <Link
          href="/"
          className="text-2xl font-black tracking-widest uppercase text-white drop-shadow-sm"
        >
          UTASK
        </Link>

        <nav className="bg-white rounded-xl py-2 px-4 flex items-center gap-6 shadow-md border border-white/10 shrink-0">
          <Link
            href="/about"
            className="text-xs font-bold text-[#4fbca9] hover:opacity-80 transition-opacity"
          >
            About us
          </Link>
          <Link
            href="/contact"
            className="text-xs font-bold text-[#4fbca9] hover:opacity-80 transition-opacity"
          >
            Contact
          </Link>
          <Link
            href="/request"
            className="text-xs font-bold text-[#4fbca9] hover:opacity-80 transition-opacity"
          >
            Request service
          </Link>
          <Link
            href="/login"
            className="bg-[#4fbca9] text-white text-xs font-black uppercase tracking-wider px-4 py-2 rounded-lg hover:bg-[#43a392] transition-colors"
          >
            LOG IN
          </Link>
        </nav>
      </header>

      {/* RENDER THE CONTENT SPLAY PAGES UNDERNEATH */}
      <div className="grow">{children}</div>
    </div>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const handleLogin = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/admin/dashboard");
  };

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col justify-between overflow-x-hidden selection:bg-[#4fbca9] selection:text-white pt-36">
      <main className="w-full max-w-md mx-auto px-6 flex-1 flex flex-col justify-center pb-24">
        <h1 className="text-xl md:text-2xl font-bold text-[#232331] text-center mb-8 tracking-wide uppercase font-sans">
          Log In
        </h1>

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="block text-xs md:text-sm font-semibold text-gray-500 tracking-wide uppercase"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#4fbca9] focus:ring-1 focus:ring-[#4fbca9] transition-all"
            />
          </div>

          <div className="space-y-1.5 relative">
            <label
              htmlFor="password"
              className="block text-xs md:text-sm font-semibold text-gray-500 tracking-wide uppercase"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#4fbca9] focus:ring-1 focus:ring-[#4fbca9] transition-all"
            />

            <div className="flex justify-end pt-1">
              <Link
                href="/forgot-password"
                className="text-[10px] md:text-xs font-semibold text-[#4fbca9] hover:underline tracking-wide"
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-[#ff8143] hover:bg-[#e67339] text-white text-xs md:text-sm font-bold tracking-wide py-3 rounded-lg shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all uppercase"
            >
              Continue
            </button>
          </div>
        </form>

        <div className="relative flex py-5 items-center justify-center">
          <div className="grow border-t border-gray-200"></div>
          <span className="shrink mx-4 text-[10px] md:text-xs text-gray-400 font-medium uppercase tracking-widest">
            or
          </span>
          <div className="grow border-t border-gray-200"></div>
        </div>

        <button
          type="button"
          className="w-full border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs md:text-sm font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-3 transition-colors shadow-sm"
        >
          <span className="uppercase text-xs tracking-wide">
            Continue with Google
          </span>
        </button>
      </main>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      router.push("/admin/dashboard");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

 return (
    <div className="min-h-screen flex items-start justify-center pt-28 pb-12 px-4 bg-slate-50/30">
      {/* The Signup Card - Slimmed down internally with py-6 instead of p-8 */}
      <div className="w-full max-w-md bg-white py-6 px-8 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-xl font-bold text-center tracking-wide text-slate-800 mb-6 uppercase">
          Sign Up
        </h1>

        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-600 text-xs font-semibold rounded-lg border border-red-100">
            {error}
          </div>
        )}
 
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-[10px] font-bold text-slate-500 mb-1.5 tracking-wider">FULL NAME</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="w-full px-4 py-2.5 bg-blue-50/50 border border-blue-100 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm transition-all"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold text-slate-500 mb-1.5 tracking-wider">EMAIL</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-2.5 bg-blue-50/50 border border-blue-100 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm transition-all"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold text-slate-500 mb-1.5 tracking-wider">PASSWORD</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full px-4 py-2.5 bg-blue-50/50 border border-blue-100 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl uppercase tracking-wider text-xs transition-colors shadow-sm shadow-orange-500/20 disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Continue"}
          </button>
        </form>

        <div className="relative flex py-4 items-center">
          <div className="flex-grow border-t border-gray-100"></div>
          <span className="flex-shrink mx-4 text-[10px] data-gray-400 font-bold tracking-wider text-gray-400">OR</span>
          <div className="flex-grow border-t border-gray-100"></div>
        </div>

        <button className="w-full py-2.5 bg-white border border-gray-200 text-slate-700 font-bold rounded-xl uppercase tracking-wider text-[11px] hover:bg-gray-50 transition-colors mb-4">
          Continue with Google
        </button>

        <p className="text-center text-xs text-gray-500 font-medium">
          Already have an account?{" "}
          <Link href="/login" className="text-teal-500 font-bold hover:underline ml-1">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
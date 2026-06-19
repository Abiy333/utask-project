import React from "react";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menuItems = [
    { name: "Overview", active: true },
    { name: "Services" },
    { name: "Service providers" },
    { name: "Tasks" },
    { name: "Users" },
    { name: "Payment" },
    { name: "Settings" },
  ];

  const subMenuItems = ["Reviews", "Cancellation reasons", "Support issues"];

  return (
    <div className="min-h-screen bg-[#f3f9f7] flex font-sans antialiased text-gray-800">
      <aside className="w-64 bg-[#4fbca9] text-white flex flex-col justify-between shrink-0 selection:bg-white selection:text-[#4fbca9]">
        <div className="pt-8 px-6 space-y-8">
          {/* Logo Identity */}
          <div className="text-2xl font-black tracking-widest uppercase mb-10">
            UTASK
          </div>

          {/* Primary Sidebar Items */}
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.name}
                className={`w-full text-left px-4 py-2.5 text-xs font-semibold rounded-xl transition-all flex items-center gap-3 ${
                  item.active
                    ? "bg-white/20 shadow-inner text-white font-bold backdrop-blur-md"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-white/40" />
                {item.name}
              </button>
            ))}
          </nav>

          {/* Separation Divider and Secondary Settings Text Labels */}
          <div className="pt-4 border-t border-white/20 space-y-3">
            {subMenuItems.map((item, index) => (
              <button
                key={index}
                className="w-full text-left px-4 py-1 text-xs text-white/70 hover:text-white font-medium block transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Global System Logout Control Pin */}
        <div className="p-6 border-t border-white/10">
          <Link
            href="/"
            className="w-full text-left px-4 py-2.5 text-xs font-bold text-white/90 hover:text-white flex items-center gap-3 hover:bg-white/10 rounded-xl transition-all"
          >
            <span>➔</span> Log out
          </Link>
        </div>
      </aside>

      {/* RIGHT SIDE DATA SLATE CONTAINER FRAMEWORK */}
      <div className="flex-1 flex flex-col min-h-screen overflow-x-hidden">
        {/* TOP COMPACT PROFILE SEARCH ACTION HEADER BAR */}
        <header className="bg-white/80 backdrop-blur-md px-8 py-4 flex items-center justify-between border-b border-gray-100 sticky top-0 z-40">
          {/* Mock Search Bar Container Input */}
          <div className="w-72 relative">
            <input
              type="text"
              placeholder="Search here..."
              className="w-full bg-gray-50/80 border border-gray-100 rounded-xl pl-10 pr-4 py-2 text-xs text-gray-700 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-[#4fbca9] transition-all"
            />
            <span className="absolute left-3.5 top-2.5 text-gray-400 text-xs">
              🔍
            </span>
          </div>

          {/* User Meta Information Stack Layer Area */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 text-lg text-gray-500">
              <button className="relative p-1.5 hover:bg-gray-50 rounded-lg">
                <span>🔔</span>
                <span className="absolute -top-1 -right-1 bg-[#4fbca9] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  12
                </span>
              </button>
              <button className="relative p-1.5 hover:bg-gray-50 rounded-lg">
                <span>💬</span>
                <span className="absolute -top-1 -right-1 bg-[#4fbca9] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  5
                </span>
              </button>
            </div>

            {/* Admin Profile Identity Fragment Frame Card */}
            <div className="flex items-center gap-3 border-l border-gray-100 pl-4">
              <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden relative">
                {/* Fallback image block container layer */}
                <div className="w-full h-full bg-[#ff8143] flex items-center justify-center text-white text-xs font-bold">
                  AJ
                </div>
              </div>
              <div className="text-left hidden sm:block">
                <p className="text-xs font-bold text-gray-800 leading-none">
                  Anita Johnson
                </p>
                <p className="text-[10px] text-gray-400 font-medium mt-0.5">
                  Super Admin
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* WINDOW INNER DYNAMIC FRAME CONTROLLER SUB-SLATE CANVAS */}
        <main className="flex-1 p-8 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}

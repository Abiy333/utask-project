import React from "react";

export default function DashboardOverviewPage() {
  const cards = [
    {
      title: "Total number of tasks",
      value: "15000",
      change: "-22.8%",
      color: "bg-[#ff8143]",
    },
    {
      title: "Scheduled tasks",
      value: "43490",
      change: "-7.5%",
      color: "bg-[#4fbca9]",
    },
    {
      title: "Completed tasks",
      value: "43490",
      change: "-7.5%",
      color: "bg-[#4fbca9]",
    },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Heading Reference Text */}
      <div className="flex items-center justify-between">
        <h2 className="text-base font-black text-gray-800 uppercase tracking-wide">
          Overview
        </h2>
        <span className="text-xs text-gray-400 bg-white border border-gray-100 px-3 py-1 rounded-lg shadow-sm">
          📅 Filter
        </span>
      </div>

      {/* METRIC VALUE STATS CARDS LAYOUT ROW */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              {/* Graphic Indicator Badge Dial Shape frame placeholder */}
              <div
                className={`w-14 h-14 rounded-full ${card.color} text-white flex items-center justify-center text-xs font-black shadow-md shrink-0`}
              >
                {card.value}
              </div>
              <div>
                <p className="text-xs font-bold text-gray-800 leading-snug">
                  {card.title}
                </p>
                <p className="text-[10px] font-bold text-red-400 mt-1">
                  {card.change} from last week
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CENTER ROW: ANALYTICS PERFORMANCE PLOT CHARTS PLACEMENT GAP AREA */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Analytics Block Box container */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">
              Revenue
            </span>
            <span className="text-sm font-black text-gray-800">₦65,123</span>
          </div>
          <div className="h-44 bg-gradient-to-t from-teal-50/20 to-transparent border-b border-dashed border-gray-100 rounded-xl flex items-end justify-center text-[11px] text-gray-400 font-medium">
            [Line Chart Graph Asset Area - Revenue Performance Timeline Plot]
          </div>
        </div>

        {/* Disbursements Analytics Block Box container */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">
              Disbursements
            </span>
            <span className="text-sm font-black text-gray-800">₦24,551</span>
          </div>
          <div className="h-44 bg-gradient-to-t from-red-50/10 to-transparent border-b border-dashed border-gray-100 rounded-xl flex items-end justify-center text-[11px] text-gray-400 font-medium">
            [Line Chart Graph Asset Area - Disbursed Metrics Data Scale]
          </div>
        </div>
      </div>

      {/* LOWER ROW: GEOGRAPHIC LOCATOR MATRIX MAP GRID SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Audience Map Matrix Block Box Container Panel */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm lg:col-span-2 space-y-4">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wide block">
            Audience map locator
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            {/* Geo Density Distribution Info Data Values List */}
            <div className="space-y-2.5 text-xs font-semibold text-gray-600">
              {[
                "Abia (540 Users)",
                "Abuja (320 Users)",
                "Benin (559 Users)",
                "Kano (78 Users)",
                "Lagos (38 Users)",
              ].map((loc) => (
                <div key={loc} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4fbca9]" />
                  <span>{loc}</span>
                </div>
              ))}
            </div>

            {/* Geographical Vector Canvas Graphic Box placement area */}
            <div className="h-36 bg-gray-50 border border-dashed border-gray-200 rounded-xl flex items-center justify-center text-[11px] text-gray-400 font-medium text-center p-4">
              [Nigeria Map Vector Layer Geo Representation Outline]
            </div>
          </div>
        </div>

        {/* Users Device Ratio Proportion Dial Donut Box Widget */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between space-y-4">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wide block">
            Users by device
          </span>
          <div className="flex-1 flex items-center justify-center relative">
            <div className="w-28 h-28 rounded-full border-[12px] border-t-[#ff8143] border-r-slate-400 border-b-[#4fbca9] border-l-[#4fbca9] flex items-center justify-center text-center">
              <div>
                <p className="text-xs font-black text-gray-800 leading-none">
                  50%
                </p>
                <p className="text-[9px] text-gray-400 font-bold uppercase mt-0.5 tracking-tighter">
                  Mobile
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between text-[10px] text-gray-400 font-bold px-2 pt-2">
            <span className="text-[#4fbca9]">● Mobile</span>
            <span className="text-[#ff8143]">● Tablet</span>
            <span className="text-slate-400">● Desktop</span>
          </div>
        </div>
      </div>
    </div>
  );
}

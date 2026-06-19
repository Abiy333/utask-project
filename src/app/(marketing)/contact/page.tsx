import React from "react";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#4fbca9] text-white font-sans flex flex-col justify-center items-center overflow-x-hidden selection:bg-white selection:text-[#4fbca9] pt-24 md:pt-28 pb-12">
      <main className="w-full max-w-7xl mx-auto px-6 lg:px-24 grid md:grid-cols-12 items-center gap-12 lg:gap-16">
        <div className="md:col-span-5 space-y-4 max-w-105 mx-auto md:mx-0 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-none drop-shadow-sm">
            Contact Us
          </h1>
          <p className="text-xs md:text-sm text-teal-50/90 leading-relaxed font-normal">
            If you have any questions or queries, we will always be happy to
            help. Send us an email and we will be sure to get back to you as
            soon as possible.
          </p>
        </div>

        <div className="md:col-span-7 w-full max-w-135 mx-auto bg-white/6 backdrop-blur-md rounded-4xl border border-white/8 p-8 md:p-10 shadow-2xl relative">
          <form className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-xs md:text-sm font-semibold tracking-wide text-white/95"
              >
                Full name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-white/12 border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all placeholder-white/30"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-xs md:text-sm font-semibold tracking-wide text-white/95"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-white/12 border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all placeholder-white/30"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-xs md:text-sm font-semibold tracking-wide text-white/95"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full bg-white/12 border border-white/5 rounded-xl px-4 py-3 text-sm text-white resize-none focus:outline-none focus:ring-2 focus:ring-white/20 transition-all placeholder-white/30"
              />
            </div>

            <div className="flex justify-center md:justify-end pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#ff8143] hover:bg-[#e67339] text-white text-xs md:text-sm font-black tracking-wide px-10 py-3 rounded-xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

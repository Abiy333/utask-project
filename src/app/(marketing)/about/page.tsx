import React from "react";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#4fbca9] text-white font-sans flex flex-col justify-center items-center overflow-x-hidden selection:bg-white selection:text-[#4fbca9] pt-24 md:pt-28 pb-12">
      <main className="w-full max-w-7xl mx-auto px-6 lg:px-24 grid md:grid-cols-12 items-center gap-12 lg:gap-16">
        <div className="md:col-span-5 space-y-4 max-w-105 mx-auto md:mx-0 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-none drop-shadow-sm">
            Why we exist?
          </h1>
          <p className="text-xs md:text-sm text-teal-50/90 leading-relaxed font-normal">
            We are here to help people get conected to artisans around them and
            also to connect these artisans to people who need their services.
          </p>
        </div>

        <div className="md:col-span-7 w-full max-w-155 mx-auto bg-white/6 backdrop-blur-md rounded-4xl border border-white/8 p-8 md:p-12 shadow-2xl relative">
          <div className="space-y-6 text-[11px] md:text-xs leading-relaxed text-teal-50/90 font-normal tracking-wide">
            <p>
              <strong className="text-white text-xs md:text-sm font-bold block mb-1">
                At UTask
              </strong>
              we are curating the best artisans in Nigeria who have been vetted
              and verified to ensure that with just a few clicks you can get
              connected with the best service providers who offer quality
              services at the best prices.
            </p>

            <p>
              <strong className="text-white text-xs md:text-sm font-bold block mb-1">
                Our mission
              </strong>
              is to make service delivery safe, affordable and reliable. We
              connect userz to the best service providers and help people save
              time, money and reduce stress.
            </p>

            {/* Paragraph 3 */}
            <p>
              To our ever growing population of young people in the world, we
              want to create a conducive environment to provide professional
              services to a growing market of consumers digitally, creating more
              opportunities to grow their business - profitably.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

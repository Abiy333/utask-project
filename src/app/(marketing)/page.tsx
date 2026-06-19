import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900 antialiased">
      <section className="relative overflow-hidden px-6 lg:px-24 min-h-screen flex items-center bg-[#4cbfa6]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-design.png"
            alt="Utask Hero Background Stripes"
            fill
            priority
            style={{ objectFit: "cover" }}
            className="opacity-30"
          />
        </div>

        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center w-full pt-32 pb-16 relative z-10">
          <div className="flex justify-center md:justify-start">
            <div className="relative w-full max-w-125 h-auto aspect-500/350">
              <Image
                src="/images/Group.png"
                alt="Are you an artisan looking to render services? Join UTask Now"
                fill
                priority
                sizes="(max-w-768px) 100vw, 500px"
                style={{ objectFit: "contain" }}
              />
              <Link
                href="/onboard"
                className="absolute bottom-[10%] left-[6%] w-[45%] h-[18%] rounded-md cursor-pointer accessibility-focus-ring"
                aria-label="Join UTask Now"
              />
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-70 sm:w-[320px] h-140 sm:h-160">
              <Image
                src="/images/phone.png"
                alt="UTask App Interface Map Preview"
                fill
                priority
                sizes="(max-w-768px) 280px, 320px"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY UTASK SECTION */}
      <section className="py-20 md:py-28 bg-white px-6 lg:px-24">
        <div className="mx-auto max-w-7xl text-center mb-16 md:mb-24">
          <h2 className="text-xl md:text-2xl font-black text-[#232331] uppercase tracking-widest font-sans">
            Why UTASK?
          </h2>
        </div>

        {/* Two Column Grid: Forces side-by-side layout on md screens and up */}
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Fixed Phone Graphic Container */}
          <div className="flex justify-center items-center min-h-[450px] md:min-h-[550px]">
            <div className="relative w-full max-w-[450px] aspect-715/688 rotate-90 scale-95 md:scale-100">
              <Image
                src="/images/why-utask-phone.png"
                alt="UTASK App Earnings Preview"
                fill
                sizes="(max-w-768px) 100vw, 450px"
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </div>

          <div className="space-y-5 w-full max-w-135 mx-auto md:mx-0 z-10">
            <div className="bg-white p-5 md:p-6 rounded-xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex items-start gap-4 transition-all hover:shadow-[0_4px_25px_rgba(0,0,0,0.06)]">
              <div className="relative w-5 h-5 shrink-0 mt-0.5">
                <Image
                  src="/images/check-mark.png"
                  alt="Checkmark Icon"
                  width={20}
                  height={20}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-extrabold text-[#232331] uppercase text-xs md:text-sm tracking-wider font-sans">
                  Work Anytime
                </h3>
                <p className="text-[11px] md:text-xs text-gray-400 leading-relaxed font-normal">
                  A ready market that allows you work on your own schedule and
                  terms.
                </p>
              </div>
            </div>

            {/* Card 2: Earn Money */}
            <div className="bg-white p-5 md:p-6 rounded-xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex items-start gap-4 transition-all hover:shadow-[0_4px_25px_rgba(0,0,0,0.06)]">
              <div className="relative w-5 h-5 shrink-0 mt-0.5">
                <Image
                  src="/images/check-mark.png"
                  alt="Checkmark Icon"
                  width={20}
                  height={20}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-extrabold text-[#232331] uppercase text-xs md:text-sm tracking-wider font-sans">
                  Earn Money
                </h3>
                <p className="text-[11px] md:text-xs text-gray-400 leading-relaxed font-normal">
                  The more services you render, the more money you can make.
                </p>
              </div>
            </div>

            {/* Card 3: Easy To Use */}
            <div className="bg-white p-5 md:p-6 rounded-xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex items-start gap-4 transition-all hover:shadow-[0_4px_25px_rgba(0,0,0,0.06)]">
              <div className="relative w-5 h-5 shrink-0 mt-0.5">
                <Image
                  src="/images/check-mark.png"
                  alt="Checkmark Icon"
                  width={20}
                  height={20}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-extrabold text-[#232331] uppercase text-xs md:text-sm tracking-wider font-sans">
                  Easy To Use
                </h3>
                <p className="text-[11px] md:text-xs text-gray-400 leading-relaxed font-normal">
                  Just tap and go. You also have access to 24/7 support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW UTASK WORKS SECTION */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-[#4cbfa6] text-white px-6 lg:px-24 min-h-screen flex flex-col justify-center select-none">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-design.png"
            alt="Utask Section Background Waves"
            fill
            style={{ objectFit: "cover" }}
            className="opacity-30 mix-blend-overlay"
          />
        </div>

        {/* Main Section Header */}
        <div className="mx-auto max-w-7xl text-center mb-12 md:mb-16 relative z-10 w-full">
          <h2 className="text-xl md:text-2xl font-black uppercase tracking-widest font-sans">
            How UTASK Works
          </h2>
        </div>

        <div className="mx-auto w-full max-w-4xl flex flex-col items-center relative z-10">
          <div className="flex flex-col items-center text-center space-y-1 mb-6 md:mb-2">
            <div className="relative w-8 h-8 shrink-0">
              <Image
                src="/images/svg1.svg"
                alt="Accept Request Icon"
                width={32}
                height={32}
                style={{ objectFit: "contain" }}
              />
            </div>
            <h3 className="font-extrabold text-xs md:text-sm tracking-wider uppercase font-sans">
              Accept the Request
            </h3>
          </div>

          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 lg:gap-12">
            <div className="flex flex-col items-center text-center md:text-right md:items-end space-y-1 md:w-1/3 order-2 md:order-1">
              <div className="relative w-8 h-8 shrink-0">
                <Image
                  src="/images/svg2.svg"
                  alt="Accept Request Icon"
                  width={32}
                  height={32}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <h3 className="font-extrabold text-xs md:text-sm tracking-wider uppercase font-sans">
                Go for Inspection
              </h3>
            </div>

            <div className="w-70 h-120 sm:w-[320px] sm:h-135 flex items-center justify-center shrink-0 order-1 md:order-2 relative">
              <div className="absolute w-120 h-70 sm:w-135 sm:h-80 rotate-90">
                <Image
                  src="/images/Frame.png"
                  alt="UTask Live Tracking Map Screen Preview"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </div>

            <div className="flex flex-col items-center text-center md:text-left md:items-start space-y-1 md:w-1/3 order-3">
              <div className="relative w-8 h-8 shrink-0">
                <Image
                  src="/images/svg4.svg"
                  alt="Accept Request Icon"
                  width={32}
                  height={32}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <h3 className="font-extrabold text-xs md:text-sm tracking-wider uppercase font-sans">
                Complete Task
              </h3>
            </div>
          </div>

          <div className="flex flex-col items-center text-center space-y-1 mt-6 md:mt-2">
            <div className="relative w-8 h-8 shrink-0">
              <Image
                src="/images/svg3.svg"
                alt="Accept Request Icon"
                width={32}
                height={32}
                style={{ objectFit: "contain" }}
              />
            </div>
            <h3 className="font-extrabold text-xs md:text-sm tracking-wider uppercase font-sans">
              Get Paid
            </h3>
          </div>
        </div>
      </section>

      {/* 4. DOWNLOAD APP NOW SECTION */}
      <section className="py-20 md:py-28 bg-white px-6 lg:px-24 overflow-hidden">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-5 text-center md:text-left max-w-120 mx-auto md:mx-0">
            <h2 className="text-2xl md:text-3xl font-black text-[#232331] uppercase tracking-wider font-sans">
              DOWNLOAD APP NOW
            </h2>

            <p className="text-[11px] md:text-xs text-gray-400 leading-relaxed font-normal">
              The UTask app is full of features that help you stay safe and
              confident before, during, and after every task. And if you need
              help, UTask gives you 24/7 support.
            </p>

            <div className="flex justify-center md:justify-start pt-4">
              <Link
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-56 relative shrink-0 hover:scale-[1.01] transition-transform duration-200"
              >
                <Image
                  src="/images/google-play.png"
                  alt="Download on Google Play and App Store"
                  fill
                  sizes="224px"
                  style={{ objectFit: "contain", objectPosition: "left" }}
                  priority
                />
              </Link>
            </div>
          </div>

          <div className="flex justify-center md:justify-end items-center min-h-100 md:min-h-120 w-full relative">
            <div className="absolute w-110 h-90 md:w-120 md:h-100 rotate-270 scale-95 md:scale-105">
              <Image
                src="/images/google-play-phone.png"
                alt="UTask Application Interface Previews"
                fill
                sizes="(max-w-768px) 440px, 480px"
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white">
        <section className="relative pt-20 pb-20 px-6 lg:px-24 text-center">
          <div className="absolute top-0 inset-x-0 bottom-[35%] md:bottom-[40%] bg-[#4cbfa6] z-0 overflow-hidden pointer-events-none">
            <Image
              src="/images/hero-design.png"
              alt=""
              fill
              style={{ objectFit: "cover" }}
              className="opacity-20 mix-blend-overlay"
            />
          </div>

          <div className="relative z-10 mx-auto max-w-xl space-y-4 mb-12 text-white">
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-widest font-sans">
              How To Use The App Perfectly
            </h2>
            <p className="text-[11px] md:text-xs text-teal-50 max-w-md mx-auto leading-relaxed font-normal">
              To help you utilise the UTask app properly, we have included a
              video showing you how to navigate through seamlessly.
            </p>
          </div>

          {/* The Clean Centered Video Frame Canvas Container */}
          <div className="relative z-10 mx-auto max-w-3xl aspect-1171/500 w-full rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden bg-gray-900">
            <Image
              src="/images/how-to-use-theApp.png"
              alt="UTask Application Interface Navigation Tutorial Video Preview"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </section>
      </div>

      <section className="py-20 bg-white px-6 lg:px-24">
        <div className="mx-auto max-w-7xl text-center mb-10">
          <h2 className="text-xl md:text-2xl font-black text-[#232331] uppercase tracking-wider font-sans">
            Our Happy Customers
          </h2>
        </div>

        <div className="mx-auto max-w-4xl flex justify-center">
          <div className="relative w-full max-w-190 aspect-1171/357">
            <Image
              src="/images/how-to-use-theApp2.png"
              alt="Sadiq Ola user review card dashboard data frame"
              fill
              sizes="(max-w-1024px) 100vw, 760px"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION ( Accordion style ) */}
      <section className="py-20 bg-white px-6 lg:px-16">
        <div className="mx-auto max-w-4xl text-center space-y-4 mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mx-auto max-w-3xl space-y-4 divide-y divide-gray-100 border border-gray-100 rounded-xl overflow-hidden p-6 bg-gray-50/30">
          {[
            "What are the requirements to join the UTask community?",
            "How long does it take to sign up?",
            "How much can service providers make with UTask?",
            "How do i get paid?",
            "How much will i pay UTask?",
            "Can I use UTask only a few times every week?",
          ].map((q, i) => (
            <div
              key={i}
              className={`pt-4 ${i === 0 ? "border-none pt-0" : ""}`}
            >
              <button className="flex items-center justify-between w-full py-2 text-left font-semibold text-gray-900 text-sm">
                {q} <span className="text-gray-400">＋</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 8. CONTACT BAR ( Floating card above footer ) */}
      <div className="mx-auto max-w-7xl px-6 lg:px-24 -mb-16 relative z-30">
        <div className="bg-white border border-gray-100 rounded-3xl shadow-xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16 text-gray-700">
          {/* Email Field Column */}
          <div className="flex items-center gap-4 text-sm font-medium">
            <div className="w-12 h-12 bg-[#e6f6f2] flex items-center justify-center rounded-2xl shrink-0 p-3">
              <Image
                src="/images/gmail.svg"
                alt="Email Contact Icon"
                width={24}
                height={24}
                style={{ objectFit: "contain" }}
              />
            </div>
            <span className="text-[#232331] font-semibold text-xs md:text-sm">
              info@email.com
            </span>
          </div>

          {/* Center Divider: Hidden on small mobile stacks */}
          <div className="hidden sm:block h-12 w-px bg-gray-100" />

          {/* Phone Field Column */}
          <div className="flex items-center gap-4 text-sm font-medium">
            <div className="w-12 h-12 bg-[#e6f6f2] flex items-center justify-center rounded-2xl shrink-0 p-3">
              <Image
                src="/images/telephone.svg"
                alt="Phone Contact Icon"
                width={24}
                height={24}
                style={{ objectFit: "contain" }}
              />
            </div>
            <span className="text-[#232331] font-semibold text-xs md:text-sm">
              +234 (081) 123 4567
            </span>
          </div>
        </div>
      </div>

      {/* 9. FUNCTIONAL DETAILED FOOTER SECTION */}
      <footer className="relative bg-[#232331] pt-32 pb-8 px-6 lg:px-24 text-gray-400">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-3rem)] max-w-5xl z-30">
          <div className="bg-white border border-gray-100 rounded-4xl shadow-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-20 text-gray-700">
            {/* Email Segment */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#e6f6f2] flex items-center justify-center rounded-full shrink-0">
                <Image
                  src="/images/gmail.svg"
                  alt="Email icon"
                  width={20}
                  height={20}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <span className="text-[#232331] font-semibold text-sm tracking-wide">
                info@email.com
              </span>
            </div>

            <div className="hidden sm:block h-10 w-px bg-gray-200" />

            {/* Phone Segment */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#e6f6f2] flex items-center justify-center rounded-full shrink-0">
                <Image
                  src="/images/telephone.svg"
                  alt="Phone icon"
                  width={20}
                  height={20}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <span className="text-[#232331] font-semibold text-sm tracking-wide">
                +234 810 123 4567
              </span>
            </div>
          </div>
        </div>

        {/* Main Footer Column Content Grid */}
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pt-8 pb-12">
          <div className="md:col-span-4 space-y-6">
            <h3 className="text-2xl font-black text-white tracking-widest font-sans">
              UTASK
            </h3>

            {/* Dynamic Stack of User Avatars from Figma design layout snippet */}
            <div className="flex items-center -space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-[#232331] overflow-hidden relative bg-gray-600">
                <Image
                  src="/images/avatar1.png"
                  alt="User Avatar"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-[#232331] overflow-hidden relative bg-gray-500">
                <Image
                  src="/images/avatar2.png"
                  alt="User Avatar"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="pl-5 text-xs text-gray-300 font-medium">
                Request for Services
              </div>
            </div>

            {/* Social Network Icon Button Vectors */}
            <div className="flex items-center gap-4 pt-2">
              {["facebook", "instagram", "twitter"].map((platform) => (
                <Link
                  key={platform}
                  href="#"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Image
                    src={`/images/${platform}.svg`}
                    alt={`${platform} icon`}
                    width={16}
                    height={16}
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Center Empty Balance Column spacer to split structural alignment */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Right Newsletter Form Capture Column */}
          <div className="md:col-span-8 lg:col-span-7 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              News Letter
            </h4>
            <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
              Subscribe to our newsletter to get our latest update & news
            </p>

            {/* Floating Entry Line Input form container element */}
            <form className="flex w-full max-w-md items-center justify-between border-b border-gray-600 pb-2 pt-4 group focus-within:border-teal-400 transition-colors">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-transparent w-full pr-4 text-sm text-white placeholder-gray-500 outline-none"
                required
              />
              <button
                type="submit"
                className="w-8 h-8 bg-[#4cbfa6] text-white flex items-center justify-center rounded-lg shadow-md hover:scale-105 transition-transform"
                aria-label="Submit Email Subscription"
              >
                <span className="text-xs transform rotate-45 block">➔</span>
              </button>
            </form>
          </div>
        </div>

        {/* Flat Low Bottom Line Divider Canvas Section */}
        <div className="mx-auto max-w-7xl mt-4 pt-6 border-t border-gray-800 text-center">
          <p className="text-[11px] text-gray-500 tracking-wide">
            © Copyright 2026. UTask. All Rights Reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

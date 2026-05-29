"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen1 md:pt-52 pt-30 overflow-hidden bg-[#000D12] text-white pb-24">

      <div className="container-custom relative z-10">

        {/* Hero Content */}
        <div className="grid min-h-[85vh]1 items-center gap-16 lg:grid-cols-12">
          {/* Left */}
          <div className="lg:col-span-6">

            <h1 className="max-w-xl text-4xl text-[#E9F4F9] font-medium leading-tight tracking-tight md:text-[67px]">
              The new foundation of modern banking
            </h1>

            <p className="mt-4 max-w-lg text-base leading-relaxed text-[#E9F4F9] opacity-80">
              We drive innovation and growth, provide seamless <br className="md:block hidden" />customer experience and operational excellence
            </p>

            {/* CTA */}
            <div className="mt-12  flex flex-wrap items-center gap-4">
              <button className="font-button group inline-flex items-center gap-5 rounded-lg border border-[#003ACE] bg-[linear-gradient(106.53deg,#00B4FD_-5.68%,#003ACE_86.98%)] px-5 py-2.5 md:px-12 md:py-3 text-[15px] font-normal text-white transition-all duration-300 hover:bg-white hover:bg-none hover:text-[#003ACE] uppercase">
                Request Demo
              </button>

              <button className="font-button rounded-lg border border-[#E9F4F9] px-5 py-2.5 md:px-12 md:py-3 text-[15px] font-normal text-[#E9F4F9] transition  duration-300 hover:bg-white hover:bg-none hover:text-[#003ACE] uppercase">
                Contact Us
              </button>
            </div>

            {/* Trusted */}
            <div className="md:mt-32 mt-15">
              <p className="mb-6 text-base font-medium text-[#E9F4F9] opacity-70">Trusted By:</p>

              <div className="flex flex-wrap items-center gap-3 text-[#586E84] text-[13px]">
                <img
                  src="/images/shells.png"
                  alt="Shells"
                />
                <img
                  src="/images/SmartFinder.png"
                  alt="SmartFinder"
                />
                <img
                  src="/images/zoomerr.png"
                  alt="zoomerr"
                />
                <img
                  src="/images/ArtVenue.png"
                  alt="ArtVenue"
                />
                <img
                  src="/images/kontrastr.png"
                  alt="kontrastr"
                />
                <img
                  src="/images/waves.png"
                  alt="waves"
                />
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Glow */}
            <div className="absolute md:h-99.5 md:w-99.5 h-57.5 w-57.5 rounded-full bg-[linear-gradient(103.43deg,#00B4FD_-1.02%,#003ACE_83.53%)] blur-[120px] backdrop-blur-[100px]" />
            {/* Main Card */}
            <div className="relative">
              <Image
                src="/images/hero.svg"
                alt="Banking"
                width={662}
                height={301}
                className=""
              />

              {/* Balance Card */}
              {/* <div className="absolute right-[-30px] top-10 w-[250px] rounded-2xl border border-white/10 bg-white/90 p-5 text-black shadow-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500">Total Balance</p>
                    <h3 className="mt-2 text-2xl font-bold">
                      $42,295.00
                    </h3>
                  </div>

                  <div className="rounded-full bg-gray-100 p-3">
                    <CreditCard size={20} />
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between text-xs text-gray-500">
                  <span>Fund Transfer</span>
                  <span>Add Money</span>
                  <span>More</span>
                </div>
              </div> */}

              {/* Activity Card */}
              {/* <div className="absolute bottom-6 left-[-40px] w-[220px] rounded-2xl border border-white/10 bg-white/90 p-4 text-black shadow-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">
                      Recent Activity
                    </p>
                    <p className="text-xs text-gray-500">
                      Today
                    </p>
                  </div>

                  <div className="rounded-full bg-cyan-100 p-2 text-cyan-600">
                    <Send size={16} />
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between rounded-xl bg-gray-100 p-3">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-cyan-500 p-2 text-white">
                      <ShieldCheck size={14} />
                    </div>

                    <div>
                      <p className="text-sm font-medium">Transfer</p>
                      <p className="text-xs text-gray-500">
                        2 Jan 2024
                      </p>
                    </div>
                  </div>

                  <span className="text-sm font-semibold text-red-500">
                    -$59
                  </span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
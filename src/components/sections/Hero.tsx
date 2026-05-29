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

            <p className="mt-4 max-w-lg text-base leading-relaxed text-white opacity-80">
              We drive innovation and growth, provide seamless{" "}
              <br className="md:block hidden" />
              customer experience and operational excellence
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
              <p className="mb-6 text-base font-medium text-[#E9F4F9] opacity-70">
                Trusted By:
              </p>

              <div className="flex flex-wrap items-center gap-3 text-[#586E84] text-[13px]">
                <Image
                  className="w-auto"
                  src="/images/shells.svg"
                  alt="Shells"
                  width={10}
                  height={18.4}
                />
                <Image
                  className="w-auto"
                  src="/images/SmartFinder.svg"
                  alt="SmartFinder"
                  width={10}
                  height={18.4}
                />
                <Image
                  className="w-auto"
                  src="/images/zoomerr.svg"
                  alt="zoomerr"
                  width={10}
                  height={18.4}
                />
                <Image
                  className="w-auto"
                  src="/images/ArtVenue.svg"
                  alt="ArtVenue"
                  width={10}
                  height={18.4}
                />
                <Image
                  className="w-auto"
                  src="/images/kontrastr.svg"
                  alt="kontrastr"
                  width={10}
                  height={18.4}
                />
                <Image
                  className="w-auto"
                  src="/images/wave.svg"
                  alt="waves"
                  width={10}
                  height={18.4}
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
                className="w-auto h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

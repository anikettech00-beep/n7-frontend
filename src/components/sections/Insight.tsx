"use client";

import Image from "next/image";

const insights = [
  {
    title: "How to transition from a traditional to a digital bank",
    category: "Getting Started",
    author: "David Grohl",
    date: "17/08/24",
  },
  {
    title: "How to transition from a traditional to a digital bank",
    category: "Getting Started",
    author: "David Grohl",
    date: "17/08/24",
  },
  {
    title: "How to transition from a traditional to a digital bank",
    category: "Getting Started",
    author: "David Grohl",
    date: "17/08/24",
  },
];

export default function FintechSection() {
  return (
    <section className="relative bg-[#000D12] pt-10 md:pt-20 pb-16 overflow-hidden">
      {/* Background radial glows for premium aesthetic */}
      <div className="pointer-events-none absolute bottom-[17%] left-[10%] z-0 h-139 w-139 rounded-full bg-[linear-gradient(103.43deg,#00B4FD_-1.02%,#003ACE_83.53%)] opacity-20 blur-[200px]" />
      <div className="container-custom">
        {/* ===== Top Section ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Content */}
          <div className="lg:col-span-5">
            <h2 className="text-[#E9F4F9] text-2xl md:text-[37px] leading-tight font-light mb-8 pr-5">
              Get yourself up-to-speed on all the things happening in fintech
            </h2>

            <button className="font-button border border-[#E9F4F9] text-[#E9F4F9] text-[15px] rounded-[10px] px-11 py-3 hover:border-transparent transition-all duration-300 hover:bg-white hover:bg-none hover:text-[#003ACE] uppercase">
              INSIGHTS
            </button>
          </div>

          {/* Right Cards */}
          <div className="lg:col-span-7">
            <div className="grid md:grid-cols-2 gap-5">
              {insights.map((item, index) => (
                <div
                  key={index}
                  className={`bg-[#01141B] rounded-[18px] p-6 shadow-[0_0_40px_rgba(0,255,255,0.03)] ${
                    index === 0
                      ? "md:col-span-2 md:flex gap-5 items-center"
                      : ""
                  }`}
                >
                  <div className="flex items-center justify-center flex-1">
                    {index === 0 && (
                      <Image
                        src="/images/insight.svg"
                        alt="Insight"
                        width={295}
                        height={267}
                      />
                    )}
                  </div>

                  <div className="flex-1">
                    <p className="text-[#2490BB] uppercase text-[12px] tracking-widest mb-4 md:mt-0 mt-6">
                      {item.category}
                    </p>

                    <h3 className="text-[#E9F4F9] text-xl md:text-[27px] leading-snug font-light mb-2.5">
                      {item.title}
                    </h3>

                    <p className="text-[#64A8C4] text-[14px] text-sm mb-8">
                      {item.author} &nbsp;&nbsp; {item.date}
                    </p>

                    <button className="font-button w-full border border-[#E9F4F980] text-[#E9F4F980] text-[12px] py-2 rounded-[10px] hover:bg-white hover:text-[#003ACE] transition-all duration-300">
                      READ MORE
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-right flex justify-end">
          <button className="font-button group/link w-45 relative text-[#00B4FD] text-[14px] text-sm uppercase flex  gap-2 mt-5">
            <span className="absolute bottom-0 left-0 h-px w-11 bg-[#00B4FD] transition-all duration-300 group-hover/link:w-[80%]" />
            READ ALL INSIGHTS
            <Image
              alt="right-arrow"
              src="/icons/rightarrow.svg"
              className="w-auto h-auto"
              width={13.57}
              height={14.5}
            />
          </button>
        </div>
      </div>
    </section>
  );
}

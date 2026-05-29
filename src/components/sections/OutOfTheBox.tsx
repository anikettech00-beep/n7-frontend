"use client";

import CTA from "./CTA";
import { ANIMATION_VARIANTS } from "@/src/utils/cn";
import Image from "next/image";

const SparkleIcon = () => (
  <Image
    src="/icons/sparkle.png"
    alt="sparkle"
    width={24}
    height={24}
    className="w-auto h-auto"
  />
);

const CheckIcon = () => (
  <Image
    src="/icons/right-check.svg"
    alt="check"
    width={24}
    height={24}
    className="w-auto h-auto"
  />
);

export default function OutOfTheBox() {
  const marqueeItems = [
    { type: "brand", text: "N7" },
    { type: "text", text: "to the new way of banking" },
    { type: "brand", text: "CB7" },
    { type: "text", text: "to the new way of banking" },
  ];

  return (
    <section
      className="relative overflow-hidden bg-[#E9F4F9] pb-15 lg:pb-32 md:pb-20 
             bg-none lg:bg-[url('/images/bg-digital.png')] 
             lg:bg-no-repeat lg:bg-position-[50%_169%]"
    >
      <div className="relative w-full overflow-hidden bg-white md:py-6 py-3 border-y border-zinc-100 z-20">
        <div className="flex w-max animate-marquee">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center  shrink-0 whitespace-nowrap"
            >
              {item.type === "brand" ? (
                <>
                  <span className="text-2xl md:text-[47px] font-bold bg-[linear-gradient(106.53deg,#00B4FD_-5.68%,#003ACE_86.98%)] bg-clip-text text-transparent">
                    {item.text}
                  </span>

                  <div className="px-6">
                    <SparkleIcon />
                  </div>
                </>
              ) : (
                <div className=" flex items-center gap-3 ">
                  <span className="text-[#000D12] text-2xl md:text-[47px] font-semibold">
                    Say
                  </span>

                  <Image
                    src="/images/hand.gif"
                    alt="wave"
                    className="w-23.25 h-16.5 object-contain"
                    width={90}
                    height={60}
                    unoptimized
                  />

                  <span className="text-[#000D12] text-2xl md:text-[47px] font-semibold">
                    {item.text}
                  </span>

                  <div className="px-6">
                    <SparkleIcon />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="container-custom pt-24">
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          <div className="lg:col-span-5 flex flex-col items-start justify-start lg:sticky lg:top-32 h-fit">
            <h2 className="text-3xl md:text-4xl lg:text-[53px] text-[#000D12]/95 tracking-tight">
              Digital banking <br /> out-of-the-box
            </h2>

            <p className="mt-5 text-base leading-relaxed text-black opacity-70 max-w-[320px]">
              N7 helps your financial institution improve the client experience,
              automate and optimize procedures
            </p>

            <div className="mt-8 mb-4 gap-6">
              <button className="font-button px-8 py-3 rounded-[10px] bg-[linear-gradient(106.53deg,#00B4FD_-5.68%,#003ACE_86.98%)] text-white text-[15px] uppercase transition-all duration-300 hover:bg-none hover:bg-white hover:text-[#003ACE]">
                Request Demo
              </button>
            </div>
            <button className="font-button group/link relative inline-flex items-center gap-2 pb-1 text-[14px] font-normal uppercase bg-[linear-gradient(95.48deg,#00B4FD_-79.76%,#003ACE_91.37%)] bg-clip-text text-transparent">
              Learn More
              <span className={ANIMATION_VARIANTS.scaleLine} />
              <Image
                src="/icons/rightarrow.svg"
                alt="Arrow"
                width={13.57}
                height={14.5}
                className="w-auto h-auto"
              />
            </button>
          </div>

          {/* Right Column (Alternating Feature Blocks) */}
          <div className="lg:col-span-7 flex flex-col md:gap-24 gap-10">
            {/* Block 1: Dashboard Mockup */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              {/* Phone Left */}
              <div className="flex justify-center md:justify-start">
                <Image
                  src="/images/iPhone1.svg"
                  alt=""
                  className="md:w-auto w-[35%]"
                  width={268.31}
                  height={542.9}
                />
              </div>

              {/* Text Right */}
              <div className="flex flex-col">
                <h3 className="text-xl md:text-base font-medium text-[#000D12] mb-6 md:mt-0 mt-10">
                  Fully compliant with regulatory <br /> requirement
                </h3>
                <p className="text-base leading-relaxed text-black opacity-70 mb-11">
                  The governance of risk management with regulations is achieved
                  by our risk management framework that is fully integrated to
                  work with digital bank’s operational-risk protocols and
                  procedures.
                </p>
                <div className="space-y-3.5">
                  {[
                    "Pre-integrated Security System",
                    "Fully Compliant With Regulatory Requirement",
                    "Digitally Connected Core",
                  ].map((label, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckIcon />
                      <span className="text-base font-medium text-[#000D12]/70">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Block 2: Analytics Chart Mockup */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              {/* Text Left */}
              <div className="flex flex-col order-2 md:order-1">
                <h3 className="text-xl md:text-base font-medium text-[#000D12] mb-6 md:mt-0 mt-10">
                  No legacy IT systems
                </h3>
                <p className="text-base leading-relaxed text-black opacity-70 mb-11">
                  Our Digital Banking solution and multilayered approach help
                  financial institutions take advantage of digital
                  transformation by ensuring customer trust and regulatory
                  compliance.
                </p>
                <div className="space-y-3.5">
                  {[
                    "Adaptive & Intelligent API monetization",
                    "Ambient User Experience",
                    "Cloud-native With lower TCO",
                  ].map((label, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckIcon />
                      <span className="text-base font-medium text-[#000D12]/70">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Phone Right */}
              <div className="flex justify-center md:justify-end order-1 md:order-2">
                <Image
                  src="/images/iPhone2.svg"
                  alt=""
                  className="md:w-auto w-[35%]"
                  width={268.31}
                  height={542.9}
                />
              </div>
            </div>

            {/* Block 3: Settings Menu Mockup */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              {/* Phone Left */}
              <div className="flex justify-center md:justify-start">
                <Image
                  src="/images/iPhone3.svg"
                  alt=""
                  className="md:w-auto w-[35%]"
                  width={268.31}
                  height={542.9}
                />
              </div>

              {/* Text Right */}
              <div className="flex flex-col">
                <h3 className="text-xl md:text-base font-medium text-[#000D12] mb-6 md:mt-0 mt-10">
                  No traditional branches
                </h3>
                <p className="text-base leading-relaxed text-black opacity-70 mb-11">
                  Our Digital Banking out-of-the-box helps you to accelerate
                  innovation while reducing risks and optimising operational
                  costs for a seamless branchless experience.
                </p>
                <div className="space-y-3.5">
                  {[
                    "Branchless & Paperless Banking",
                    "Digital Transformation Capability",
                    "Optimized, Adoptable and Scalable",
                  ].map((label, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckIcon />
                      <span className="text-base font-medium text-[#000D12]/70">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:pt-28 pt-10">
        <CTA
          title="Take the full advantage of going paper-less now."
          bgKey="n7-bg.png"
          description="CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations"
          fBtn="Contact Us"
          sBtn="Request Demo"
        />
      </div>
    </section>
  );
}

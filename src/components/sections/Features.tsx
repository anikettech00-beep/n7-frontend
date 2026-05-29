"use client";

import { ANIMATION_VARIANTS, BUTTON_VARIANTS } from "@/src/utils/cn";
import clsx from "clsx";
import Image from "next/image";

const CoreBankingIcon = () => (
  <Image
    src="/icons/Core.svg"
    alt="core banking"
    width={42}
    height={42.7}
    className="w-auto h-auto"
  />
);

const DigitalBankingIcon = () => (
  <Image
    src="/icons/Digital.svg"
    alt="digital banking"
    width={42}
    height={42.7}
    className="w-auto h-auto"
  />
);

const OpenBankingIcon = () => (
  <Image
    src="/icons/Open.svg"
    alt="open banking"
    width={42}
    height={42.7}
    className="w-auto h-auto"
  />
);

const LoanOriginationIcon = () => (
  <Image
    src="/icons/Origination.svg"
    alt="loan origination"
    width={42}
    height={42.7}
    className="w-auto h-auto"
  />
);

const LoanManagementIcon = () => (
  <Image
    src="/icons/Management.svg"
    alt="loan management"
    width={42}
    height={42.7}
    className="w-auto h-auto"
  />
);

const featuresData = [
  {
    id: "Core Banking CB7",
    title: "Core Banking CB7",
    description:
      "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
    icon: CoreBankingIcon,
  },
  {
    id: "digital-banking",
    title: "Digital Banking N7",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients ",
    icon: DigitalBankingIcon,
  },
  {
    id: "open-banking",
    title: "Open Banking",
    description:
      "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
    icon: OpenBankingIcon,
  },
  {
    id: "loan-origination",
    title: "Loan Origination System",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients ",
    icon: LoanOriginationIcon,
    badge: "NBFC",
  },
  {
    id: "loan-management",
    title: "Loan Management System",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients ",
    icon: LoanManagementIcon,
    badge: "NBFC",
  },
];

export default function Features() {
  return (
    <section className="relative pt-24 md:pb-10 overflow-hidden bg-[#000D12]">
      <div className="pointer-events-none absolute bottom-[17%] right-[0%] z-0 h-139 w-139 rounded-full bg-[linear-gradient(103.43deg,#00B4FD_-1.02%,#003ACE_83.53%)] opacity-20 blur-[200px]" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          <div className="lg:col-span-5 flex flex-col items-start justify-start h-fit">
            <h2 className="text-3xl md:text-4xl lg:text-[38px] leading-tight text-[#E9F4F9] tracking-tight">
              All of our solutions are <br />
              tailor-made to your needs
            </h2>

            <button
              className={clsx(BUTTON_VARIANTS.secondary, "mt-7 md:mt-12")}
            >
              Request Demo
            </button>
          </div>

          {/* Right Column (Cards Grid) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {featuresData.map((feature) => (
                <div
                  key={feature.id}
                  // variants={itemVariants}
                  className="flex flex-col items-start group"
                >
                  {/* Top Bar: Icon and Badge if present */}
                  <div className="flex items-baseline justify-between w-full mb-8">
                    <div className="text-[#E9F4F9] transform group-hover:scale-105 transition-transform duration-300">
                      <feature.icon />
                    </div>
                    {feature.badge && (
                      <span className="text-[10px] font-medium tracking-[0.2em] text-[#586E84] uppercase">
                        {feature.badge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-[22px] font-medium text-[#E9F4F9] mb-8">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base leading-relaxed text-white opacity-70 mb-6 pr-6">
                    {feature.description}
                  </p>

                  {/* Link */}
                  <button className={BUTTON_VARIANTS.arrowWithText}>
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

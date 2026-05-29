"use client";

import Link from "next/link";

// High-fidelity custom SVG icons matching the screenshot
const CoreBankingIcon = () => (
  <img src="/icons/Core.svg" />
);

const DigitalBankingIcon = () => (
  <img src="/icons/Digital.svg" />
);

const OpenBankingIcon = () => (
  <img src="/icons/Open.svg" />
);

const LoanOriginationIcon = () => (
  <img src="/icons/Origination.svg" />
);

const LoanManagementIcon = () => (
  <img src="/icons/Management.svg" />
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
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom premium ease-out cubic
      },
    },
  };

  return (
    <section className="relative pt-24 md:pb-10 overflow-hidden bg-[#000D12]">
      {/* Background radial glows for premium aesthetic */}
      <div className="pointer-events-none absolute bottom-[17%] right-[0%] z-0 h-139 w-139 rounded-full bg-[linear-gradient(103.43deg,#00B4FD_-1.02%,#003ACE_83.53%)] opacity-20 blur-[200px]" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">

          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col items-start justify-start h-fit">
            <h2

              className="text-3xl md:text-4xl lg:text-[38px] leading-tigh text-[#E9F4F9] tracking-tight"
            >
              All of our solutions are <br />tailor-made to your needs
            </h2>

            <button
              className="font-button mt-7 md:mt-12 px-14 py-3 rounded-[10px] border border-[#E9F4F9] text-[#E9F4F9] text-[15px]  hover:border-transparent transition-all duration-300 hover:bg-white hover:bg-none hover:text-[#003ACE] uppercase"
            >
              Request Demo
            </button>
          </div>

          {/* Right Column (Cards Grid) */}
          <div className="lg:col-span-7">
            <div

              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16"
            >
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
                  <p className="text-base leading-relaxed text-[#E9F4F9]/70 mb-6 pr-6">
                    {feature.description}
                  </p>

                  {/* Link */}
                  <button
                    className="font-button group/link relative inline-flex items-center gap-2 pb-1 text-[14px] font-normal uppercase text-[#00B4FD]"
                  >
                    Learn More

                    <span className="absolute bottom-0 left-0 h-px w-8 bg-[#00B4FD] transition-all duration-300 group-hover/link:w-full" />

                    <img
                      src="/icons/rightarrow.svg"
                      className=""
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

"use client";

import CTA from "./CTA";

export default function Featuresplit() {
    return (
        <section
            className="
    relative
    overflow-hidden
    bg-[#000D12]
    px-0
    lg:py-[110px]
    py-0
    lg:pl-20
    lg:pr-0
    before:hidden
    lg:before:block
    before:absolute
    before:left-0
    before:top-[28%]
    before:z-0
    before:h-[461px]
    before:w-[651px]
    before:-translate-y-1/2
    before:bg-[url('/images/dashboard.svg')]
    before:bg-auto
    before:bg-left-center
    before:bg-no-repeat
    before:opacity-100
    before:content-['']
  "
        >
            <div className="container-custom grid items-center lg:grid-cols-12 pb-[109]">
                {/* RIGHT CONTENT */}
                <div className="lg:col-span-6">
                    <div className="md:hidden hidden">
                        <img src="/images/dashboard.svg" />
                    </div>
                </div>
                <div className="lg:col-span-6">
                    <h2 className="text-2xl text-[#E9F4F9] lg:text-[27px] max-w-127.5">
                        Run a more efficient, flexible, and digitally connected core banking system
                    </h2>

                    <p className="mt-8 text-base font-semibold text-[#E9F4F9]">
                        What you will get:
                    </p>

                    <div className="mt-3.5 grid grid-cols-1 md:grid-cols-2 gap-6 text-base text-[#E9F4F9]/80">
                        <ul className="space-y-3">
                            <li className="flex items-start gap-1.5">
                                <img src="/icons/right-check.svg" />
                                Customer-On Boarding
                            </li>
                            <li className="flex items-start gap-1.5">
                                <img src="/icons/right-check.svg" />
                                Managing deposits and withdrawals
                            </li>
                            <li className="flex items-start gap-1.5">
                                <img src="/icons/right-check.svg" />
                                Transaction management
                            </li>
                            <li className="flex items-start gap-1.5">
                                <img src="/icons/right-check.svg" />
                                Interest Calculation
                            </li>
                            <li className="flex items-start gap-1.5">
                                <img src="/icons/right-check.svg" />
                                Payments processing (cash, cheques, mandates, NEFT, RTGS etc)
                            </li>
                        </ul>

                        <ul className="space-y-3">
                            <li className="flex items-start gap-1.5">
                                <img src="/icons/right-check.svg" />
                                CRM Activities
                            </li>
                            <li className="flex items-start gap-1.5">
                                <img src="/icons/right-check.svg" />
                                Configuring New Banking Products
                            </li>
                            <li className="flex items-start gap-1.5">
                                <img src="/icons/right-check.svg" />
                                Loan disbursal and Loan management
                            </li>
                            <li className="flex items-start gap-1.5">
                                <img src="/icons/right-check.svg" />
                                Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="lg:pt-32">
                <CTA
                    title="Take the full advantage of going paper-less now."
                    bgKey="cta-bg.png"
                    discription="CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations"
                    fBtn="Contact Us"
                    sBtn="Request Demo"
                />
            </div>
        </section>

    );
}
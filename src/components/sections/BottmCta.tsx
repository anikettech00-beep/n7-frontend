"use client";

export default function BottomCTA() {
    return (
        <div className="container-custom">
            <div
                className="relative overflow-hidden rounded-3xl md:rounded-[27px] p-8 lg:py-14 lg:px-0"
            >
                {/* Content Layout */}
                <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-8">

                    {/* Left side: Heading and Description */}
                    <div className="max-w-2xl">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[53px] font-medium leading-[1.2] text-[#E9F4F9] tracking-tight">
                            Take the full advantage of going paper-less now.
                        </h3>
                        <p className="mt-8 text-[13px] md:text-base leading-relaxed text-[#E9F4F9]/80 font-light max-w-lg">
                            CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations
                        </p>
                    </div>

                    {/* Right side: Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto shrink-0 relative z-20">
                        <button className="font-button px-14 py-3 rounded-[10px] border border-[#E9F4F9] text-white text-[15px] uppercase hover:bg-white hover:text-[#003ACE] hover:border-transparent transition-all duration-300 w-full sm:w-auto text-center">
                            Contact Us
                        </button>

                        <button className="font-button px-11 py-3 rounded-[10px] bg-[linear-gradient(106.53deg,#00B4FD_-5.68%,#003ACE_86.98%)] text-white text-[15px] uppercase transition-all duration-300 hover:bg-white hover:[background:white] hover:text-[#003ACE]">
                            Request Demo
                        </button>
                    </div>

                </div>
            </div>
        </div>

    );
}
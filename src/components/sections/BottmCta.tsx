"use client";

import { BUTTON_VARIANTS } from "@/src/utils/cn";
import { Container } from "../common";

export default function BottomCTA() {
  return (
    <Container>
      <div className="relative overflow-hidden rounded-3xl md:rounded-[27px] p-8 lg:py-14 lg:px-0">
        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-8">
          <div className="max-w-2xl">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[53px] font-medium leading-[1.2] text-[#E9F4F9] tracking-tight">
              Take the full advantage of going paper-less now.
            </h3>
            <p className="mt-8 text-[13px] md:text-base leading-relaxed text-white opacity-80 font-light max-w-lg">
              CB7 helps your financial institution improve the client
              experience, automate and optimize procedures, simplify banking
              operations
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto shrink-0 relative z-20">
            <button className={BUTTON_VARIANTS.secondary}>Contact Us</button>
            <button className={BUTTON_VARIANTS.primary}>Request Demo</button>
          </div>
        </div>
      </div>
    </Container>
  );
}

"use client";

import { BUTTON_VARIANTS } from "@/src/utils/cn";

interface CTAProps {
  title: string;
  description: string;
  fBtn: string;
  sBtn: string;
  bgKey: string;
}

export default function CTA(props: CTAProps) {
  const { title, description, fBtn, sBtn, bgKey } = props;
  return (
    <div className="container-custom">
      <div
        className="relative overflow-hidden rounded-3xl md:rounded-[27px] 
                    bg-no-repeat bg-right p-8 sm:p-12 lg:py-28 shadow-2xl"
        style={{
          backgroundImage: `url('/images/${bgKey}')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
        }}
      >
        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-8">
          <div className="max-w-2xl">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[53px] leading-[1.2] text-[#E9F4F9] tracking-tight">
              {title}
            </h3>
            <p className="mt-8 text-[13px] md:text-base leading-relaxed text-white opacity-80 font-light max-w-lg">
              {description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto shrink-0 relative z-20">
            <button className={BUTTON_VARIANTS.secondary}>{fBtn}</button>
            <button className={BUTTON_VARIANTS.primary}>{sBtn}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

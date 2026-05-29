"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const caseStudies = [
  {
    category: "GETTING STARTED",
    title: "How we help brand reach out to more people",
    companyIcon: "/images/zoomerr.png",
  },
  {
    category: "DIGITAL BANKING",
    title: "How digital banking transformed financial services",
    companyIcon: "/images/SmartFinder.png",
  },
  {
    category: "PAYMENT SYSTEM",
    title: "Building the next generation payment infrastructure",
    companyIcon: "/images/ArtVenue.png",
  },
];

export default function CaseStudies() {
  const [index, setIndex] = useState(0);

  const prevIndex =
    index === 0 ? caseStudies.length - 1 : index - 1;

  const nextIndex =
    index === caseStudies.length - 1 ? 0 : index + 1;

  const prev = () => setIndex(prevIndex);
  const next = () => setIndex(nextIndex);

  const cardVariants = {
    center: {
      x: "0%",
      scale: 1,
      opacity: 1,
      zIndex: 30,
    },
    left: {
      x: "-10%",
      scale: 0.9,
      opacity: 0.4,
      zIndex: 10,
    },
    right: {
      x: "16%",
      scale: 0.9,
      opacity: 0.2,
      zIndex: 10,
    },
  };

  const Card = ({ item }: any) => (
    <div className="w-full max-w-[1015px] bg-[#04141B] rounded-[28px] p-6">
      <div className="flex flex-col md:flex-row items-center">

        <div className="w-full lg:w-[420px] md:w-[300px] flex justify-center">
          <img src="/images/insight.svg" className="w-full object-contain" />
        </div>

        <div className="flex-1 lg:px-16 md:px-10 pt-6 lg:pt-0">
          <p className="text-[#2490BB] text-xs uppercase tracking-[3px] mb-5">
            {item.category}
          </p>

          <h3 className="text-[#E9F4F9] text-2xl lg:text-[43px] font-light mb-8">
            {item.title}
          </h3>

          <img src={item.companyIcon} className="mb-10 w-[30%]" />

          <button className="w-full border border-[#E9F4F980] text-xs text-[#E9F4F980] py-2 rounded-[10px] hover:bg-white hover:text-[#003ACE] transition">
            READ MORE
          </button>
        </div>

      </div>
    </div>
  );

  return (
    <section className="bg-[#000D12] md:py-20 py-10 overflow-hidden">
      <div className="container-custom relative">

        <h2 className="text-center text-[#E9F4F9] text-2xl md:text-[53px] font-light lg:mb-[55px] md:mb-0 mb-20">
          Our Case Studies
        </h2>

        {/* STACKED CARDS CONTAINER */}
        <div className="relative flex items-center justify-center h-[480px]">

          {/* LEFT */}
          <motion.div
            key={prevIndex}
            variants={cardVariants}
            animate="left"
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute w-full flex justify-center"
          >
            <Card item={caseStudies[prevIndex]} />
          </motion.div>

          {/* CENTER */}
          <motion.div
            key={index}
            variants={cardVariants}
            animate="center"
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute w-full flex justify-center"
          >
            <Card item={caseStudies[index]} />
          </motion.div>

          {/* RIGHT */}
          <motion.div
            key={nextIndex}
            variants={cardVariants}
            animate="right"
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute w-full flex justify-center"
          >
            <Card item={caseStudies[nextIndex]} />
          </motion.div>

        </div>

        {/* CONTROLS */}
        <div className="flex justify-center items-center gap-8 md:mt-10 mt-20">

          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border border-[#00B4FD] flex items-center justify-center hover:bg-cyan-500/10 transition"
          >
            <img src="/icons/slider-left-icon.svg" alt="" />
          </button>

          <div className="flex gap-3">
            {caseStudies.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`transition-all duration-300 rounded-full  ${i === index
                    ? "w-10 h-2 bg-[#0B4B63] border-transparent"
                    : "w-2 h-2 border border-[#0B4B63]"
                  }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-12 h-12 rounded-full border border-[#00B4FD] flex items-center justify-center hover:bg-cyan-500/10 transition"
          >
            <img src="/icons/slider-icon.svg" alt="" />
          </button>

        </div>

        {/* VIEW ALL */}
        <div className="text-right absolute bottom-[15px] right-[13%] md:block hidden">
          <button
            className="font-button group relative inline-flex items-center gap-2 pb-2 text-xs uppercase tracking-[2px] text-[#00B4FD]"
          >
            View all

            <span className="absolute bottom-0 left-0 h-px w-8 bg-[#00B4FD] transition-all duration-300 group-hover:w-full" />

            <img
              src="/icons/rightarrow.svg"
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>

      </div>
    </section>
  );
}
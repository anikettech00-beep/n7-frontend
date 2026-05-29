"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "../common";
import Image from "next/image";

const caseStudies = [
  {
    category: "GETTING STARTED",
    title: "How we help brand reach out to more people",
    companyIcon: "/images/zoomerr.svg",
  },
  {
    category: "DIGITAL BANKING",
    title: "How digital banking transformed financial services",
    companyIcon: "/images/SmartFinder.svg",
  },
  {
    category: "PAYMENT SYSTEM",
    title: "Building the next generation payment infrastructure",
    companyIcon: "/images/ArtVenue.svg",
  },
];

interface CardProps {
  category: string;
  title: string;
  companyIcon: string;
}

const Card = ({ category, title, companyIcon }: CardProps) => (
  <div className="w-full max-w-253.75 bg-[#04141B] rounded-[28px] p-6">
    <div className="flex flex-col md:flex-row items-center">
      <div className="w-full lg:w-105 md:w-75 flex justify-center">
        <Image
          src="/images/insight.svg"
          className="w-full object-contain"
          alt="insight"
          width={200}
          height={200}
        />
      </div>

      <div className="flex-1 lg:px-16 md:px-10 pt-6 lg:pt-0">
        <p className="text-[#2490BB] text-xs uppercase tracking-[3px] mb-5">
          {category}
        </p>

        <h3 className="text-[#E9F4F9] text-2xl lg:text-[43px] font-light mb-8">
          {title}
        </h3>

        <Image
          src={companyIcon}
          className="mb-10 w-[30%]"
          alt="company"
          width={200}
          height={200}
        />

        <button className="font-button w-full border border-[#E9F4F980] text-xs text-[#E9F4F980] py-2 rounded-[10px] hover:bg-white hover:text-[#003ACE] transition">
          READ MORE
        </button>
      </div>
    </div>
  </div>
);

export default function CaseStudies() {
  const [index, setIndex] = useState(0);

  const prevIndex = index === 0 ? caseStudies.length - 1 : index - 1;

  const nextIndex = index === caseStudies.length - 1 ? 0 : index + 1;

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

  return (
    <section className="bg-[#000D12] md:py-20 py-10 overflow-hidden">
      <Container className="relative">
        <h2 className="text-center text-[#E9F4F9] text-2xl md:text-[53px] font-light lg:mb-13.75 md:mb-0 mb-20">
          Our Case Studies
        </h2>

        {/* STACKED CARDS CONTAINER */}
        <div className="relative flex items-center justify-center h-120">
          {/* LEFT */}
          <motion.div
            key={prevIndex}
            variants={cardVariants}
            animate="left"
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute w-full flex justify-center"
          >
            <Card {...caseStudies[prevIndex]} />
          </motion.div>

          {/* CENTER */}
          <motion.div
            key={index}
            variants={cardVariants}
            animate="center"
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute w-full flex justify-center"
          >
            <Card {...caseStudies[index]} />
          </motion.div>

          {/* RIGHT */}
          <motion.div
            key={nextIndex}
            variants={cardVariants}
            animate="right"
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute w-full flex justify-center"
          >
            <Card {...caseStudies[nextIndex]} />
          </motion.div>
        </div>

        {/* CONTROLS */}
        <div className="flex justify-center items-center gap-8 md:mt-10 mt-20">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border border-[#00B4FD] flex items-center justify-center hover:bg-cyan-500/10 transition"
          >
            <Image
              src="/icons/slider-left-icon.svg"
              alt="previous"
              width={20}
              height={20}
              className="w-auto h-auto"
            />
          </button>

          <div className="flex gap-3">
            {caseStudies.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`transition-all duration-300 rounded-full  ${
                  i === index
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
            <Image
              src="/icons/slider-icon.svg"
              alt="next"
              width={20}
              height={20}
              className="w-auto h-auto"
            />
          </button>
        </div>

        {/* VIEW ALL */}
        <div className="text-right absolute bottom-3.75 right-[13%] md:block hidden">
          <button className="font-button group relative inline-flex items-center gap-2 pb-2 text-xs uppercase tracking-[2px] text-[#00B4FD]">
            View all
            <span className="absolute bottom-0 left-0 h-px w-8 bg-[#00B4FD] transition-all duration-300 group-hover:w-full" />
            <Image
              src="/icons/rightarrow.svg"
              alt="arrow"
              className="w-auto h-auto transition-transform duration-300 group-hover:translate-x-1"
              width={16}
              height={16}
            />
          </button>
        </div>
      </Container>
    </section>
  );
}

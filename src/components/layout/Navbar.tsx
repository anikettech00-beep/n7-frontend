"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ArrowRight,
  Cpu,
  BookOpen,
  Layers,
  Terminal,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface DropdownItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const solutionsItems: DropdownItem[] = [
    {
      title: "Core Platform",
      description: "Next-gen fintech infrastructure tailored for scale.",
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      href: "/solutions/platform",
    },
    {
      title: "Smart Treasury",
      description: "Automate global treasury and cash management.",
      icon: <Layers className="w-5 h-5 text-indigo-400" />,
      href: "/solutions/treasury",
    },
  ];

  const resourcesItems: DropdownItem[] = [
    {
      title: "Documentation",
      description: "Interactive API reference, libraries, and SDKs.",
      icon: <Terminal className="w-5 h-5 text-purple-400" />,
      href: "/docs",
    },
    {
      title: "Guides & Insights",
      description: "Industry-leading reports and implementation guides.",
      icon: <BookOpen className="w-5 h-5 text-amber-400" />,
      href: "/guides",
    },
  ];

  const handleDropdownHover = (menu: string | null) => {
    setActiveDropdown(menu);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 transition-all duration-300">
      <nav
        className={`py-1.75 px-2.5 flex items-center justify-between w-full max-w-179 bg-[#2F2F2FB2] transition-all duration-300 rounded-xl ${
          isScrolled
            ? "border-zinc-800/80 backdrop-blur-md shadow-2xl"
            : "border-zinc-900/50 backdrop-blur-sm "
        }`}
        style={{
          boxShadow: isScrolled
            ? "0 20px 40px -15px rgba(0, 0, 0, 0.7), inset 0 1px 1px rgba(255, 255, 255, 0.05)"
            : "none",
        }}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            className="text-xl font-bold tracking-[0.15em] text-white hover:opacity-90 transition-opacity"
          >
            N7
          </Link>
        </div>

        {/* Desktop Menu Links */}
        <div className="hidden md:flex items-center gap-3">
          {/* Solutions Dropdown Trigger */}
          <div
            className="relative"
            onMouseEnter={() => handleDropdownHover("solutions")}
            onMouseLeave={() => handleDropdownHover(null)}
          >
            <button className="font-button  flex items-center gap-1.5 text-xs  tracking-[0.12em] text-[#E9F4F9] hover:text-white uppercase transition-colors duration-200 py-2 cursor-pointer">
              Solutions
              <Image
                src="/icons/dropdown-arrow.svg"
                width={16}
                height={16}
                alt="arrow"
                className="w-auto h-auto"
              />
            </button>

            <AnimatePresence>
              {activeDropdown === "solutions" && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-70 bg-zinc-950/95 border border-zinc-800/90 backdrop-blur-xl rounded-2xl p-3.5 shadow-2xl flex flex-col gap-2"
                >
                  {solutionsItems.map((item, idx) => (
                    <button
                      key={idx}
                      className="font-button group flex items-start gap-3 p-2.5 rounded-xl hover:bg-zinc-900/50 border border-transparent hover:border-zinc-800/40 transition-all duration-200"
                    >
                      <div className="flex flex-col gap-0.5">
                        <span className="text-sm font-normal text-[#E9F4F9] group-hover:text-cyan-400 transition-colors">
                          {item.title}
                        </span>
                      </div>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Resources Dropdown Trigger */}
          <div
            className="relative"
            onMouseEnter={() => handleDropdownHover("resources")}
            onMouseLeave={() => handleDropdownHover(null)}
          >
            <button className="font-button flex items-center gap-1.5 text-xs font-normal tracking-[0.12em] text-[#E9F4F9] hover:text-white uppercase transition-colors duration-200 py-2 cursor-pointer">
              Resources
              <Image
                src="/icons/dropdown-arrow.svg"
                alt="dropdown-arrow"
                width={14}
                height={14}
                className="w-auto h-auto"
              />
            </button>

            <AnimatePresence>
              {activeDropdown === "resources" && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-70 bg-zinc-950/95 border border-zinc-800/90 backdrop-blur-xl rounded-2xl p-3.5 shadow-2xl flex flex-col gap-2"
                >
                  {resourcesItems.map((item, idx) => (
                    <button
                      key={idx}
                      className="font-button group flex items-start gap-3 p-2.5 rounded-xl hover:bg-zinc-900/50 border border-transparent hover:border-zinc-800/40 transition-all duration-200"
                    >
                      <div className="flex flex-col gap-0.5">
                        <span className="text-sm font-normal text-[#E9F4F9] group-hover:text-cyan-400 transition-colors">
                          {item.title}
                        </span>
                      </div>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* About Us Link */}
          <Link
            href="/about"
            className="font-button text-xs font-normal tracking-[0.12em] text-[#E9F4F9] hover:text-white uppercase transition-colors duration-200 py-2"
          >
            About Us
          </Link>
        </div>

        {/* CTA Button / Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <button
            className="font-button hidden md:inline-flex items-center justify-center border border-[#E9F4F9] text-[#E9F4F9  px-6 py-2 rounded-md text-xs font-normal transition-all duration-300 hover:bg-white hover:bg-none hover:text-[#003ACE] uppercase shadow-inner"
            style={{
              textShadow: "0 0 10px rgba(255,255,255,0.1)",
            }}
          >
            Request Demo
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-900/50 border border-zinc-850 hover:border-zinc-700 transition-all"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <Menu className="w-4 h-4" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-20 left-4 right-4 bg-zinc-950/95 border border-zinc-850 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl p-5 z-40 md:hidden flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-bold text-zinc-500 tracking-wider uppercase px-2">
                Solutions
              </span>
              <div className="grid grid-cols-1 gap-2">
                {solutionsItems.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 p-2 rounded-xl hover:bg-zinc-900/50"
                  >
                    <span className="text-sm font-medium text-zinc-350">
                      {item.title}
                    </span>
                  </Link>
                ))}
              </div>

              <div className="h-px bg-zinc-900 my-2" />

              <span className="text-[10px] font-bold text-zinc-500 tracking-wider uppercase px-2">
                Resources
              </span>
              <div className="grid grid-cols-1 gap-2">
                {resourcesItems.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 p-2 rounded-xl hover:bg-zinc-900/50"
                  >
                    <span className="text-sm font-medium text-zinc-350">
                      {item.title}
                    </span>
                  </Link>
                ))}
              </div>

              <div className="h-px bg-zinc-900 my-2" />

              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-semibold text-zinc-300 hover:text-white uppercase tracking-wider px-2 py-1"
              >
                About Us
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-white text-black font-bold uppercase tracking-wider text-xs rounded-full hover:bg-zinc-200 transition-colors shadow-lg"
            >
              Request Demo
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

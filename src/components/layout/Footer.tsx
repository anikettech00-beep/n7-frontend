import Link from "next/link";
import { ChevronRight } from "lucide-react";

const officeLocations = [
  {
    city: "London",
    lines: [
      "Linktia Infosystems Ltd – CB7 26 Main Road Sundridge,TN14 6EP England, United Kingdom.",
    ],
  },
  {
    city: "Dubai",
    lines: [
      "Linktia Infosystems Ltd – CB7,Jumeirah Business, Center 5 Cluster W, Jumeirah Lakes Towers Dubai, United Arab Emirates",
    ],
  },
  {
    city: "London",
    lines: [
      "Linktia Infosystems Ltd – CB7,Nirmal, Anand Nagar,Suncity Road, Pune,Maharashtra, 411041, India",
    ],
  },
];

const solutionsLinks = [
  "Core Banking CB7",
  "Digital Banking N7",
  "Open Banking",
  "Loan Origination System",
  "Loan Management System",
  "Digital Transformation",
];

const n7Links = [
  "About Us",
  "Solutions",
  "Contact",
  "Company",
  "Careers",
  "Insights",
  "Core Team",
  "Brand Center",
];

const socialLinks = [
  "LinkedIn",
  "X",

];

export default function Footer() {
  return (
    <footer className="bg-[#000D12] pt-30 pb-8">
      <div className="container-custom">
        {/* Top Section: N7 Logo + Addresses */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* N7 Large Logo */}
          <div className="lg:col-span-5">
            <img src="/icons/logo.svg" alt="logo" className="lg:w-auto md:w-[35%] w-[35%]"/>
          </div>

          {/* Office Locations */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-x-8">
            {officeLocations.map((office, idx) => (
              <div key={idx}>
                <h4 className="text-[#E9F4F9]  text-base font-medium mb-4">
                  {office.city}
                </h4>
                {office.lines.map((line, lineIdx) => (
                  <p key={lineIdx} className="text-[#E9F4F9]/70 text-[14px] leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            ))}
            {/* Link Columns */}

            {/* Solutions */}
            <div className="lg:pt-28 pt-10">
              <h4 className="text-[#E9F4F9]  text-base font-medium mb-4">Solutions</h4>
              <ul className="space-y-2.5">
                {solutionsLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href="#"
                      className="text-[#E9F4F9]/70 text-[14px] flex items-center gap-1 group transition-colors"
                    >
                      <span className="w-34">{link}</span>
                      <img
                        src="/icons/rightarrow.svg"
                        className=""
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* N7 for blog */}
            <div className="lg:pt-28 pt-10">
              <h4 className="text-[#E9F4F9]  text-base font-medium mb-4">N7 for blog</h4>
              <ul className="space-y-2.5">
                {n7Links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href="#"
                      className="text-[#E9F4F9]/70 text-[14px] flex items-center gap-1 group transition-colors"
                    >
                      <span className="w-34">{link}</span>
                      <img
                        src="/icons/rightarrow.svg"
                        className=""
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Socials */}
            <div className="lg:pt-28 pt-10">
              <h4 className="text-[#E9F4F9]  text-base font-medium mb-4">Our Socials</h4>
              <ul className="space-y-2.5">
                {socialLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href="#"
                      className="text-[#E9F4F9]/70 text-[14px] flex items-center gap-1 group transition-colors"
                    >
                      <span className="w-34">{link}</span>
                      <img
                        src="/icons/rightarrow.svg"
                        className=""
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Bottom Bar */}
            <div className="sm:col-span-3 w-full pt-10 lg:pt-19.75">
              <div className=" w-full">
                <p className="text-[#E9F4F9]/30 text-[14px] w-full">
                  Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] — [Registered under the Companies Act 2006 in England and Wales | Number of Incorporation 13100992]
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

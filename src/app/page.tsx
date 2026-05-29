import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import CloudBased from "../components/sections/Cloudbased";
import Featuresplit from "../components/sections/FeatureSplit";
import OutOfTheBox from "../components/sections/OutOfTheBox";
import FintechSection from "../components/sections/Insight";
import CaseStudies from "../components/sections/CaseStudies";
import BottomCTA from "../components/sections/BottmCta";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#000D12]">
      <Hero />
      <Features />
      <CloudBased />
      <Featuresplit />
      <OutOfTheBox />
      <FintechSection />
      <CaseStudies />
      <BottomCTA />
    </main>
  );
}

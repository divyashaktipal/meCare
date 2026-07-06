import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AboutHero } from "@/components/sections/aboutUs/about-hero";
import { AboutStats } from "@/components/sections/aboutUs/about-stats";
import { AboutPassionate } from "@/components/sections/aboutUs/about-passionate";
import { AboutWellBeing } from "@/components/sections/aboutUs/about-well-being";
import { AboutBenefits } from "@/components/sections/aboutUs/about-benefits";
import { Specialists } from "@/components/sections/specialists";
import { CTABanner } from "@/components/sections/finalCTA/cta-banner";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 overflow-hidden">
        <AboutHero />
        <AboutStats />
        <AboutPassionate />
        <AboutWellBeing />
        <AboutBenefits />
        <Specialists
          customTitle={
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
              Designed for <span className="underline decoration-wavy decoration-primary underline-offset-8">500k+</span> specialists leading healthcare excellence
            </h2>
          }
        />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}

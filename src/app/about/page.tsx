import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AboutHero } from "@/components/sections/about-hero";
import { AboutPassionate } from "@/components/sections/about-passionate";
import { AboutWellBeing } from "@/components/sections/about-well-being";
import { AboutBenefits } from "@/components/sections/about-benefits";
import { Specialists } from "@/components/sections/specialists";
import { CTABanner } from "@/components/sections/cta-banner";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 overflow-hidden">
        <AboutHero />
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

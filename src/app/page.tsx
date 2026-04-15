import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Specialties } from "@/components/sections/specialties";
import { Analytics } from "@/components/sections/analytics";
import { Packages } from "@/components/sections/packages";
import { Solutions } from "@/components/sections/solutions";
import { Specialists } from "@/components/sections/specialists";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { Insights } from "@/components/sections/insights";
import { CTABanner } from "@/components/sections/cta-banner";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 overflow-hidden">
        <Hero />
        <Specialties />
        <Analytics />
        <Packages />
        <Solutions />
        <Specialists />
        <Testimonials />
        <Pricing />
        <Insights />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}

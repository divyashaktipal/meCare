import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Pricing } from "@/components/sections/pricing";
import { ServiceFaq } from "@/components/sections/service-faq";
import { CTABanner } from "@/components/sections/cta-banner";

export const metadata = {
  title: "Pricing | meCare Medical Management",
  description: "Browse through our tailored pricing plans and choose the one that best fits your needs.",
};

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Pricing />
        <ServiceFaq />
        <div className="pt-10">
          <CTABanner />
        </div>
      </main>
      <Footer />
    </div>
  );
}

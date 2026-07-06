import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ServiceHero } from "@/components/sections/services/service-hero";
import { ServiceList } from "@/components/sections/services/service-list";
import { ServiceFaq } from "@/components/sections/services/service-faq";
import { CTABanner } from "@/components/sections/finalCTA/cta-banner";

export const metadata = {
  title: "Services | meCare Medical Management",
  description: "Discover our complete range of medical services.",
};

export default function ServicePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <ServiceHero />
        <ServiceList />
        <ServiceFaq />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}

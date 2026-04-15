import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { TermsSection } from "@/components/sections/terms-section";
import { CTABanner } from "@/components/sections/cta-banner";

export const metadata = {
  title: "Terms of Service | meCare Medical Management",
};

export default function TermsOfServicePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <TermsSection />
        <div className="pt-0">
          <CTABanner />
        </div>
      </main>
      <Footer />
    </div>
  );
}

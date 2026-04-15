import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PrivacySection } from "@/components/sections/privacy-section";
import { CTABanner } from "@/components/sections/cta-banner";

export const metadata = {
  title: "Privacy Policy | meCare Medical Management",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <PrivacySection />
        <div className="pt-0">
          <CTABanner />
        </div>
      </main>
      <Footer />
    </div>
  );
}

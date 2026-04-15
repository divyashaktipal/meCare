import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactSection } from "@/components/sections/contact-section";
import { CTABanner } from "@/components/sections/cta-banner";

export const metadata = {
  title: "Contact Us | meCare Medical Management",
  description: "Reach out to us and let's begin a conversation about your needs.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <ContactSection />
        <div className="pt-0">
          <CTABanner />
        </div>
      </main>
      <Footer />
    </div>
  );
}

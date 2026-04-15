import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CTABanner } from "@/components/sections/cta-banner";
import { Specialists } from "@/components/sections/specialists";
import { DoctorsHero } from "@/components/sections/doctors-hero";

export const metadata = {
  title: "Doctors | meCare Medical Management",
  description: "Meet our exceptional team of highly trained doctors and specialists.",
};

export default function DoctorsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <DoctorsHero />
        <Specialists 
          customTitle={<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#03112E]">Meet Our Specialists</h2>} 
          hideDescription={true} 
        />
        <div className="pt-10">
          <CTABanner />
        </div>
      </main>
      <Footer />
    </div>
  );
}

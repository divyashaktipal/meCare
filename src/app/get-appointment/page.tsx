import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AppointmentSection } from "@/components/sections/appointment-section";
import { CTABanner } from "@/components/sections/cta-banner";

export const metadata = {
  title: "Get Appointment | meCare Medical Management",
  description: "Schedule your appointment today.",
};

export default function GetAppointmentPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <AppointmentSection />
        <div className="pt-0">
          <CTABanner />
        </div>
      </main>
      <Footer />
    </div>
  );
}

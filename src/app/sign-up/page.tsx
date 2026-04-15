import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SignupSection } from "@/components/sections/signup-section";

export const metadata = {
  title: "Sign Up | meCare Medical Management",
};

export default function SignupPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAFAFB]">
      <Navbar />
      <main className="flex-1">
        <SignupSection />
      </main>
      <Footer />
    </div>
  );
}

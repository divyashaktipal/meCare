import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { LoginSection } from "@/components/sections/login-section";

export const metadata = {
  title: "Sign In | meCare Medical Management",
};

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAFAFB]">
      <Navbar />
      <main className="flex-1">
        <LoginSection />
      </main>
      <Footer />
    </div>
  );
}

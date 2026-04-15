import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BlogSection } from "@/components/sections/blog-section";
import { CTABanner } from "@/components/sections/cta-banner";

export const metadata = {
  title: "Blog | meCare Medical Management",
};

export default function BlogListPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <BlogSection />
        <div className="pt-0">
          <CTABanner />
        </div>
      </main>
      <Footer />
    </div>
  );
}

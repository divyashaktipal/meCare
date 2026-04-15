import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CTABanner } from "@/components/sections/cta-banner";
import { BlogDetails } from "@/components/sections/blog-details";

export const metadata = {
  title: "Blog Post | meCare Medical Management",
};

export default function BlogPostPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <BlogDetails id={params.id} />
        <div className="pt-0">
          <CTABanner />
        </div>
      </main>
      <Footer />
    </div>
  );
}

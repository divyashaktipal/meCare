import Link from "next/link";

export function Insights() {
  const blogs = [
    { title: "The Standardization Of Healthcare Measurements", spec: "Neurologist", author: "Dr. Hassan", docImg: "./myPhoto.jpg", mainImg: "./myPhoto.jpg" },
    { title: "Building The Next Generation Of Hospital Care", spec: "Cardiologist", author: "Dr. Sarah", docImg: "./myPhoto.jpg", mainImg: "./myPhoto.jpg" },
    { title: "Exploring Mental Health Best Practices Today", spec: "Psychiatrist", author: "Dr. Emily", docImg: "./myPhoto.jpg", mainImg: "./myPhoto.jpg" }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Health Updates & Insights</h2>
          <p className="text-muted">Stay informed with the latest updates, medical advice, and <br />healthcare developments.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blogs.map((blog, i) => (
            <div key={i} className="flex flex-col group cursor-pointer">
              <div className="rounded-3xl overflow-hidden mb-6 aspect-video relative shadow-sm border border-border">
                <img src={blog.mainImg} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur rounded-full px-3 py-1 flex items-center gap-2 text-xs font-semibold shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  Article
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors leading-snug">{blog.title}</h3>

              <div className="flex items-center gap-3 mt-auto">
                <img src={blog.docImg} alt={blog.author} className="w-10 h-10 rounded-full object-cover border border-border" />
                <div>
                  <p className="text-sm font-bold text-foreground">{blog.author}</p>
                  <p className="text-xs text-muted">{blog.spec}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/blogs">
            <button className="bg-primary/10 text-primary hover:bg-primary/20 px-6 py-2 rounded-full font-bold text-sm transition-colors uppercase tracking-wider">
              View All
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

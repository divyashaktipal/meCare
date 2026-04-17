export function ServiceList() {
  const services = [
    { title: "Cardiology", desc: "Our cardiology services at Medcare offer advanced technology to diagnose, treat, and prevent heart diseases." },
    { title: "Endocrinology", desc: "Our comprehensive medical services for the diagnosis and treatment of conditions associated with hormones." },
    { title: "Neurology", desc: "Our highly specialized medical team, using advanced technology, testing, and modern treatment approaches." },
    { title: "Eye care", desc: "Our comprehensive care with personalized treatments combining medical, surgical, to keep healthy vision." },
    { title: "Dentist", desc: "A comprehensive overall health. Offering everything from shining a true, healthy smile always healthy and bright." },
    { title: "Orthopedics", desc: "Dedicated professionals treats bone, joint, and muscle issues. Arthritis and injury or severe mobility, we conquer pain." }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-[#03112E] leading-tight">
            Comprehensive quality<br />care you need
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <div key={i} className="rounded-3xl p-8 border border-border/60 hover:shadow-lg transition-shadow bg-surface group flex flex-col items-start text-left relative overflow-hidden">
              <div className="absolute top-8 right-8 w-16 h-16 rounded-full border border-border/50 bg-background"></div>

              <div className="w-16 h-16 rounded-2xl bg-[#FFE5EC] flex items-center justify-center text-red-400 mb-6 relative shadow-sm border border-white/50 group-hover:scale-105 transition-transform">
                <span className="text-2xl font-sans drop-shadow-sm">❤️</span>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed font-medium mb-8 flex-1">
                {service.desc}
              </p>

              <button className="flex items-center gap-2 text-xs font-bold text-foreground group-hover:text-primary transition-colors uppercase tracking-widest mt-auto border border-border rounded-full px-4 py-2 hover:bg-muted/10">
                Read more <span className="text-lg leading-none mb-0.5">↗</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

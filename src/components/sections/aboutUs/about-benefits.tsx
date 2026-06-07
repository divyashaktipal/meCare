export function AboutBenefits() {
   const benefits = [
      { title: "Personalized care mapping", desc: "For us, healthcare is more than treatment; it's about building lasting relationships." },
      { title: "Specialist doctor reference", desc: "For us, healthcare is more than treatment; it's about building lasting relationships." },
      { title: "Experienced team", desc: "For us, healthcare is more than treatment; it's about building lasting relationships." },
      { title: "Quick health checks", desc: "For us, healthcare is more than treatment; it's about building lasting relationships." }
   ];

   return (
      <section className="py-20 bg-background">
         <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

               <div className="space-y-8">
                  <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">Benefits Tailored to You</h2>
                  <p className="text-muted text-lg">
                     Discover the core advantages of picking our healthcare platform to fulfill you and your family's healthcare goals.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 pt-4">
                     {benefits.map((benefit, i) => (
                        <div key={i} className="flex gap-4">
                           <div className="flex-shrink-0 mt-1">
                              <div className="w-5 h-5 rounded bg-primary/20 text-primary flex items-center justify-center text-xs font-bold font-sans">✓</div>
                           </div>
                           <div>
                              <h4 className="font-bold text-foreground mb-1">{benefit.title}</h4>
                              <p className="text-xs text-muted leading-relaxed">{benefit.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-border">
                  <img src="./aboutImg4.png" alt="Doctor holding a glowing heart" className="w-full h-full object-cover" />
               </div>

            </div>
         </div>
      </section>
   );
}

export function AboutHero() {
   return (
      <section className="bg-surface pt-16 md:pt-24 pb-12">
         <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground max-w-4xl mx-auto mb-12 leading-tight">
               Meet our Healthcare Team: <br className="hidden md:block" />
               Committed to Your Well-Being
            </h1>

            <div className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden mb-16 shadow-xl border-4 border-surface/50 bg-primary/10 aspect-video md:aspect-[21/9]">
               <div className="absolute inset-0 bg-primary/5"></div>
               <img src="./myPhoto.jpg" alt="Healthcare Team" className="w-full h-full object-cover object-center relative z-10 mix-blend-multiply opacity-90" />
               {/* Decorative elements */}
               <div className="absolute bottom-4 left-4 bg-white/80 p-2 rounded-xl backdrop-blur text-xs font-bold shadow-sm z-20">We Care</div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 md:gap-16 border-t border-b border-border/50 py-8">
               <div className="flex items-center gap-4 text-left">
                  <div className="w-12 h-12 rounded-full border border-primary text-primary flex items-center justify-center font-bold bg-primary/5">15</div>
                  <div>
                     <p className="font-bold text-foreground">15 Years</p>
                     <p className="text-xs text-muted font-medium">Experience</p>
                  </div>
               </div>
               <div className="flex items-center gap-4 text-left">
                  <div className="w-12 h-12 rounded-full border border-primary text-primary flex items-center justify-center font-bold bg-primary/5">200</div>
                  <div>
                     <p className="font-bold text-foreground">200+</p>
                     <p className="text-xs text-muted font-medium">Specialists</p>
                  </div>
               </div>
               <div className="flex items-center gap-4 text-left">
                  <div className="w-12 h-12 rounded-full border border-primary text-primary flex items-center justify-center font-bold bg-primary/5">1M</div>
                  <div>
                     <p className="font-bold text-foreground">1M+</p>
                     <p className="text-xs text-muted font-medium">Patients</p>
                  </div>
               </div>
               <div className="flex items-center gap-4 text-left">
                  <div className="w-12 h-12 rounded-full border border-primary text-primary flex items-center justify-center font-bold bg-primary/5">24</div>
                  <div>
                     <p className="font-bold text-foreground">24/7</p>
                     <p className="text-xs text-muted font-medium">Service</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

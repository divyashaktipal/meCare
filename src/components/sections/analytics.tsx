import { Button } from "@/components/ui/button";

export function Analytics() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Our health analytics solutions</h2>
          <p className="max-w-2xl mx-auto text-muted">A unified platform for data-driven healthcare</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-[250px]">
          {/* Card 1: Wide Card */}
          <div className="lg:col-span-2 rounded-3xl bg-[#4bc9c1]/20 p-8 flex flex-col justify-between overflow-hidden relative">
            <div className="z-10 w-2/3">
               <h3 className="text-2xl font-bold mb-3 text-foreground">Empowering Health professionals</h3>
               <p className="text-sm text-foreground/80 mb-6 line-clamp-3">Provide specialized and personalized care mapping patient data with advanced predictive models for proactive medical advice.</p>
               <Button className="rounded-full bg-white text-[#03112E] shadow hover:bg-gray-50 border border-gray-100 font-bold" size="sm">Learn More</Button>
            </div>
            <img src="./myPhoto.jpg" alt="Analytics" className="absolute right-0 top-0 bottom-0 h-full w-1/3 object-cover rounded-r-3xl" />
          </div>

          {/* Card 2: Square Card Image */}
          <div className="rounded-3xl overflow-hidden relative group">
             <img src="./myPhoto.jpg" alt="Doctor patient" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>

          {/* Card 3: Square Card Image */}
          <div className="rounded-3xl overflow-hidden relative group">
             <img src="./myPhoto.jpg" alt="Stethoscope" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>

          {/* Card 4: Action Card */}
          <div className="rounded-3xl bg-[#0070bc] text-white p-8 flex flex-col justify-between relative overflow-hidden">
             <div className="z-10">
               <div className="bg-white/20 p-2 rounded-xl w-fit mb-4">
                  <div className="w-6 h-6 border-2 border-white/50 rounded-full"></div>
               </div>
               <h3 className="text-xl font-bold mb-2">A Unified platform</h3>
               <p className="text-sm text-white/80 line-clamp-2 mb-6">Gain better insights and predictions safely.</p>
             </div>
             <Button className="rounded-full w-fit bg-white text-[#0070bc] hover:bg-white/90 font-semibold z-10" size="sm">Try Now</Button>
             
             {/* Decorative */}
             <div className="absolute right-0 bottom-0 w-32 h-32 bg-white/10 rounded-tl-[100px]"></div>
          </div>

          {/* Card 5: Square Card Image */}
          <div className="rounded-3xl overflow-hidden relative group">
             <img src="./myPhoto.jpg" alt="Patient hands" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
}

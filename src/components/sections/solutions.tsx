import { Button } from "@/components/ui/button";

export function Solutions() {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 max-w-3xl mx-auto leading-tight">
            Revolutionize with Cutting-Edge<br />Healthcare Solutions
          </h2>
          <p className="text-muted max-w-2xl mx-auto">Providing advanced healthcare tools and platforms to streamline operations and enhance patient care.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto auto-rows-[220px]">
          {/* Card 1: Main Photo */}
          <div className="md:col-span-1 md:row-span-2 rounded-3xl overflow-hidden relative group">
            <img src="./myPhoto.jpg" alt="Doctor measuring blood pressure" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white font-bold text-xl mb-1">Seamless Health care</h3>
              <p className="text-white/80 text-sm">Empathetic care and expert medical advice available 24/7</p>
            </div>
          </div>

          {/* Card 2: Light Green block */}
          <div className="rounded-3xl bg-[#E8F8F5] p-8 flex flex-col justify-between relative group hover:bg-[#d1f1eb] transition-colors">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-xs font-bold text-primary mb-2 uppercase tracking-wide">Video consult</div>
                <h3 className="text-xl font-bold text-foreground">Interactive Virtual Consulting</h3>
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-primary">&rarr;</div>
            </div>
            <img src="./myPhoto.jpg" alt="Video consult UI" className="absolute right-0 bottom-0 w-24 h-24 object-contain rounded-tl-xl opacity-50 mix-blend-multiply" />
          </div>

          {/* Card 3: Dark Blue block (spanning 2 rows on right) */}
          <div className="md:row-span-2 rounded-3xl bg-[#1D3540] text-white p-8 flex flex-col justify-between relative group overflow-hidden">
            <h3 className="text-xl font-bold mb-4 relative z-10 w-2/3 leading-relaxed">Book a consultation directly online easily</h3>
            <div className="relative z-10 mt-auto">
              <Button className="rounded-full bg-white text-[#1D3540] hover:bg-white/90" size="sm">Book Now</Button>
            </div>
            {/* Background pattern placeholder */}
            <div className="absolute right-0 top-0 bottom-0 w-2/3 bg-white/5 rounded-l-full transform translate-x-12"></div>
            <img src="./myPhoto.jpg" alt="Calendar UI" className="absolute bottom-4 right-4 w-32 object-contain opacity-80" />
          </div>

          {/* Card 4: Light Pink block */}
          <div className="rounded-3xl bg-[#FFF0F4] p-8 flex flex-col justify-between group hover:bg-[#ffe3ea] transition-colors">
            <div className="flex justify-between items-end h-full">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">In-Person Consult</h3>
                <div className="text-sm font-medium text-muted">Total health overviews</div>
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-pink-500">&rarr;</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";

export function ServiceHero() {
  return (
    <section className="bg-[#F4FAF8] pt-16 md:pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-[#03112E] max-w-4xl mx-auto mb-6 leading-tight">
          Discover Our Complete<br/>Range of Services
        </h1>
        
        <p className="text-[#4B5563] mt-4 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8 font-medium">
          Explore the comprehensive suite of services we provide,<br className="hidden md:block"/> designed to address all of your healthcare needs.
        </p>

        <div className="flex justify-center mb-16">
           <Button className="rounded-full bg-[#5ACDCA] hover:bg-[#4bc9c1] text-white px-8 h-11 shadow-sm font-medium">
              Explore More
           </Button>
        </div>

        <div className="relative aspect-video md:aspect-[21/9] rounded-[2rem] overflow-hidden shadow-xl max-w-5xl mx-auto border-4 border-white/50">
           <div className="absolute inset-0 bg-[#F4FAF8]/20"></div>
           <img src="./myPhoto.jpg" alt="Doctor Hands" className="w-full h-full object-cover object-center relative z-10" />
        </div>
      </div>
    </section>
  );
}

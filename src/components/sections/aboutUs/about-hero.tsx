import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AboutHero() {
   return (
      <section className="bg-[#F4F9F8] pt-20 md:pt-28 pb-16 md:pb-24 px-4 md:px-8">
         <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
               <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#0B1221] leading-[1.1] mb-6 tracking-tight max-w-4xl mx-auto">
                  Meet our Healthcare Team: <br className="hidden md:block" />
                  Committed to Your Well-Being
               </h1>
               <p className="text-[#4A5568] text-base md:text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
                  Our healthcare team combines expertise, compassion, and a commitment to your <br className="hidden md:block" /> well-being, ensuring you receive personalized
               </p>

               <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Link href="/doctors">
                     <Button className="bg-[#5BC2A8] hover:bg-[#4BA891] text-white rounded-full px-6 py-2 h-auto text-base font-medium transition-all shadow-sm">
                        Meet Our Consultations
                     </Button>
                  </Link>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
               <div className="w-full rounded-[2rem] overflow-hidden aspect-[4/3] md:aspect-[5/4] lg:aspect-[4/3]">
                  <img src="./aboutImg1.png" alt="Medical team" className="w-full h-full object-cover" />
               </div>
               <div className="w-full rounded-[2rem] overflow-hidden aspect-[4/3] md:aspect-[5/4] lg:aspect-[4/3]">
                  <img src="./aboutImg2.png" alt="Doctor examining patient" className="w-full h-full object-cover" />
               </div>
            </div>
         </div>
      </section>
   );
}

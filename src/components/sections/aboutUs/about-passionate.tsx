import { passionateCardsData, aboutPassionateData } from "@/constants/about";
import { PassionateCard } from "@/types/about";

export function AboutPassionate() {
   return (
      <section className="py-20 bg-background">
         <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

               <div className="order-2 lg:order-1 space-y-8">
                  <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                     {aboutPassionateData.titleLine1}<br />{aboutPassionateData.titleLine2}
                  </h2>
                  <p className=" text-lg max-w-md">
                     {aboutPassionateData.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                     {passionateCardsData.map((card: PassionateCard, index: number) => {
                        const Icon = card.icon;
                        return (
                           <div key={index} className="flex flex-col gap-2">
                              <div className="w-8 h-8 rounded-md shadow-lg bg-primary/75 text-primary flex items-center justify-center text-xs">
                                 <Icon />
                              </div>
                              <h4 className="font-bold text-foreground">{card.title}</h4>
                           </div>
                        );
                     })}
                  </div>
               </div>

               <div className="order-1 lg:order-2 relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-primary/10">
                  <div className="absolute right-0 top-0 w-2/3 h-full bg-primary/20 rounded-l-[100px] blur-2xl"></div>
                  <img src={aboutPassionateData.image.src} alt={aboutPassionateData.image.alt} className="w-full h-full object-cover relative z-10" />
               </div>
            </div>
         </div>
      </section>
   );
}

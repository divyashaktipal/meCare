import { Building2, Flag, MessageSquarePlus, Hourglass } from "lucide-react";

export function AboutStats() {
   const stats = [
      {
         icon: Building2,
         title: "500k+corp",
         subtitle: "Subscribed Hospital/clinic"
      },
      {
         icon: Flag,
         title: "32+ Countries",
         subtitle: "Countries supports"
      },
      {
         icon: MessageSquarePlus,
         title: "98% Satisfied",
         subtitle: "Satisfied users"
      },
      {
         icon: Hourglass,
         title: "Time Savings",
         subtitle: "By automating system"
      }
   ];

   return (
      <section className="py-12 md:py-16 px-4 md:px-8">
         <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row flex-wrap justify-between items-center gap-8 md:gap-4">
               {stats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-4 text-left w-full sm:w-[45%] md:w-auto">
                     <div className="w-16 h-16 rounded-full bg-[#5BC2A8] flex items-center justify-center shrink-0">
                        <stat.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                     </div>
                     <div className="flex flex-col">
                        <h3 className="font-semibold text-[#0B1221] text-lg md:text-xl">
                           {stat.title}
                        </h3>
                        <p className="text-[#64748B] text-sm md:text-base">
                           {stat.subtitle}
                        </p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}

import { wellBeingCardsData, aboutWellBeingData } from "@/constants/about";
import { WellBeingCard } from "@/types/about";

export function AboutWellBeing() {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">{aboutWellBeingData.titleLine1}<br />{aboutWellBeingData.titleLine2}</h2>
          <p className="text-muted max-w-2xl mx-auto">{aboutWellBeingData.description}</p>
        </div>

        <div className="relative max-w-4xl mx-auto rounded-4xl overflow-hidden group shadow-xl mb-12">
          <img src={aboutWellBeingData.image.src} alt={aboutWellBeingData.image.alt} className="w-full aspect-[21/9] object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center transition-colors group-hover:bg-black/30">
            <button className="w-16 h-16 rounded-full bg-white/90 text-primary flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
              <span className="ml-1 text-2xl">▶</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {wellBeingCardsData.map((card: WellBeingCard, index: number) => {
            const Icon = card.icon;
            return (
              <div key={index} className={`${card.bgColor} rounded-3xl p-8 hover:shadow-md transition-shadow`}>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <Icon />
                </div>
                <h4 className="font-bold text-lg mb-2">{card.title}</h4>
                <p className="text-sm text-muted">{card.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

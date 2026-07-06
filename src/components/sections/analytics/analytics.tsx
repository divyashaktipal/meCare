import { Button } from "@/components/ui/button";
import { analyticsSectionData, ArrowRightUpIcon } from "@/constants/analytics.constants";

export function Analytics() {
  const [card1, card2, card3, card4, card5] = analyticsSectionData.cards;

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl tracking-tight mb-4" style={{ fontWeight: 600 }}>{analyticsSectionData.heading}</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">{analyticsSectionData.subheading}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-[250px]">
          {/* Card 1 */}
          <div className="lg:col-span-2 rounded-3xl bg-[#4bc9c1]/20 p-8 flex flex-col justify-between overflow-hidden relative">
            <div className="z-10 w-2/3">
              <h3 className="text-2xl md:text-3xl mb-3 text-foreground" style={{ fontWeight: 600 }}>{card1.title}</h3>
              <p className="text-md md:text-sm text-foreground/80 mt-4 line-clamp-3 font-card-desc" style={{ fontWeight: 400 }}>{card1.description}</p>
              <Button className="rounded w-fit text-[#0D1525] mt-12 bg-white hover:bg-gray-100" size="sm" style={{ fontWeight: 400 }}>{card1.buttonText}</Button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-3xl overflow-hidden relative group">
            <img src={card2.imageSrc} alt={card2.imageAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>

          {/* Card 3 */}
          <div className="rounded-3xl overflow-hidden relative group">
            <img src={card3.imageSrc} alt={card3.imageAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>

          {/* Card 4 */}
          <div className="rounded-3xl bg-[#0070bc] text-white p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="z-10">
              <h3 className="text-xl mb-5 text-white" style={{ fontWeight: 400 }}>{card4.title}</h3>
              <p className="text-sm text-white/80 line-clamp-2 mb-5 font-card-desc" style={{ fontWeight: 400 }}>{card4.description}</p>
            </div>
            <Button className="rounded w-fit text-[#0D1525] z-10 bg-white hover:bg-gray-100" size="sm" style={{ fontWeight: 400 }}>
              {card4.buttonText}
              <ArrowRightUpIcon className="ml-1 inline-block" />
            </Button>
            <div className="absolute right-0 bottom-0 w-32 h-32 bg-white/10 rounded-tl-[100px]"></div>
          </div>

          {/* Card 5 */}
          <div className="rounded-3xl overflow-hidden relative group">
            <img src={card5.imageSrc} alt={card5.imageAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </div>
    </section >
  );
}


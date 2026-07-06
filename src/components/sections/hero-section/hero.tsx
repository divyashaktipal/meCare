import { Button } from "@/components/ui/button";
import Link from "next/link";
import { heroSectionData } from "@/constants/hero-section";

export function Hero() {
  return (
    <div className="relative pt-6 pb-12 w-full">

      {/* Top Hero Card */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#265043] to-[#066a4f] rounded-xl md:rounded-xl mx-4 md:mx-8 lg:mx-16 pt-2 md:pt-8 lg:pt-10 pb-0 text-center flex flex-col items-center shadow-sm relative min-h-[450px] md:min-h-[550px] lg:min-h-[100px]">
        <div className="max-w-6xl w-full h-full relative flex justify-center mt-auto">

          {/* Background Text */}
          <h1 className="text-5xl md:text-[80px] lg:text-[110px] tracking-tighter text-white/90 drop-shadow-sm absolute top-[10%] md:top-[12%] left-1/2 -translate-x-1/2 w-full text-center z-0 whitespace-nowrap" style={{ fontWeight: 600 }}>
            {heroSectionData.bgTitle}
          </h1>

          {/* Center Image */}
          <div className="relative w-full max-w-2xl mx-auto h-[350px] md:h-[450px] lg:h-[500px] z-10 pt-16 md:pt-0">
            <div className="absolute inset-0 flex items-end justify-center z-10">
              <img src={heroSectionData.mainImageSrc} alt={heroSectionData.mainImageAlt} className="h-[95%] md:h-[100%] object-contain object-bottom drop-shadow-2xl relative z-10" />
            </div>
          </div>

          {/* Bottom Left Text */}
          <div className="absolute bottom-10 lg:bottom-16 left-6 lg:left-12 max-w-[280px] text-left hidden md:block z-20">
            <p className="text-[#03112E] text-[15px] leading-relaxed" style={{ fontWeight: 400 }}>
              {heroSectionData.descriptionDesktop}
            </p>
          </div>

          {/* Bottom Right Button */}
          <div className="absolute bottom-10 lg:bottom-16 right-6 lg:right-12 hidden md:block z-20">
            <Link href={heroSectionData.buttonLink}>
              <Button className=" h-12 px-8 cursor-pointer shadow-md transition-transform hover:scale-105 active:scale-95" style={{ fontWeight: 400 }}>
                {heroSectionData.buttonText}
              </Button>
            </Link>
          </div>

          {/* Mobile Text & Button (Shown only below md) */}
          <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-4 md:hidden z-20">
            <p className="text-[#03112E] text-sm text-center bg-white/40 backdrop-blur p-2 rounded-xl" style={{ fontWeight: 400 }}>
              {heroSectionData.descriptionMobile}
            </p>
            <Link href={heroSectionData.buttonLink}>
              <Button className="rounded-full bg-[#5ACDCA] text-white hover:bg-[#4bc9c1] h-10 shadow-md" style={{ fontWeight: 400 }}>
                {heroSectionData.buttonText}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom Feature Cards - Displayed with Gap Below Hero */}
      <div className="relative z-20 mx-4 md:mx-8 lg:mx-16 mt-6 md:mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 w-full">
          {heroSectionData.cards.map((card, idx) => {
            const IconComponent = card.icon;
            const buttonClass = card.buttonStyle === "round"
              ? "rounded-full bg-[#03112E] text-white hover:bg-[#03112E]/90 h-11 px-6 w-fit shadow-md cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95"
              : "rounded-xl bg-[#03112E] text-white hover:bg-[#03112E]/90 h-11 px-2 w-fit shadow-md cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95";

            const iconContainerClass = idx === 1
              ? "w-[46px] h-[46px] bg-white rounded-full flex items-center justify-center shadow-sm shrink-0 text-[#5ACDCA]"
              : "w-[46px] h-[46px] bg-white rounded-full flex items-center justify-center shadow-sm shrink-0";

            return (
              <div key={idx} className={`${card.bgColor} rounded-xl p-6 shadow-sm border border-transparent hover:border-gray-100 flex flex-col h-[230px]`}>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl lg:text-2xl text-[#03112E]" style={{ fontWeight: 400 }}>{card.title}</h3>
                  <div className={iconContainerClass}>
                    <span className="w-5 h-5 inline-block">
                      <IconComponent className="w-full h-full" />
                    </span>
                  </div>
                </div>
                <p className="text-[15px] text-[#4B5563] leading-relaxed pr-4 font-card-desc" style={{ fontWeight: 400 }}>
                  {card.description}
                </p>
                <div className="mt-auto">
                  <Link href={card.buttonLink}>
                    <Button className={buttonClass} style={{ fontWeight: 400 }}>
                      {card.buttonText}
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

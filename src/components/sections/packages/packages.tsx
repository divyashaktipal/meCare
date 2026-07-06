"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { packagesSectionData } from "@/constants/packages.constants";
import { PackageIcon } from "@/assests/svgIcons/specialties";

export function Packages() {
  const [cart, setCart] = useState<Record<number, number>>({});

  const handleAdd = (index: number) => {
    setCart(prev => ({ ...prev, [index]: 1 }));
  };

  const handleNext = (index: number) => {
    setCart(prev => ({ ...prev, [index]: prev[index] + 1 }));
  };

  const handlePrev = (index: number) => {
    setCart(prev => {
      const current = prev[index];
      if (current <= 1) {
        const newCart = { ...prev };
        delete newCart[index];
        return newCart;
      }
      return { ...prev, [index]: current - 1 };
    });
  };

  return (
    <section className="py-20 bg-[#09181e] text-[#dcdbd8]" id="packages">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4" dangerouslySetInnerHTML={{ __html: packagesSectionData.title.replace("Packages", "<br />Packages") }}></h2>
          <p className="text-muted-foreground md:text-base font-normal max-w-lg mx-auto">{packagesSectionData.subtitle}</p>
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          {packagesSectionData.filterPills.map((pill, idx) => (
            <Button
              key={idx}
              variant="outline"
              className={
                idx === 0
                  ? "rounded-full px-6 bg-[#5ACDCA] hover:bg-[#4bc9c1] text-white border-transparent"
                  : "rounded-full px-6 bg-white border-gray-200 font-semibold hover:bg-gray-50 text-[#03112E]"
              }
            >
              {pill}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {packagesSectionData.packages.map((pkg, i) => (
            <div key={i} className={`rounded-[2rem] p-8 transition-shadow relative flex flex-col`}>
              <div className="absolute top-6 left-6 w-10 h-10 flex items-center justify-center text-lg">
                <PackageIcon className="text-[#F88C8C]" />
              </div>

              <div className="mt-14 mb-8">
                <h3 className="text-[20px] font-extrabold mb-2 leading-tight">{pkg.name}</h3>
                <p className="text-[13px] font-semibold text-muted-foreground">{pkg.desc}</p>
              </div>

              <div className="flex items-center justify-between mt-auto pt-4">
                <p className="text-2xl font-bold text-primary">{pkg.price}.00</p>
                {!cart[i] ? (
                  <Button
                    onClick={() => handleAdd(i)}
                    className="bg-primary font-bold h-9 px-6 text-[#03112E] hover:text-[#03112E]"
                  >
                    Add
                  </Button>
                ) : (
                  <div className="flex items-center bg-white rounded-full border border-[#5ACDCA] p-1 shadow-sm h-9">
                    <button
                      onClick={() => handlePrev(i)}
                      className="w-7 h-7 flex items-center justify-center rounded-full bg-[#F4FAF8] text-[#5ACDCA] hover:bg-[#5ACDCA] hover:text-white transition-colors font-bold text-lg leading-none"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-bold text-[#03112E] text-sm">{cart[i]}</span>
                    <button
                      onClick={() => handleNext(i)}
                      className="w-7 h-7 flex items-center justify-center rounded-full bg-[#5ACDCA] text-white hover:bg-[#4bc9c1] transition-colors font-bold text-lg leading-none"
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

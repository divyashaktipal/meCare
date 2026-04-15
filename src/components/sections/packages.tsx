"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Packages() {
  const packages = [
    { name: "Comprehensive Health Check-up", price: "$150", status: "Active", bg: "bg-[#F4FAF8]" },
    { name: "General Health Check-up", price: "$100", status: "Active", bg: "bg-[#F4FAF8]" },
    { name: "Premium Health Check-up", price: "$250", status: "Active", bg: "bg-[#F4FAF8]" },
  ];

  // Store quantities keyed by index
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
    <section className="py-20 bg-background" id="packages">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-[#03112E]">Exclusive Health Check-up<br />Packages</h2>
          <p className="text-[#4B5563] text-sm md:text-base font-medium max-w-lg mx-auto">Get comprehensive health evaluations from our expert professionals.</p>
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          <Button variant="primary" className="rounded-full h-10 px-6 bg-[#5ACDCA] hover:bg-[#4bc9c1] text-white">All</Button>
          <Button variant="outline" className="rounded-full h-10 px-6 bg-white border-gray-200 text-[#4B5563] font-semibold hover:bg-gray-50">Standard</Button>
          <Button variant="outline" className="rounded-full h-10 px-6 bg-white border-gray-200 text-[#4B5563] font-semibold hover:bg-gray-50">Basic</Button>
          <Button variant="outline" className="rounded-full h-10 px-6 bg-white border-gray-200 text-[#4B5563] font-semibold hover:bg-gray-50">Premium</Button>
          <Button variant="outline" className="rounded-full h-10 px-6 bg-white border-gray-200 text-[#4B5563] font-semibold hover:bg-gray-50">Custom</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, i) => (
            <div key={i} className={`rounded-[2rem] border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow relative ${pkg.bg} flex flex-col`}>
              <div className="absolute top-6 left-6 w-10 h-10 rounded-full bg-[#fddbd7] flex items-center justify-center text-[#e5776d] shadow-sm text-lg border border-white">
                ❤️
              </div>

              <div className="mt-14 mb-8">
                <h3 className="text-[20px] font-extrabold text-[#03112E] mb-2 leading-tight">{pkg.name}</h3>
                <p className="text-[#4B5563] text-[13px] font-semibold">Valid 1 Year</p>
              </div>

              <div className="flex items-center justify-between mt-auto pt-4">
                <p className="text-2xl font-extrabold text-[#03112E]">{pkg.price}</p>

                {/* Dynamic Add / Increment Controller */}
                {!cart[i] ? (
                  <Button
                    onClick={() => handleAdd(i)}
                    className="rounded-full bg-[#5ACDCA] text-white font-bold h-9 px-6 hover:bg-[#4bc9c1] shadow-sm"
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

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Packages() {
  const packages = [
    { name: "Women’s Staying Strong Health Checkup", desc: "Includes 32 Tests", price: "$150", status: "Active", bg: "bg-[#F4FAF8]" },
    { name: "Medicare Diabetes Screening", desc: "Includes 12 Tests", price: "$100", status: "Active", bg: "bg-[#F4FAF8]" },
    { name: "Medicare full body Health checkup", desc: "Includes 18 Tests", price: "$250", status: "Active", bg: "bg-[#F4FAF8]" },
  ];
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
    <section className="py-20 bg-muted/80" id="packages">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Exclusive Health Check-up<br />Packages</h2>
          <p className="text-muted-foreground md:text-base font-normal max-w-lg mx-auto">Discover our Exclusive Health Check-up Packages, designed to provide comprehensive tailored to your unique health needs.</p>
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          <Button variant="outline" className="rounded-full px-6 bg-[#5ACDCA] hover:bg-[#4bc9c1] text-white">All Tests</Button>
          <Button variant="outline" className="rounded-full px-6 bg-white border-gray-200 font-semibold hover:bg-gray-50">Full body check up</Button>
          <Button variant="outline" className="rounded-full px-6 bg-white border-gray-200 font-semibold hover:bg-gray-50">Diabetes</Button>
          <Button variant="outline" className="rounded-full px-6 bg-white border-gray-200 font-semibold hover:bg-gray-50">Heart</Button>
          <Button variant="outline" className="rounded-full px-6 bg-white border-gray-200 font-semibold hover:bg-gray-50">Cancer</Button>
          <Button variant="outline" className="rounded-full px-6 bg-white border-gray-200 font-semibold hover:bg-gray-50">Vitamin</Button>
          <Button variant="outline" className="rounded-full px-6 bg-white border-gray-200 font-semibold hover:bg-gray-50">Women Health</Button>
          <Button variant="outline" className="rounded-full px-6 bg-white border-gray-200 font-semibold hover:bg-gray-50">Skin care</Button>
          <Button variant="outline" className="rounded-full px-6 bg-white border-gray-200 font-semibold hover:bg-gray-50">Liver</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, i) => (
            <div key={i} className={`rounded-[2rem] p-8 transition-shadow relative flex flex-col`}>
              <div className="absolute top-6 left-6 w-10 h-10 flex items-center justify-center text-lg">
                <svg width="31" height="48" viewBox="0 0 31 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.9062 0H7.03125C3.15422 0 0 3.15422 0 7.03125V32.3438C0 36.2208 3.15422 39.375 7.03125 39.375H11.25V48H19.6875V39.375H23.9062C27.7833 39.375 30.9375 36.2208 30.9375 32.3438V7.03125C30.9375 3.15422 27.7833 0 23.9062 0ZM16.875 45.1875H14.0625V42.1875H16.875V45.1875ZM14.0625 39.375V33.75H16.875V39.375H14.0625ZM28.125 32.3438C28.125 34.67 26.2325 36.5625 23.9062 36.5625H19.6875V33.75H22.5V30.9375H8.4375V33.75H11.25V36.5625H7.03125C4.70503 36.5625 2.8125 34.67 2.8125 32.3438V7.03125C2.8125 4.70503 4.70503 2.8125 7.03125 2.8125H23.9062C26.2325 2.8125 28.125 4.70503 28.125 7.03125V32.3438Z" fill="#F88C8C" />
                  <path d="M15.4688 10.1836C14.4514 11.6577 13.745 12.6328 12.8461 14.1823C11.4155 16.6485 11.25 17.7037 11.25 18.2829C11.25 20.6092 13.1425 22.5017 15.4688 22.5017C17.795 22.5017 19.6875 20.6092 19.6875 18.2829C19.6875 17.7037 19.522 16.6485 18.0914 14.1823C17.1925 12.6328 16.486 11.6575 15.4688 10.1836ZM15.4688 19.6892C14.6933 19.6892 14.0625 19.0583 14.0625 18.2846C14.0739 17.8548 14.6588 16.6294 15.4688 15.2648C16.2783 16.6289 16.863 17.8537 16.875 18.2842C16.8744 19.0589 16.2438 19.6892 15.4688 19.6892Z" fill="#F88C8C" />
                  <path d="M5.625 26.125C5.625 27.2296 6.52043 28.125 7.625 28.125H23.3125C24.4171 28.125 25.3125 27.2296 25.3125 26.125V7.625C25.3125 6.52043 24.4171 5.625 23.3125 5.625H7.625C6.52043 5.625 5.625 6.52043 5.625 7.625V26.125ZM8.4375 8.4375H22.5V25.3125H8.4375V8.4375Z" fill="#F88C8C" />
                </svg>
              </div>

              <div className="mt-14 mb-8">
                <h3 className="text-[20px] font-extrabold mb-2 leading-tight">{pkg.name}</h3>
                <p className="text-[13px] font-semibold text-muted-foreground">Includes 32 Tests</p>
              </div>

              <div className="flex items-center justify-between mt-auto pt-4">
                <p className="text-2xl font-bold text-primary">{pkg.price}.00</p>
                {!cart[i] ? (
                  <Button
                    onClick={() => handleAdd(i)}
                    className="bg-primary font-bold h-9 px-6"
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

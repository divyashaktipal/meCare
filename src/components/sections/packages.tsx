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
          <p className="text-[#4B5563] text-sm md:text-base font-medium max-w-lg mx-auto">Discover our Exclusive Health Check-up Packages, designed to provide comprehensive tailored to your unique health needs.</p>
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
            <div key={i} className={`rounded-[2rem]  p-8 transition-shadow relative flex flex-col`}>
              <div className="absolute top-6 left-6 w-10 h-10 flex items-center justify-center text-[#e5776d] text-lg border border-white">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_7140_13399)">
                    <path d="M46.2796 20.1119C44.0326 17.8649 40.4917 17.785 38.1501 19.7701C35.8098 17.7862 32.2682 17.8639 30.0205 20.1119C27.9592 22.173 27.7257 25.3976 29.4527 27.9533C30.4709 29.46 32.8461 31.4743 36.7017 34.0999V36.7018C36.7017 39.037 34.802 40.9366 32.4669 40.9366C30.1317 40.9366 28.232 39.037 28.232 36.7018V35.996C28.232 33.2718 26.0156 31.0553 23.2914 31.0553C20.5672 31.0553 18.3508 33.2718 18.3508 35.996V42.3482C18.3508 43.9049 17.0843 45.1714 15.5276 45.1714C13.9709 45.1714 12.7044 43.9049 12.7044 42.3482V33.6358C14.3474 33.0531 15.5276 31.484 15.5276 29.6437V27.4074C19.6622 25.7287 22.5856 21.6692 22.5856 16.9393V2.82321H16.9392V0H14.116V8.46964H16.9392V5.64643H19.7624V11.2929C19.7624 15.963 15.9629 19.7625 11.2928 19.7625C6.6226 19.7625 2.82312 15.963 2.82312 11.2929V5.64643H5.64633V8.46964H8.46955V0H5.64643V2.82321H0V16.9393C0 21.6693 2.92344 25.7287 7.05803 27.4074V29.6437C7.05803 31.5261 8.27399 33.0709 9.88125 33.6381V42.3482C9.88125 45.4616 12.4142 47.9946 15.5277 47.9946C18.6411 47.9946 21.1741 45.4616 21.1741 42.3482V35.996C21.1741 34.8285 22.124 33.8786 23.2915 33.8786C24.459 33.8786 25.4089 34.8285 25.4089 35.996V36.7018C25.4089 40.5936 28.5752 43.7598 32.467 43.7598C36.3588 43.7598 39.525 40.5936 39.525 36.7018V34.1439C42.4734 32.1168 45.5822 29.8253 46.8475 27.9532C48.5744 25.3975 48.3409 22.1731 46.2796 20.1119ZM3.08794 19.0441C7.54711 23.7619 15.0298 23.771 19.4977 19.0441C18.5594 22.6995 15.2367 25.4091 11.2929 25.4091C7.34901 25.4091 4.02619 22.6995 3.08794 19.0441ZM12.7045 28.1442V29.6439C12.7045 30.4223 12.0712 31.0555 11.2929 31.0555C10.5135 31.0555 9.88125 30.4234 9.88125 29.6439V28.1442C10.7984 28.259 11.7462 28.2641 12.7045 28.1442ZM44.5082 26.3727C43.4382 27.956 39.9534 30.4219 38.1449 31.6671C33.9064 28.7692 32.3468 27.1937 31.792 26.3727C30.833 24.9534 30.9254 23.1998 32.017 22.1083C33.263 20.8621 35.2784 20.8619 36.5249 22.1083L38.1502 23.7335L39.7755 22.1083C41.0216 20.8622 43.037 20.8619 44.2834 22.1083C45.3749 23.1997 45.4674 24.9534 44.5082 26.3727Z" fill="#F88C8C" />
                  </g>
                  <defs>
                    <clipPath id="clip0_7140_13399">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>


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

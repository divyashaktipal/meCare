"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-24 bg-[#F4FAF8]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 text-[#03112E]">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[#03112E]">Choose your pricing plan</h2>
          <p className="text-[#4B5563] text-sm md:text-base font-medium">Browse through our tailored pricing plans and choose the one that<br className="hidden md:block"/> best fits your needs.</p>
          
          <div className="flex items-center justify-center gap-4 mt-10">
             <span className={`text-sm font-bold transition-colors cursor-pointer ${!isYearly ? 'text-[#03112E]' : 'text-[#4B5563]'}`} onClick={() => setIsYearly(false)}>Monthly</span>
             <button 
               onClick={() => setIsYearly(!isYearly)}
               className="w-[52px] h-7 rounded-full relative shadow-sm bg-[#5ACDCA] flex items-center px-1"
             >
               <span className={`w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-300 ${isYearly ? 'translate-x-[24px]' : 'translate-x-0'}`}></span>
             </button>
             <span className={`text-sm font-bold transition-colors cursor-pointer ${isYearly ? 'text-[#03112E]' : 'text-[#4B5563]'}`} onClick={() => setIsYearly(true)}>Yearly</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-4xl mx-auto items-stretch">
           {/* Basic Plan */}
           <div className="rounded-[2.5rem] p-8 md:p-12 bg-[#E6F4F1] border-0 flex flex-col shadow-sm">
               <h3 className="text-2xl font-bold text-[#03112E] mb-2">Basic Package</h3>
               <p className="text-sm text-[#4B5563] mb-8 font-medium leading-relaxed">Vital Tools for Streamlined Healthcare<br className="hidden lg:block"/> Management</p>
               
               <div className="flex items-end gap-1 mb-10">
                 <span className="text-[3.5rem] leading-none font-bold text-[#5ACDCA] tracking-tight">{isYearly ? '$250' : '$25'}</span>
                 <span className="text-[#4B5563] font-medium pb-2 text-xs uppercase tracking-wide">/{isYearly ? 'year' : 'month'}</span>
               </div>
               
               <ul className="space-y-5 mb-12 flex-1">
                 {['Essential Healthcare management', 'Simplicity and affordability', 'Comprehensive Healthcare Management', 'Cost-Effective Solution'].map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#4B5563] font-medium">
                       <span className="w-[22px] h-[22px] mt-0.5 rounded-full bg-[#5ACDCA] text-white flex justify-center items-center text-[10px] flex-shrink-0">✓</span>
                       <span className="leading-snug">{feat}</span>
                    </li>
                 ))}
               </ul>
               
               <Button 
                  className="w-full rounded-full bg-white hover:bg-white/90 border-none h-12 md:h-14 font-bold shadow-sm" 
                  style={{ color: '#03112E' }}
               >
                 Choose Your Plan
               </Button>
           </div>
           
           {/* Pro Plan */}
           <div className="rounded-[2.5rem] p-8 md:p-12 bg-[#1A3B47] text-white flex flex-col shadow-xl">
               <h3 className="text-2xl font-bold text-white mb-2">Pro Package</h3>
               <p className="text-sm text-white/70 mb-8 font-medium leading-relaxed">Cutting-Edge Tools for Effortless<br className="hidden lg:block"/> Healthcare Management</p>
               
               <div className="flex items-end gap-1 mb-10">
                 <span className="text-[3.5rem] leading-none font-bold text-[#5ACDCA] tracking-tight">${isYearly ? '880' : '88'}</span>
                 <span className="text-white/70 font-medium pb-2 text-xs uppercase tracking-wide">/{isYearly ? 'year' : 'month'}</span>
               </div>
               
               <ul className="space-y-5 mb-12 flex-1">
                 {['Comprehensive Healthcare Management', 'Enhanced efficiency', 'Cost-effective solutions', 'Scalability and Customization'].map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white font-medium">
                       <span className="w-[22px] h-[22px] mt-0.5 rounded-full bg-[#5ACDCA] text-white flex justify-center items-center text-[10px] flex-shrink-0 shadow-[0_2px_8px_rgba(90,205,202,0.4)]">✓</span>
                       <span className="leading-snug">{feat}</span>
                    </li>
                 ))}
               </ul>
               
               <Button className="w-full rounded-full bg-[#5ACDCA] hover:bg-[#4bc9c1] border-none text-white h-12 md:h-14 font-bold shadow-lg">Choose Your Plan</Button>
           </div>
        </div>
      </div>
    </section>
  );
}

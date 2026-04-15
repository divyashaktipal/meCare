"use client";

import Link from "next/link";
import { useRef } from "react";

export function BlogSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };
  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-16 border-b border-gray-100 pb-12">
           <div className="flex-1">
              <h1 className="text-4xl md:text-[54px] lg:text-[54px] font-bold tracking-tight text-[#03112E] mb-6">The Mecare Blog</h1>
              <p className="text-[#4B5563] text-sm md:text-base font-medium max-w-lg leading-relaxed">Boost your sales by staying informed. Explore expert insights and the latest trends, brought to you by Mecare.</p>
           </div>
           <div className="w-full md:w-[420px]">
              <div className="relative flex items-center bg-transparent">
                 <div className="absolute left-5 opacity-50 text-gray-500">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                 </div>
                 <input className="w-full h-14 pl-12 pr-[130px] rounded-full border border-gray-200 outline-none focus:border-[#5ACDCA] text-sm font-medium" placeholder="hipixem@gmail.com" />
                 <button className="absolute right-1 w-[120px] h-12 rounded-full bg-[#5ACDCA] text-white font-bold text-sm hover:bg-[#4bc9c1] transition-colors">Subscribe</button>
              </div>
           </div>
        </div>

        {/* Featured Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
           {/* Left Large Feature */}
           <div className="lg:col-span-7 group">
              <Link href={`/blog/1`} className="block">
                 <div className="rounded-3xl overflow-hidden aspect-[16/9] mb-6 border border-gray-100 relative">
                    <img src="./myPhoto.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Blog Featured" />
                 </div>
                 <h2 className="text-2xl md:text-[28px] font-bold text-[#03112E] group-hover:text-[#5ACDCA] transition-colors mb-4 pr-10 leading-tight">Elevating Patient Engagement Through Innovative Technology Solutions</h2>
                 <div className="flex items-center gap-4 text-xs font-semibold text-[#4B5563]">
                    <div className="flex items-center gap-2 text-[#03112E]">
                       <img src="./myPhoto.jpg" className="w-6 h-6 rounded-full" alt="Author" /> Joanna Kaminska
                    </div>
                    <span>26 august 2024</span>
                    <span className="px-3 py-1 bg-[#E6F4F1] text-[#5ACDCA] rounded-[6px] text-[10px] uppercase font-bold tracking-wider">Healthcare</span>
                 </div>
              </Link>
           </div>
           
           {/* Right List Features */}
           <div className="lg:col-span-5 flex flex-col gap-6">
              {[2,3,4].map((id) => (
                <Link key={id} href={`/blog/${id}`} className="group flex gap-5 items-center justify-start rounded-2xl p-2 -ml-2 hover:bg-gray-50 transition-colors">
                   <div className="w-[140px] h-[100px] rounded-[18px] overflow-hidden flex-shrink-0 border border-gray-100">
                      <img src="./myPhoto.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Blog Thumb" />
                   </div>
                   <div className="flex-1 py-1">
                      <div className="flex items-center gap-1.5 text-[#5ACDCA] text-[11px] uppercase font-bold tracking-wider mb-2">
                         <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg> Diagnostic services
                      </div>
                      <h3 className="font-bold text-[#03112E] text-[15px] leading-snug group-hover:text-[#5ACDCA] transition-colors mb-2 pr-4">Advanced Diagnostic Imaging: Explore Our Full Range of X-Ray Services</h3>
                      <div className="text-xs text-[#4B5563] font-semibold">Kimberlee Meier</div>
                   </div>
                </Link>
              ))}
           </div>
        </div>

        {/* Filter Area */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10 mt-6 border-b border-gray-100 pb-6">
           <div className="relative w-full sm:w-[320px]">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40">
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </div>
              <input className="w-full h-11 pl-12 pr-4 rounded-full border border-gray-200 outline-none text-sm focus:border-[#5ACDCA] font-medium placeholder-gray-400" placeholder="Search in Mecare Blog" />
           </div>
           
           <div className="flex items-center gap-3 w-full sm:w-auto">
              <span className="text-sm font-bold text-[#03112E] hidden sm:block">Filtered by Categories</span>
              <div className="relative w-full sm:w-auto">
                 <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
                 </div>
                 <select className="w-full sm:w-[160px] h-11 pl-10 pr-10 rounded-full border border-gray-200 outline-none focus:border-[#5ACDCA] appearance-none text-[#4B5563] text-sm bg-white font-semibold cursor-pointer" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%239CA3AF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center'}}>
                    <option>All categories</option>
                    <option>Healthcare</option>
                    <option>Dental</option>
                 </select>
              </div>
           </div>
        </div>

        {/* Scrollable Row (Instead of Grid + Show More) */}
        <div className="flex justify-between items-end mb-6">
           <h2 className="text-2xl font-bold text-[#03112E]">Recent Posts</h2>
           {/* Scroll Controls */}
           <div className="flex gap-3">
              <button onClick={scrollLeft} className="w-10 h-10 rounded-full border border-gray-200 bg-white text-gray-500 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <button onClick={scrollRight} className="w-10 h-10 rounded-full bg-[#5ACDCA] text-white flex items-center justify-center hover:bg-[#4bc9c1] transition-colors shadow-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
              </button>
           </div>
        </div>

        <div className="relative w-full overflow-hidden">
           <div ref={scrollRef} className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth w-full pb-8" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
             <style dangerouslySetInnerHTML={{__html: `::-webkit-scrollbar { display: none; }`}} />
             {[5,6,7,8,9,10].map((id) => (
                <Link key={id} href={`/blog/${id}`} className="flex-shrink-0 snap-start w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group border border-gray-200 rounded-[1.5rem] overflow-hidden flex flex-col hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all bg-white relative">
                   <div className="aspect-[16/10] overflow-hidden">
                      <img src="./myPhoto.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Recent Post" />
                   </div>
                   <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-1.5 text-[#5ACDCA] text-[11px] uppercase tracking-wider font-bold mb-3">
                         <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg> Healthcare services
                      </div>
                      <h3 className="font-bold text-[#03112E] text-lg leading-snug group-hover:text-[#5ACDCA] transition-colors mb-3">
                         Our Dedication to Enhancing Your Overall Wellness
                      </h3>
                      <p className="text-[#4B5563] text-[13px] leading-relaxed mb-6 font-medium line-clamp-2">
                         We take immense pride in nurturing your vitality, dedicating ourselves to supporting your health and...
                      </p>
                      
                      <div className="mt-auto flex items-center justify-between text-[11px] font-bold text-[#4B5563] border-t border-gray-100 pt-5">
                         <span className="uppercase tracking-wide">24 august 2024</span>
                         <div className="flex items-center gap-2 text-[#03112E]">
                            <img src="./myPhoto.jpg" className="w-6 h-6 rounded-full" alt="Author" /> Ravi Patel
                         </div>
                      </div>
                   </div>
                </Link>
             ))}
           </div>
        </div>

      </div>
    </section>
  );
}

"use client";

import { ReactNode, useRef } from "react";

export function Specialists({ customTitle, hideDescription }: { customTitle?: ReactNode, hideDescription?: boolean }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const doctors = [
    { name: "Hassan Qureshi", spec: "Cardiologist", hex: "#719F9F" },
    { name: "Hassan Qureshi", spec: "Cardiologist", hex: "#B4818D" },
    { name: "Hassan Qureshi", spec: "Cardiologist", hex: "#A7977A" },
    { name: "Hassan Qureshi", spec: "Cardiologist", hex: "#7AA1BE" },
    { name: "Hassan Qureshi", spec: "Cardiologist", hex: "#719F9F" },
    { name: "Hassan Qureshi", spec: "Cardiologist", hex: "#B4818D" },
    { name: "Hassan Qureshi", spec: "Cardiologist", hex: "#A7977A" },
    { name: "Hassan Qureshi", spec: "Cardiologist", hex: "#7AA1BE" }
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-background overflow-hidden overflow-x-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          {customTitle ? customTitle : (
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight flex flex-wrap justify-center items-center gap-y-4">
              Designed for
              <span className="inline-flex items-center -space-x-3 mx-3 align-middle mt-1">
                <img src="./myPhoto.jpg" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white relative z-[50] object-cover bg-muted" alt="Doctor 1" />
                <img src="./myPhoto.jpg" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white relative z-[40] object-cover bg-muted" alt="Doctor 2" />
                <img src="./myPhoto.jpg" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white relative z-[30] object-cover bg-muted" alt="Doctor 3" />
                <img src="./myPhoto.jpg" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white relative z-[20] object-cover bg-muted" alt="Doctor 4" />
                <img src="./myPhoto.jpg" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white relative z-[10] object-cover bg-muted" alt="Doctor 5" />
              </span>
              specialists <br className="hidden md:block" /> leading healthcare excellence.
            </h2>
          )}
          {!hideDescription && (
            <p className="text-muted mt-6 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              Discover a platform designed for trailblazing specialists. Our resources empower leaders in healthcare innovation and excellence.
            </p>
          )}
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth w-full pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* style block to also hide webkit scrollbar just in case */}
            <style dangerouslySetInnerHTML={{ __html: `::-webkit-scrollbar { display: none; }` }} />

            {doctors.map((doc, i) => (
              <div key={i} className={`flex-shrink-0 snap-start w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] rounded-[2rem] overflow-hidden relative aspect-[3/4] group border border-border/50`}>
                <div className="absolute inset-0 bg-[#E8EAEF] -z-10"></div>
                {/* Image without mix-blend to keep original color like in screenshot */}
                <img src="./myPhoto.jpg" alt={doc.name} className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105" />

                {/* Colored Gradient overlay matching screenshot */}
                <div
                  className="absolute inset-x-0 bottom-0 h-[60%] opacity-90 transition-opacity duration-500"
                  style={{ background: `linear-gradient(to top, ${doc.hex} 0%, transparent 100%)` }}
                ></div>

                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <div>
                    <h3 className="text-white font-bold text-xl drop-shadow-sm">{doc.name}</h3>
                    <p className="text-white/90 text-sm font-medium mt-1">{doc.spec}</p>
                  </div>
                  {/* Search icon shown on one of the visible cards */}
                  {(i === 3 || i === 7) && (
                    <button className="w-10 h-10 rounded-full border border-white/50 bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/30 transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto flex items-center justify-between relative mt-8 h-12">
          {/* Left Spacer to keep exact centered alignment of dots */}
          <div className="hidden md:block w-32"></div>

          {/* Pagination dots (absolute centered) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-2 items-center">
            <div className="w-10 h-2.5 rounded-full bg-[#5ACDCA]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#5ACDCA]/20"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#5ACDCA]/20"></div>
          </div>

          {/* Nav Arrows (Right Aligned) */}
          <div className="flex gap-4 relative z-10 place-self-end w-full md:w-auto justify-between md:justify-end">
            <button onClick={scrollLeft} className="w-12 h-12 rounded-xl border border-border bg-white text-muted-foreground flex items-center justify-center hover:bg-muted/10 transition-colors shadow-sm">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={scrollRight} className="w-12 h-12 rounded-xl bg-[#5ACDCA] text-white flex items-center justify-center hover:bg-[#4bc9c1] transition-colors shadow-md">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

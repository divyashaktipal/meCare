"use client";

import { ReactNode, useRef, useState, useEffect } from "react";

interface Doctor {
  _id: string;
  name: string;
  specialization: string;
  bgColor: string;
  image: string;
}

export function Specialists({ customTitle, hideDescription }: { customTitle?: ReactNode, hideDescription?: boolean }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/doctors");
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

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
              Designed for specialists leading healthcare excellence.
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
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth w-full pb-4 min-h-[300px]"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <style dangerouslySetInnerHTML={{ __html: `::-webkit-scrollbar { display: none; }` }} />

            {loading ? (
              <div className="flex gap-6 w-full">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="flex-shrink-0 w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] rounded-[2rem] aspect-[3/4] border border-border/50 relative overflow-hidden bg-white">
                    <div className="absolute inset-0 shimmer-bg opacity-60"></div>
                    <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-3 relative z-10">
                      <div className="h-6 shimmer-bg rounded-md w-3/4 shadow-sm"></div>
                      <div className="h-4 shimmer-bg rounded-md w-1/2 shadow-sm"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : doctors.map((doc) => (
              <div key={doc._id} className={`flex-shrink-0 snap-start w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] rounded-[2rem] overflow-hidden relative aspect-[3/4] group border border-border/50`}>
                <div className="absolute inset-0 bg-[#E8EAEF] -z-10"></div>
                <img src={doc.image || "./myPhoto.jpg"} alt={doc.name} className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105" />

                <div
                  className="absolute inset-x-0 bottom-0 h-[60%] opacity-90 transition-opacity duration-500"
                  style={{ background: `linear-gradient(to top, ${doc.bgColor} 0%, transparent 100%)` }}
                ></div>

                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <div>
                    <h3 className="text-white font-bold text-xl drop-shadow-sm">{doc.name}</h3>
                    <p className="text-white/90 text-sm font-medium mt-1">{doc.specialization}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto flex items-center justify-between relative mt-8 h-12">
          <div className="hidden md:block w-32"></div>
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

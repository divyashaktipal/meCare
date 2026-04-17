"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { DoctorsHero } from "@/components/sections/doctors-hero";
import { CTABanner } from "@/components/sections/cta-banner";
import axiosInstance from "@/api/axiosInstance";

interface Doctor {
  _id: string;
  name: string;
  specialization: string;
  experience: number;
  image: string;
  bgColor: string;
}

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axiosInstance.get("/doctors");
        setDoctors(response.data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex-1 overflow-hidden">
        <DoctorsHero />

        <section className="py-16 md:py-24 px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#03112E] text-center mb-12 pb-6 pt-12 flex flex-wrap justify-center items-center gap-y-4 leading-tight md:max-w-4xl mx-auto ">Meet Our Specialists</h2>

          <div className="max-w-6xl mx-auto">
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="relative rounded-[2rem] overflow-hidden aspect-[3/4] border border-border/50 bg-white">
                    <div className="absolute inset-0 shimmer-bg opacity-60"></div>
                    <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-3 relative z-10">
                      <div className="h-6 shimmer-bg rounded-md w-3/4 shadow-sm"></div>
                      <div className="h-4 shimmer-bg rounded-md w-1/2 shadow-sm"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="max-h-[850px] overflow-y-auto pr-2 custom-scrollbar">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {doctors.map((doc) => (
                    <div key={doc._id} className="relative rounded-[2rem] overflow-hidden aspect-[3/4] group border border-border/50">
                      <div className="absolute inset-0 bg-[#E8EAEF] -z-10"></div>
                      <img src={doc.image || "./myPhoto.jpg"} alt={doc.name} className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105" />

                      <div
                        className="absolute inset-x-0 bottom-0 h-[60%] opacity-90 transition-opacity duration-500"
                        style={{ background: `linear-gradient(to top, ${doc.bgColor || '#719F9F'} 0%, transparent 100%)` }}
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
            )}

            {!loading && doctors.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No doctors available at the moment.</p>
              </div>
            )}
          </div>
        </section>
        <CTABanner />
      </main>
      <Footer />
      <style dangerouslySetInnerHTML={{
        __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }
      `}} />
    </>
  );
}

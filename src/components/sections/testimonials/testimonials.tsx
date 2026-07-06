"use client";

import { useState } from "react";
import { testimonialsSectionData, PrevIcon, NextIcon } from "@/constants/testimonials.constants";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonialsSectionData.testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsSectionData.testimonials.length - 1 : prev - 1));
  };

  const activeTestimonial = testimonialsSectionData.testimonials[currentIndex];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl tracking-tight mb-4 max-w-3xl mx-auto" style={{ fontWeight: 600 }} dangerouslySetInnerHTML={{ __html: testimonialsSectionData.title }}></h2>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center bg-background p-10 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm mt-12 transition-all">
          <div className="md:w-1/3 relative w-full flex justify-center">
            <div className={`w-[260px] aspect-square rounded-[2rem] ${activeTestimonial.bgColor} overflow-hidden border-8 border-white p-0 shadow-md transform md:-translate-y-12 transition-colors duration-500`}>
              <img src={activeTestimonial.doctorImg} alt="Doctor" className="w-full h-full object-cover object-top mix-blend-multiply opacity-90" />
            </div>
          </div>

          <div className="md:w-2/3 md:pl-8 text-left flex flex-col space-y-4">
            <div className="text-5xl md:text-6xl text-[#5ACDCA] font-serif leading-none mt-4 md:mt-0">"</div>
            <p className="text-lg md:text-[22px] text-gray-700 leading-relaxed italic min-h-[140px] font-card-desc" style={{ fontWeight: 400 }}>
              "{activeTestimonial.quote}"
            </p>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-t border-gray-100 pt-6 mt-6">

              <div className="flex items-center gap-4 mb-6 sm:mb-0">
                <div className="w-[50px] h-[50px] rounded-full overflow-hidden shadow-sm">
                  <img src={activeTestimonial.patientImg} alt={activeTestimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-[17px] leading-tight" style={{ fontWeight: 400 }}>{activeTestimonial.name}</h4>
                  <p className="text-sm text-gray-400 mt-1" style={{ fontWeight: 400 }}>{activeTestimonial.date}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handlePrev}
                  className="w-[46px] h-[46px] rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors text-[#03112E] hover:text-[#5ACDCA]"
                >
                  <PrevIcon />
                </button>
                <button
                  onClick={handleNext}
                  className="w-[46px] h-[46px] rounded-full bg-[#5ACDCA] text-white flex items-center justify-center shadow-md hover:bg-[#4bc9c1] transition-colors"
                >
                  <NextIcon />
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

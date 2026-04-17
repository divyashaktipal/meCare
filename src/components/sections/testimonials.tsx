"use client";

import { useState } from "react";

const testimonialsData = [
  {
    id: 1,
    quote: "Dr. Hassan is an excellent physician. He takes his time to listen to your concerns. He asks the right questions and does a thorough exam before making a diagnosis. He is friendly, compassionate, and truly cares about his patients.",
    name: "Leslie Alexander",
    date: "26 May, 2024",
    patientImg: "./myPhoto.jpg",
    doctorImg: "./myPhoto.jpg",
    bgColor: "bg-[#E6F4F1]"
  },
  {
    id: 2,
    quote: "The healthcare services provided here completely changed my perspective on specialized care. The staff are attentive and deeply understand patient needs. Highly recommended for accurate and thorough check-ups.",
    name: "Ralph Edwards",
    date: "14 June, 2024",
    patientImg: "./myPhoto.jpg",
    doctorImg: "./myPhoto.jpg",
    bgColor: "bg-[#F3E8FF]"
  },
  {
    id: 3,
    quote: "An absolutely wonderful seamless experience from start to finish. I've never felt more listened to by a doctor. Their analytics and predictive approach to healthcare is next level.",
    name: "Kathryn Murphy",
    date: "10 July, 2024",
    patientImg: "./myPhoto.jpg",
    doctorImg: "./myPhoto.jpg",
    bgColor: "bg-[#FFF0F4]"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const activeTestimonial = testimonialsData[currentIndex];

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 max-w-3xl mx-auto text-[#03112E]">What Patients Are Saying<br />About Dr. Hassan</h2>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center bg-background p-10 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm mt-12 transition-all">
          <div className="md:w-1/3 relative w-full flex justify-center">
            <div className={`w-[260px] aspect-square rounded-[2rem] ${activeTestimonial.bgColor} overflow-hidden border-8 border-white p-0 shadow-md transform md:-translate-y-12 transition-colors duration-500`}>
              <img src={activeTestimonial.doctorImg} alt="Doctor" className="w-full h-full object-cover object-top mix-blend-multiply opacity-90" />
            </div>
          </div>

          <div className="md:w-2/3 md:pl-8 text-left flex flex-col space-y-4">
            <div className="text-5xl md:text-6xl text-[#5ACDCA] font-serif leading-none mt-4 md:mt-0">"</div>
            <p className="text-lg md:text-[22px] text-[#03112E] font-medium leading-relaxed italic min-h-[140px]">
              "{activeTestimonial.quote}"
            </p>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-t border-gray-100 pt-6 mt-6">

              <div className="flex items-center gap-4 mb-6 sm:mb-0">
                <div className="w-[50px] h-[50px] rounded-full overflow-hidden shadow-sm">
                  <img src={activeTestimonial.patientImg} alt={activeTestimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-[#03112E] text-[17px] leading-tight">{activeTestimonial.name}</h4>
                  <p className="text-sm font-semibold text-gray-400 mt-1">{activeTestimonial.date}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handlePrev}
                  className="w-[46px] h-[46px] rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors text-[#03112E] hover:text-[#5ACDCA]"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                </button>
                <button
                  onClick={handleNext}
                  className="w-[46px] h-[46px] rounded-full bg-[#5ACDCA] text-white flex items-center justify-center shadow-md hover:bg-[#4bc9c1] transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";

export function ServiceFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqsLeft = [
    {
      index: 0,
      q: "01. What services do you offer?",
      a: "We provide a wide range of medical services including primary care, specialty consultations, preventive health screenings, diagnostic testing, and immunizations. Our goal is to offer comprehensive care tailored to your needs."
    },
    {
      index: 1,
      q: "02. How can I book an appointment?",
      a: "You can easily book an appointment by calling our front desk, using our online booking system available on our website, or directly through the Medcare patient app."
    },
    {
      index: 2,
      q: "03. Do you offer telehealth services?",
      a: "Yes, we offer secure telehealth video consultations for many routine follow-ups, minor illnesses, and mental health services."
    },
    {
      index: 3,
      q: "04. What is your cancellation policy?",
      a: "We ask that you provide at least 24 hours notice if you need to cancel or reschedule an appointment to avoid a cancellation fee."
    },
    {
      index: 4,
      q: "05. What should I bring to my appointment?",
      a: "Please bring your photo ID, current insurance card, a list of your current medications, and any relevant medical records from other providers."
    }
  ];

  const faqsRight = [
    {
      index: 5,
      q: "06. How do I get my test results?",
      a: "Most test results are available through our secure patient portal within 1-3 business days. For sensitive or complex results, your doctor will call you directly to discuss the findings."
    },
    {
      index: 6,
      q: "07. Can I refill my prescription online?",
      a: "Yes, prescription refills can be requested through your patient portal account or by asking your pharmacy to send us an electronic refill request."
    },
    {
      index: 7,
      q: "08. How do I contact my doctor after hours?",
      a: "For urgent matters after hours, you can access an on-call physician through our main phone line. For non-urgent matters, please leave us a message, and we will get back to you during regular business hours."
    },
    {
      index: 8,
      q: "09. What should I do if I have an emergency?",
      a: "If you are experiencing a life-threatening medical emergency, please call 911 immediately or go to the nearest hospital emergency room."
    },
    {
      index: 9,
      q: "10. How can I access my medical records online?",
      a: "You can securely view, download, and seamlessly share your medical records 24/7 by logging into our customized patient portal."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const renderFaq = (faq: { index: number, q: string, a: string }) => {
    const isOpen = openIndex === faq.index;
    return (
      <div 
        key={faq.index} 
        className={`border rounded-2xl overflow-hidden transition-all duration-300 ease-in-out bg-white ${isOpen ? 'border-primary/30 shadow-md' : 'border-border/60 hover:border-border'}`}
      >
         <button 
           onClick={() => toggleFaq(faq.index)}
           className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
         >
            <span className="font-bold text-sm text-[#03112E]">{faq.q}</span>
            <span className={`text-xl leading-none transition-transform duration-300 flex-shrink-0 ml-4 ${isOpen ? 'text-[#5ACDCA]' : 'text-[#5ACDCA]/60'}`}>
               {isOpen ? '−' : '+'}
            </span>
         </button>
         
         <div 
           className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
         >
           <p className="text-sm text-[#4B5563] leading-relaxed">
              {faq.a}
           </p>
         </div>
      </div>
    );
  };

  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-[#03112E] leading-tight">
            Find every answer you<br/> need right here.
          </h2>
          <p className="text-[#4B5563] text-sm md:text-base font-medium">
            Explore our comprehensive resources and FAQs to get all the information<br className="hidden md:block"/> you need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 max-w-5xl mx-auto items-start">
           <div className="flex flex-col gap-4">
              {faqsLeft.map(renderFaq)}
           </div>
           <div className="flex flex-col gap-4">
              {faqsRight.map(renderFaq)}
           </div>
        </div>
      </div>
    </section>
  );
}

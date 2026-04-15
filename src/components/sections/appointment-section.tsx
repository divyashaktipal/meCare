export function AppointmentSection() {
  return (
    <section className="py-24 bg-white">
       <div className="container mx-auto px-4 md:px-6">
         <div className="flex flex-col lg:flex-row gap-16 items-start max-w-6xl mx-auto">
            
            {/* Left Content */}
            <div className="flex-1 w-full text-[#03112E]">
               <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
                 Schedule Your Appointment with us
               </h1>
               <p className="text-[#4B5563] text-sm md:text-base leading-relaxed mb-12 max-w-[420px] font-medium">
                 Book your appointment today and receive personalized, top-journey to better health now.
               </p>

               <div className="space-y-8">
                 {[
                   { title: "Convenient Scheduling", desc: "Easily book your appointment online at a time that suits you best." },
                   { title: "Comprehensive Services", desc: "Access a wide range of medical services all in one place." },
                   { title: "Timely Consultations", desc: "Experience prompt and efficient service, minimizing your wait time." },
                   { title: "Ongoing Support", desc: "Receive continuous care and follow-ups to ensure your health is always on track." },
                 ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                       <div className="mt-1">
                          {/* Check Icon with outline circle */}
                          <div className="w-6 h-6 rounded-full border border-[#4B5563] flex items-center justify-center">
                             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          </div>
                       </div>
                       <div>
                          <h4 className="font-bold text-[#03112E] text-base mb-2">{item.title}</h4>
                          <p className="text-[#4B5563] text-sm leading-relaxed max-w-[340px] font-medium">{item.desc}</p>
                       </div>
                    </div>
                 ))}
               </div>
            </div>

            {/* Right Form Panel */}
            <div className="flex-1 w-full bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_40px_rgb(0,0,0,0.06)] border border-gray-100">
                <form className="space-y-6">
                   {/* Department */}
                   <div className="space-y-2">
                     <label className="text-sm font-semibold text-[#03112E]">Select Department <span className="text-[#5ACDCA]">*</span></label>
                     <div className="relative">
                        <select className="w-full h-12 px-4 rounded-lg border border-gray-200 outline-none focus:border-[#5ACDCA] appearance-none text-[#4B5563] text-sm bg-white font-medium">
                           <option>Pediatric Clinic</option>
                           <option>Cardiology</option>
                           <option>Neurology</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                        </div>
                     </div>
                   </div>

                   {/* Name Row */}
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                     <div className="space-y-2">
                       <label className="text-sm font-semibold text-[#03112E]">First Name <span className="text-[#5ACDCA]">*</span></label>
                       <input type="text" placeholder="Esther" className="w-full h-12 px-4 rounded-lg border border-gray-200 outline-none focus:border-[#5ACDCA] text-sm text-[#03112E] placeholder-gray-400 font-medium" />
                     </div>
                     <div className="space-y-2">
                       <label className="text-sm font-semibold text-[#03112E]">Last Name <span className="text-[#5ACDCA]">*</span></label>
                       <input type="text" placeholder="Howard" className="w-full h-12 px-4 rounded-lg border border-gray-200 outline-none focus:border-[#5ACDCA] text-sm text-[#03112E] placeholder-gray-400 font-medium" />
                     </div>
                   </div>

                   {/* Contact Row */}
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                     <div className="space-y-2">
                       <label className="text-sm font-semibold text-[#03112E]">Your Email <span className="text-[#5ACDCA]">*</span></label>
                       <input type="email" placeholder="hipixem@gmail.com" className="w-full h-12 px-4 rounded-lg border border-gray-200 outline-none focus:border-[#5ACDCA] text-sm text-[#03112E] placeholder-gray-400 font-medium" />
                     </div>
                     <div className="space-y-2">
                       <label className="text-sm font-semibold text-[#03112E]">Your Number <span className="text-[#5ACDCA]">*</span></label>
                       <input type="tel" placeholder="(208) 555-0112" className="w-full h-12 px-4 rounded-lg border border-gray-200 outline-none focus:border-[#5ACDCA] text-sm text-[#03112E] placeholder-gray-400 font-medium" />
                     </div>
                   </div>

                   {/* Date & Age Row */}
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                     <div className="space-y-2">
                       <label className="text-sm font-semibold text-[#03112E]">Appointment Date</label>
                       <input type="text" placeholder="08/24/2024" className="w-full h-12 px-4 rounded-lg border border-gray-200 outline-none focus:border-[#5ACDCA] text-sm text-[#03112E] placeholder-gray-400 font-medium" />
                     </div>
                     <div className="space-y-2">
                       <label className="text-sm font-semibold text-[#03112E]">Age</label>
                       <input type="text" placeholder="32 years" className="w-full h-12 px-4 rounded-lg border border-gray-200 outline-none focus:border-[#5ACDCA] text-sm text-[#03112E] placeholder-gray-400 font-medium" />
                     </div>
                   </div>

                   {/* Sex Checkboxes */}
                   <div className="space-y-3 pt-2">
                     <label className="text-sm font-semibold text-[#03112E]">Sex</label>
                     <div className="flex gap-6">
                        {['Male', 'Female', 'Child'].map((label, i) => (
                          <label key={label} className="flex items-center gap-2.5 cursor-pointer">
                            <div className={`w-[18px] h-[18px] rounded-[4px] border flex items-center justify-center transition-colors ${i === 0 ? 'bg-[#5B6370] border-[#5B6370]' : 'border-gray-300'}`}>
                              {i === 0 && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                            </div>
                            <span className="text-sm text-[#4B5563] font-medium">{label}</span>
                          </label>
                        ))}
                     </div>
                   </div>

                   {/* Message */}
                   <div className="space-y-2 pt-2">
                     <label className="text-sm font-semibold text-[#03112E]">Message</label>
                     <textarea placeholder="Write here...." className="w-full h-32 p-4 rounded-lg border border-gray-200 outline-none focus:border-[#5ACDCA] text-sm text-[#03112E] placeholder-gray-400 font-medium resize-none"></textarea>
                   </div>
                   
                   <div className="pt-4">
                     <button type="button" className="px-8 h-12 rounded-full bg-[#5ACDCA] hover:bg-[#4bc9c1] text-white font-bold transition-colors">
                       Submit
                     </button>
                   </div>
                </form>
            </div>
            
         </div>
       </div>
    </section>
  );
}

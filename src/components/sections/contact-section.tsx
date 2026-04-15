import Link from "next/link";

export function ContactSection() {
  return (
    <section className="py-24 bg-white">
       <div className="container mx-auto px-4 md:px-6">
         <div className="flex flex-col lg:flex-row gap-16 items-start max-w-6xl mx-auto">
            
            {/* Left Content */}
            <div className="flex-1 w-full text-[#03112E]">
               <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight mb-6 leading-[1.1]">
                 Let's Start a <br className="hidden lg:block"/>Conversation
               </h1>
               <p className="text-[#4B5563] text-sm md:text-base leading-relaxed mb-10 max-w-[420px] font-medium">
                 Reach out to us and let's begin a conversation about your needs. We're here to listen, every step of the way.
               </p>

               <div className="space-y-4 mb-10">
                 {[
                   "Easily connect multiple data sources",
                   "Build confidence and accelerate product delivery",
                   "Let your team discover insights just for them",
                   "Standardize research across your organization",
                   "Scale with SSO, SCIM, and custom data retention"
                 ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3">
                       <div className="w-[18px] h-[18px] rounded-full border border-[#03112E] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#03112E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                       </div>
                       <span className="text-[#03112E] font-semibold text-sm md:text-[15px]">{text}</span>
                    </div>
                 ))}
               </div>

               <p className="text-[#4B5563] text-sm md:text-[15px] font-medium max-w-[420px] leading-relaxed">
                 For product support, <Link href="/help-center" className="text-[#5ACDCA] hover:underline">visit our Help Center</Link>. Or, get advice from over 8,300+ users in the Mecare.
               </p>
            </div>

            {/* Right Form Panel */}
            <div className="flex-1 w-full bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_40px_rgb(0,0,0,0.06)] border border-gray-100">
                <form className="space-y-6">
                   {/* Name Row */}
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                     <div className="space-y-2">
                       <label className="text-sm font-semibold text-[#4B5563]">First Name</label>
                       <input type="text" placeholder="Esther" className="w-full h-12 px-4 rounded-lg border border-gray-200 outline-none focus:border-[#5ACDCA] text-sm text-[#03112E] placeholder-gray-400 font-medium" />
                     </div>
                     <div className="space-y-2">
                       <label className="text-sm font-semibold text-[#4B5563]">Last Name</label>
                       <input type="text" placeholder="Howard" className="w-full h-12 px-4 rounded-lg border border-gray-200 outline-none focus:border-[#5ACDCA] text-sm text-[#03112E] placeholder-gray-400 font-medium" />
                     </div>
                   </div>

                   {/* Contact Row */}
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                     <div className="space-y-2">
                       <label className="text-sm font-semibold text-[#4B5563]">Your Email</label>
                       <input type="email" placeholder="hipixem@gmail.com" className="w-full h-12 px-4 rounded-lg border border-gray-200 outline-none focus:border-[#5ACDCA] text-sm text-[#03112E] placeholder-gray-400 font-medium" />
                     </div>
                     <div className="space-y-2">
                       <label className="text-sm font-semibold text-[#4B5563]">Your Number</label>
                       <input type="tel" placeholder="(208) 555-0112" className="w-full h-12 px-4 rounded-lg border border-gray-200 outline-none focus:border-[#5ACDCA] text-sm text-[#03112E] placeholder-gray-400 font-medium" />
                     </div>
                   </div>

                   {/* Services Checkboxes */}
                   <div className="space-y-3 pt-2">
                     <label className="text-sm font-semibold text-[#4B5563]">Services</label>
                     <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-2">
                        {['Cardiology', 'Endocrinology', 'Neurology', 'Eye care', 'Dentist', 'Others'].map((label, i) => (
                          <label key={label} className="flex items-center gap-2.5 cursor-pointer">
                            <div className={`w-[18px] h-[18px] rounded-[4px] border flex items-center justify-center transition-colors ${i === 0 ? 'bg-[#5B6370] border-[#5B6370]' : 'border-gray-300'}`}>
                              {i === 0 && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                            </div>
                            <span className="text-sm text-[#8a94a6] font-medium">{label}</span>
                          </label>
                        ))}
                     </div>
                   </div>

                   {/* Message */}
                   <div className="space-y-2 pt-2">
                     <label className="text-sm font-semibold text-[#4B5563]">Message</label>
                     <textarea placeholder="Write here...." className="w-full h-32 p-4 rounded-lg border border-gray-200 outline-none focus:border-[#5ACDCA] text-sm text-[#03112E] placeholder-gray-400 font-medium resize-none"></textarea>
                   </div>
                   
                   <div className="pt-2">
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

"use client";
import { useState } from "react";
import axiosInstance from "@/api/axiosInstance";

export function AppointmentSection() {
  const [formData, setFormData] = useState({
    department: "Pediatric Clinic",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    age: "",
    sex: "Male",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSexChange = (sex: string) => {
    setFormData({ ...formData, sex });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setRes("");

    try {
      const response = await axiosInstance.post("/appointments", formData);
      setRes("Appointment successfully booked!");
      setFormData({
        department: "Pediatric Clinic",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        date: "",
        age: "",
        sex: "Male",
        message: ""
      });
    } catch (err: any) {
      if (err.response?.status === 401) {
        setError("You must be logged in to book an appointment.");
      } else {
        setError(err.response?.data?.message || "Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  };

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
                <form onSubmit={handleSubmit} className="space-y-6">
                   {/* Department */}
                   <div className="space-y-2">
                     <label className="text-sm font-semibold text-[#03112E]">Select Department <span className="text-[#5ACDCA]">*</span></label>
                     <div className="relative">
                        <select 
                          name="department"
                          value={formData.department}
                          onChange={handleChange}
                          className="w-full h-12 px-4 rounded-lg border border-gray-200 outline-none focus:border-[#5ACDCA] appearance-none text-[#4B5563] text-sm bg-white font-medium"
                        >
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
                       <input required name="firstName" value={formData.firstName} onChange={handleChange} type="text" placeholder="Esther" className="w-full h-12 px-4 rounded-lg border border-gray-200 outline-none focus:border-[#5ACDCA] text-sm text-[#03112E] placeholder-gray-400 font-medium" />
                     </div>
                     <div className="space-y-2">
                       <label className="text-sm font-semibold text-[#03112E]">Last Name <span className="text-[#5ACDCA]">*</span></label>
                       <input required name="lastName" value={formData.lastName} onChange={handleChange} type="text" placeholder="Howard" className="w-full h-12 px-4 rounded-lg border border-gray-200 outline-none focus:border-[#5ACDCA] text-sm text-[#03112E] placeholder-gray-400 font-medium" />
                     </div>
                   </div>

                   {/* Contact Row */}
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                     <div className="space-y-2">
                       <label className="text-sm font-semibold text-[#03112E]">Your Email <span className="text-[#5ACDCA]">*</span></label>
                       <input required name="email" value={formData.email} onChange={handleChange} type="email" placeholder="hipixem@gmail.com" className="w-full h-12 px-4 rounded-lg border border-gray-200 outline-none focus:border-[#5ACDCA] text-sm text-[#03112E] placeholder-gray-400 font-medium" />
                     </div>
                     <div className="space-y-2">
                       <label className="text-sm font-semibold text-[#03112E]">Your Number <span className="text-[#5ACDCA]">*</span></label>
                       <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="(208) 555-0112" className="w-full h-12 px-4 rounded-lg border border-gray-200 outline-none focus:border-[#5ACDCA] text-sm text-[#03112E] placeholder-gray-400 font-medium" />
                     </div>
                   </div>

                   {/* Date & Age Row */}
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                     <div className="space-y-2">
                       <label className="text-sm font-semibold text-[#03112E]">Appointment Date <span className="text-[#5ACDCA]">*</span></label>
                       <input required name="date" value={formData.date} onChange={handleChange} type="date" className="w-full h-12 px-4 rounded-lg border border-gray-200 outline-none focus:border-[#5ACDCA] text-sm text-[#03112E] placeholder-gray-400 font-medium" />
                     </div>
                     <div className="space-y-2">
                       <label className="text-sm font-semibold text-[#03112E]">Age</label>
                       <input name="age" value={formData.age} onChange={handleChange} type="text" placeholder="32 years" className="w-full h-12 px-4 rounded-lg border border-gray-200 outline-none focus:border-[#5ACDCA] text-sm text-[#03112E] placeholder-gray-400 font-medium" />
                     </div>
                   </div>

                   {/* Sex Checkboxes */}
                   <div className="space-y-3 pt-2">
                     <label className="text-sm font-semibold text-[#03112E]">Sex</label>
                     <div className="flex gap-6">
                        {['Male', 'Female', 'Child'].map((label) => {
                          const isSelected = formData.sex === label;
                          return (
                          <label key={label} onClick={() => handleSexChange(label)} className="flex items-center gap-2.5 cursor-pointer">
                            <div className={`w-[18px] h-[18px] rounded-[4px] border flex items-center justify-center transition-colors ${isSelected ? 'bg-[#5B6370] border-[#5B6370]' : 'border-gray-300'}`}>
                              {isSelected && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                            </div>
                            <span className="text-sm text-[#4B5563] font-medium">{label}</span>
                          </label>
                        )})}
                     </div>
                   </div>

                   {/* Message */}
                   <div className="space-y-2 pt-2">
                     <label className="text-sm font-semibold text-[#03112E]">Message</label>
                     <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Write here...." className="w-full h-32 p-4 rounded-lg border border-gray-200 outline-none focus:border-[#5ACDCA] text-sm text-[#03112E] placeholder-gray-400 font-medium resize-none"></textarea>
                   </div>
                   
                   {res && <p className="text-green-600 text-sm font-semibold">{res}</p>}
                   {error && <p className="text-red-600 text-sm font-semibold">{error}</p>}

                   <div className="pt-4">
                     <button disabled={loading} type="submit" className="px-8 h-12 rounded-full bg-[#5ACDCA] hover:bg-[#4bc9c1] text-white font-bold transition-colors">
                       {loading ? "Submitting..." : "Submit"}
                     </button>
                   </div>
                </form>
            </div>
            
         </div>
       </div>
    </section>
  );
}

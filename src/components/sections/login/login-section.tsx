"use client";
import Link from "next/link";
import { useState } from "react";
import api from "@/lib/axios";
import { loginSectionData, PulseIcon, GoogleIcon, AppleIcon } from "@/constants/login-section";

export function LoginSection() {
   const [res, setRes] = useState("");
   const [loading, setLoading] = useState(false);

   const [formData, setFormData] = useState({
      email: "",
      password: "",
   });

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value,
      });
   };

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);

      try {
         const response = await api.post("/auth/login", formData);
         const data = response.data;
         localStorage.setItem("token", data.token);
         setRes("Login successful");
         console.log(data);
      } catch (error: any) {
         setRes(error.response?.data?.message || "Login failed");
      } finally {
         setLoading(false);
      }
   };

   return (
      <section className="py-12 md:py-20 bg-[#FAFAFB] min-h-[calc(100vh-80px)] flex items-center">
         <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-[1000px] mx-auto w-full flex flex-col md:flex-row gap-6">

               {/* Left Form Panel */}
               <div className="flex-1 bg-white rounded-[2rem] shadow-[0_8px_40px_rgb(0,0,0,0.06)] p-8 md:p-14 flex flex-col items-center justify-center border border-gray-100">

                  {/* Logo / Icon */}
                  <div className="w-[42px] h-[42px] bg-[#5ACDCA] rounded-[10px] flex items-center justify-center mb-6 shadow-sm">
                     <PulseIcon />
                  </div>

                  <h1 className="text-[26px] md:text-[28px] font-bold text-[#03112E] mb-3 text-center">
                     {loginSectionData.title}
                  </h1>
                  <p className="text-[#4B5563] text-sm md:text-[15px] font-medium text-center mb-10 max-w-[320px]">
                     {loginSectionData.subtitle}
                  </p>

                  <form onSubmit={handleSubmit} className="w-full max-w-[360px]">
                     <div className="space-y-5 mb-3">
                        {/* Email Input */}
                        <div className="space-y-2">
                           <label className="block text-[13px] font-bold text-[#4B5563]">
                              {loginSectionData.form.emailLabel}
                           </label>
                           <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full h-12 px-4 rounded-xl border border-gray-200 outline-none focus:border-[#5ACDCA] text-sm font-semibold text-[#03112E] placeholder-gray-400 transition-colors"
                              placeholder={loginSectionData.form.emailPlaceholder}
                           />
                        </div>

                        {/* Password Input */}
                        <div className="space-y-2">
                           <label className="block text-[13px] font-bold text-[#4B5563]">
                              {loginSectionData.form.passwordLabel}
                           </label>
                           <input
                              type="password"
                              name="password"
                              value={formData.password}
                              onChange={handleChange}
                              className="w-full h-12 px-4 rounded-xl border border-gray-200 outline-none focus:border-[#5ACDCA] text-sm font-semibold text-[#03112E] placeholder-gray-400 transition-colors"
                              placeholder={loginSectionData.form.passwordPlaceholder}
                           />
                           <div className="pt-2">
                              <Link href={loginSectionData.form.forgotPasswordLink} className="text-[13px] text-gray-400 font-medium hover:text-[#5ACDCA] transition-colors">
                                 {loginSectionData.form.forgotPasswordText}
                              </Link>
                           </div>
                        </div>
                     </div>

                     {res && (
                        <p className="text-center text-sm text-red-500 mt-2">
                           {res}
                        </p>
                     )}
                     {/* Sign In Button */}
                     <button type="submit" className="w-full h-12 rounded-full bg-[#03112E] hover:bg-[#0a1f4a] text-white font-bold text-[15px] mb-8 mt-5 transition-colors shadow-md">
                        {loading ? loginSectionData.form.loadingLabel : loginSectionData.form.submitLabel}
                     </button>

                     {/* Divider */}
                     <div className="relative flex items-center justify-center mb-6">
                        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
                        <div className="relative bg-white px-4 text-[13px] text-gray-400 font-medium">
                           {loginSectionData.dividerText}
                        </div>
                     </div>

                     {/* Social Auth */}
                     <div className="space-y-3 mb-8">
                        <button type="button" className="w-full h-[46px] rounded-full border border-gray-200 bg-white flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors font-semibold text-[#4B5563] text-sm shadow-sm group">
                           <GoogleIcon />
                           Sign in with Google
                        </button>
                        <button type="button" className="w-full h-[46px] rounded-full border border-gray-200 bg-white flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors font-semibold text-[#4B5563] text-sm shadow-sm group">
                           <AppleIcon className="transition-transform group-hover:scale-110" />
                           Sign in with Apple
                        </button>
                     </div>

                     <p className="text-center text-[13px] font-semibold text-gray-500">
                        {loginSectionData.signUpText}{" "}
                        <Link href={loginSectionData.signUpLink} className="text-[#6452F9] hover:underline ml-1">
                           {loginSectionData.signUpLinkText}
                        </Link>
                     </p>
                  </form>
               </div>

               {/* Right Image Panel */}
               <div className="flex-1 rounded-[2rem] overflow-hidden relative shadow-[0_8px_40px_rgb(0,0,0,0.08)] aspect-[4/5] md:aspect-auto">
                  <img src={loginSectionData.testimonial.imageSrc} className="absolute inset-0 w-full h-full object-cover" alt={loginSectionData.testimonial.imageAlt} />
                  <div className="absolute inset-x-0 bottom-0 top-[40%] bg-gradient-to-t from-[#205e55] via-[#205e55]/80 to-transparent"></div>
                  <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 text-white">
                     <p className="text-[15px] md:text-base font-medium leading-[1.6] mb-6 text-white/95 text-shadow-sm">
                        {loginSectionData.testimonial.text}
                     </p>
                     <div>
                        <h4 className="text-lg font-bold text-white mb-0.5">{loginSectionData.testimonial.author}</h4>
                        <p className="text-white/80 text-xs font-semibold tracking-wide">{loginSectionData.testimonial.handle}</p>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>
   );
}


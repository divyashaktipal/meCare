"use client";
import Link from "next/link";
import { useState } from "react";
import axiosInstance from "@/api/axiosInstance";

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
         const response = await axiosInstance.post("/auth/login", formData);
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
                     <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                  </div>

                  <h1 className="text-[26px] md:text-[28px] font-bold text-[#03112E] mb-3 text-center">Sign In to Your Account</h1>
                  <p className="text-[#4B5563] text-sm md:text-[15px] font-medium text-center mb-10 max-w-[320px]">
                     Sign in to manage your health and stay connected.
                  </p>

                  <form onSubmit={handleSubmit} className="w-full max-w-[360px]">
                     <div className="space-y-5 mb-3">
                        {/* Email Input */}
                        <div className="space-y-2">
                           <label className="block text-[13px] font-bold text-[#4B5563]">Email</label>
                           <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full h-12 px-4 rounded-xl border border-gray-200 outline-none focus:border-[#5ACDCA] text-sm font-semibold text-[#03112E] placeholder-gray-400 transition-colors"
                              placeholder="hipixem@gmail.com"
                           />
                        </div>

                        {/* Password Input */}
                        <div className="space-y-2">
                           <label className="block text-[13px] font-bold text-[#4B5563]">Password</label>
                           <input
                              type="password"
                              name="password"
                              value={formData.password}
                              onChange={handleChange}
                              className="w-full h-12 px-4 rounded-xl border border-gray-200 outline-none focus:border-[#5ACDCA] text-sm font-semibold text-[#03112E] placeholder-gray-400 transition-colors"
                              placeholder="password"
                           />
                           <div className="pt-2">
                              <Link href="#" className="text-[13px] text-gray-400 font-medium hover:text-[#5ACDCA] transition-colors">
                                 Forgot Password?
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
                        {loading ? "Loading..." : "Sign in"}
                     </button>

                     {/* Divider */}
                     <div className="relative flex items-center justify-center mb-6">
                        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
                        <div className="relative bg-white px-4 text-[13px] text-gray-400 font-medium">Or Sign in with</div>
                     </div>

                     {/* Social Auth */}
                     <div className="space-y-3 mb-8">
                        <button type="button" className="w-full h-[46px] rounded-full border border-gray-200 bg-white flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors font-semibold text-[#4B5563] text-sm shadow-sm group">
                           <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
                           Sign in with Google
                        </button>
                        <button type="button" className="w-full h-[46px] rounded-full border border-gray-200 bg-white flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors font-semibold text-[#4B5563] text-sm shadow-sm group">
                           <svg width="20" height="20" viewBox="0 0 24 24" fill="#03112E" className="transition-transform group-hover:scale-110"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.126 3.805 3.051 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.62-1.518 3.608-2.964 1.153-1.687 1.625-3.321 1.65-3.407-.035-.013-3.182-1.22-3.21-4.88-.026-3.072 2.512-4.523 2.632-4.593-1.428-2.09-3.626-2.378-4.417-2.417-1.745-.118-3.483 1.085-4.35 1.085zm-2.062-4.08c.84-.972 1.4-2.325 1.246-3.682-1.164.047-2.6.772-3.468 1.76-.78.85-1.433 2.227-1.26 3.551 1.296.1 2.646-.665 3.482-1.63z" /></svg>
                           Sign in with Apple
                        </button>
                     </div>

                     <p className="text-center text-[13px] font-semibold text-gray-500">
                        Don't have an account? <Link href="/sign-up" className="text-[#6452F9] hover:underline ml-1">Sign Up</Link>
                     </p>
                  </form>
               </div>

               {/* Right Image Panel */}
               <div className="flex-1 rounded-[2rem] overflow-hidden relative shadow-[0_8px_40px_rgb(0,0,0,0.08)] aspect-[4/5] md:aspect-auto">
                  {/* Doctor Background Image */}
                  <img src="./myPhoto.jpg" className="absolute inset-0 w-full h-full object-cover" alt="Doctor Client Services" />

                  {/* Gradient Overlay matching visual design (dark teal to transparent) */}
                  <div className="absolute inset-x-0 bottom-0 top-[40%] bg-gradient-to-t from-[#205e55] via-[#205e55]/80 to-transparent"></div>

                  {/* Testimonial Text */}
                  <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 text-white">
                     <p className="text-[15px] md:text-base font-medium leading-[1.6] mb-6 text-white/95 text-shadow-sm">
                        Our experience with the support team was exceptional. They were responsive, friendly, and resolved our issue quickly. It's clear they genuinely care about their clients.
                     </p>
                     <div>
                        <h4 className="text-lg font-bold text-white mb-0.5">Aliah Lane</h4>
                        <p className="text-white/80 text-xs font-semibold tracking-wide">@hiatceken</p>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>
   );
}

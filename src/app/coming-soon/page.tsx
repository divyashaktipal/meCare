import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";

export const metadata = {
   title: "Coming Soon | meCare Medical Management",
};

export default function ComingSoon() {
   return (
      <div className="flex min-h-screen flex-col bg-[#F4FAF8]">
         <Navbar />
         <main className="flex-1 flex items-center justify-center py-20 px-4">

            <div className="bg-white rounded-[2rem] p-10 md:p-16 lg:p-24 shadow-[0_8px_30px_rgb(0,0,0,0.02)] max-w-[840px] w-full flex flex-col items-center relative overflow-hidden mx-auto">
               <div className="relative mb-12 mt-4 z-0">
                  <div className="w-[120px] h-[60px] bg-[#5ACDCA] rounded-t-full mx-auto relative z-10"></div>
                  <div className="absolute top-[60px] left-1/2 -translate-x-1/2 w-[160px] h-[90px] bg-[#5ACDCA] blur-[45px] opacity-65 z-0 rounded-b-full mix-blend-multiply"></div>
               </div>
               <h1 className="relative text-[46px] md:text-[72px] font-bold tracking-tight mb-6 flex flex-wrap items-baseline justify-center gap-x-4 z-10 w-full text-center leading-tight">
                  <span className="text-[#ECA59E]">We</span>
                  <span className="text-[#D1A29D]">are</span>
                  <span className="text-[#Aeaeb0]">coming</span>
                  <span className="text-[#7cd2c3]">soon</span>
               </h1>

               {/* Sub Text */}
               <p className="text-[#03112E] font-medium text-[17px] md:text-[19px] mb-12 text-center relative z-10">
                  Big changes coming soon. Stay tuned!
               </p>

               {/* Notify Form */}
               <form className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-[540px] mb-14 z-10 relative">
                  <input
                     type="email"
                     placeholder="hipixem@gmail.com"
                     className="flex-1 w-full h-[56px] px-6 rounded-full border border-gray-200 outline-none focus:border-[#5ACDCA] text-[15px] font-medium text-[#03112E] placeholder-gray-400 shadow-sm"
                  />
                  <button
                     type="button"
                     className="h-[56px] px-10 rounded-full bg-[#03112E] hover:bg-[#0a1f4a] text-white font-bold text-[15px] transition-colors whitespace-nowrap shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-[#03112E]"
                  >
                     Notify Me
                  </button>
               </form>

               <Link
                  href="/"
                  className="px-10 h-[50px] rounded-full bg-[#5ACDCA] hover:bg-[#4bc9c1] text-white font-bold inline-flex items-center justify-center transition-colors shadow-sm relative z-10"
               >
                  Back to Home
               </Link>

            </div>

         </main>
         <Footer />
      </div>
   );
}

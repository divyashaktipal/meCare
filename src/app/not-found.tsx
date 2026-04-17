import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F4FAF8]">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-24 px-4">

        <div className="bg-white rounded-[2rem] p-12 md:p-24 shadow-[0_8px_30px_rgb(0,0,0,0.02)] max-w-xl w-full flex flex-col items-center relative overflow-hidden mx-auto">

          {/* The glowing semi-circle graphic */}
          <div className="relative mb-8 mt-4 z-0">
            {/* Solid semi-circle on top */}
            <div className="w-[110px] h-[55px] bg-[#5ACDCA] rounded-t-full mx-auto relative z-10"></div>
            {/* Intense Glow effect extending downward between icon and text */}
            <div className="absolute top-[55px] left-1/2 -translate-x-1/2 w-[160px] h-[90px] bg-[#5ACDCA] blur-[45px] opacity-65 z-0 rounded-b-full mix-blend-multiply"></div>
          </div>

          {/* Oops Text */}
          <div className="relative text-7xl md:text-[110px] font-bold tracking-tighter mb-8 flex items-baseline justify-center z-10">
            <span className="text-[#E99E98] -mr-1">O</span>
            <span className="text-[#c7a499] -mr-2 z-10">o</span>
            <span className="text-[#Aeaeb0] -mr-1 z-20">p</span>
            <span className="text-[#7cd2c3] -mr-1 z-30">s</span>
            <span className="text-[#5ACDCA] z-40">!</span>
          </div>

          {/* Text */}
          <p className="text-[#03112E] font-bold text-[17px] mb-10 text-center relative z-10">
            The page you're looking for doesn't exist.
          </p>

          {/* Button */}
          <Link
            href="/"
            className="px-10 h-12 rounded-sm bg-[#5ACDCA] hover:bg-[#4bc9c1] text-white font-bold inline-flex items-center justify-center transition-colors shadow-sm relative z-10"
          >
            Back to Home
          </Link>

        </div>

      </main>
      <Footer />
    </div>
  );
}

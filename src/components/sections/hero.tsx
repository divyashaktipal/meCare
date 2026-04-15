import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative pt-6 pb-12 w-full">

      {/* Top Hero Card */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#E6F8F3] to-[#B3E8DA] rounded-[2rem] md:rounded-[3rem] mx-4 md:mx-8 lg:mx-16 pt-20 md:pt-32 lg:pt-40 pb-0 text-center flex flex-col items-center shadow-sm relative min-h-[450px] md:min-h-[550px] lg:min-h-[600px]">
        <div className="max-w-6xl w-full h-full relative flex justify-center mt-auto">

          {/* Background Text */}
          <h1 className="text-5xl md:text-[80px] lg:text-[110px] font-extrabold tracking-tighter text-white/90 drop-shadow-sm absolute top-[10%] md:top-[12%] left-1/2 -translate-x-1/2 w-full text-center z-0 whitespace-nowrap">
            Excellence Healthcare
          </h1>

          {/* Center Image */}
          <div className="relative w-full max-w-2xl mx-auto h-[350px] md:h-[450px] lg:h-[500px] z-10 pt-16 md:pt-0">
            <div className="absolute inset-0 flex items-end justify-center z-10">
              <img src="./image.png" alt="Doctor" className="h-[95%] md:h-[100%] object-contain object-bottom drop-shadow-2xl relative z-10" />
            </div>

            {/* Floating Left Chip */}
            <div className="absolute top-[55%] left-[-10%] md:left-[-15%] lg:left-[-5%] bg-white backdrop-blur-sm rounded-full pl-2 pr-5 py-2 shadow-md flex items-center gap-3 z-30 transform -translate-y-1/2">
              <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-[#e5776d] border border-gray-100">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" /></svg>
              </div>
              <span className="text-[15px] font-extrabold text-[#03112E]">Reduce HbA1c</span>
            </div>

            {/* Floating Right Chip */}
            <div className="absolute top-[5%] right-[-10%] md:-right-[-25%] lg:right-[-15%] bg-white backdrop-blur-sm rounded-full pl-2 pr-5 py-2 shadow-md flex items-center gap-3 z-30 transform -translate-y-1/2">
              <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-[#5ACDCA] border border-gray-100">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" /></svg>
              </div>
              <span className="text-[15px] font-extrabold text-[#03112E]">No more medications</span>
            </div>
          </div>

          {/* Bottom Left Text */}
          <div className="absolute bottom-10 lg:bottom-16 left-6 lg:left-12 max-w-[280px] text-left hidden md:block z-20">
            <p className="text-[#03112E] font-medium text-[15px] leading-relaxed">
              Prioritizing your well-being with top-tier medical expertise and compassionate care tailored to your needs
            </p>
          </div>

          {/* Bottom Right Button */}
          <div className="absolute bottom-10 lg:bottom-16 right-6 lg:right-12 hidden md:block z-20">
            <Button className="rounded-full bg-[#5ACDCA] text-white hover:bg-[#4bc9c1] font-bold h-12 px-8 shadow-md transition-transform hover:scale-105">
              Schedule An Appointment
            </Button>
          </div>

          {/* Mobile Text & Button (Shown only below md) */}
          <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-4 md:hidden z-20">
            <p className="text-[#03112E] font-medium text-sm text-center bg-white/40 backdrop-blur p-2 rounded-xl">
              Prioritizing your well-being with top-tier medical expertise and compassionate care
            </p>
            <Button className="rounded-full bg-[#5ACDCA] text-white hover:bg-[#4bc9c1] font-bold h-10 shadow-md">
              Schedule An Appointment
            </Button>
          </div>
        </div>
      </section>

      {/* Bottom Feature Cards - Displayed with Gap Below Hero */}
      <div className="relative z-20 mx-4 md:mx-8 lg:mx-16 mt-6 md:mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 w-full">
          {/* Card 1 */}
          <div className="bg-[#FDECEE] rounded-[2rem] p-6 shadow-sm border border-transparent hover:border-gray-100 flex flex-col h-[280px]">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-xl lg:text-2xl font-bold text-[#03112E]">Qualified Doctors</h3>
              <div className="w-[46px] h-[46px] bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                <span className="text-xl">👩‍⚕️</span>
              </div>
            </div>
            <p className="text-[15px] text-[#4B5563] font-medium leading-relaxed pr-4">
              Schedule your appointment with your health consultation with the best doctors in medicare
            </p>
            <div className="mt-auto">
              <Button className="rounded-full bg-[#03112E] text-white hover:bg-[#03112E]/90 h-11 px-6 font-semibold w-fit shadow-md">
                Scheduling an Appointment &rarr;
              </Button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#E6F4F1] rounded-[2rem] p-6 shadow-sm border border-transparent hover:border-gray-100 flex flex-col h-[280px]">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-xl lg:text-2xl font-bold text-[#03112E]">Consultation</h3>
              <div className="w-[46px] h-[46px] bg-white rounded-full flex items-center justify-center shadow-sm shrink-0 text-[#5ACDCA]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
              </div>
            </div>
            <p className="text-[15px] text-[#4B5563] font-medium leading-relaxed pr-4">
              Schedule your appointment with your health consultation with the best doctors in medicare
            </p>
            <div className="mt-auto">
              <Button className="rounded-full bg-[#03112E] text-white hover:bg-[#03112E]/90 h-11 px-6 font-semibold w-fit shadow-md">
                Scheduling an Appointment &rarr;
              </Button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#FFF8DF] rounded-[2rem] p-6 shadow-sm border border-transparent hover:border-gray-100 flex flex-col h-[280px]">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-xl lg:text-2xl font-bold text-[#03112E]">24/7 Support</h3>
              <div className="w-[46px] h-[46px] bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                <span className="text-xl">🧑‍💻</span>
              </div>
            </div>
            <p className="text-[15px] text-[#4B5563] font-medium leading-relaxed pr-4">
              Schedule your appointment with your health consultation with the best doctors in medicare
            </p>
            <div className="mt-auto">
              <Button className="rounded-full bg-[#03112E] text-white hover:bg-[#03112E]/90 h-11 px-6 font-semibold w-fit shadow-md">
                Scheduling an Appointment &rarr;
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";

export function CTABanner() {
   return (
      <section className="py-20 bg-background">
         <div className="container mx-auto px-4 md:px-6">
            <div className="bg-[#5ACDCA] rounded-[3rem] p-12 md:p-16 relative overflow-hidden max-w-6xl mx-auto shadow-2xl">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
                  <div className="text-white space-y-8 max-w-lg">
                     <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight drop-shadow-sm">
                        Schedule Your Appointment with us
                     </h2>
                     <p className="text-white/90 text-lg">
                        Join our community of over 15,000 satisfied patients.
                     </p>
                     <Button className="rounded-full bg-[#112F38] text-white hover:bg-[#0c2027] px-8 h-12 shadow-lg border-none" size="lg">
                        Know More
                     </Button>
                  </div>

                  <div className="relative mt-8 lg:mt-0 h-[300px] hidden md:block">
                     <div className="absolute right-0 lg:right-[-50px] top-1/2 transform -translate-y-1/2 w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl rotate-[-2deg] border border-white">
                        <div className="flex items-center gap-3 mb-6 bg-surface p-2 rounded-2xl">
                           <div className="w-12 h-12 rounded-full bg-[#5ACDCA]/20 overflow-hidden">
                              <img src="./myPhoto.jpg" alt="Doctor" className="w-full h-full object-cover" />
                           </div>
                           <div>
                              <h4 className="font-bold text-sm text-foreground">Dr. Sarah Jenkins</h4>
                              <p className="text-xs text-muted text-foreground/70">Cardiologist - Specialist</p>
                           </div>
                        </div>
                        <div className="space-y-3">
                           <div className="h-10 bg-surface rounded-xl flex items-center px-4 justify-between border border-border">
                              <span className="text-xs text-muted">Select Date</span>
                              <span className="text-xs">24 Oct 2024</span>
                           </div>
                           <div className="h-10 bg-surface rounded-xl flex items-center px-4 justify-between border border-border">
                              <span className="text-xs text-muted">Select Time</span>
                              <span className="text-xs">10:00 AM</span>
                           </div>
                        </div>
                        <Button className="w-full mt-6 bg-[#5ACDCA] hover:bg-[#4bc9c1] text-white rounded-xl shadow-md border-none pb-1">
                           Confirm Appointment
                        </Button>
                     </div>
                  </div>
               </div>

               <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/3 pointer-events-none"></div>
            </div>
         </div>
      </section>
   );
}

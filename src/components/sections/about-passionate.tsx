export function AboutPassionate() {
   return (
      <section className="py-20 bg-background">
         <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

               <div className="order-2 lg:order-1 space-y-8">
                  <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                     Passionate about care,<br />committed to better.
                  </h2>
                  <p className="text-muted text-lg max-w-md">
                     We believe in providing the highest standard of healthcare, combining compassion with cutting-edge medical technology.
                  </p>

                  <div className="grid grid-cols-2 gap-6 pt-6">
                     <div className="flex flex-col gap-2 border-l-2 border-primary/20 pl-4">
                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs">⭐</div>
                        <h4 className="font-bold text-foreground">Specialist Care</h4>
                     </div>
                     <div className="flex flex-col gap-2 border-l-2 border-primary/20 pl-4">
                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs">⭐</div>
                        <h4 className="font-bold text-foreground">Modern Facilities</h4>
                     </div>
                     <div className="flex flex-col gap-2 border-l-2 border-primary/20 pl-4">
                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs">⭐</div>
                        <h4 className="font-bold text-foreground">Dedicated Support</h4>
                     </div>
                  </div>
               </div>

               <div className="order-1 lg:order-2 relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-primary/10">
                  <div className="absolute right-0 top-0 w-2/3 h-full bg-primary/20 rounded-l-[100px] blur-2xl"></div>
                  <img src="./myPhoto.jpg" alt="Doctor and Child High-Five" className="w-full h-full object-cover relative z-10" />
               </div>

            </div>
         </div>
      </section>
   );
}

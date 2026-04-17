import { Button } from "@/components/ui/button";

export function Solutions() {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 max-w-3xl mx-auto leading-tight">
            Revolutionize with Cutting-Edge<br />Healthcare Solutions
          </h2>
          <p className="text-muted max-w-2xl mx-auto">Providing advanced healthcare tools and platforms to streamline operations and enhance patient care.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto auto-rows-[220px]">
          {/* Card 1 */}
          <div className="md:col-span-1 md:row-span-2 rounded-md overflow-hidden relative group">
            <img
              src="./myPhoto.jpg"
              alt="Doctor measuring blood pressure"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
              <span className="flex items-center justify-between gap-4">
                <span>
                  <h3 className="text-white font-bold text-xl mb-1">Seamless Health care</h3>
                  <p className="text-white/80 text-sm">
                    Empathetic care and expert medical advice available 24/7
                  </p>
                </span>

                <span className="w-10 h-10 flex items-center justify-center rounded-full 
                       bg-white/20 backdrop-blur-md border border-white/30 
                       shadow-md">
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path d="M6.44922 4.65332L13.912 4.63672L13.8962 12.1004" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.9099 4.63672L4.63867 13.907" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </span>

            </div>
          </div>


          {/* Card 2 */}
          <div className="rounded-md bg-[#d1f1eb] p-8 flex flex-col justify-between relative group">

            <div className="text-md font-medium text-black mb-2 tracking-wide">
              Innovative Tools Transforming Healthcare Efficiency and Care.
            </div>
            <span className="flex items-center justify-between mt-12">
              <h3 className="text-xl font-bold text-foreground">
                Electronic<br /> Health Record
              </h3>
              <span className="w-10 h-10 flex items-center justify-center rounded-full 
                     bg-white/30 backdrop-blur-md border border-white/40 
                     shadow-md">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                  <path d="M6.44922 4.65332L13.912 4.63672L13.8962 12.1004" stroke="#0f172a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13.9099 4.63672L4.63867 13.907" stroke="#0f172a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </span>
          </div>

          {/* Card 3: Dark Blue block (spanning 2 rows on right) */}
          <div className="md:row-span-2 rounded-md bg-[#1D3540] text-white p-8 flex flex-col justify-between relative group overflow-hidden">
            <h3 className="text-md text-white font-medium mb-4 relative leading-relaxed">Streamlined, precise, and secure solutions for managing healthcare payments and invoices. We optimize financial operations, minimize errors, and ensure timely payments for providers and patients alike.We optimize financial operations, minimize errors, and ensure timely payment</h3>
            <span className="relative z-10 mt-auto flex items-center justify-between gap-4">
              <span className="text-3xl font-bold leading-tight">
                Billing and <br /> invoicing
              </span>
              <span className="w-10 h-10 flex items-center justify-center rounded-full 
                   bg-white/20 backdrop-blur-md border border-white/30 
                   shadow-md text-primary">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.44922 4.65332L13.912 4.63672L13.8962 12.1004" stroke="#E8ECED" strokeWidth="1.39073" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13.9099 4.63672L4.63867 13.907" stroke="#E8ECED" strokeWidth="1.39073" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </span>
            {/* Background pattern placeholder */}
            <div className="absolute right-0 top-0 bottom-0 w-2/3 bg-white/5 rounded-l-full transform translate-x-12"></div>
          </div>

          {/* Card 4: Light Pink block */}
          <div className="rounded-md bg-[#FFF0F4] p-8 flex flex-col justify-between group hover:bg-[#ffe3ea] transition-colors">

            <div className="text-black font-medium text-md mb-2 tracking-wide">
              Streamlined Solutions for Virtual Consultations and Management.
            </div>

            {/* Title + Icon in one line */}
            <div className="flex items-center justify-between mt-12">
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  In-Person Consult
                </h3>
                <div className="text-sm font-medium text-muted">
                  Total health overviews
                </div>
              </div>

              <span className="w-10 h-10 flex items-center justify-center rounded-full 
                     bg-white/30 backdrop-blur-md border border-white/40 
                     shadow-md">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                  <path d="M6.44922 4.65332L13.912 4.63672L13.8962 12.1004" stroke="#be185d" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13.9099 4.63672L4.63867 13.907" stroke="#be185d" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

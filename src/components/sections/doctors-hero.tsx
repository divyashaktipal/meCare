export function DoctorsHero() {
  return (
    <section className="bg-[#F4FAF8] pt-16 md:pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-[#03112E] max-w-4xl mx-auto mb-6 leading-tight flex flex-wrap justify-center items-center gap-y-2 md:gap-y-4">
          Designed for specialists <br className="hidden md:block" /> leading healthcare excellence.
        </h1>

        <p className="text-[#4B5563] mt-6 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-12 font-medium">
          Discover a platform designed for trailblazing specialists. Our resources empower leaders in <br className="hidden md:block" /> healthcare innovation and excellence.
        </p>

        <div className="relative aspect-[16/7] md:aspect-[21/9] rounded-[2rem] overflow-hidden max-w-5xl mx-auto border border-black/5 bg-white shadow-sm">
          <img src="./myPhoto.jpg" alt="Specialist Team" className="w-full h-full object-cover object-top" />
        </div>
      </div>
    </section>
  );
}

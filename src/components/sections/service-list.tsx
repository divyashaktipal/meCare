export function ServiceList() {
  const services = [
    { title: "Cardiology", desc: "Our cardiology services at Medcare offer advanced technology to diagnose, treat, and prevent heart diseases." },
    { title: "Endocrinology", desc: "Our comprehensive medical services for the diagnosis and treatment of conditions associated with hormones." },
    { title: "Neurology", desc: "Our highly specialized medical team, using advanced technology, testing, and modern treatment approaches." },
    { title: "Eye care", desc: "Our comprehensive care with personalized treatments combining medical, surgical, to keep healthy vision." },
    { title: "Dentist", desc: "A comprehensive overall health. Offering everything from shining a true, healthy smile always healthy and bright." },
    { title: "Orthopedics", desc: "Dedicated professionals treats bone, joint, and muscle issues. Arthritis and injury or severe mobility, we conquer pain." }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-[#03112E] leading-tight">
            Comprehensive quality<br />care you need
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <div key={i} className="rounded-3xl p-8 border border-border/60 hover:shadow-lg transition-shadow bg-surface group flex flex-col items-start text-left relative overflow-hidden">
              {/* <div className="absolute top-8 right-8 w-16 h-16 rounded-full border border-border/50 bg-background"></div> */}

              <div className="w-16 h-16 rounded-2xl bg-[#FFE5EC] flex items-center justify-center text-red-400 mb-6 relative shadow-sm border border-white/50 group-hover:scale-105 transition-transform">
                <svg width="88" height="84" viewBox="0 0 88 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M66.6433 53.6986H63.0855V58.0375C63.0855 58.8401 62.4346 59.4879 61.6351 59.4879H57.2962V63.0457H61.6351C62.4377 63.0457 63.0855 63.6965 63.0855 64.4961V68.8349H66.6433V64.4961C66.6433 63.6934 67.2941 63.0457 68.0937 63.0457H72.4325V59.4879H68.0937C67.291 59.4879 66.6433 58.837 66.6433 58.0375V53.6986ZM61.6382 50.7947H68.0968C68.8995 50.7947 69.5472 51.4455 69.5472 52.2451V56.5839H73.886C74.6887 56.5839 75.3364 57.2347 75.3364 58.0343V64.4929C75.3364 65.2956 74.6856 65.9433 73.886 65.9433H69.5472V70.2822C69.5472 71.0848 68.8963 71.7325 68.0968 71.7325H61.6382C60.8355 71.7325 60.1878 71.0817 60.1878 70.2822V65.9433H55.8489C55.0463 65.9433 54.3986 65.2925 54.3986 64.4929V58.0343C54.3986 57.2316 55.0494 56.5839 55.8489 56.5839H60.1878V52.2451C60.1878 51.4424 60.8386 50.7947 61.6382 50.7947ZM75.3272 50.8071C78.0049 53.4848 79.6598 57.1821 79.6598 61.2702C79.6598 65.3549 78.0049 69.0553 75.3272 71.7333C72.6495 74.4114 68.9522 76.0659 64.8641 76.0659C60.7794 76.0659 57.079 74.411 54.4009 71.7333C51.7229 69.0557 50.0684 65.3584 50.0684 61.2702C50.0684 57.1856 51.7233 53.4851 54.4009 50.8071C57.0786 48.129 60.7759 46.4745 64.8641 46.4745C68.9487 46.4745 72.6491 48.1294 75.3272 50.8071ZM62.5402 43.7224C58.5826 44.2431 55.0403 46.0684 52.3532 48.7555C49.9359 51.1728 48.2127 54.2875 47.5154 57.7707C46.0743 59.0258 44.6704 60.25 43.2726 61.5082C42.2034 62.4689 41.1993 63.3925 40.2789 64.2758C38.252 62.3419 35.7293 60.1663 32.999 57.811C29.1839 54.5197 24.9564 50.872 21.0363 46.9512C10.5518 36.4634 2.67666 24.2961 13.5953 13.3784C17.1066 9.86703 21.6965 8.05407 26.314 7.93935C30.9658 7.82468 35.6521 9.42385 39.3088 12.7399C39.8667 13.2451 40.7065 13.2327 41.252 12.7368C44.9152 9.41765 49.5952 7.82779 54.2341 7.93934C58.8673 8.05401 63.4635 9.87321 66.9655 13.3753C71.9737 18.3835 73.1111 23.5068 71.89 28.5551C70.6535 33.6687 67.0429 38.804 62.5368 43.7158L62.5402 43.7224ZM21.1574 36.2814H28.5582C29.1098 36.2814 29.5933 35.9714 29.8381 35.5159L31.6543 32.5159L36.1635 42.046C36.5044 42.7682 37.3691 43.0781 38.0912 42.7372C38.5592 42.5171 38.8536 42.0801 38.9093 41.6029L41.1934 29.0515L43.7192 35.3645C43.9455 35.9285 44.4878 36.2725 45.0612 36.2725V36.2756H60.0608C60.8635 36.2756 61.5112 35.6248 61.5112 34.8252C61.5112 34.0226 60.8604 33.3748 60.0608 33.3748H46.0402L42.0144 23.3084H42.0113C41.8316 22.8621 41.4349 22.515 40.9235 22.4251C40.1394 22.2826 39.3863 22.8063 39.2468 23.5935L36.8543 36.7399L33.1446 28.8991C33.03 28.6232 32.8285 28.3815 32.5558 28.2172C31.8709 27.8051 30.9783 28.0251 30.5661 28.71L27.7428 33.3773H21.1602C20.3575 33.3773 19.7098 34.0281 19.7098 34.8277C19.7098 35.6304 20.3606 36.2781 21.1602 36.2781L21.1574 36.2814Z" fill="#DF7E7E" />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed font-medium mb-8 flex-1">
                {service.desc}
              </p>

              <button className="flex items-center gap-2 text-xs font-bold text-foreground group-hover:text-primary transition-colors uppercase tracking-widest mt-auto border border-border rounded-full px-4 py-2 hover:bg-muted/10">
                Read more <span className="text-lg leading-none mb-0.5">↗</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

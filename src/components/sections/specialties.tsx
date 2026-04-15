export function Specialties() {
  const specialties = [
    { name: "Medicine", active: false },
    { name: "Neuro Medicine", active: true },
    { name: "Orthopedic surgery", active: false },
    { name: "Neurology", active: false },
    { name: "Cardiology", active: false },
    { name: "Psychiatry", active: false },
    { name: "Oncology", active: false },
    { name: "Oncology", active: false },
    { name: "Oncology", active: false },
  ];

  return (
    <section className="py-8 mt-16 md:mt-24 border-y border-border overflow-hidden bg-surface">
      <div className="flex gap-4 md:gap-8 justify-center flex-wrap px-4 container mx-auto">
        {specialties.map((item, index) => (
          <div key={index} className={`flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer transition-colors ${item.active ? 'bg-secondary/30 text-foreground' : 'text-muted hover:text-foreground hover:bg-muted/10'}`}>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${item.active ? 'bg-secondary/50' : 'bg-muted/20'}`}>
              <span className="text-[10px] opacity-70">O+</span>
            </div>
            <span className="text-sm font-semibold whitespace-nowrap">{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

import { MedicineIcon, NeurologyIcon, OrthopedicIcon, UrologyIcon, DermatologyIcon, NutritionIcon, DentalIcon, CardiologyIcon, OncologyIcon, PsychiatryIcon, RheumatologyIcon } from "@/custom/svgIcons/specialties";

export function Specialties() {
  const specialties = [
    { name: "Neuro Medicine", icon: MedicineIcon },
    { name: "Orthopedic surgery", icon: OrthopedicIcon },
    { name: "Neurology", icon: NeurologyIcon },
    { name: "Cardiology", icon: CardiologyIcon },
    { name: "Psychiatry", icon: PsychiatryIcon },
    { name: "Oncology", icon: OncologyIcon },
    { name: "Urology", icon: UrologyIcon },
    { name: "Rheumatology", icon: RheumatologyIcon },
    { name: "Dermatology", icon: DermatologyIcon },
    { name: "Nutrition", icon: NutritionIcon },
    { name: "Dental", icon: DentalIcon },
  ];

  return (
    <section className="py-8">
      <div className="flex gap-4 justify-center flex-wrap">
        {specialties.map((item, index) => {
          const Icon = item.icon;

          return (
            <div key={index} className="flex items-center gap-2 px-4 py-2 border rounded-sm">
              <div className="w-6 h-6 flex items-center justify-center">
                <Icon />
              </div>
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  { title: "Cardiology", desc: "Expert heart care and surgery with advanced technology.", icon: "❤️" },
  { title: "Neurology", desc: "Comprehensive care for brain and nervous system disorders.", icon: "🧠" },
  { title: "Orthopedics", desc: "Treatment for bones, joints, ligaments, and muscles.", icon: "🦴" },
  { title: "Pediatrics", desc: "Specialized medical care for infants, children, and adolescents.", icon: "👶" },
];

export function Features() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            Our Services
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Specialized Care For You</h2>
          <p className="max-w-[700px] text-muted md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
            We provide a wide range of specialized medical services tailored to your specific needs, using the latest medical technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:border-primary/50 hover:shadow-md transition-all duration-300">
              <CardHeader>
                <div className="mb-4 text-4xl p-3 bg-surface rounded-xl w-fit group-hover:scale-110 transition-transform shadow-sm border border-border/50">
                  {service.icon}
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted text-sm mb-6">{service.desc}</p>
                <Button variant="ghost" className="p-0 h-auto font-semibold text-primary hover:text-primary-hover hover:bg-transparent">
                  Learn more →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

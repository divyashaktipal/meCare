export interface TestimonialItem {
  id: number;
  quote: string;
  name: string;
  date: string;
  patientImg: string;
  doctorImg: string;
  bgColor: string;
}

export interface TestimonialsSectionData {
  title: string;
  testimonials: TestimonialItem[];
}

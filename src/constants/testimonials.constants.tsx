import { SVGProps } from "react";
import { TestimonialsSectionData } from "@/types/testimonials";

// Arrow SVG Components for Carousel navigation
export function PrevIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

export function NextIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export const testimonialsSectionData: TestimonialsSectionData = {
  title: "What Patients Are Saying<br />About Dr. Hassan",
  testimonials: [
    {
      id: 1,
      quote: "Dr. Hassan is an excellent physician. He takes his time to listen to your concerns. He asks the right questions and does a thorough exam before making a diagnosis. He is friendly, compassionate, and truly cares about his patients.",
      name: "Leslie Alexander",
      date: "26 May, 2024",
      patientImg: "./myPhoto.jpg",
      doctorImg: "./myPhoto.jpg",
      bgColor: "bg-[#E6F4F1]"
    },
    {
      id: 2,
      quote: "The healthcare services provided here completely changed my perspective on specialized care. The staff are attentive and deeply understand patient needs. Highly recommended for accurate and thorough check-ups.",
      name: "Ralph Edwards",
      date: "14 June, 2024",
      patientImg: "./myPhoto.jpg",
      doctorImg: "./myPhoto.jpg",
      bgColor: "bg-[#F3E8FF]"
    },
    {
      id: 3,
      quote: "An absolutely wonderful seamless experience from start to finish. I've never felt more listened to by a doctor. Their analytics and predictive approach to healthcare is next level.",
      name: "Kathryn Murphy",
      date: "10 July, 2024",
      patientImg: "./myPhoto.jpg",
      doctorImg: "./myPhoto.jpg",
      bgColor: "bg-[#FFF0F4]"
    }
  ]
};

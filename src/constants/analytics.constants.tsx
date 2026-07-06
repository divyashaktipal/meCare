import React from "react";
import { AnalyticsSectionData } from "@/types/analytics";

export const analyticsSectionData: AnalyticsSectionData = {
   heading: "Our health analytics solutions",
   subheading: "A unified platform for data-driven healthcare",
   cards: [
      {
         type: "text",
         title: "Empowering Health professionals",
         description: "Provide specialized and personalized care mapping patient data with advanced predictive models for proactive medical advice.",
         buttonText: "Learn More",
         bgColor: "bg-[#4bc9c1]/20",
         textColor: "text-foreground",
         colSpan: "lg:col-span-2",
      },
      {
         type: "image",
         imageSrc: "./illustration1.png",
         imageAlt: "Doctor patient",
      },
      {
         type: "image",
         imageSrc: "./illustration2.png",
         imageAlt: "Stethoscope",
      },
      {
         type: "text",
         title: "Cost Optimization",
         description: "This service focuses on using analytics to improve the quality of care and identify areas for reduction. It appeals to healthcare provider seeking.",
         buttonText: "Try Now",
         bgColor: "bg-[#0070bc]",
         textColor: "text-white",
         hasArrow: true,
      },
      {
         type: "image",
         imageSrc: "./illustration3.png",
         imageAlt: "Patient hands",
      },
   ],
};

export const ArrowRightUpIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
   <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
   >
      <path
         d="M6.95117 5.01791L15.0003 5L14.9833 13.0501"
         stroke="currentColor"
         strokeWidth="1.5"
         strokeLinecap="round"
         strokeLinejoin="round"
      />
      <path
         d="M14.9997 5L5 14.9987"
         stroke="currentColor"
         strokeWidth="1.5"
         strokeLinecap="round"
         strokeLinejoin="round"
      />
   </svg>
);

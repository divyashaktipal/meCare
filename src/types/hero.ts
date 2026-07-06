import React from "react";

export interface HeroCardData {
   title: string;
   description: string;
   buttonText: string;
   buttonLink: string;
   bgColor: string;
   textColor: string;
   buttonStyle: "square" | "round";
   icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface HeroSectionData {
   bgTitle: string;
   mainImageSrc: string;
   mainImageAlt: string;
   descriptionDesktop: string;
   descriptionMobile: string;
   buttonText: string;
   buttonLink: string;
   cards: HeroCardData[];
}

export interface AnalyticsCard {
   type: "text" | "image";
   title?: string;
   description?: string;
   buttonText?: string;
   imageSrc?: string;
   imageAlt?: string;
   bgColor?: string;
   textColor?: string;
   colSpan?: string;
   hasArrow?: boolean;
}

export interface AnalyticsSectionData {
   heading: string;
   subheading: string;
   cards: AnalyticsCard[];
}

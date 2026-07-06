import React from "react";
import { LucideIcon } from "lucide-react";

export interface BenefitItem {
   title: string;
   desc: string;
}

export interface StatItem {
   icon: LucideIcon;
   title: string;
   subtitle: string;
}

export interface PassionateCard {
   title: string;
   icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface WellBeingCard {
   title: string;
   desc: string;
   icon: React.FC<React.SVGProps<SVGSVGElement>>;
   bgColor: string;
}
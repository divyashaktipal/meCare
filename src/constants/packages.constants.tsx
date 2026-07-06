import { PackagesSectionData } from "@/types/packages";

export const packagesSectionData: PackagesSectionData = {
  title: "Exclusive Health Check-up Packages",
  subtitle: "Discover our Exclusive Health Check-up Packages, designed to provide comprehensive tailored to your unique health needs.",
  filterPills: [
    "All Tests",
    "Full body check up",
    "Diabetes",
    "Heart",
    "Cancer",
    "Vitamin",
    "Women Health",
    "Skin care",
    "Liver"
  ],
  packages: [
    {
      name: "Women’s Staying Strong Health Checkup",
      desc: "Includes 32 Tests",
      price: "$150",
      status: "Active",
      bg: "bg-[#F4FAF8]"
    },
    {
      name: "Medicare Diabetes Screening",
      desc: "Includes 12 Tests",
      price: "$100",
      status: "Active",
      bg: "bg-[#F4FAF8]"
    },
    {
      name: "Medicare full body Health checkup",
      desc: "Includes 18 Tests",
      price: "$250",
      status: "Active",
      bg: "bg-[#F4FAF8]"
    }
  ]
};

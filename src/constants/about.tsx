import React from "react";
import { Building2, Flag, MessageSquarePlus, Hourglass } from "lucide-react";

export const benefitsData = [
   { title: "Personalized care mapping", desc: "For us, healthcare is more than treatment; it's about building lasting relationships." },
   { title: "Specialist doctor reference", desc: "For us, healthcare is more than treatment; it's about building lasting relationships." },
   { title: "Experienced team", desc: "For us, healthcare is more than treatment; it's about building lasting relationships." },
   { title: "Quick health checks", desc: "For us, healthcare is more than treatment; it's about building lasting relationships." }
];

export const statsData = [
   {
      icon: Building2,
      title: "500k+corp",
      subtitle: "Subscribed Hospital/clinic"
   },
   {
      icon: Flag,
      title: "32+ Countries",
      subtitle: "Countries supports"
   },
   {
      icon: MessageSquarePlus,
      title: "98% Satisfied",
      subtitle: "Satisfied users"
   },
   {
      icon: Hourglass,
      title: "Time Savings",
      subtitle: "By automating system"
   }
];

export const SpecialistCareIcon = () => (
   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12.75 10.85C12.75 11.0709 12.9291 11.25 13.15 11.25H21.1C21.3209 11.25 21.5 11.0709 21.5 10.85V8.026C21.5 4.721 19.377 2.5 16.217 2.5H13.15C12.9291 2.5 12.75 2.67909 12.75 2.9V10.85Z" fill="white" />
      <path fillRule="evenodd" clipRule="evenodd" d="M10.85 11.25C11.0709 11.25 11.25 11.0709 11.25 10.85V2.9C11.25 2.67909 11.0709 2.5 10.85 2.5H7.783C4.623 2.5 2.5 4.721 2.5 8.026V10.85C2.5 11.0709 2.67909 11.25 2.9 11.25H10.85Z" fill="white" />
      <path fillRule="evenodd" clipRule="evenodd" d="M13.15 12.75C12.9291 12.75 12.75 12.9291 12.75 13.15V21.1C12.75 21.3209 12.9291 21.5 13.15 21.5H16.217C19.377 21.5 21.5 19.279 21.5 15.974V13.15C21.5 12.9291 21.3209 12.75 21.1 12.75H13.15Z" fill="white" />
      <path fillRule="evenodd" clipRule="evenodd" d="M11.25 13.15C11.25 12.9291 11.0709 12.75 10.85 12.75H2.9C2.67909 12.75 2.5 12.9291 2.5 13.15V15.974C2.5 19.279 4.623 21.5 7.783 21.5H10.85C11.0709 21.5 11.25 21.3209 11.25 21.1V13.15Z" fill="white" />
   </svg>
);

export const ModernFacilitiesIcon = () => (
   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M15.3097 12.613H8.68875C8.27475 12.613 7.93875 12.277 7.93875 11.863C7.93875 11.449 8.27475 11.113 8.68875 11.113H15.3097C15.7237 11.113 16.0597 11.449 16.0597 11.863C16.0597 12.277 15.7237 12.613 15.3097 12.613ZM15.3097 16.669H8.68875C8.27475 16.669 7.93875 16.333 7.93875 15.919C7.93875 15.505 8.27475 15.169 8.68875 15.169H15.3097C15.7237 15.169 16.0597 15.505 16.0597 15.919C16.0597 16.333 15.7237 16.669 15.3097 16.669ZM8.68975 7.066H11.2157C11.6297 7.066 11.9657 7.402 11.9657 7.816C11.9657 8.23 11.6297 8.566 11.2157 8.566H8.68975C8.27575 8.566 7.93975 8.23 7.93975 7.816C7.93975 7.402 8.27575 7.066 8.68975 7.066ZM16.0367 2.5H7.96275C5.41575 2.5 3.34375 4.572 3.34375 7.12V16.88C3.34375 19.427 5.41575 21.5 7.96275 21.5H16.0367C18.5837 21.5 20.6567 19.427 20.6567 16.88V7.12C20.6567 4.572 18.5837 2.5 16.0367 2.5Z" fill="white" />
   </svg>
);

export const DedicatedSupportIcon = () => (
   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12.1411 13.8477C10.0961 13.8617 3.86912 13.9047 3.87012 18.2887C3.95312 20.0407 5.20012 21.2167 6.97312 21.2167H17.3291C19.0891 21.2167 20.3351 20.0417 20.4311 18.2647C20.4501 13.9257 14.2031 13.8667 12.1411 13.8477Z" fill="white" />
      <path fillRule="evenodd" clipRule="evenodd" d="M12.1562 11.6952C14.6142 11.6952 16.6132 9.69625 16.6132 7.23925C16.6132 4.78125 14.6142 2.78125 12.1562 2.78125C9.69822 2.78125 7.69922 4.78125 7.69922 7.23925C7.69922 9.69625 9.69822 11.6952 12.1562 11.6952Z" fill="white" />
   </svg>
);

export const passionateCardsData = [
   { title: "Specialist Care", icon: SpecialistCareIcon },
   { title: "Modern Facilities", icon: ModernFacilitiesIcon },
   { title: "Dedicated Support", icon: DedicatedSupportIcon }
];

export const ResidentCareIcon = () => (
   <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M7 16.4537C6.75466 16.3683 6.52337 16.2756 6.31023 16.1748C5.97723 16.0175 5.58741 15.7938 5.25489 15.4688C4.91926 15.1407 4.5 14.5613 4.5 13.75C4.5 12.9387 4.91926 12.3593 5.25489 12.0312C5.58741 11.7062 5.97723 11.4826 6.31023 11.3251C6.98572 11.0057 7.84346 10.7675 8.75316 10.5856C10.6035 10.2155 13.0762 10 15.75 10C18.4237 10 20.8965 10.2155 22.7469 10.5856C23.6565 10.7675 24.5143 11.0057 25.1898 11.3251C25.5228 11.4826 25.9127 11.7062 26.2451 12.0312C26.5807 12.3593 27 12.9387 27 13.75C27 14.5613 26.5807 15.1407 26.2451 15.4688C25.9127 15.7938 25.5228 16.0175 25.1898 16.1748C24.9767 16.2756 24.7453 16.3683 24.5 16.4538V23.75C24.5 24.5183 24.0648 25.1258 23.5561 25.5587C23.0439 25.9947 22.3578 26.3451 21.5917 26.6208C20.0518 27.1752 17.9864 27.5 15.75 27.5C13.5136 27.5 11.4481 27.1752 9.90818 26.6208C9.14222 26.3451 8.45613 25.9947 7.9438 25.5587C7.43523 25.1258 7 24.5183 7 23.75V16.4537ZM23.6652 14.7552L23.6693 14.7539C24.5912 14.4637 25.125 14.1193 25.125 13.75C25.125 13.3807 24.5912 13.0363 23.6693 12.746L23.6652 12.7448C22.0017 12.2219 19.0784 11.875 15.75 11.875C12.4216 11.875 9.49836 12.2219 7.83477 12.7448L7.83069 12.746C6.90886 13.0363 6.375 13.3807 6.375 13.75C6.375 14.1193 6.90886 14.4637 7.83069 14.7539L7.83477 14.7552C9.49836 15.2781 12.4216 15.6249 15.75 15.6249C19.0784 15.6249 22.0017 15.2781 23.6652 14.7552Z" fill="#DF7E7E" />
      <path d="M17.6909 2.36893C17.9212 1.90828 18.5786 1.90828 18.8089 2.36893C19.4285 3.60818 19.6426 3.82225 20.8819 4.44188C21.3425 4.67221 21.3425 5.32958 20.8819 5.55991C19.6426 6.17954 19.4285 6.39361 18.8089 7.63286C18.5786 8.09351 17.9212 8.09351 17.6909 7.63286C17.0713 6.39361 16.8572 6.17954 15.6179 5.55991C15.1573 5.32958 15.1573 4.67221 15.6179 4.44188C16.8572 3.82225 17.0713 3.60818 17.6909 2.36893Z" fill="#DF7E7E" />
      <path d="M11.4409 4.86894C11.6712 4.40827 12.3286 4.40827 12.5589 4.86894C12.7768 5.30463 12.9462 5.47404 13.3819 5.69188C13.8425 5.92221 13.8425 6.57958 13.3819 6.80992C12.9462 7.02777 12.7768 7.19718 12.5589 7.63287C12.3286 8.09352 11.6712 8.09352 11.4409 7.63287C11.223 7.19718 11.0536 7.02777 10.6179 6.80992C10.1573 6.57958 10.1573 5.92221 10.6179 5.69188C11.0536 5.47404 11.223 5.30463 11.4409 4.86894Z" fill="#DF7E7E" />
   </svg>
);

export const QualityHealthcareIcon = () => (
   <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.0625 17.5C4.0625 16.9822 4.48223 16.5625 5 16.5625H8.75C8.90798 16.5625 9.0634 16.6024 9.20183 16.6786L12.1158 18.2814H13.125C14.673 18.2814 15.9555 19.0731 16.6431 20.1305L12.5 22.1366L9.04646 20.9854L8.45353 22.7642L12.2035 24.0142C12.396 24.0783 12.604 24.0783 12.7965 24.0142L18.4956 21.2247V19.513L21.2164 18.606C22.9431 18.0305 24.8191 18.9006 25.4951 20.5905L25.8696 21.5268C26.0507 21.9795 25.8545 22.4955 25.4184 22.7135L14.1684 28.3385C13.9594 28.443 13.7188 28.4657 13.4939 28.4021L4.7448 25.927C4.34116 25.8128 4.0625 25.4444 4.0625 25.0249V17.5Z" fill="#DF7E7E" />
      <path d="M14.6679 1.95006C15.0496 2.11468 15.3707 2.30958 15.6235 2.48906C15.8763 2.30958 16.1974 2.11468 16.5791 1.95007C17.6292 1.49713 19.1155 1.28972 20.7848 2.18999C22.9029 3.33233 23.8764 6.01466 23.2439 8.69233C22.5984 11.4254 20.3201 14.1692 15.9551 15.8126L15.6235 15.9375L15.2919 15.8126C10.9269 14.1692 8.64862 11.4254 8.00302 8.69233C7.3705 6.01467 8.34398 3.33233 10.4621 2.18999C12.1314 1.28971 13.6178 1.49713 14.6679 1.95006Z" fill="#DF7E7E" />
   </svg>
);

export const wellBeingCardsData = [
   { 
      title: "Resident Care", 
      desc: "A dedicated professional team always available to provide you personalized treatment.", 
      icon: ResidentCareIcon,
      bgColor: "bg-[#E6F8F6]" 
   },
   { 
      title: "Quality Healthcare", 
      desc: "A dedicated professional team always available to provide you personalized treatment.", 
      icon: QualityHealthcareIcon,
      bgColor: "bg-[#FFF0EF]" 
   },
   { 
      title: "24/7 Support", 
      desc: "A dedicated professional team always available to provide you personalized treatment.", 
      icon: QualityHealthcareIcon, // the same SVG is used in the original
      bgColor: "bg-[#FFF9E6]" 
   }
];

export const aboutHeroData = {
   titleLine1: "Meet our Healthcare Team: ",
   titleLine2: "Committed to Your Well-Being",
   description: "Our healthcare team combines expertise, compassion, and a commitment to your well-being, ensuring you receive personalized",
   buttonText: "Meet Our Consultations",
   buttonLink: "/doctors",
   images: [
      { src: "./aboutImg1.png", alt: "Medical team" },
      { src: "./aboutImg2.png", alt: "Doctor examining patient" }
   ]
};

export const aboutWellBeingData = {
  titleLine1: "Committed to Your Well-Being",
  titleLine2: "at Every Stage",
  description: "We provide comprehensive care and support tailored to your unique healthcare needs.",
  image: { src: "./servicesImg1.png", alt: "Glowing Heart Hands" }
};

export const aboutBenefitsData = {
  title: "Benefits Tailored to You",
  description: "Discover the core advantages of picking our healthcare platform to fulfill you and your family's healthcare goals.",
  image: { src: "./aboutImg4.png", alt: "Doctor holding a glowing heart" }
};

export const aboutPassionateData = {
  titleLine1: "Passionate about care,",
  titleLine2: "committed to better.",
  description: "We believe in providing the highest standard of healthcare, combining compassion with cutting-edge medical technology.",
  image: { src: "./aboutImg3.png", alt: "Doctor and Child High-Five" }
};

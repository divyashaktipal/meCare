export interface LoginFormData {
   emailLabel: string;
   emailPlaceholder: string;
   passwordLabel: string;
   passwordPlaceholder: string;
   forgotPasswordText: string;
   forgotPasswordLink: string;
   submitLabel: string;
   loadingLabel: string;
}

export interface TestimonialData {
   text: string;
   author: string;
   handle: string;
   imageSrc: string;
   imageAlt: string;
}

export interface LoginSectionData {
   title: string;
   subtitle: string;
   form: LoginFormData;
   dividerText: string;
   signUpText: string;
   signUpLinkText: string;
   signUpLink: string;
   testimonial: TestimonialData;
}

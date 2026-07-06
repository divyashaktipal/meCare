import React from "react";
import { LoginSectionData } from "@/types/login-section";

export const loginSectionData: LoginSectionData = {
   title: "Sign In to Your Account",
   subtitle: "Sign in to manage your health and stay connected.",
   form: {
      emailLabel: "Email",
      emailPlaceholder: "hipixem@gmail.com",
      passwordLabel: "Password",
      passwordPlaceholder: "password",
      forgotPasswordText: "Forgot Password?",
      forgotPasswordLink: "#",
      submitLabel: "Sign in",
      loadingLabel: "Loading...",
   },
   dividerText: "Or Sign in with",
   signUpText: "Don't have an account?",
   signUpLinkText: "Sign Up",
   signUpLink: "/sign-up",
   testimonial: {
      text: "Our experience with the support team was exceptional. They were responsive, friendly, and resolved our issue quickly. It's clear they genuinely care about their clients.",
      author: "Aliah Lane",
      handle: "@hiatceken",
      imageSrc: "./myPhoto.jpg",
      imageAlt: "Doctor Client Services",
   },
};

// SVG icons as functional components
export const PulseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
   <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
   >
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
   </svg>
);

export const GoogleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
   <svg width="18" height="18" viewBox="0 0 24 24" {...props}>
      <path
         fill="#4285F4"
         d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
         fill="#34A853"
         d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
         fill="#FBBC05"
         d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
         fill="#EA4335"
         d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
   </svg>
);

export const AppleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
   <svg width="20" height="20" viewBox="0 0 24 24" fill="#03112E" {...props}>
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.126 3.805 3.051 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.62-1.518 3.608-2.964 1.153-1.687 1.625-3.321 1.65-3.407-.035-.013-3.182-1.22-3.21-4.88-.026-3.072 2.512-4.523 2.632-4.593-1.428-2.09-3.626-2.378-4.417-2.417-1.745-.118-3.483 1.085-4.35 1.085zm-2.062-4.08c.84-.972 1.4-2.325 1.246-3.682-1.164.047-2.6.772-3.468 1.76-.78.85-1.433 2.227-1.26 3.551 1.296.1 2.646-.665 3.482-1.63z" />
   </svg>
);

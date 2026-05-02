import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/layout/navbar"
import { Onest, Red_Hat_Text } from "next/font/google"

export const metadata: Metadata = {
  title: "MeCare",
  description: "Healthcare Website",
}

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
  display: "swap",
})

const redHatText = Red_Hat_Text({
  subsets: ["latin"],
  variable: "--font-red-hat-text",
  display: "swap",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${onest.variable} ${redHatText.variable}`}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
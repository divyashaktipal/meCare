"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    setIsAuthenticated(!!localStorage.getItem("token"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-surface border-b border-border shadow-sm sm:shadow-none">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6 relative">
        <Link href="/" className="flex items-center gap-2 z-[60]">
          <div className="flex items-center gap-2 text-2xl md:text-2xl font-bold tracking-tight text-primary">
            <span className="text-foreground">MeCare</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          <Link href="/" className="text-sm font-semibold hover:text-primary transition-colors text-foreground">Home</Link>
          <Link href="/services" className="text-sm font-semibold text-muted hover:text-primary transition-colors">Service</Link>
          <Link href="/doctors" className="text-sm font-semibold text-muted hover:text-primary transition-colors">Doctors</Link>
          <Link href="/pricing" className="text-sm font-semibold text-muted hover:text-primary transition-colors">Pricing</Link>
          <Link href="/about" className="text-sm font-semibold text-muted hover:text-primary transition-colors">About</Link>
          <Link href="/blogs" className="text-sm font-semibold text-muted hover:text-primary transition-colors">Blogs</Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 md:gap-6 z-[60]">
          {/* Theme Toggle (Desktop before Login, Mobile before Get Appointment) */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-muted/10 transition-colors text-foreground flex items-center justify-center shrink-0"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} strokeWidth={2.5} /> : <Moon size={20} strokeWidth={2.5} />}
            </button>
          )}

          {/* Desktop Login */}
          {isAuthenticated ? (
            <>
              <Link href="/dashboard" className="hidden md:inline-block text-sm font-semibold hover:text-primary transition-colors text-foreground">
                Dashboard
              </Link>
              <button onClick={handleLogout} className="hidden md:inline-block text-sm font-semibold hover:text-red-500 transition-colors text-foreground">
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" className="hidden md:inline-block text-sm font-semibold hover:text-primary transition-colors text-foreground">
              Login
            </Link>
          )}

          {/* Get Appointment (Always visible, even on mobile) */}
          <Link href="/get-appointment">
            <Button variant="primary" className="hidden sm:flex rounded-full px-6 font-semibold shadow-md h-10">
              Get Appointment
            </Button>
            {/* Mobile version potentially smaller */}
            <Button variant="primary" className="sm:hidden rounded-full px-4 text-xs font-bold shadow-sm h-8 bg-primary text-white">
              Get Appointment
            </Button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 -mr-2 text-foreground"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={24} strokeWidth={3.0} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown / Card */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/20 z-[70] md:hidden backdrop-blur-sm transition-opacity"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="fixed top-20 right-4 w-[280px] bg-background border border-border rounded-2xl shadow-xl p-6 z-[80] flex flex-col gap-6 md:hidden">

            <div className="flex justify-between items-center mb-2">
              <button onClick={() => setIsMenuOpen(false)} className="p-1 hover:bg-muted/10 rounded-full text-foreground/70">
                <X size={24} strokeWidth={2.5} />
              </button>
            </div>

            <nav className="flex flex-col gap-5">
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-base font-semibold text-foreground hover:text-primary transition-colors">Home</Link>
              <Link href="/services" onClick={() => setIsMenuOpen(false)} className="text-base font-semibold text-muted hover:text-primary transition-colors">Service</Link>
              <Link href="/doctors" onClick={() => setIsMenuOpen(false)} className="text-base font-semibold text-muted hover:text-primary transition-colors">Doctors</Link>
              <Link href="/pricing" onClick={() => setIsMenuOpen(false)} className="text-base font-semibold text-muted hover:text-primary transition-colors">Pricing</Link>
              <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-base font-semibold text-muted hover:text-primary transition-colors">About</Link>
              <Link href="/news" onClick={() => setIsMenuOpen(false)} className="text-base font-semibold text-muted hover:text-primary transition-colors">News</Link>
            </nav>

            <div className="flex flex-col gap-4 pt-5 mt-2 border-t border-border">
              {isAuthenticated ? (
                <>
                  <Link href="/dashboard" onClick={() => setIsMenuOpen(false)} className="text-base font-semibold text-foreground hover:text-primary transition-colors flex items-center justify-between group">
                    Dashboard
                    <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </Link>
                  <button onClick={() => { handleLogout(); setIsMenuOpen(false); }} className="text-left text-base font-semibold text-foreground hover:text-red-500 transition-colors flex items-center justify-between group">
                    Logout
                  </button>
                </>
              ) : (
                <Link href="/login" onClick={() => setIsMenuOpen(false)} className="text-base font-semibold text-foreground hover:text-primary transition-colors flex items-center justify-between group">
                  Login
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              )}
            </div>
          </div>
        </>
      )}
    </header>
  );
}

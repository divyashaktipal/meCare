"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsAuthenticated(!!localStorage.getItem("token"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto relative flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="z-[60] flex items-center gap-2">
          <div className="flex items-center gap-2 text-2xl font-bold tracking-tight">
            <span className="text-foreground">MeCare</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-semibold text-foreground transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
          >
            Service
          </Link>
          <Link
            href="/doctors"
            className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
          >
            Doctors
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
          >
            About
          </Link>
          <Link
            href="/blogs"
            className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
          >
            Blogs
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="z-[60] flex items-center gap-2 md:gap-6">
          {/* Shadcn Theme Toggle */}
          {mounted && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="relative">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          {/* Desktop Login */}
          {isAuthenticated ? (
            <>
              <Link
                href="/dashboard"
                className="hidden text-sm font-semibold text-foreground transition-colors hover:text-primary md:inline-block"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="hidden text-sm font-semibold text-foreground transition-colors hover:text-red-500 md:inline-block"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="hidden text-sm font-semibold text-foreground transition-colors hover:text-primary md:inline-block"
            >
              Login
            </Link>
          )}

          {/* Get Appointment */}
          <Link href="/get-appointment" className="flex items-center">
            <Button className="h-9 rounded-full px-4 text-xs font-semibold shadow-sm sm:h-10 sm:px-6 sm:text-sm">
              Get Appointment
            </Button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="ml-1 flex items-center justify-center text-foreground md:hidden"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={28} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-[70] bg-black/40 backdrop-blur-sm md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />

          <div className="fixed top-20 right-4 z-[80] flex w-[280px] flex-col gap-6 rounded-2xl border bg-background p-6 shadow-xl md:hidden">
            <div className="mb-2 flex items-center justify-between">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted"
              >
                <X size={24} strokeWidth={2.5} />
              </button>
            </div>

            <nav className="flex flex-col gap-5">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-semibold text-foreground transition-colors hover:text-primary"
              >
                Home
              </Link>
              <Link
                href="/services"
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-semibold text-muted-foreground transition-colors hover:text-primary"
              >
                Service
              </Link>
              <Link
                href="/doctors"
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-semibold text-muted-foreground transition-colors hover:text-primary"
              >
                Doctors
              </Link>
              <Link
                href="/pricing"
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-semibold text-muted-foreground transition-colors hover:text-primary"
              >
                Pricing
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-semibold text-muted-foreground transition-colors hover:text-primary"
              >
                About
              </Link>
              <Link
                href="/news"
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-semibold text-muted-foreground transition-colors hover:text-primary"
              >
                News
              </Link>
            </nav>

            <div className="mt-2 flex flex-col gap-4 border-t pt-5">
              {isAuthenticated ? (
                <>
                  <Link
                    href="/dashboard"
                    onClick={() => setIsMenuOpen(false)}
                    className="group flex items-center justify-between text-base font-semibold text-foreground transition-colors hover:text-primary"
                  >
                    Dashboard
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>

                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="group flex items-center justify-between text-left text-base font-semibold text-foreground transition-colors hover:text-red-500"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  href="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="group flex items-center justify-between text-base font-semibold text-foreground transition-colors hover:text-primary"
                >
                  Login
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              )}
            </div>
          </div>
        </>
      )}
    </header>
  );
}
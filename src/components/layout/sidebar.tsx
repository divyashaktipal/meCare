"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarLinks = [
  { href: "/dashboard", label: "Overview", icon: "LayoutDashboard" },
  { href: "/dashboard/upcoming", label: "Upcoming Sessions", icon: "CalendarClock" },
  { href: "/dashboard/ongoing", label: "Ongoing Sessions", icon: "Activity" },
  { href: "/dashboard/ended", label: "Ended Sessions", icon: "History" },
  { href: "/dashboard/settings", label: "Settings", icon: "Settings" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 flex-shrink-0 border-r border-border bg-surface hidden md:flex flex-col min-h-[calc(100vh-4rem)]">
      <div className="flex h-full flex-col py-6">
        <div className="px-4 pb-4">
          <h2 className="px-2 text-xs font-semibold uppercase tracking-wider text-muted">
            Dashboard
          </h2>
        </div>
        <nav className="flex-1 space-y-1 px-4">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-muted/10 hover:text-foreground"
                }`}
              >
                {/* Normally we'd use lucide-react here, but using simple div placeholders */}
                <div className={`h-5 w-5 rounded-md flex items-center justify-center ${isActive ? "text-primary" : "text-muted"}`}>
                  <div className="w-3 h-3 border-2 border-current rounded-sm"></div>
                </div>
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

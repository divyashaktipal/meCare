import { Sidebar } from "@/components/layout/sidebar";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Dashboard Topbar */}
      <header className="sticky top-0 z-40 w-full border-b border-border bg-surface shadow-sm">
        <div className="flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white font-bold text-xl">
              M
            </div>
            <span className="text-xl font-bold tracking-tight text-primary">MeCare Admin</span>
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              🔔 Notifications
            </Button>
            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
              A
            </div>
          </div>
        </div>
      </header>

      {/* Main layout with sidebar */}
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 overflow-auto p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}

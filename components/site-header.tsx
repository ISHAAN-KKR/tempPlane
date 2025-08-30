"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Plane, BarChart3, Newspaper, IndianRupee, Info } from "lucide-react";
import ThemeToggle from "./theme-toggle";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useThemeStore } from "@/lib/store";

const nav = [
  { href: "/features", label: "Features", icon: Info },
  { href: "/pricing", label: "Pricing", icon: IndianRupee },
  { href: "/blog", label: "Blog", icon: Newspaper },
  { href: "/dashboard", label: "Dashboard", icon: BarChart3 }
];

export default function SiteHeader() {
  const path = usePathname();
  const { mobileOpen, setMobileOpen } = useThemeStore();
  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto container">
        <div className="mt-3 rounded-3xl glass px-4 py-2.5 backdrop-saturate-150">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-soft">
                <Plane className="h-4 w-4" />
              </span>
              <span>AeroPulse</span>
            </Link>
            <nav className="ml-6 hidden md:flex items-center gap-2">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-3 py-2 text-sm hover:bg-foreground/5 ${path === item.href ? "bg-foreground/10" : ""}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="ml-auto flex items-center gap-2">
              <ThemeToggle />
              <Link href="/contact">
                <Button className="rounded-full hidden sm:inline-flex">Contact</Button>
              </Link>
              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Open menu" className="md:hidden">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <div className="mt-8 grid gap-3">
                    {nav.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 rounded-xl px-3 py-2 hover:bg-foreground/5"
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.label}</span>
                      </Link>
                    ))}
                    <Link href="/contact" onClick={() => setMobileOpen(false)}>
                      <Button className="mt-4 w-full rounded-full">Contact</Button>
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

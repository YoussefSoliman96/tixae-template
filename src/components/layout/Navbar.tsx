"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Bell } from "lucide-react";
import { useState } from "react";
import { NavLink } from "./NavLink";
import { MobileMenu } from "./MobileMenu";
import { UserMenu } from "./UserMenu";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Placeholder navigation links - customize for your app
  const navigationLinks = [
    {
      href: "/dashboard",
      label: "Dashboard",
      isActive: pathname?.startsWith("/dashboard"),
    },
    {
      href: "/projects",
      label: "Projects",
      isActive: pathname?.startsWith("/projects"),
    },
    {
      href: "/analytics",
      label: "Analytics",
      isActive: pathname?.startsWith("/analytics"),
    },
    {
      href: "/settings",
      label: "Settings",
      isActive: pathname?.startsWith("/settings"),
    },
  ];

  return (
    <header className="w-full h-[80px] flex items-center justify-center bg-background border-b border-border/50">
      <div className="w-full max-w-[1440px] flex items-center justify-between px-4">
        {/* Logo - Far Left */}
        <div className="flex-shrink-0">
          <Link href="/">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  T
                </span>
              </div>
              <span className="font-bold text-xl">Tixae</span>
            </div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 hover:bg-secondary/80 rounded-md"
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Desktop Navigation - Center */}
        <div className="hidden lg:flex items-center gap-[10px] absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          {navigationLinks.map((link) => (
            <NavLink key={link.label} {...link} />
          ))}
        </div>

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          navigationLinks={navigationLinks}
        />

        {/* Right side controls */}
        <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
          {/* Notifications */}
          <div className="relative">
            <Bell className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer" />
            <span className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 text-xs text-primary-foreground bg-primary rounded-full">
              3
            </span>
          </div>

          {/* User Menu */}
          <UserMenu />
        </div>
      </div>
    </header>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Bell } from "lucide-react";
import { useState } from "react";
import { NavLink } from "./NavLink";
import { MobileMenu } from "./MobileMenu";
import { UserMenu } from "./UserMenu";
import { ThemeToggle } from "../common/ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation links matching pastpal structure
  const navigationLinks = [
    {
      href: "/dashboard",
      label: "DASHBOARD",
      isActive: pathname?.startsWith("/dashboard"),
    },
    {
      href: "/projects",
      label: "PROJECTS",
      isActive: pathname?.startsWith("/projects"),
    },
    {
      href: "/analytics",
      label: "ANALYTICS",
      isActive: pathname?.startsWith("/analytics"),
    },
    {
      href: "/settings",
      label: "SETTINGS",
      isActive: pathname?.startsWith("/settings"),
    },
  ];

  const languageOptions = [
    { value: "en", label: "ENGLISH" },
    { value: "es", label: "ESPAÑOL" },
    { value: "fr", label: "FRANÇAIS" },
  ];

  return (
    <header className="w-full h-[80px] flex items-center justify-center bg-background border-b border-border/50">
      <div className="w-full max-w-[1440px] flex items-center justify-between px-4">
        {/* Logo - Far Left */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image src="/logo.png" alt="Tixae Logo" width={150} height={150} />
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
          {/* Language Selector */}
          <div className="relative">
            <select className="appearance-none bg-transparent text-sm font-medium text-primary hover:text-foreground cursor-pointer px-2">
              {languageOptions.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  className="text-primary p-1"
                >
                  {option.label}
                </option>
              ))}
            </select>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg
                className="w-3 h-3 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* Theme Toggle */}
          {/* <ThemeToggle /> */}

          {/* User Menu */}
          <UserMenu />
        </div>
      </div>
    </header>
  );
}

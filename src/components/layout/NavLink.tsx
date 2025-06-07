"use client";

import Link from "next/link";

interface NavLinkProps {
  href: string;
  label: string;
  isActive?: boolean;
  isExternal?: boolean;
}

export function NavLink({ href, label, isActive, isExternal }: NavLinkProps) {
  const baseClasses =
    "px-4 py-2 text-sm text-primary rounded-lg transition-all duration-200";
  const activeClasses = isActive
    ? "bg-primary text-primary-foreground shadow-sm"
    : "text-muted-foreground hover:text-foreground hover:bg-secondary/60";

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${activeClasses}`}
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={`${baseClasses} ${activeClasses}`}>
      {label}
    </Link>
  );
}

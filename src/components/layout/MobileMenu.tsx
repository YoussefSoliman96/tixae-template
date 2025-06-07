"use client";

import { ThemeToggle } from "../common/ThemeToggle";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigationLinks: Array<{
    href: string;
    label: string;
    isActive?: boolean;
    isExternal?: boolean;
  }>;
}

export function MobileMenu({
  isOpen,
  onClose,
  navigationLinks,
}: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="fixed top-0 right-0 h-full w-64 bg-card border-l border-border shadow-lg">
        <div className="p-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-semibold">Navigation</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-secondary rounded-md"
            >
              ✕
            </button>
          </div>
          <nav className="space-y-2">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  link.isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
                onClick={onClose}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Theme Toggle for Mobile */}
          <div className="mt-6 pt-4 border-t border-border">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">
                Theme
              </span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

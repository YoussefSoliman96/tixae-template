"use client";

import { User, Settings, LogOut } from "lucide-react";
import { useState } from "react";

export function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors"
      >
        <User className="h-4 w-4 text-primary-foreground" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg z-20">
            <div className="p-3 border-b border-border">
              <p className="font-medium text-sm">User Name</p>
              <p className="text-xs text-muted-foreground">user@example.com</p>
            </div>
            <div className="p-1">
              <button className="flex items-center gap-3 w-full px-3 py-2 text-sm hover:bg-secondary rounded-md">
                <User className="h-4 w-4" />
                Profile
              </button>
              <button className="flex items-center gap-3 w-full px-3 py-2 text-sm hover:bg-secondary rounded-md">
                <Settings className="h-4 w-4" />
                Settings
              </button>
              <hr className="my-1 border-border" />
              <button className="flex items-center gap-3 w-full px-3 py-2 text-sm hover:bg-secondary rounded-md text-destructive">
                <LogOut className="h-4 w-4" />
                Sign out
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

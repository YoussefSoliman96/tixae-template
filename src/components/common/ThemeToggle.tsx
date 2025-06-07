"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-8 h-8 rounded-md bg-secondary/50 animate-pulse" />;
  }

  const themes = [
    { value: "light", icon: Sun, label: "Light" },
    { value: "dark", icon: Moon, label: "Dark" },
    { value: "system", icon: Monitor, label: "System" },
  ];

  const currentTheme = themes.find((t) => t.value === theme) || themes[0];
  const CurrentIcon = currentTheme.icon;

  return (
    <div className="relative">
      <button
        onClick={() => {
          const currentIndex = themes.findIndex((t) => t.value === theme);
          const nextTheme = themes[(currentIndex + 1) % themes.length];
          setTheme(nextTheme.value);
        }}
        className="w-8 h-8 rounded-md bg-secondary/80 hover:bg-secondary flex items-center justify-center transition-colors"
        title={`Current: ${currentTheme.label}. Click to switch.`}
      >
        <CurrentIcon className="h-4 w-4 text-foreground" />
      </button>
    </div>
  );
}

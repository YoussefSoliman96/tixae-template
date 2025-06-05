"use client";

import { MessageSquare, HelpCircle } from "lucide-react";

interface ChatHeaderProps {
  activeTab: "write" | "support";
  onTabChange: (tab: "write" | "support") => void;
}

export function ChatHeader({ activeTab, onTabChange }: ChatHeaderProps) {
  return (
    <div className="flex-shrink-0 bg-card/95 backdrop-blur-sm border-b border-border/30 rounded-t-2xl">
      <div className="flex">
        <button
          onClick={() => onTabChange("write")}
          className={`flex-1 px-4 py-3 text-sm font-medium transition-all duration-200 rounded-tl-2xl ${
            activeTab === "write"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
          }`}
        >
          <MessageSquare className="w-4 h-4 inline mr-2" />
          WRITE
        </button>
        <button
          onClick={() => onTabChange("support")}
          className={`flex-1 px-4 py-3 text-sm font-medium transition-all duration-200 rounded-tr-2xl ${
            activeTab === "support"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
          }`}
        >
          <HelpCircle className="w-4 h-4 inline mr-2" />
          SUPPORT
        </button>
      </div>
    </div>
  );
}

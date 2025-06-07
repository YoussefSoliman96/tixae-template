"use client";

import { BookOpen, Edit, Search, HelpCircle } from "lucide-react";
import { Button } from "@heroui/button";

interface ContentHeaderProps {
  onShowFAQ?: () => void;
  showFAQButton?: boolean;
}

export function ContentHeader({
  onShowFAQ,
  showFAQButton = false,
}: ContentHeaderProps) {
  return (
    <div className="bg-secondary text-secondary-foreground p-4 md:p-5 flex items-center justify-between border-b border-border/30">
      <div className="flex items-center gap-2 w-full sm:w-auto">
        {/* Book > Chapter > Version breadcrumb */}
        <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-secondary-foreground/70">
          <span className="hover:text-primary cursor-pointer transition-colors">
            Project Name
          </span>
          <span className="text-border shrink-0">•</span>
          <span className="hover:text-primary cursor-pointer transition-colors">
            Chapter 1 - Introduction
          </span>
          <span className="text-border shrink-0">•</span>
          <span className="text-primary brightness-125 hover:text-primary/80 cursor-pointer transition-colors">
            Version 1
          </span>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-2">
        {showFAQButton && (
          <Button
            variant="flat"
            size="sm"
            onClick={onShowFAQ}
            className="text-secondary-foreground/70 hover:text-secondary-foreground hover:bg-secondary/50 h-8 px-3"
          >
            <HelpCircle className="h-4 w-4 mr-1" />
            FAQ
          </Button>
        )}
        <Button
          variant="flat"
          size="sm"
          className="text-secondary-foreground/70 hover:text-secondary-foreground hover:bg-secondary/50 h-8 px-3"
        >
          <Search className="h-4 w-4 mr-1" />
          Find
        </Button>
        <Button
          variant="flat"
          size="sm"
          className="text-secondary-foreground/70 hover:text-secondary-foreground hover:bg-secondary/50 h-8 px-3"
        >
          <Edit className="h-4 w-4 mr-1" />
          Edit
        </Button>
      </div>
    </div>
  );
}

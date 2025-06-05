"use client";

import { BookOpen, Edit, Search } from "lucide-react";
import { Button } from "@heroui/button";

export function ContentHeader() {
  return (
    <div className="bg-secondary text-secondary-foreground p-3 md:p-4 flex flex-col sm:flex-row sm:items-center justify-between border-b border-border/30 gap-2 sm:gap-0">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-2 w-full sm:w-auto">
        {/* Book > Chapter > Version breadcrumb */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-1 lg:gap-2 text-xs md:text-sm text-secondary-foreground/70">
          <div className="flex items-center gap-1 md:gap-2 w-full md:w-auto">
            <span className="hover:text-primary cursor-pointer transition-colors">
              Project Name
            </span>
            <span className="hidden md:inline text-border shrink-0">•</span>
          </div>

          <div className="flex items-center gap-1 md:gap-2 w-full md:w-auto">
            <span className="hover:text-primary cursor-pointer transition-colors">
              Chapter 1 - Introduction
            </span>
            <span className="hidden md:inline text-border shrink-0">•</span>
          </div>

          <div className="flex items-center gap-1 md:gap-2 w-full md:w-auto">
            <span className="text-primary brightness-125 hover:text-primary/80 cursor-pointer transition-colors">
              Version 1
            </span>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="hidden sm:flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          className="text-secondary-foreground/70 hover:text-secondary-foreground hover:bg-secondary/50 h-8 px-3"
        >
          <Search className="h-4 w-4 mr-1" />
          Find
        </Button>
        <Button
          variant="ghost"
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

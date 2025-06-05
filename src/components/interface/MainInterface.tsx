"use client";

import { WelcomePanel } from "./WelcomePanel";
import { ChatPanel } from "./ChatPanel";
import { ControlPanel } from "./ControlPanel";

export function MainInterface() {
  return (
    <div className="h-full flex flex-col lg:flex-row bg-gradient-to-b from-background to-background/95 p-2 gap-2">
      {/* Main Content Area - Left Panel */}
      <div className="flex flex-col min-h-0 lg:w-2/3 flex-1 gap-2">
        {/* Content Editor Container - Takes remaining height */}
        <div className="flex-1 min-h-0 flex flex-col bg-background/95 backdrop-blur-sm rounded-2xl shadow-lg border border-border/30 overflow-hidden">
          <WelcomePanel />
        </div>

        {/* Control Panel Area - Fixed height */}
        <div className="flex-shrink-0 w-full">
          <ControlPanel />
        </div>
      </div>

      {/* Right Panel - Chat Panel */}
      <div className="lg:flex lg:w-1/3 xl:max-w-[360px]">
        <ChatPanel />
      </div>
    </div>
  );
}

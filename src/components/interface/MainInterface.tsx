"use client";

import { WelcomePanel } from "./WelcomePanel";
import { ChatPanel } from "./ChatPanel";

export function MainInterface() {
  return (
    <div className="h-full flex flex-col lg:flex-row bg-gradient-to-b from-background to-background/95">
      {/* Main Content Area - Left Panel */}
      <div className="flex flex-col min-h-0 lg:w-2/3 flex-1">
        {/* Content Editor Container - Takes remaining height */}
        <div className="flex-1 min-h-0 flex flex-col">
          <WelcomePanel />
        </div>
      </div>

      {/* Right Panel - Control Panel */}
      <div className="lg:flex lg:w-1/3 xl:max-w-[360px]">
        <ChatPanel />
      </div>
    </div>
  );
}

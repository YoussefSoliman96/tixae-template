"use client";

import { WelcomePanel } from "./WelcomePanel";
import { ChatPanel } from "./ChatPanel";

const MOBILE_HEIGHT = "h-[calc(100vh-6rem)]";
const DESKTOP_HEIGHT = "md:h-[calc(100vh-5rem)]";

export function MainInterface() {
  return (
    <div
      className={`flex flex-col lg:flex-row ${MOBILE_HEIGHT} ${DESKTOP_HEIGHT} overflow-hidden border-t border-border/50`}
    >
      {/* Left Panel - Main Content */}
      <div className="flex-1 lg:border-r border-border/50">
        <WelcomePanel />
      </div>

      {/* Right Panel - Chat/Interaction */}
      <div className="w-full lg:w-[400px] xl:w-[450px]">
        <ChatPanel />
      </div>
    </div>
  );
}

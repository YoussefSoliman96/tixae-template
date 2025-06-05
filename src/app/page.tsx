"use client";

import { useState } from "react";
import { EmptyState } from "../components/states/EmptyState";
import { MainInterface } from "../components/interface/MainInterface";

const MOBILE_HEIGHT = "h-[calc(100vh-6rem)]";
const DESKTOP_HEIGHT = "md:h-[calc(100vh-5rem)]";

export default function HomePage() {
  // Simulate having data - in real app this would come from your state management
  const [hasData, setHasData] = useState(true); // Changed to true to show main interface by default

  // Show empty state when no data, main interface when data exists
  if (!hasData) {
    return <EmptyState onGetStarted={() => setHasData(true)} />;
  }

  return (
    <div
      className={`flex flex-col h-[112vh] ${DESKTOP_HEIGHT} overflow-hidden`}
    >
      <MainInterface />
    </div>
  );
}

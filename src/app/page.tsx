"use client";

import { useState } from "react";
import { EmptyState } from "../components/states/EmptyState";
import { MainInterface } from "../components/interface/MainInterface";

export default function HomePage() {
  // Simulate having data - in real app this would come from your state management
  const [hasData, setHasData] = useState(false);

  // Show empty state when no data, main interface when data exists
  if (!hasData) {
    return <EmptyState onGetStarted={() => setHasData(true)} />;
  }

  return <MainInterface />;
}

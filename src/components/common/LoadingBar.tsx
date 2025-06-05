"use client";

import { useEffect, useState } from "react";

export function LoadingBar() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Listen for route changes or loading states
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    // You can integrate this with your routing or loading states
    // For now, it's just a placeholder

    return () => {
      // Cleanup listeners
    };
  }, []);

  if (!isLoading) return null;

  return <div className="loading-bar" />;
}

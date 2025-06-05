"use client";

import { Button } from "@heroui/button";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export function WelcomePanel() {
  const [showWelcome, setShowWelcome] = useState(true);

  if (!showWelcome) {
    return (
      <div className="flex items-center justify-center h-full p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Your Content Goes Here</h2>
          <p className="text-muted-foreground mb-6">
            This is where your main content will be displayed once you start
            using the application.
          </p>
          <Button
            variant="bordered"
            onPress={() => setShowWelcome(true)}
            className="gap-2"
          >
            <HelpCircle className="h-4 w-4" />
            Show Welcome Guide
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto bg-background">
      {/* Header */}
      <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border/50 p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Hello User, Welcome to Tixae</h1>
          <Button
            variant="ghost"
            size="sm"
            onPress={() => setShowWelcome(false)}
            className="gap-2"
          >
            Close Guide
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-muted-foreground mt-2">
          Please read the instructions below. You can always return to this
          screen by clicking the help button.
        </p>
      </div>

      {/* Content Area */}
      <div className="p-6 max-w-4xl mx-auto">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div className="bg-card border border-border/50 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-3 text-primary">
              Getting Started
            </h2>
            <p className="text-muted-foreground mb-4">
              This is your workspace—well, it will be. Right now, you're seeing
              this welcome screen. But once you get started, this area will be
              filled with your actual content.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-card border border-border/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="text-2xl">👉</span>
                Your Interactive Assistant
              </h3>
              <p className="text-muted-foreground mb-3">
                Look to the right. That's your interactive assistant panel. It's
                the core of how this application works.
              </p>
              <p className="text-muted-foreground">
                You don't need to plan everything first. Just start interacting
                and let the system guide you.
              </p>
            </div>

            <div className="bg-card border border-border/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="text-2xl">🧠</span>
                How It Works
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Start a conversation in the assistant panel</li>
                <li>Everything you interact with is automatically saved</li>
                <li>The system learns your preferences and adapts</li>
                <li>Your workspace evolves based on your usage</li>
              </ol>
            </div>

            <div className="bg-card border border-border/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="text-2xl">🚀</span>
                Ready to Begin?
              </h3>
              <p className="text-muted-foreground mb-4">
                Click into the assistant panel on the right. Start with any
                question or task. The interface will adapt to your needs as you
                explore.
              </p>
              <div className="flex gap-3">
                <Button variant="bordered" size="sm">
                  View Documentation
                </Button>
                <Button variant="bordered" size="sm">
                  Watch Tutorial
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-primary/5 border border-primary/20 rounded-lg">
            <p className="text-sm text-muted-foreground text-center">
              This welcome content will be replaced with your actual workspace
              once you start using the application.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

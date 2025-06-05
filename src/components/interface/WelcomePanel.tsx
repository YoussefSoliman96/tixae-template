"use client";

import { Button } from "@heroui/button";
import { useState } from "react";
import { HelpCircle } from "lucide-react";
import { ContentHeader } from "./ContentHeader";

export function WelcomePanel() {
  const [showWelcome, setShowWelcome] = useState(true);

  if (!showWelcome) {
    return (
      <div className="flex flex-col h-full">
        <ContentHeader />
        <div className="flex-1 flex items-center justify-center p-8">
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
              Show Welcome & FAQ
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <ContentHeader />
      <div className="flex-1 overflow-y-auto bg-transparent relative">
        {/* Scroll indicator */}
        <div className="absolute top-4 right-4 text-xs text-muted-foreground/60 bg-card/80 backdrop-blur-sm rounded px-2 py-1 border border-border/30 z-10">
          Scroll this area to view all content
        </div>

        {/* Header */}
        <div className="p-6 pb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Hello User, Welcome to Tixae
          </h1>
          <p className="text-muted-foreground">
            Please read the instructions below. You can always return to this
            screen by clicking FAQ in the blue bar above.
          </p>
        </div>

        {/* Content sections */}
        <div className="px-6 pb-6 space-y-6">
          {/* Welcome section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">
              Welcome to Tixae, User
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We're thrilled you're here.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If you've ever wanted to create something amazing but didn't know
              how to begin, you're in exactly the right place.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This screen is your starting point. You can always return here by
              clicking the "<strong>Show Welcome & FAQ</strong>" button in the
              blue bar above.
            </p>
          </div>

          {/* Your Workspace section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">
              Your Workspace
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Right now, you're seeing this welcome message. But soon, this area
              will be filled with your actual work—content, ideas, and creative
              output you bring to life through a simple conversation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You don't need to plan everything or be a pro. You just need to
              begin.
            </p>
          </div>

          {/* How Tixae Works section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">
              How Tixae Works
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Look to the right. That's your assistant—it's the core of how
              Tixae works.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              It's not a slide tool—it's the core of how Tixae works.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You don't need to start with an outline or a full draft. Just
              talk.
            </p>

            <div className="space-y-3 ml-4">
              <p className="text-muted-foreground leading-relaxed">
                Here's how:
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Start a chat—type or speak.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Everything you say is saved automatically.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When you're ready, just ask:
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed italic ml-4">
              "Can you turn this into a document?"
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Your assistant will take your thoughts and turn them into a
              written draft.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              No blank pages. No pressure. Just real, flowing ideas.
            </p>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-border/30">
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                size="sm"
                onPress={() => setShowWelcome(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                Hide Welcome Message
              </Button>
              <p className="text-xs text-muted-foreground">
                Start typing here to respond to your assistant above
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
